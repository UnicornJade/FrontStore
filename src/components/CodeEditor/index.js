import React, {useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {javascript} from '@codemirror/lang-javascript';
import './index.scss'
import {dracula} from '@uiw/codemirror-theme-dracula'
import {blue} from "next/dist/lib/picocolors";

function LivePreviewEditor() {
    const [htmlCode, setHtmlCode] = useState('<button> Button\n' +
        '</button>');
    const [cssCode, setCssCode] = useState('/* CSS Here */' +
        'button {\n' +
        '  font-size: 18px;\n' +
        '  display: inline-block;\n' +
        '  outline: 0;\n' +
        '  border: 0;\n' +
        '  cursor: pointer;\n' +
        '  will-change: box-shadow,transform;\n' +
        '  background: radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100% );\n' +
        '  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);\n' +
        '  padding: 0 2em;\n' +
        '  border-radius: 0.3em;\n' +
        '  color: #fff;\n' +
        '  height: 2.6em;\n' +
        '  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);\n' +
        '  transition: box-shadow 0.15s ease, transform 0.15s ease;\n' +
        '}\n' +
        '\n' +
        'button:hover {\n' +
        '  box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0;\n' +
        '  transform: translateY(-0.1em);\n' +
        '}\n' +
        '\n' +
        'button:active {\n' +
        '  box-shadow: inset 0px 0.1em 0.6em #3c4fe0;\n' +
        '  transform: translateY(0em);\n' +
        '}');
    const [jsCode, setJsCode] = useState('// JavaScript Here');

    // 创建完整的HTML文档，将CSS和JS嵌入其中
    const srcDoc = `
    <html>
      <head>
        <style>
        html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            /*background-color: #f7f7f7; !* 背景颜色 *!*/
          }
        
          /* 设置外部div样式 */
          .innerRoot {
            display: flex;
            justify-content: center;
            align-items: center;
            /*width: 80%;  !* 或任何尺寸 *!*/
            /*height: 80%; !* 或任何尺寸 *!*/
            background-color: #ddd; /* 背景颜色 */
            /*scale: none;*/
          }
        ${cssCode}
        
        </style>
      </head>
      <body>
          <div class="innerRoot">
            ${htmlCode}
          </div>
           <script>${jsCode}</script>
      </body>
    </html>
    `;


    // chooseMode =

    return (
        <div className="livePreviewEditor"
            // style={{display:"flex",flexDirection:"column"}}
        >

            {/*RenderSpace*/}
            <h2>渲染区</h2>
            <div
                className={'iframeWindow'}
                // style={{display:"flex",flexGrow:1}}
            >
                <iframe
                    className={"innerRenderSpace"}
                    srcDoc={srcDoc}
                    style={{width: '100%', height: '100%', border: '0'}}
                    title="output"
                    sandbox="allow-scripts"
                    // frameBorder="0"
                />
            </div>
            <br/>

            {/*CodeEditor*/}
            <div className={"codeEditors"}
                // style={{display: 'flex', height: '240px', border: "2px solid #ffffff"}}
            >
                <div className={'htmlBox'} style={{flex: 1}}>
                    <h2 style={{height: "24px"}}>HTML</h2>
                    <CodeMirror
                        className={"demo"}
                        value={htmlCode}
                        height="200px"
                        theme={dracula}
                        extensions={[html()]}
                        onChange={(value) => setHtmlCode(value)}
                        style={{backgroundColor: "blue"}}
                    />
                </div>
                <div className={'cssBox'} style={{flex: 1}}>
                    <h2 style={{height: "24px"}}>CSS</h2>
                    <CodeMirror
                        value={cssCode}
                        height="200px"
                        maxWidth={'33vw'}
                        extensions={[css()]}
                        theme={dracula}
                        onChange={(value) => setCssCode(value)}
                    />
                </div>
                <div className={'jsBox'} style={{flex: 1}}>
                    <h2 style={{height: "24px"}}>JavaScript</h2>
                    {/*<CodeMirror*/}
                    {/*    value={jsCode}*/}
                    {/*    height="200px"*/}
                    {/*    theme={dracula}*/}
                    {/*    extensions={[javascript()]}*/}
                    {/*    onChange={(value) => setJsCode(value)}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    );
}

export default LivePreviewEditor;
