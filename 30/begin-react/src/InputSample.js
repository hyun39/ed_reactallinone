
import React, { useState } from "react";


function InputSample(){

    const [text, setText] = useState('')

    const onClick = (e) =>{
        setText('')
    }

    const onChange = (e) =>{

        console.log(e.target.value);

        setText(e.target.value);
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onClick}>초기화</button>
            <div>
            <b>값:</b>
            {text}
            </div>
        </div>

    )
}

export default InputSample;


