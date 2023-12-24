import React from 'react';
import classNames from 'classnames'
import PropTypes from "prop-types";


/**
 * Icon 引用
 * @param className
 * @param type Icon图标应用 from iconfont.cn
 * @param rest
 * @returns {Element}
 * @constructor
 */

function Icon({className, type, ...rest}) {
    return (
        <svg {...rest} className={classNames("icon", className)} aria-hidden="true">
            <use xlinkHref={`#${type}`}></use>
        </svg>

    );
}

Icon.propTypes = {
    type: PropTypes.string.isRequired
}
export default Icon;