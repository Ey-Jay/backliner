const withBandAuth = async (req, params) => {
  const { bid } = params;
  const { dbUser } = req;

  if (!bid) throw new Error('No bid provided (withBandAuth)');
  if (!dbUser) throw new Error('No user found (withBandAuth)');

  const band = dbUser.bands.find((band) => band._id === bid);
  if (!band) throw new Error('Permission denied (withBandAuth)');

  return band;
};

export default withBandAuth;
