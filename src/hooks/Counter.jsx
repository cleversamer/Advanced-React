import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;

    return () => {
      console.log("Clean up!");
    };
  }, []);

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
