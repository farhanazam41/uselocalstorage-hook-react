import "./styles.css";
import { useRef } from "react";
import useStorageHook from "./useStorageHook";

export default function App() {
  const textRef = useRef();
  const { data, onHandleSubmit } = useStorageHook(textRef);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input ref={textRef} />
      <button onClick={onHandleSubmit}>Add</button>
      {data.length > 0 &&
        data.map((str, index) => {
          return <div key={index}>{str}</div>;
        })}
    </div>
  );
}
