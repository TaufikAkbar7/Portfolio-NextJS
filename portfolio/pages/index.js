import {
  Header,
  Hero,
  Projects,
  BackgroundAnimate,
  About,
  Contact,
  Technologies,
  Experience
} from "../components";

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-2 gap-4 container mx-auto mt-5">
        <Hero />
        <BackgroundAnimate/>
      </div>
      <Experience/>
      <Projects/>
      <Technologies/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
