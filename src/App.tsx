
import TypewriterComponent from 'typewriter-effect';
import './App.css';

function App() {
  return (
    <div className="App">
    <span className='header'>
    <TypewriterComponent
  options={{
    strings: ['my note book'],
    autoStart: true,
    loop: true,
  }}
/>
    </span>
    </div>
  );
}

export default App;
