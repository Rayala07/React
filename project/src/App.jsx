const userName = "Suraj";

const isLoggedIn = false;

const App = () => {
  return (
    <>
      <h1 style={{ color: "dodgerblue", fontSize: "2rem" }}>
        Welcome to React
      </h1>
      {isLoggedIn ? (
        <p>How are you {userName} !</p>
      ) : (
        <p>Please Login :(</p>
      )}
    </>
  );
};

export default App;
