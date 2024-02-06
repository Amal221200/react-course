import { useState, useEffect } from "react"

const useFetcher = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((res)=> res.json()).then((data)=> setData(data))
    }, [])

    return [data];
}

export default useFetcher