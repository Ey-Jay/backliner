const BandIndexPage = () => <div>Loading ...</div>;

export async function getServerSideProps({ req, params }) {
  // check if user is valid
  // check if user is in band
  return { props: {} };
}

export default BandIndexPage;