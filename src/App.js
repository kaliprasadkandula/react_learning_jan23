import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
function Component1(props){//Note components starts with capital letters//you know?you can also create components using class
 return <div className={props.nameForClass}>{props.name}</div>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here's my best friend's List 
          <Header/>
          <Component1 name={"kaka1"} nameForClass={"kaka1Class"}/>
          <Component1 name={"kaka2"} nameForClass={"kaka2Class"}/>
          <Component1 name={"kaka3"} nameForClass={"kaka3Class"}/>
          

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with kaka
        </a>
      </header>
    </div>
  );
}

export default App;
