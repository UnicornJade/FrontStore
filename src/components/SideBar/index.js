import './index.css'
import SideBarItem from "@/components/SideBarItem";

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="mainSection">
                <SideBarItem
                    className={"userInfo"}
                    innerText={"UserInfo"}
                    active
                ></SideBarItem>
                <SideBarItem
                    href={"/personal"}
                    className={"personalStore"}
                    iconType={"icon-person_crop_circle"}
                    innerText={"Personal"}
                ></SideBarItem>
                <SideBarItem
                    href={"/community"}
                    className={"publicStore"}
                    iconType={"icon-template-f"}
                    innerText={"Public Store"}
                ></SideBarItem>
            </div>
            <div className="bottomSection">
                <SideBarItem
                    href={''}
                    className={"settings"}
                    innerText={"Settings"}
                ></SideBarItem>
            </div>
        </div>
    )
}