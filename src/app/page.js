import SideBar from "@/components/SideBar";

export default function Home() {
    return (
        <div className="home">
            {/*  SideBar*/}
            <div className="sideContainer">
                <SideBar></SideBar>
            </div>

            {/*  MainStore*/}
            <div className="mainStore">main</div>
        </div>
    );
}
