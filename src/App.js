import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  let limit = 100;
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then(response => response.json())
      .then(responseData => {
        setData( responseData.results.length > 0 ? responseData.results : []);
      })
  }, [])

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>React API Pokemon</h1>
        <a
          className="link"
          href="#main"
          rel="noopener noreferrer"
        >
          List of Pokemon
        </a>
      </header>
      <main id="main">
        
          {data.map(item => (
            <div key={item.name} className="card">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        
      </main>
    </div>
  );
}

export default App;
