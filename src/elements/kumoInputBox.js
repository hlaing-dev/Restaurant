import React from 'react'
import { withMedia } from 'react-media-query-hoc';

const KumoInputBox = props => {
    const { type, value, style, onChange, placeholder, className, nominwidth,disabled } = props
    const defaultStyle = {
        border: '#01ACAF',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)', cursor: 'pointer',
            }
    const userstyle = style === undefined ? {} : style
    return (
        <div style={{ minwidth: nominwidth ? null : 200 }}>
            <input
                className={`form-control ${className} p-3 py-4 `}
                type={type}
                value={value}
                style={{ ...userstyle, ...defaultStyle }}
                onChange={onChange}
                placeholder={placeholder}
                minwidth={nominwidth === undefined ? null : 200}
                disabled={disabled}>
            </input>
        </div>

    )
}
export default withMedia(KumoInputBox);