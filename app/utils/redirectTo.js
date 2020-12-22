const redirectTo = (path, res) => {
  res.setHeader('location', path);
  res.statusCode = 302;
  res.end();
  return { props: {} };
};

export default redirectTo;
