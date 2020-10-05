const Band = require('../../models/Band');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');
const { google } = require('googleapis');
const axios = require('axios');

const oauth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  'http://localhost:3000/googleauth'
);

const getAuthUrl = async (req, res) => {
  const { authId } = req;
  const uid = await getUserIdFromAuth(authId);
  const bid = req.query.bid;

  const band = await Band.findById(bid);
  if (`${uid}` === `${band.owner}`) {
    const url = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      state: bid,
      scope: 'https://www.googleapis.com/auth/calendar',
    });
    axios.get(url).then(() => {
      res.send({ url });
    });
  } else {
    res.status(401);
    res.json({
      success: false,
      data: null,
      action: 'get',
    });
  }
};

const getTokens = async (req, res) => {
  const { authId } = req;
  const uid = await getUserIdFromAuth(authId);
  const bid = req.body.bid;

  const band = await Band.findById(bid);
  if (`${uid}` === `${band.owner}`) {
    const { tokens } = await oauth2Client.getToken(req.body.code);
    const updatedBand = await Band.findOneAndUpdate(
      {
        _id: bid,
      },
      {
        google_access_token: tokens.access_token,
        google_refresh_token: tokens.refresh_token,
      }
    );
  } else {
    res.status(401);
    res.json({
      success: false,
      data: null,
      action: 'get',
    });
  }
};

const getNewTokens = (data) => {
  const defaultToken = {
    google_access_token: data.access_token,
  };
  if (data.refresh_token) {
    return {
      ...defaultToken,
      google_refresh_token: data.refresh_token,
    };
  }
  return defaultToken;
};

const getCalendar = async (req, res) => {
  const { authId } = req;
  const uid = await getUserIdFromAuth(authId);
  const { bid } = req.params;

  const band = await Band.findById(bid);
  if (band.members.includes(uid)) {
    const calendar = await google.calendar({
      version: 'v3',
      headers: {
        Authorization: `Bearer ${band.google_access_token}`,
      },
    });
    calendar.events.list(
      {
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      },
      (err, response) => {
        if (err) {
          oauth2Client
            .getTokenInfo(band.google_access_token)
            .then((res) => console.log(res))
            .catch((err) => {
              if (
                err.response.data.error == 'invalid_token' &&
                err.response.data.error_description !=
                  'Either access_token, id_token, or token_handle required'
              ) {
                axios
                  .post(
                    `https://oauth2.googleapis.com/token?client_id=${process.env.OAUTH_CLIENT_ID}&client_secret=${process.env.OAUTH_CLIENT_SECRET}&refresh_token=${band.google_refresh_token}&grant_type=refresh_token`
                  )
                  .then(async (res) => {
                    const updatedBand = await Band.findByIdAndUpdate(
                      { _id: bid },
                      getNewTokens(res.data)
                    );
                    return res.send('refresh');
                  });
              }
            });
        }
        if (response === undefined) {
          return res.send('calendar not set');
        }
        res.send(response);
      }
    );
  } else {
    res.status(401);
    res.json({
      success: false,
      data: null,
      action: 'get',
    });
  }
};

module.exports = { getAuthUrl, getTokens, getCalendar };