import { Routes, Route, useNavigate } from "react-router-dom";

import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Image from "./components/atoms/image/Image";
import Navigation from "./components/molecules/navigation/Navigation";
import NavigationLink from "./components/atoms/navLink/NavLink";

import SamuraiScienceLogo from "./images/samurai-logo.png";

import { routes } from "./app/routes";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header>
        <div className="container">
          <Navigation>
            <li>
              <NavigationLink to="/">home</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/about">about us</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/shop">shop</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/find-retailer">retailers</NavigationLink>
            </li>
          </Navigation>
        </div>
        <div className="container">
          <div id="title">
            <Image alt="Samurai Science Logo" src={SamuraiScienceLogo} />
          </div>
        </div>
        <div className="container">
          <Navigation>
            <li>
              <NavigationLink to="/cart">cart(0)</NavigationLink>
            </li>
          </Navigation>
        </div>
      </Header>
      <Routes>
        {routes.map(({ element, name, path }) => (
          <Route key={name} path={path} element={element} />
        ))}
      </Routes>
      <Footer>
        <small>&copy;{new Date().getFullYear()} samuraiscience.com</small>
      </Footer>
    </div>
  );
}

export default App;
