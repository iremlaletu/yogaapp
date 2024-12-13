import { memberships } from "../../utils/data";
import MemberShipCard from "../UI/MemberShipCard";

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="section-title-group max-w-[540px]"
      >
        <img src="/assets/img/icons/price.svg" alt="icon" />
        <h2 className="h2 section-title text-primary-100">Memberships</h2>
      </div>

      <div className="flex justify-center">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="400"
          className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch px-4"
        >
          {memberships.map((membership) => (
            <MemberShipCard key={membership.id} membership={membership} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
