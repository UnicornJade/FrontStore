import './index.scss'
import SideBarItem from "@/components/SideBarItem";
import FloatOptions from "@/components/FloatOptions";

const buttonList = ['My Plan', 'Settings', 'Logout'];

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
                <FloatOptions list={buttonList}></FloatOptions>
            </div>
        </div>
    )
}