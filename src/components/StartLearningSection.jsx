import Button from "./Button";
const StartLearningSection = () => (
  <section className="h-screen w-screen grid grid-cols-2 px-[97px] startLearningSection">
    <div className="place-self-center gap-y-3 flex flex-col relative pr-10">
    <img src={require("../assets/images/path.png")} alt="path" className="absolute h-[203px] -left-36 top-44 -rotate-180" />
      <h1 className=" text-4xl font-semibold text-left text-[#143754]">
        Start Learning <br />
        By Choosing Your Option
      </h1>
      <p className="text-2xl text-[#143754]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="place-self-center flex justify-center items-center relative bg-[#222222] h-[297px] w-[549px]">
    <img src={require("../assets/images/path.png")} alt="path" className="absolute h-[203px] -right-52 -top-10" />
      <img
        src={require("../assets/images/play.png")}
        alt="hero Image"
        className="h-[69px]"
      />
    </div>
  </section>
);

export default StartLearningSection;
