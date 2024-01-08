import SideBar from "@/components/SideBar";
import Script from 'next/script'
import EditorWindow from "@/components/CodeEditor/EditorWindow";
export default function Home({children}) {
    // 代码编辑器展示代码
    const codes = {
        hc:"",
        cssc:"",
        jsc:"",
    }
    return (
        <>
            {/*<div>root</div>*/}
            {/*代码编辑器*/}
            <EditorWindow {...codes}></EditorWindow>
        </>);
}
