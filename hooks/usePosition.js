import { useState } from 'react'

const usePosition = () => {
   const [postionX, setPostionX] = useState(null);
   const [postionY, setPostionY] = useState(null);

    function handlePosition(e) {
        setPostionX(e.clientX);
        setPostionY(e.clientY);
      }
   
    return [{postionX, postionY}, handlePosition]
}

export default usePosition
