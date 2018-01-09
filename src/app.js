let count = 0;
const add = () => {
  count++
  renderCounterApp();
};
const sub = () => {
  count--
  renderCounterApp();
};
const del = () => {
  count = 0
  renderCounterApp();
};
const appRoot = document.getElementById("root");

const renderCounterApp = () => {
  const App = ( 
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>
      <button onClick={del}>clear</button>
    </div>
    );
    ReactDOM.render(App, appRoot);
};
renderCounterApp();