import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import Footer from './Footer';
import Particales from './components/Particales';
import ContentPart from './ContentPart';
function App() {
  return (
    <div className="App">
      <Particales/>
      <div className="header-menu-container">
        <Menu/>
      </div>
    </div>
  );
}

export default App;
