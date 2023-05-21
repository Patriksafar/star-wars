import { FilmList, Layout, Header } from "../components";

import img from "../public/twistus.jpg";

export const Home = () => {
  return (
    <>
      <Header image={img} />
      <Layout>
        <FilmList />
      </Layout>
    </>
  );
};

export default Home;
