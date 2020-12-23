const EditVideoPage = ({ vid }) => <div>EditVideoPage for vid: {vid}</div>;

export async function getServerSideProps({ params }) {
  const { bid, vid } = params;

  return { props: { bid, vid } };
}

export default EditVideoPage;
