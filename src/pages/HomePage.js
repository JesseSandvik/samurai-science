import HomePageTemplate from '../templates/HomePageTemplate';
import pageData from '../appData/pages/home.json';

const HomePage = () => {
  return <HomePageTemplate pageData={pageData} />;
};

export default HomePage;
