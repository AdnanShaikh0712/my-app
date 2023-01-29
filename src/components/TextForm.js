import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
   //console.log("Uppercase was clicked ");
   let newText = text.toUpperCase();
   setText(newText)
   props.showAlert("Converted to Uppercase!","success");
}
const handleLoClick = () =>{
  //console.log("lowercase was clicked ");
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to Lowercase!","success");
}
const handleClearClick = () =>{
  //console.log("clear was clicked ");
  let newText = '';
  setText(newText)
  props.showAlert("Text Removed!","success");
}
const handleOnChange = (event) =>{
 // console.log("On change");
 setText(event.target.value)
}
const handleExtraSpaces= ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces Removed","success");
}
const handleCopy = ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("Text Copied","success");
}

    const[text,setText]= useState('');
  return (
  <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#35233e'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3">
  <label htmlFor="myText" className="form-label"></label>
  <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#3d3d3d':'white',color:props.mode==='dark'?'white':'black'}} id="mytext" rows="10"></textarea>
  <div/>
  <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

</div>
<div className="container my-3"  style={{color:props.mode==='dark'?'white':'#35233e'}}>
  <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length}Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview "}</p>
</div>
  </div>
  </>
  )
}
