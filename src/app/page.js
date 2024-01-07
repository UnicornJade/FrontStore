import SideBar from "@/components/SideBar";
import Script from 'next/script'
import EditorWindow from "@/components/CodeEditor/EditorWindow";
export default function Home({children}) {
    return (
        <>
            {/*<div>root</div>*/}
            <EditorWindow></EditorWindow>
        </>);
}
