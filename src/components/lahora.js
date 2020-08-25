import React from 'react'

class LaHora extends React.Component{

    render(){
        return(
        <strong>
                {new Date().toLocaleString()}
        </strong>
        )
    }

}

export default LaHora
