import LoginButton from '../atoms/buttons/LoginButton';
import LogoutButton from '../atoms/buttons/LogoutButton';

const AuthButtonToggle = ({user}) => {
  return user ? <LogoutButton /> : <LoginButton />;
};

export default AuthButtonToggle;
