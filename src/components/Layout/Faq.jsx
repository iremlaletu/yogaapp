import { faq } from "../../utils/data";
import Accordion from "../UI/Accordion";

const Faq = () => {
  const { accordions } = faq;
  return (
    <section id="faq" className="section">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        className="section-title-group max-w-[440px] -space-x-4"
      >
        <img src="/assets/img/icons/question.svg" alt="logo" />
        <h2 className="h2 section-title text-primary-100"> FAQ</h2>
      </div>
      <div className="max-w-[768px] h-auto mx-auto">
        <div className="flex flex-col gap-y-4 px-4">
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
