const SingleAudioPage = ({ aid }) => <div>SingleAudioPage for aid: {aid}</div>;

export async function getServerSideProps({ params }) {
  const { bid, aid } = params;

  return { props: { bid, aid } };
}

export default SingleAudioPage;
