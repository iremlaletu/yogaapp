import LocationSlider from "../UI/LocationSlider";

const Location = () => {
  return (
    <section id="location" className="section">
      <div
        className="section-title-group max-w-[540px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src="/assets/img/icons/world.svg" alt="icon" />
        <h2 className="h2 section-title text-primary-100 ">Our Locations</h2>
      </div>

      <LocationSlider />
    </section>
  );
};

export default Location;
