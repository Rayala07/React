import { useState } from "react";
import AddUser from "./components/AddUser";
import Card from "./components/Card";
import Search from "./components/Search";

const App = () => {
  const localData = JSON.parse(localStorage.getItem("user-data")) || [];

  const [userData, setData] = useState(localData);

  const [searchText, setSearchText] = useState("");

  const filteredUser = userData.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchText.toLowerCase()) ||
      user.userRole.toLowerCase().includes(searchText.toLowerCase())
  );

  const deleteHandler = (idx) => {
    console.log(`Deleted ${idx + 1}`);
  };
  return (
    <div className="h-screen bg-[black] p-8">
      <AddUser setData={setData} />
      <Search text={searchText} setText={setSearchText} />
      <Card userData={filteredUser} runDelete={deleteHandler} />
    </div>
  );
};

export default App;
