import appData from './appData/app/app.json';
import Layout from './layout/Layout';
import './css/styles.css';

const App = () => {
  return (
    <div className="app">
      <Layout appData={appData} />
    </div>
  );
};

export default App;
