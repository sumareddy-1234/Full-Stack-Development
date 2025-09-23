import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [x, setX] = useState(0);  // ✅ Hook must be outside return

  useEffect(() => {
    console.log("executed");
  }, [x]);

  return (
    <>
      <button onClick={() => setX(x + 1)}>Add</button>
      <p>{x}</p>
    </>
  );
};

export default Useeffect;
