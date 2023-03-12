import React, {useState} from 'react'

export default function TextForm(props) {
  // const [text, setText] = useState('Enter the text here');
  const handleOnchange = (event)=>{
    setText(event.target.value)
  }
  const handleloclick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("success", "Converted to lower case")
  }
  const handleUpclick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("success", "Converted to upper case")
  }
  const handleCopyText = ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("success", "Copied to clipboard")
    // alert("Copied the text: " + text)
  }
  const handleClearText = ()=>{
    let newText=""
    setText(newText)
    props.showAlert("success", "Text is cleared")
    // alert("Copied the text: " + text)
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("success", "Extra spaces are removed")
    // alert("Copied the text: " + text)
  }
  const [text, setText] = useState("Enter the text here");

  const myStyle = {
    color: `${props.mode==='dark'?'white':'black'}`
  }
  const myStyle2 = {
    color: `${props.mode==='dark'?'white':'black'}`,
    backgroundColor: `${props.mode==='dark'?'grey':'white'}`
  }
  // setText("")
  return (
    <div>
        <h1 style={myStyle}>{props.title}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} value = {text} rows="8" style={myStyle2}></textarea>
        <button className='btn btn-primary mx-1' onClick={handleUpclick}>convert to upperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleloclick}>convert to lowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleCopyText}>Copy to clipboard</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra space</button>
        <button className='btn btn-primary' onClick={handleClearText}>Clear text</button>
        <h2 className='heading my-3' style={{color: `${props.mode==='dark'?'white':'black'}`}}>Text Summary</h2>
        <p style={myStyle}>Word count : {text.length===0?0:text.split(' ').length} ; character count : {text.length}</p>
        <p style={myStyle}> Time to read : {text.split(' ').length * 0.008} min</p>
        <h2 className='my-3' style={myStyle}>Text Preview</h2>
        <p style={myStyle}>{text.length>0?text:"Please Enter some text to preview"}</p>

    </div>
  )
}