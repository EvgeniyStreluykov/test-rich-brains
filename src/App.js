import './App.scss';
import Cards from './components/Cards/Cards';
import Header from './components/Header';
import Careers from './components/List/Careers';

import refresh from './images/refresh.png'

function App(props) {

  return (
    <div className="App">
      <div className='content'>
        <Header />
        <div className='container'>
          <div>
            <Careers />
          </div>
          <Cards />
        </div>
      <div className='more-info'>
        more programmes 
        <img src={refresh} alt={refresh} />
      </div>
      </div>
    </div>
  );
}

export default App;
