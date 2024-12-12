import Button from "../UI/Button";

const About = () => {
  return (
    <section id="about" className="section pt-36 ">
      <div
        className="container mx-auto px-5 lg:px-32"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="md:text-body-md mb-12">
          We're all about creating a positive and welcoming space where everyone
          feels motivated to be their best. With friendly coaches, awesome
          equipment, and a fun vibe, we’re here to help you hit your fitness
          goals at your own pace.
        </p>
        <p className="md:text-body-md mb-8">
          Our mission is simple: we want to inspire you to be the best version
          of yourself. Whether you're just starting out or pushing for a new
          personal record, we’re here to support you every step of the way in a
          place where you can truly thrive.
        </p>
        <Button to="/trainers"> Meet Our Trainers </Button>
      </div>
    </section>
  );
};

export default About;
