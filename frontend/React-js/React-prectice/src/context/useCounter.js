import { useState } from "react";

function useCounter(){
    const [count, setCount] = useState(0)

    function Incre(){
        setCount(count + 1)
    }

     function Dicre(){
        setCount(count - 1)
    }

    return [count,Incre, Dicre]
}

export default useCounter