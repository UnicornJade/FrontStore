"use client"
import {useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {javascript} from '@codemirror/lang-javascript';
import './index.scss'
import {dracula} from '@uiw/codemirror-theme-dracula'
import {blue} from "next/dist/lib/picocolors";
import SideBarItem from "@/components/SideBarItem";

function EditorWindow() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [htmlCode, setHtmlCode] = useState('<button>aaaa</button>');
    const [selected,setSelected] = useState(0)
    const chooseMode =[
        {icon:"icon-HTML",mode:"HTML"},
        {icon:"icon-css",mode:"CSS"},
        {icon:"icon-JavaScript",mode:"JavaScript"}
    ]
    const handleClick = (id)=>{
        setSelected(id)
    }
    return (
        <div className="editorWindow"
        >
            <div className="codeModeSelector">
                {chooseMode.map((item, id)=>{
                    return(
                    <SideBarItem
                        key={id}
                        innerText={item.mode}
                        iconType={item.icon}
                        onClick={()=>handleClick(id)}
                        hover={selected === id }
                    ></SideBarItem>)
                })}

            </div>
            {/*CodeEditor*/}
            <div className={"codeEditors"}
            >
                {/*<div className={'htmlBox'}>*/}
                {/*    <h2 style={{height: "24px"}}>HTML</h2>*/}
                {/*    <CodeMirror*/}
                {/*        className={"demo"}*/}
                {/*        value={htmlCode}*/}
                {/*        height="200px"*/}
                {/*        theme={dracula}*/}
                {/*        extensions={[html()]}*/}
                {/*        onChange={(value) => setHtmlCode(value)}*/}
                {/*        style={{backgroundColor: "blue"}}*/}
                {/*    />*/}
                {/*</div>*/}

            </div>
            <div className="editorBottom"></div>
        </div>
    );
}

export default EditorWindow;
