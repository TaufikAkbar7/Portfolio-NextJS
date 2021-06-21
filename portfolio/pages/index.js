import {
  Header,
  Footer,
  Hero,
  Projects,
  BackgroundAnimate,
} from "../components";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-4 container mx-auto mt-5">
        <Hero />
        <BackgroundAnimate/>
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
