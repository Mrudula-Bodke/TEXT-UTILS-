import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpclick=()=>{
        //console.log("Uppercase was clicked: " + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!!","success");
    }
    const handlelowclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!!","success");
    }
    const handle=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared!!","success");
    }
    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    //text="new text" //wrong way to set text
    //setText("New text"); //correct way to set text
    return (
        <>
        <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="dark"?"#a1c7e8":"white",color:props.mode==="dark"?"white":"#042743"}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handle}>Clear text</button>
        </div>
        <div className="container my-2" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>Your content Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            {/* Assuming 0.008 minutes to read on word */}
            <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p> 
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the text for Preview"}</p>
        </div>
        </>
    )
}
