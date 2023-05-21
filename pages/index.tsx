import { Montserrat } from "next/font/google";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const Home = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${monsterrat.className}`}
    >
      <h1 className="text-4xl font-bold">Star Wars Movies:</h1>
      <div>
        <div></div>
      </div>
    </main>
  );
};

export default Home;
