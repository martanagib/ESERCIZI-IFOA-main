import {useState} from 'react'

const Button = (props) => {
    const [title] = useState(props.title)
    return (
        <button>{title}</button>
    ) 
}

export default Button
