import styled from "styled-components";
import {
  Banner,
  Preloader,
  Tabs,
  Title,
  Pagination
} from "../../components/common/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState} from "react";
import { fetchAsyncGames } from "../../redux/utils/gameUtils";
import { STATUS } from "../../utils/status";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { store_image } from "../../utils/images";
import {
  selectAllGenres,
  selectAllGenresStatus,selectGenresNextPage, selectGenresPrevPage
} from "../../redux/store/genreSlice";
import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
import {
  selectAllStores,
  selectAllStoresStatus,
} from "../../redux/store/storeSlice";
import { StoreList } from "../../components/store/index";
import { fetchAsyncStores } from "../../redux/utils/storeUtils";
import GameAllPage from "../game/GameAllPage";

const HomePage = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);
  const genresStatus = useSelector(selectAllGenresStatus);
  const nextPageGenres = useSelector(selectGenresNextPage);
  const prevPageGenres = useSelector(selectGenresPrevPage);
  const stores = useSelector(selectAllStores);
  const storesStatus = useSelector(selectAllStoresStatus);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncGenres(page));
    dispatch(fetchAsyncStores());
  }, [page]);

  const pageHandler = (pageValue) => setPage(pageValue);

  return (
    <HomeWrapper>
      <Banner />

      <section className="section sc-popular">
        <GameAllPage/>
      </section>

      <section className="section sc-genres">
        <div className="container">
          <Title
            titleName={{
              firstText: "genres",
            }}
          />
        </div>
        {genresStatus === STATUS.LOADING ? (
          <Preloader />
        ) : genres?.length > 0 ? 
          <>
          <Tabs data={genres} />
          <Pagination pageHandler = { pageHandler } nextPage = { nextPageGenres } prevPage = { prevPageGenres } currentPage = { page } />
          </>: (
          "No genres found!"
        )}
      </section>
      

      <section
        className="section sc-stores"
        style={{
          background: `linear-gradient(180deg, rgba(12, 10, 36, 0.73) 0%, rgba(0, 0, 0, 0.73) 72.92%), url(${store_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <Title
            titleName={{
              firstText: "our",
              secondText: "game stores",
            }}
          />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores?.length > 0 ? (
            <StoreList stores={stores} />
          ) : (
            "No stores found!"
          )}
        </div>
      </section>
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
    }
  }

  .sc-join {
    min-height: 640px;

    .join-content {
      max-width: 600px;
    }

    .join-title {
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;

      span {
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }
  }

  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores {
    min-height: 841px;
  }
`;
