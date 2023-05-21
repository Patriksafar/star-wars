import { Button, MainLayout } from "../components";

export const Home = () => {
  return (
    <>
      <header>
        <h1>Star Wars Movies</h1>
      </header>
      <MainLayout>
        <Button>Load more</Button>
      </MainLayout>
    </>
  );
};

export default Home;
