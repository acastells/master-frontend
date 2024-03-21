import { getHouseTitle, House } from '@my-org/house-helpers';
import { getHouseMotto } from '@my-org/motto-helpers';
import './app.css';
import logo from '/logo.png';

function App() {
  return (
    <>
      <img src={logo} className="logo" />
      <h1>{getHouseTitle(House.stark)}</h1>
      <h1>{getHouseMotto(House.stark)}</h1>
    </>
  );
}

export default App;
