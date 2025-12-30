import { useState } from "react";
import AddUser from "./components/AddUser";
import Card from "./components/Card";

const App = () => {
  const localData = JSON.parse(localStorage.getItem("user-data")) || [];

  const [userData, setData] = useState(localData);

  const deleteHandler = (idx) => {
    console.log(`Deleted ${idx + 1}`);
  };

  console.log(userData);

  return (
    <div className="h-screen bg-[black] p-8">
      <AddUser setData={setData} />
      <Card userData={userData} runDelete={deleteHandler} />
    </div>
  );
};

export default App;
