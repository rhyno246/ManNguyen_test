import React from 'react'
import '../style/_title.scss'
interface Props { 
    title : string
}
const Title: React.FC<Props> =  (props) => {
    return (
        <h2 className="title">
            { props.title }
        </h2>
    );
}

export default Title;
