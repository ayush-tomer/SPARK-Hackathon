import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-3 lg:mt-5">
      <span className="text-4xl sm:text-5xl lg:text-8xl text-center tracking-wide mb-3 font-serif bg-gradient-to-r from-indigo-600 to-violet-400 text-transparent bg-clip-text ">
        SPARK
      </span>
      <h2 className="text-4xl sm:text-4xl lg:text-6xl text-center bg-gradien tracking-wide p-4 ">
        Let's Collaborate, Connect & Grow
        <span className="bg-gradient-to-r from-orange-600 to-violet-700 text-transparent bg-clip-text">
          {" "}
          for Students & Profesionalists
        </span>
      </h2>
      <p className="mt-10 text-4xl text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your ideas to one of the most trusted
        platform
      </p>

      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-12 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;