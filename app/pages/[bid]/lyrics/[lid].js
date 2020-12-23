const SingleLyricsPage = ({ lid }) => (
  <div>SingleLyricsPage for lid: {lid}</div>
);

export async function getServerSideProps({ params }) {
  const { bid, lid } = params;

  return { props: { bid, lid } };
}

export default SingleLyricsPage;
