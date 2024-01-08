"use client"
import {useEffect, useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {javascript} from '@codemirror/lang-javascript';
import './index.scss'
import {vscodeDark,vscodeDarkInit, defaultSettingsVscodeDark} from "@uiw/codemirror-theme-vscode"
import { EditorView } from '@codemirror/view'
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import classNames from "classnames";
import CustomButton from "@/components/SideBarItem/CustomButton";

function EditorWindow({className,hc , cssc , jsc,...rest }) {
    // const myTheme = vscodeDarkInit({
    //     settings:{
    //         ...defaultSettingsVscodeDark,
    //         // background:'transparent',
    //         // gutterBackground: 'transparent',
    //
    //     }
    // })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [htmlCode, setHtmlCode] = useState(hc||'<button>aaaa</button>');
    const [cssCode, setCssCode] = useState(cssc||'/* CSS Here */');
    const [jsCode, setJsCode] = useState(jsc||'// JavaScript Here');

    const [selected,setSelected] = useState(0)
    const chooseMode =[
        {icon:"icon-HTML",mode:"HTML",id:0,className:"htmlBox",extension:html(),onChange:setHtmlCode,code:htmlCode},
        {icon:"icon-css",mode:"CSS",id:1,className:"cssBox",extension:css(),onChange:setCssCode,code:cssCode},
        {icon:"icon-JavaScript",mode:"JavaScript",id:2,className:"jsBox",extension:javascript({ jsx: true }),onChange:setJsCode,code:jsCode}
    ]
    const handleClick = (id)=>{
        setSelected(id)
        console.log(id)
    }
    return (
        <div className={classNames("editorWindow",className)} {...rest}
            // style={{maxWidth:"748px"}}
        >
            <div className="codeModeSelector">
                {chooseMode.map((item, id)=>{
                    return(
                    <CustomButton
                        key={id}
                        innerText={item.mode}
                        iconType={item.icon}
                        onClick={()=>handleClick(id)}
                        hover={selected === id }
                        href={''}
                        active
                        defaultColor={"#171717"}
                        style={{
                            width:"150px"
                        }}
                    ></CustomButton>)
                })}

            </div>
            {/*CodeEditor*/}

            <div className={"codeEditors"}
            >
                <SimpleBarReact
                    style={{ maxHeight: "100%" }}
                >
                <div className={chooseMode[selected].className}>
                    <CodeMirror
                        className={"demo"}
                        value={chooseMode[selected].code}
                        height="100%"
                        theme={vscodeDark}
                        extensions={[chooseMode[selected].extension,EditorView.lineWrapping]}
                        onChange={(value) => chooseMode[selected].onChange(value)}
                        // maxHeight={"100%"}
                        // maxWidth={"748px"}
                    />
                </div>
                </SimpleBarReact>
            </div>

            <div className="editorBottom"></div>
        </div>
    );
}

export default EditorWindow;
