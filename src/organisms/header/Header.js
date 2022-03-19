import {faCrow} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import NavigationLink from '../../atoms/NavigationLink';

const Header = ({appData}) => {
  return (
    <header>
      <NavigationLink path={'/'}>
        <div id="title" className="container">
          <h1>
            <FontAwesomeIcon icon={faCrow} />
            {appData.name}
          </h1>
          <small>{appData.phrase}</small>
        </div>
      </NavigationLink>
    </header>
  );
};

export default Header;
