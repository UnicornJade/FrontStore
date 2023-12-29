"use client"
import React, {useState, useEffect, useRef} from 'react';
import './index.scss';
import SideBarItem from "@/components/SideBarItem";

function FloatOptions({list}) {
    const [isContentVisible, setContentVisible] = useState(false);
    const [isButtonHovered, setButtonHovered] = useState(false); // 新增状态
    const containerRef = useRef(null);

    useEffect(() => {
        const toggleContent = () => {
            setContentVisible(prev => !prev);
            setButtonHovered(prev => !prev); // 同时更新按钮的hover状态
        };

        const handleClickOutside = (event) => {
            console.log(event.target)
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setContentVisible(false);
                setButtonHovered(false); // 当点击外部时，移除hover状态
            }
        };

        const button = document.getElementById('toggleButton');
        button.addEventListener('click', toggleContent);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            button.removeEventListener('click', toggleContent);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <SideBarItem
                id="toggleButton"
                href={''}
                innerText={'点击我'}
                hover={isButtonHovered}
                active
            ></SideBarItem>
            <div id="additionalContent" className={isContentVisible ? "content" : "content hidden"}>
                {list.map((item, index) => (
                    <div className={"floatOption"} key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default FloatOptions;
