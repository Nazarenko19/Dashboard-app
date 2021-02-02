import React from "react";

type SeparatorProps = {
  marginBottom: string;
  width?: string;
};

const Separator: React.FC<SeparatorProps> = ({ marginBottom, width }) => {
  return (
    <>
      <hr
        style={{
          borderColor: "#cacaca",
          borderTopWidth: 1,
          marginBottom: marginBottom,
          width: "100%" && width,
        }}
      />
    </>
  );
};

export default Separator;
