const user = {
  name: "Arjun",
  age: 20,
  isLoggedIn: true,
};

const checkLoggedIn = user.isLoggedIn;
const age = user.age;

let message;
if (checkLoggedIn) {
  message = `Hello ${user.name}, Welcome`;
} else {
  message = "Please Login Bro";
}

const displayAge =
  age > 18 && checkLoggedIn ? `Age: ${age}` : "Sorry, u are below 18 years.";

const skills = ["JavaScript", "React", "Node"];

const formatSkills = skills.map((skill) => {
  return <li key={skill}>{skill}</li>;
});

const displaySkills =
  checkLoggedIn && skills.length > 0 ? (
    <>
      <p style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>Skills: </p>
      <ul>{formatSkills}</ul>
    </>
  ) : (
    "No Skills"
  );

const App2 = () => {
  return (
    <>
      <h1>{message}</h1>
      <p style={{ marginTop: "1rem" }}>{displayAge}</p>
      {displaySkills}
    </>
  );
};

export default App2;
