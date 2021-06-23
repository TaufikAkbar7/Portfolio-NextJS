import {
  Header,
  Hero,
  Projects,
  BackgroundAnimate,
  Contact,
  Technologies,
  Experience
} from "../components";

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      {/* <div className="grid grid-cols-2 gap-4 container mx-auto mt-5">
        <Hero />
        <BackgroundAnimate/>
      </div> */}
      <Experience/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </div>
  );
};

export default Home;
