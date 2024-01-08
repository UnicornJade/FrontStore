import React, {useState} from 'react';
import './index.scss'
import EditorWindow from "@/components/CodeEditor/EditorWindow";

function LivePreviewEditor() {
    const [htmlCode, setHtmlCode] = useState('<button>HOVER ME</button>');
    const [cssCode, setCssCode] = useState('/* CSS Here */\n' +
        'button {\n' +
        '  text-decoration: none;\n' +
        '  position: relative;\n' +
        '  border: none;\n' +
        '  font-size: 14px;\n' +
        '  font-family: inherit;\n' +
        '  cursor: pointer;\n' +
        '  color: #fff;\n' +
        '  width: 9em;\n' +
        '  height: 3em;\n' +
        '  line-height: 2em;\n' +
        '  text-align: center;\n' +
        '  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);\n' +
        '  background-size: 300%;\n' +
        '  border-radius: 30px;\n' +
        '  z-index: 1;\n' +
        '}\n' +
        '\n' +
        'button:hover {\n' +
        '  animation: ani 8s linear infinite;\n' +
        '  border: none;\n' +
        '}\n' +
        '\n' +
        '@keyframes ani {\n' +
        '  0% {\n' +
        '    background-position: 0%;\n' +
        '  }\n' +
        '\n' +
        '  100% {\n' +
        '    background-position: 400%;\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'button:before {\n' +
        '  content: "";\n' +
        '  position: absolute;\n' +
        '  top: -5px;\n' +
        '  left: -5px;\n' +
        '  right: -5px;\n' +
        '  bottom: -5px;\n' +
        '  z-index: -1;\n' +
        '  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);\n' +
        '  background-size: 400%;\n' +
        '  border-radius: 35px;\n' +
        '  transition: 1s;\n' +
        '}\n' +
        '\n' +
        'button:hover::before {\n' +
        '  filter: blur(20px);\n' +
        '}\n' +
        '\n' +
        'button:active {\n' +
        '  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);\n' +
        '}\n');
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
        <div className="livePreviewEditor">
            {/*RenderSpace*/}
            <div className={'iframeWindow'}>
                <iframe
                    className={"innerRenderSpace"}
                    srcDoc={srcDoc}
                    style={{width: '100%', height: '100%', border: '0'}}
                    title="output"
                    sandbox="allow-scripts"
                />
            </div>
            <div className="codeSpace">
                <EditorWindow hc={htmlCode} cssc={cssCode} jsc={jsCode}></EditorWindow>
            </div>
        </div>
    );
}

export default LivePreviewEditor;
