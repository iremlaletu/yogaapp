import { useRef, useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const { question, answer } = accordion;
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="100"
      className="cursor-pointer"
    >
      <div className="bg-neutral-400/10">
        <div className="min-h-16 flex items-center justify-between px-7 ">
          <h6 className="h6"> {question} </h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-lg text-neutral-500" />
            ) : (
              <FaChevronCircleDown className="text-lg text-neutral-500" />
            )}
          </div>
        </div>
        <div
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
            transition: "max-height 0.3s ease-in-out",
            overflow: "hidden",
          }}
        >
          <div className="py-3 px-7">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
