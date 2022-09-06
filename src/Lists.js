import React, { useEffect, useLayoutEffect, useState } from "react";




export default function Lists({data, setData}) {
    return(
        <ul className="lists">
            {data.map((value,i) => <List str={value} setData={setData} key={i} number={i}/>)}
        </ul>
    );  
}



function List({str, setData, number}) {
    
    const [check, setCheck] = useState(false);


    const checkToCss = (check) => {
        if(check) return {textDecoration : "line-through", color : "gray"};
        else return {textDecoration : "", color : "black"};
    }

    const deleteList = () => {
        setData((data) =>
            data.reduce((arr, cur, i) => {
                if(i != number) return [...arr, cur];
                return arr;
            }, [])
        );
    }

    return (
        <li className="list">
            <span onClick={() => setCheck((pre) => !pre)} style={checkToCss(check)}>{str}</span>
            <div onClick={deleteList}>삭제</div>
        </li>
    )
}