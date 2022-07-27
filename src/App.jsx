import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Identity from './components/identity/identity';

function App() {

  return (
    <div className="App">
      <Header />
        <div className='adiotInfo'>
          <Identity />
        </div>
      <Footer/>
    </div>
  );
}

export default App;
