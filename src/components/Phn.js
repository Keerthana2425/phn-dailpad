import React from "react";
import { useState } from "react";

// we get all the css from index.css

const Index = () => {
  //initializing empty string as num
  const [num, setNum] = useState("");

  //function to add numbers
  const clickHandler = (x) => {
    const str = x.toString();
    setNum((num) => num.concat(str));
  };

  //function to remove last element
  const removeNum = () => {
    setNum((num) => num.slice(0, -1));
  };

  return (
    // whole conatiner
    <div className="container">
      {/* div for displaying numbers */}
      <div id="input-num">{num.length > 0 ? num : null}</div>

      {/* div for first row nums */}
      <div className="line line-1">
        <div class="nums num-1" onClick={() => clickHandler(1)}>
          1
        </div>
        <div className="nums num-2" onClick={() => clickHandler(2)}>
          2<div className="subscript">ABC</div>
        </div>
        <div className="nums num-3" onClick={() => clickHandler(3)}>
          3<div className="subscript">DEF</div>
        </div>
      </div>

      {/* div for 2nd row nums */}
      <div className="line line-2">
        <div className="nums num-4" onClick={() => clickHandler(4)}>
          4<div className="subscript">GHI</div>
        </div>
        <div className="nums num-5" onClick={() => clickHandler(5)}>
          5<div className="subscript">JKL</div>
        </div>
        <div className="nums num-6" onClick={() => clickHandler(6)}>
          6<div className="subscript">MNO</div>
        </div>
      </div>
      {/* div for 3rd row nums */}

      <div className="line line-3">
        <div className="nums num-7" onClick={() => clickHandler(7)}>
          7<div className="subscript">PQRS</div>
        </div>
        <div className="nums num-8" onClick={() => clickHandler(8)}>
          8<div className="subscript">TUV</div>
        </div>
        <div className="nums num-9" onClick={() => clickHandler(9)}>
          9<div className="subscript">WXYZ</div>
        </div>
      </div>
      {/* div for 4th row elements */}

      <div className="line line-4">
        <div className="nums num-star" onClick={() => clickHandler("*")}>
          *
        </div>
        <div className="nums num-0" onClick={() => clickHandler(0)}>
          0
        </div>
        <div className="nums num-hash" onClick={() => clickHandler("#")}>
          #
        </div>
      </div>
      {/* div for 5th row elements */}
      {/* took icons from fontAwesome */}
      <div className="line line-5">
        <div>
          <i className="fa fa-star-o dig" aria-hidden="true"></i>
        </div>
        <div className="call-button">
          <i className="fa fa-phone" aria-hidden="true"></i>
        </div>
        {/* assigning remove num function to arrow */}
        <div onClick={() => removeNum()}>
          <i className="fa fa-long-arrow-left dig" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Index;
