import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="banner h-auto aspect-auto ">
        <div className="overlay">
          <div className="flex justify-center items-center h-96 max-w-7xl mx-auto px-5 text-center">
            <h1 className="text-7xl font-bold text-blue-600 uppercase">FAQ</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 space-y-4 my-10">
        <div className="collapse bg-blue-50 shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Can I access my test results online?
          </div>
          <div className="collapse-content">
            <p>
              Explain the availability of online portals for accessing test
              results securely and the steps to set up an account.
            </p>
          </div>
        </div>
        <div className="collapse bg-blue-50 shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Is the diagnostic center equipped with the latest technology?
          </div>
          <div className="collapse-content">
            <p>
              Highlight any advanced equipment or technology that sets the
              diagnostic center apart in terms of accuracy and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
