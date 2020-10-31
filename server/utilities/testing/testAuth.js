const checkIfAuthenticated = (req, res, next) => {
  req.authId = '5f9d69fc4fd42a10757b3164';
  req.userData = {
    name: 'Jiggly Puff',
    email: 'thepuffyjiggles@gmail.com',
    picture:
      'https://lh3.googleusercontent.com/-5ZDzkLJwGqQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclFnkxc6bbCcTkXhk9qWWJPzug8rA/photo.jpg',
  };

  return next();
};

module.exports = checkIfAuthenticated;
