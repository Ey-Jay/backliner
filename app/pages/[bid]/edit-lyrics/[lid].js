const EditLyricsPage = ({ lid }) => <div>EditLyricsPage for lid: {lid}</div>;

export async function getServerSideProps({ params }) {
  const { bid, lid } = params;

  return { props: { bid, lid } };
}

export default EditLyricsPage;
