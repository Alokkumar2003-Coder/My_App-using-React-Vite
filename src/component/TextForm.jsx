import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase!","success")
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase!","success")

  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared! ","success")

  };
  const handleOnChange = (event) => {
    // console.log("On changed");
    setText(event.target.value);

  };
  const handleCopy = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copy to Clipboard!","success")

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces Removed!","success")

  };

  const [text, setText] = useState("");
  // text = "newtext";  //Wrong way to change the state)
  //setText("newtext");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>
      </div>
    </>
  );
}
