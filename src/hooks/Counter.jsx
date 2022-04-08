import React, { useState, useEffect } from "react";
import useDocumentTitle from "./custom/useDocumentTitle";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   useEffect(() => {
  //     document.title = `${name} has clicked ${count} times`;

  //     return () => {
  //       console.log("Clean up!");
  //     };
  //   }, []);

  // This is a call for a custom hook that does the same as the following useEffect call.
  useDocumentTitle(`${name} has clicked ${count} times`);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />

      <h4>
        {name} has clicked {count} times!
      </h4>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
