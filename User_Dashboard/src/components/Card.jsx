const Card = ({ userData, runDelete }) => {
  return (
    <div className="text-white">
      {userData.map((user, idx) => {
        return (
          <div key={idx}>
            <p>{user.userName}</p>
            <p>{user.userRole}</p>
            <p>{user.userCompany}</p>
            <p>{user.userCity}</p>

            <div>
              <button className="cursor-pointer" onClick={() => runDelete(idx)}>
                Delete User
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
