const EditProjectPage = ({ pid }) => <div>EditProjectPage for pid: {pid}</div>;

export async function getServerSideProps({ params }) {
  const { bid, pid } = params;

  return { props: { bid, pid } };
}

export default EditProjectPage;
