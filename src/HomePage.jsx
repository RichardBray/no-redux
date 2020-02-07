import React, { lazy, useContext, useEffect, Suspense } from 'react';
import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';

const EpisodesList = lazy(() => import('./EpisodesList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  }, [state, dispatch]);

  const props = {
    episodes: state.episodes,
    state: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='episode-layout'>
          <EpisodesList {...props} />
        </div>
      </Suspense>
    </>
  );
}
