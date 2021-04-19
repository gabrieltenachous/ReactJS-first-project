import React from 'react'
import './myStyles.css'

function Stylesheets(props) {
    let className = props.primary ? 'primary' : ''
    return ( <
        div >
        <
        h1 className = "error" > Error < /h1> <
        h1 className = { styles.success } > Success < /h1> <
        h1 className = { `${className} font-x1` } > Stylessheets < /h1> <
        /div>
    )
}

export default Stylesheets