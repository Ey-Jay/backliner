import Project from '@models/Project';

const getProjectsByBid = async (bid) => {
  const projects = await Project.find({ band: bid }, Project.publicFields());
  return JSON.parse(JSON.stringify(projects));
};

export default getProjectsByBid;
