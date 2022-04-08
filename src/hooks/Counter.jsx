import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

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
