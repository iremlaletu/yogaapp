import CommunitySlider from "../UI/CommunitySlider";
const Community = () => {
  return (
    <section id="community" className="section">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="section-title-group max-w-[540px] "
      >
        <img src="/assets/img/icons/community.svg" alt="logo" />
        <h2 className="h2 section-title text-primary-100 ">Impressions</h2>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <CommunitySlider />
      </div>
    </section>
  );
};

export default Community;
