"use client"
import React, {useState} from 'react';
import classNames from 'classnames'
import Icon from "@/components/Icon";
import './index.css'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

/**
 * Icon 引用
 * @param href
 * @param className
 * @param iconType Icon图标应用 from iconfont.cn
 * @param innerText 内部文本
 * @param active
 * @param rest
 * @returns {Element}
 * @constructor
 */

function SideBarItem({href = "/", className, iconType = "icon-time", innerText, active, hover, ...rest}) {
    const pathname = usePathname()
    const hoverStyle = {
        backgroundColor: hover ? '#1E1E1E' : ''
    }
    const itemStyle = {
        opacity: (pathname === href || active) ? 1 : 0.5, // 根据是否被点击设置透明度
    };

    return (
        <Link href={href} {...rest}>
            <div
                 className={classNames("sideBarItems", className)}
                 style={hoverStyle}
            >
                <div className="innerItem"
                     style={itemStyle}
                >
                    <Icon type={iconType}></Icon>
                    <div>{innerText}</div>
                </div>
            </div>
        </Link>

    );
}

export default SideBarItem;