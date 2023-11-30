import {useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllGames, selectAllGamesStatus} from '../../redux/store/gameSlice';
import { useEffect, useState } from 'react';
import { Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { GameList } from '../../components/game';

const Favorite = () => {
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoriteGamesData = games.filter(game => favorites.includes(game.id));

  // Periksa status favorit dari local storage untuk setiap game
  const gamesWithFavorites = favoriteGamesData.map(game => ({
    ...game,
    isFavorite: !!localStorage.getItem(`favorite_${game.id}`), // Periksa status favorit dari local storage
  }));

  setFavoriteGames(gamesWithFavorites);
}, [games]);


  return (
    <GameAllPageWrapper>
      <div className='sc-games section'>
        <div className='container'>
          <Title titleName={{
            firstText: "favorite",
            secondText: "games"
          }} />

          {
            gamesStatus === STATUS.LOADING ? <Preloader /> : favoriteGames?.length > 0 ? <>
              <GameList games = { favoriteGames } />
            </> : "No games found!"
          }
        </div>
      </div>
    </GameAllPageWrapper>
  )
}

export default Favorite;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games{
    min-height: 100vh;
    padding-top: 65px;
  }
`;
