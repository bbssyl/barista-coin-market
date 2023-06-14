"use client";
const SpesificContainer = ({ params }) => {
  return (
    <div>
      <h4 className="text-white font-semibold capitalize">{params.category}</h4>
    </div>
  );
};

export default SpesificContainer;
