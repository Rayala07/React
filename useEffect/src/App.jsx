import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {

    const [allData, setAllData] = useState([])

    useEffect(() => {
        const getData = async() => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setAllData(data);
    }

        getData()
    },[])

    return (
        <div>
            {allData.map((user) => {
                return (
                    <p>{user.username}</p>
                )
            })}
        </div>
    )
}

export default App;