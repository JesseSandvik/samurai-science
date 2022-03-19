import appData from './appData/app/app.json';
import Header from './organisms/header/Header';
import Layout from './layout/Layout';
import Parallax from './atoms/Parallax';
import './css/styles.css';

const App = () => {
  return (
    <div className="app">
      <Parallax />
      <Header appData={appData} />
      <Layout appData={appData} />
    </div>
  );
};

export default App;
