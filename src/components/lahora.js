import React from 'react'

const LaHora = ({ hora, extra }) => {
    if (hora) {
        return (
            <strong>
                {new Date().toLocaleString()}
            </strong>
        )
    }
    return (
        <strong>
        </strong>
    )
}
export default LaHora
