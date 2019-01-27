import React from 'react';
import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);
  
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  }, [state]);

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className='episode-layout'>
          <EpisodesList
            episodes={state.episodes}
            state={{ state, dispatch }}
            toggleFav={toggleFavAction}
            faves={state.favourites}
          />
        </div>
      </React.Suspense>
    </React.Fragment>
  );
}
