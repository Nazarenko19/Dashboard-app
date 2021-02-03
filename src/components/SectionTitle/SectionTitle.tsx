import React from "react";

type SectionTitleProps = {
  text: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <>
      <div className="text-sm text-boulder-500 font-medium uppercase mb-3">
        {text}
      </div>
    </>
  );
};

export default SectionTitle;
