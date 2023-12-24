import './index.css'

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="mainSection">
                <div className="sideBarItems userInfor">UserInfo</div>
                <div className="sideBarItems items-01">My Store</div>
                <div className="sideBarItems items-02">Public Store</div>
                <div className="sideBarItems items-03">Others</div>
            </div>
            <div className="bottomSection">
                <div className="sideBarItems settings">settings</div>
            </div>
        </div>
    )
}