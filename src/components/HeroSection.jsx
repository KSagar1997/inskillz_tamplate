import Button from "./Button";

const HeroSection = () => (
  <section className="w-screen h-screen grid grid-cols-2 px-[97px] pt-[78px] bg-white">
    <div className="place-self-center gap-y-3 flex flex-col pr-10">
        <img src={require("../assets/images/path.png")} alt="path" className="absolute h-[203px] -left-16 top-64" />
      <h1 className=" text-5xl font-bold text-left text-[#143754]">
        Courses That Are Designed For Your Success
      </h1>
      <p className="text-2xl text-[#143754]">
        Molding your inner skills with Online Courses from world-class
        Institutes and Tutors.
      </p>
      <Button
        classname="btn-secondary w-auto self-start text-white font-normal tracking-wide mt-6"
        text="Join For Free"
      />
    </div>
    <div className="place-self-center relative">
      <img
        src={require("../assets/images/group_191.png")}
        alt="img"
        className="absolute -top-20"
      />
      <img
        src={require("../assets/images/hero.png")}
        alt="hero Image"
        className="h-[359px]"
      />
    </div>
  </section>
);
export default HeroSection;
