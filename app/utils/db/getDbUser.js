import User from '@models/User';
import Band from '@models/Band';

const getDbUser = async (fbUser) => {
  // Look for user doc in DB
  const data = await User.findOne(
    { auth_token: fbUser.uid },
    User.publicFields()
  )
    .populate({
      path: 'bands',
      select: Band.publicFields(),
      match: { active: true },
      populate: {
        path: 'members',
        select: User.publicFields(),
        match: { active: true },
      },
    })
    .exec();

  let userDoc = null;

  if (!data) {
    // Signing up a new user
    userDoc = await User.create({
      name: fbUser.name,
      email: fbUser.email,
      theme: 'dark',
      avatar: fbUser.picture,
      auth_token: fbUser.uid,
      active: true,
    });
  } else {
    // Updating user info
    data.name = fbUser.name;
    data.avatar = fbUser.picture;
    userDoc = await data.save();
  }

  // Transform user doc into pure JSON
  const dbUser = JSON.parse(JSON.stringify(userDoc));

  return dbUser;
};

export default getDbUser;
