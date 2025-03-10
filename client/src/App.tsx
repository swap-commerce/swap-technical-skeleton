import swapGif from "/swap.gif";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://www.swap-commerce.com/" target="_blank">
          <img src={swapGif} className="logo" alt="Swap logo" />
        </a>
      </div>
      <h1>Welcome to Swap</h1>
    </>
  );
}

export default App;
