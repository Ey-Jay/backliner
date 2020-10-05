const Band = require('../../models/Band');
const getUserIdFromAuth = require('../../utilities/getUserIdFromAuth');
const { google } = require('googleapis');

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
  if (uid === band.owner) {
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
  const bid = req.query.bid;

  const band = await Band.findById(bid);
  if (uid === band.owner) {
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
