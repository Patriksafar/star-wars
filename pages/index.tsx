import { FilmList, Layout } from "../components";

export const Home = () => {
  return (
    <>
      <header>
        <h1>Star Wars Movies</h1>
      </header>
      <Layout>
        <FilmList />
      </Layout>
    </>
  );
};

export default Home;
