import Button from "../UI/Button";

const Banner = () => {
  return (
    <section id="banner" className="h-screen w-full bg-neutral-500 ">
      <div className="flex items-center h-full relative">
        {/* */}
        <video
          src="/assets/video/bannerbg.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/img/background/registerbg.jpg"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-neutral-500 opacity-30"></div>

        <div className="flex-1 text-right z-10 lg:pr-20 pr-5 ">
          <h1
            className="h1 mb-5 text-white"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Find Balance, Strength, and Energy <br />
            <span className="text-primary-200">
              Your Yoga, Your Journey.
            </span>{" "}
          </h1>
          <p
            className=" max-w-[480px] ml-auto text-body-md lg:text-body-lg mb-5"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Discover a yoga experience that fits your lifestyle and transforms
            your goals into reality.
          </p>
          <div
            className="w-fit ml-auto"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <Button to="/register">Join Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
