import {useState} from 'react'

const useToggle = (active = false) => {
    const [isActive, setIsActive] = useState(active)
    const handleClick = () =>{
        setIsActive(!isActive)
    }
    return [isActive, handleClick]
}

export default useToggle
