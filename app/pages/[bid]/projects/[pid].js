const SingleProjectPage = ({ pid }) => (
  <div>SingleProjectPage for pid: {pid}</div>
);

export async function getServerSideProps({ params }) {
  const { bid, pid } = params;

  return { props: { bid, pid } };
}

export default SingleProjectPage;
