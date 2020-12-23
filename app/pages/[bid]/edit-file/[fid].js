const EditFilePage = ({ fid }) => <div>EditFilePage for fid: {fid}</div>;

export async function getServerSideProps({ params }) {
  const { bid, fid } = params;

  return { props: { bid, fid } };
}

export default EditFilePage;
