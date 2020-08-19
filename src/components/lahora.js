import React from 'react'

const LaHora = ({ hora, extra }) => {
    if (hora) {
        return (
            <strong>
                {new Date().toLocaleString()}
                {extra}
            </strong>
        )
    }
    return (
        <strong>
            {new Date().toLocaleDateString()}
            {extra}
        </strong>
    )
}
export default LaHora
