
import React, { useState } from "react";


function InputSample(){

    const [inputs, setInputs] = useState({
        nm:'',
        nickname:'',
    })

    const {nm, nickname}  = inputs;

    const onReset = ()=>{
        setInputs({
            nm:'',
            nickname:''
        }
        )
    }

    const onChange = (e) =>{

        const {name, value} = e.target;

        console.log(e.target.name);
        console.log(e.target.value);

        /* inputs 형식 데이터에 name, value를 넣는다 */
        /*const nextInputs = {
            ...inputs,
        }
        nextInputs[name] = value;

        위와 같은 것이다.

        불편성을 지킨다
        스프레드
        */

        /*
        const nextInputs = {
            ...inputs,
            [name]:value,
        }

        setInputs(nextInputs);
        */

        setInputs({
            ...inputs,
            [name]:value,
        })

    }

    return (
        <div>
            <input name='nm' placeholder="이름"  
                onChange={onChange} 
                value={nm}/>
            <input name='nickname' placeholder="닉네임" 
                onChange={onChange} 
                value ={nickname} />
                
            <button onClick={onReset}>초기화</button>
            <div>
            <b>{nm}({nickname})</b>
            </div>
        </div>
    )
}

export default InputSample;


