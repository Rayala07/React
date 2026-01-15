import React from "react";

const User = ({ user, key }) => {
  const col1 = 0;
  const col2 = 0;
  const col3 = 0;
  return (
    <div id={key} style={{ backgroundColor: `rgb(${col1},${col2},${col3})` }}>
      {user.name}
    </div>
  );
};

export default User;
