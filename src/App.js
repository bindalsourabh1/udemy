// import logo from './logo.svg';
import './App.css';
import Course from './components/Course';
import Courses from './components/Courses';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/> 
      <Course/>
      <Courses/>
    </div>
  );
}

export default App;
