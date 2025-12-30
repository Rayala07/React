import { useState } from "react";

const AddUser = ({ setData }) => {
  const [uName, setName] = useState("");
  const [uRole, setRole] = useState("");
  const [uCompany, setCompany] = useState("");
  const [uCity, setCity] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const roleHandler = (e) => {
    setRole(e.target.value);
  };
  const companyHandler = (e) => {
    setCompany(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      userName: uName,
      userRole: uRole,
      userCompany: uCompany,
      userCity: uCity,
    };
    setData((prevData) => {
      const updatedData = [...prevData, newUser];
      localStorage.setItem("user-data", JSON.stringify(updatedData));
      return updatedData;
    });

    setName("");
    setRole("");
    setCompany("");
    setCity("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="border border-white text-white"
          type="text"
          value={uName}
          onChange={nameHandler}
        />
        <input
          className="border border-white text-white"
          type="text"
          value={uRole}
          onChange={roleHandler}
        />
        <input
          className="border border-white text-white"
          type="text"
          value={uCompany}
          onChange={companyHandler}
        />
        <input
          className="border border-white text-white"
          type="text"
          value={uCity}
          onChange={cityHandler}
        />

        <button type="submit" className="text-white bg-[#5959ec]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
