import { nav } from "../../utils/data";
const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a
                onClick={() => scrollToSection(item.id)}
                className="hover:text-primary-200 cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
