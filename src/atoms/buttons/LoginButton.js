const LoginButton = ({handleLogin}) => {
  return (
    <button className="login btn" onClick={handleLogin}>
      sign in
    </button>
  );
};

export default LoginButton;
