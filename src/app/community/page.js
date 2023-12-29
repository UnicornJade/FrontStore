"use client"
import './index.css'
import FloatOptions from "@/components/FloatOptions";
import LivePreviewEditor from "@/components/CodeEditor";

export default function Community() {
    // const buttonList = ['a', 'b', 'c'];

    return (
        <>
            <div className="community">
                <div className="title"><p>Community</p></div>
                <div className="store">
                    {/*<FloatOptions list={buttonList}></FloatOptions>*/}
                    <LivePreviewEditor></LivePreviewEditor>
                </div>
            </div>
        </>);
}
