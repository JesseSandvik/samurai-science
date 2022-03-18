import AuthButtonToggle from '../../molecules/AuthButtonToggle';

const Header = () => {
  return (
    <header>
      <div id="title" className="container">
        <h1>Wisdom Iota</h1>
        <small>A little piece of mind.</small>
      </div>
      <div id="user" className="container">
        <AuthButtonToggle />
      </div>
    </header>
  );
};

export default Header;
