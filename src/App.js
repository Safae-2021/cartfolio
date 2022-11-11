
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
