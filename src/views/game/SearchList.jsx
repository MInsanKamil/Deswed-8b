import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllGames, selectAllGamesStatus } from '../../redux/store/gameSlice';
import { useEffect, useState } from 'react';
import { Preloader, Title } from '../../components/common';
import { STATUS } from '../../utils/status';
import { GameList } from '../../components/game';

// eslint-disable-next-line react/prop-types
const SearchList = () => {
  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);
  const [filteredGames, setFilteredGames] = useState([]);
  const searchResults = JSON.parse(localStorage.getItem('searchResults')) || [];

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (searchResults.length > 0) {
      // Filter games based on search results
      const filtered = games.filter(game =>
        // eslint-disable-next-line react/prop-types
        searchResults.some(result => result.id === game.id)
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames([]);
    }
  }, [searchResults, games]);

  return (
    <GameAllPageWrapper>
      <div className='sc-games section'>
        <div className='container'>
          <Title titleName={{ firstText: 'Search', secondText: 'Results' }} />

          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : filteredGames.length > 0 ? (
            <GameList games={filteredGames} />
          ) : (
            'No games found!'
          )}
        </div>
      </div>
    </GameAllPageWrapper>
  );
};

export default SearchList;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games {
    min-height: 100vh;
    padding-top: 65px;
  }
`;
