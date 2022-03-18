const LogoutButton = ({handleLogout}) => {
  return (
    <button className="logout btn" onClick={handleLogout}>
      sign out
    </button>
  );
};

export default LogoutButton;
