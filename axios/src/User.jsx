import React from "react";

const User = ({ user, key }) => {
  const col1 = Math.floor(Math.random() * 256);
  const col2 = Math.floor(Math.random() * 256);
  const col3 = Math.floor(Math.random() * 256);
  return (
    <div id={key} style={{ backgroundColor: `rgb(${col1},${col2},${col3})` }}>
      {user.name}
    </div>
  );
};

export default User;
