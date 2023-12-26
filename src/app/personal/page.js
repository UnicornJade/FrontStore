import './index.css'
import GridComponent from '@/components/Grid'

export default function Personal() {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // 假设的数据
    return (
        <>
            <div className="personal">
                <div className="title"><p>Personal Store</p></div>
                {/*<div className="store-grid">*/}
                {/*    <div className="grid-item">1</div>*/}
                {/*    <div className="grid-item">2</div>*/}
                {/*    <div className="grid-item">3</div>*/}
                {/*    <div className="grid-item">4</div>*/}
                {/*    <div className="grid-item">5</div>*/}
                {/*    <div className="grid-item">6</div>*/}
                {/*    <div className="grid-item">7</div>*/}
                {/*    <div className="grid-item">8</div>*/}
                {/*    <div className="grid-item">9</div>*/}
                {/*    <div className="grid-item">10</div>*/}
                {/*</div>*/}
                <GridComponent items={items}/>
            </div>
        </>);
}
