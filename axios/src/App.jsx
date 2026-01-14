import axios from "axios";
import { useState } from "react";
import User from "./User";

const App = () => {
  const [userData, setUserData] = useState([]);

  const apiHandler = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUserData(data);
  };

  return (
    <div>
      <button onClick={apiHandler}>Call Data</button>
      <div>
        {userData.map((user, idx) => {
          return (
            <User user={user} key={idx}/>
          );
        })}
      </div>
    </div>
  );
};

export default App;
