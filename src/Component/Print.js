import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

const ComponentToPrint = React.forwardRef((props, ref) => {
  return <div ref={ref}>My cool content here!</div>;
});

export default Print;
