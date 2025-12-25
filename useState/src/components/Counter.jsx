import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const btnClickedInc = () => {
    setCount((count) => count + 1);
    /* setCount((count) => count + 1); 
        this syntax is used when nextState depends on previous state , if you directly write as first one 
        then react will run it in batches and it will act as the first syntax written two times.
    */
  };

  const btnClickedDec = () => {
    setCount((count) => (count > 0 ? count - 1 : 0));
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={btnClickedInc}>Increment</button>
      <button onClick={btnClickedDec}>Decrement</button>
    </div>
  );
};

export default Counter;
