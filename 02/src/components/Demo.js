import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/HelperFunctions";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // heavy operation
  /**
   * You want this to run when you change the text.
   * You dont want this to run while toggling the theme.
   * No need for this heavy operation for the toogle case.
   * @returns
   */
  //   const prime = () => {
  //     console.log("Calculate prime number of", text);
  //     return findNthPrime(text);
  //   };

  const prime = useMemo(() => findNthPrime(text), [text]);

  console.log(text);
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? "Light" : "Dark"}
      </button>
      <div>
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>nth Prime : {prime}</span>
      </div>
    </div>
  );
};

export default Demo;
