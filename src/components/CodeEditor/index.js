import React, {useState} from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {javascript} from '@codemirror/lang-javascript';
import './index.scss'
import {dracula} from '@uiw/codemirror-theme-dracula'

function LivePreviewEditor() {
    const [htmlCode, setHtmlCode] = useState('<h1>Hello World</h1>');
    const [cssCode, setCssCode] = useState('body { color: red; }');
    const [jsCode, setJsCode] = useState('console.log("Hello World")');

    // 创建完整的HTML文档，将CSS和JS嵌入其中
    const srcDoc = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>
    `;

    return (
        <div className="livePreviewEditor">
            <div style={{display: 'flex', height: '240px', border: "2px solid #ffffff"}}>
                <div className={'htmlBox'} style={{flex: 1}}>
                    <h2 style={{height: "24px"}}>HTML</h2>
                    <CodeMirror
                        value={htmlCode}
                        height="200px"
                        theme={dracula}
                        extensions={[html()]}
                        onChange={(value) => setHtmlCode(value)}
                    />
                </div>
                <div className={'cssBox'} style={{flex: 1}}>
                    <h2 style={{height: "24px"}}>CSS</h2>
                    <CodeMirror
                        value={cssCode}
                        height="200px"
                        extensions={[css()]}
                        theme={dracula}
                        onChange={(value) => setCssCode(value)}
                    />
                </div>
                <div className={'jsBox'} style={{flex: 1}}>
                    <h2 style={{height: "24px"}}>JavaScript</h2>
                    <CodeMirror
                        value={jsCode}
                        height="200px"
                        theme={dracula}
                        extensions={[javascript()]}
                        onChange={(value) => setJsCode(value)}
                    />
                </div>
            </div>
            <br/>
            <h2>渲染区</h2>
            <div
                className={'iframeWindow'}
            >
                <iframe
                    srcDoc={srcDoc}
                    style={{width: '100%', height: '100%'}}
                    title="output"
                    sandbox="allow-scripts"
                    // frameBorder="0"
                />
            </div>

        </div>
    );
}

export default LivePreviewEditor;
