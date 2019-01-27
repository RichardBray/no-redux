import React from 'react';
import { Store } from './Store';
import { toggleFavAction } from './Actions';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

export default function FavPage() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='episode-layout'>
        <EpisodesList
          episodes={state.favourites}
          state={{ state, dispatch }}
          toggleFav={toggleFavAction}
          faves={state.favourites}
        />
      </div>
    </React.Suspense>
  );
}
