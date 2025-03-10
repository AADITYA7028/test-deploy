import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "How is the Verifier different from other email verifier tools?",
      content: `BrandNav Verifier stands out for several reasons:
      Accuracy: Our advanced algorithms ensure precise email verification.
      Efficiency: Fast processing for large email lists, saving you time.
      User-Friendly: Easy-to-use interface makes verification hassle-free.
      Data Security: Your information is handled with the utmost security.
      Support: Responsive customer support to assist you at any step.
      
      Don’t just take our word for it, check out our G2 reviews—we’re rated 4.8/5 by users.`,
    },
    { title: "What does it mean when an email address is valid?", content: "" },
    { title: "What does it mean when an email address is unknown?", content: "" },
    { title: "What does it mean when an email address is invalid?", content: "" },
  ];

  return (
    <div className="w-[1140px] h-[654px] flex flex-col gap-[12px] mx-auto">
      {accordionData.map((item, index) => (
        <div key={index}>
          {/* Title (Button) */}
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-[1140px] h-[100px] border-[1.5px] border-transparent flex justify-between items-center p-4 text-[18px] font-medium text-white bg-[linear-gradient(112.96deg,#30273D_0%,rgba(18,18,24,0.4)_100%)] focus:outline-none ${
              openIndex === index ? "rounded-t-[20px] rounded-b-none" : "rounded-[20px]"
            }`}
          >
            <span>{item.title}</span>
            <svg
              className={`w-4 h-4 transition-transform transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              } text-white`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>

          {/* Content Box */}
          {openIndex === index && item.content && (
            <div className="w-[1140px] h-[228px] border-[1.5px] border-transparent rounded-b-[20px] p-4 text-[18px] font-normal text-gray-300 bg-[linear-gradient(214.23deg,rgba(75,82,102,0.6)_0%,rgba(33,48,92,0.2)_100%)]">
              <p className="whitespace-pre-line">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
