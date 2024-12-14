import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FooterData } from "../../utils/data";

const Footer = () => {
  return (
    <footer className="py-8">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="300"
        className="container mx-auto px-4 border-t border-gray-700 "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="mb-4">Useful PDFs</h3>
            <ul className="space-y-2">
              {FooterData.pdfLinks.map((pdf, index) => (
                <li key={index}>
                  <a
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm  hover:underline"
                  >
                    {pdf.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {FooterData.socialMediaLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary-100 text-lg"
                  aria-label={`Visit our ${platform.name}`}
                >
                  <platform.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className=" mb-4">Main Office</h3>
            <div className="flex items-center mb-2">
              <FaLocationDot className="text-lg mr-2" />
              <p className="text-sm ">123 Cadde, Istanbul, Turkey</p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-lg mr-2" />
              <p className="text-sm ">Phone: (123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <IoIosMail className="text-lg mr-2" />
              <p className="text-sm">Email: contact@yogaclub.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Yoga Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
