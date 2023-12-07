import './App.css';

function App() {
  return (
    <div className="view">
      <div className="header">TAXI DIREKT</div>
      <div className="login">
        <label htmlFor="username">USERNAME</label>
        <textarea id="username" placeholder="Default Username"></textarea>
      </div>

      <div className="login">
        <label htmlFor="password">PASSWORD</label>
         <input type="password" id="password" placeholder="Enter you password"/>
      </div>
      <button onClick={() => alert('You are logging in')}>LOGIN</button>
    </div>
  );
}

export default App;
