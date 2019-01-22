import React from 'react';
import { Store } from './Store';

function App() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    (state.episodes.length === 0) && fetchData();
  });
  async function fetchData() {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
    const dataJSON = await data.json();
    return dispatch({ type: 'FETCH_DATA', payload: dataJSON._embedded.episodes})
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
