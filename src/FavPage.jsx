import React, { Suspense, lazy, useContext } from 'react';
import { Store } from './Store';
import { toggleFavAction } from './Actions';

const EpisodesList = lazy(() => import('./EpisodesList'));

export default function FavPage() {
  const { state, dispatch } = useContext(Store);

  const props = {
    episodes: state.favourites,
    state: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='episode-layout'>
        <EpisodesList {...props} />
      </div>
    </Suspense>
  );
}
