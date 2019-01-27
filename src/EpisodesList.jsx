import React from 'react';

export default function EpisodesList(props) {
  const { episodes, toggleFav, faves, state } = props;

  return episodes.map(episode => {
    // if (faves.length > 0) debugger
    return (
      <section key={episode.id} className='episode-box'>
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type='button' onClick={() => toggleFav(episode, state.state, state.dispatch)}>
            {faves.find(fav => fav.id === episode.id) ? 'Unfav' : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
}
