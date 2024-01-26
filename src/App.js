import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainBody from './components/MainBody/MainBody';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
