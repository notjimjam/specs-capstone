import './css/App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import logo from './images/mm.png';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className='App'>
      <div>
        {/* <h1>Music Meteorologist</h1> */}
        <img src={logo} alt='' className='logo' />
      </div>
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default App;
