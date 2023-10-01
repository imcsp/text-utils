import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   const [count, setCount] = useState(0);

  const handleUpperCase = () => {
    console.log("Upper case");
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!",'Success')
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!",'Success')
  };
  const handleReset = () => {
    setText("");
  };
  const handleCamelCase = () => {
    setText(text.replace(/\W+(.)/g, function (match, chr) {
        console.log(match,chr);
      return chr.toUpperCase()
    }));
    props.showAlert("Converted to Camelcase!",'Success')
  }
  const handleCopy = () => {
    let inputText = document.getElementById("myBox")
    inputText.select();  //for highlight at input box
    navigator.clipboard.writeText(inputText.value)  //for copy text
    props.showAlert("Text Copied!",'Success')
  }
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  let textLength = text.split(" ").filter((str) => str).length
  console.log("textLength",textLength);
  return (
    <div className="my-3" style={{color:props.mode.fontColor}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control border border-4"
          id="myBox"
          rows="3"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode.textBoxColor, color:props.mode.fontColor}}
        ></textarea>
      </div>
      <div>
        <button disabled={textLength > 0 ? false : true} className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert to Upper Case
        </button>
        <button disabled={textLength > 0 ? false : true} className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to lower Case
        </button>
        <button disabled={textLength > 0 ? false : true} className="btn btn-primary mx-1" onClick={handleReset}>
          Reset
        </button>
        <button disabled={textLength > 0 ? false : true} className="btn btn-primary mx-1" onClick={handleCamelCase}>
          Convert to Camel Case
        </button>
        <button disabled={textLength > 0 ? false : true} className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={textLength > 0 ? false : true} className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <p className="mx-2">
          {textLength} words and {text.trim().length} length
        </p>
        <h4  className="mx-2">Preview:</h4>
        <p  className="mx-2">{text}</p>
      </div>
    </div>
  );
}
