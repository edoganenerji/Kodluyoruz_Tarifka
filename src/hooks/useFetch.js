import React, {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        try{
            const {data:FoodCat} = await axios.get(url)
            setData(FoodCat)
            setLoading(false)
        } catch(err) {
            setLoading(false)
            setError(err.message)
        }
    }
    return {error, loading, data}
}

export default useFetch;