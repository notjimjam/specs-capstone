import './css/App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import logo from './images/mm.png';
import Footer from './components/Footer';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  // const logOutHandler = (event) => {
  //   event.preventDefault();
  //   <Login />;
  //   document.body.className = 'logout';
  // };

  return (
    <div className='App'>
      <div>
        <img src={logo} alt='' className='logo' />
      </div>
      {code ? <Dashboard code={code} /> : <Login />}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
