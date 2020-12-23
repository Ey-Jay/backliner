const EditAudioPage = ({ aid }) => <div>EditAudioPage for aid: {aid}</div>;

export async function getServerSideProps({ params }) {
  const { bid, aid } = params;

  return { props: { bid, aid } };
}

export default EditAudioPage;
