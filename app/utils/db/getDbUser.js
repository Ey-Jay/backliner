import User from '@models/User';
import Band from '@models/Band';

const getDbUser = async (fbUser) => {
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

  const dbUser = JSON.parse(JSON.stringify(data));

  return dbUser;
};

export default getDbUser;
