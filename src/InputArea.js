import React, { useState } from "react"




export default function InputArea({setData}) {
    const [str, setStr] = useState("");
    return(
        <div className="inputArea">
            <input type="text" value={str} onChange={(e) => setStr(e.target.value)} />
            <div onClick={() => {
                if(str == "") return;
                setData(data => ([...data, str]));
                setStr("");
            }}>입력</div>
        </div>
    )
}