import axios from 'axios';

export const getUsers = async () => {
  try {
    const token = await firebase.auth().currentUser?.getIdToken();

    return axios
      .get('http://localhost:3001/user', {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data));
  } catch (e) {
    console.error(e);
  }
};
