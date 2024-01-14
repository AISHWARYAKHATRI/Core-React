import React, { useEffect, useRef, useState } from "react";

let x = 10;

const Demo2 = () => {
  const [y, setY] = useState(0);
  /**
   * not like => ref = 0
   * like => ref = { current: }
   */
  const ref = useRef(0);
  const intervalRef = useRef(null);

  //   other usecase of useRef
  useEffect(() => {
    /**
     * This is run even if you navigate to a different page
     * even if you are not on this page/ component DEMO2.
     * This happens because you have not garbage collected
     */
    intervalRef.current = setInterval(() => {
      console.log("Hello", Math.random());
    }, 1000);
    // this will garbage collect it.
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          // this will definitely increase the value of the variable x,
          // but the value change will not be reflected/update on UI because it is not re-rendering
          x = x + 1;
          {
            console.log(x);
          }
        }}
      >
        Increase x
      </button>
      <div>{x}</div>

      <button
        /** this will increase and will refect on the UI also, as it is a state variable
         * But while this changes, the x variable will reset to 10(here) no matter by
         * how many times you increased it before because whenever the component re-renders
         * it refreses the let. Whenever the componente re-renders, x is deleted/wiped off
         * because at the EOD the component is a JS function and what happens when a functions
         * is called in JS. A whole new execution context is created, a while new memeory space is
         * created, a whole new execution thread starts. So whenever this componet re-renders,
         * a new memory space is created. all the variables are new.
         */
        onClick={() => {
          setY((prev) => prev + 1);
        }}
      >
        Increase Y
      </button>
      <span>{y}</span>
      <button
        onClick={() => {
          /**
           * On click the ref is getting changed.
           * But it is not triggering the re-rendering .
           * It is not visible on the UI.
           * But when the render happens on state change, the ref will be visible in the UI.
           * It persists the value bts.
           * Ref is slow, but remembers the value
           */
          ref.current = ref.current + 1;
          console.log(ref.current);
        }}
      >
        Increase Ref
      </button>
      <span>{ref?.current}</span>
      <button
        onClick={() => {
          /** You want to cleat the interval of i. But what is the scope of i. It is just valid
           * inside the function in the useEffect. Even if you do it with let = i, it will not persist
           * if the state changes and the state is the depemdency in the useEffect.
           * Using let is not a 'trusted way'. So this is where useRef comes in.
           * */
          clearInterval(intervalRef.current);
        }}
      >
        Stop the interval of useEffect
      </button>
    </div>
  );
};

export default Demo2;
