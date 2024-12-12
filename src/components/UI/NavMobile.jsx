import Button from "../UI/Button";
import { nav } from "../../utils/data";
const NavMobile = ({ navMobile, setNavMobile }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNavMobile(false);
  };
  return (
    <nav
      className={` ${
        navMobile ? "h-screen" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="list-none w-full h-full flex flex-col p-28 items-center gap-y-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a
                onClick={() => scrollToSection(item.id)}
                className=" text-white text-body-md cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className=" -mt-44 flex flex-col justify-center items-center gap-2">
        <Button to="/register"> Sign in </Button>
      </div>
    </nav>
  );
};

export default NavMobile;
