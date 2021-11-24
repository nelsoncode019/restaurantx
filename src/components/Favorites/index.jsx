import styled from "styled-components";
import MostFavorites from "./MostFavorites";
import DailyTrending from "./DailyTrending";

function Favorites() {
  return (
    <FavoritesStyle>
      <div className="grid-favorites">
        <MostFavorites />
        <DailyTrending />
      </div>
    </FavoritesStyle>
  );
}

export default Favorites;

const FavoritesStyle = styled.div`
  .grid-favorites {
    display: grid;
    gap: 1%;
    grid-template-columns: 70% 30%;
    margin-top: 2%;
    margin-left: 17%;
    margin-right: 2%;
  }
  /* MOBILE */
  @media (max-width: 480px) {
    .grid-favorites {
      grid-template-columns: 100%;
      margin-left: 1%;
    }
  }

  /* TABLET */
  @media (min-width: 500px) and (max-width: 1024px) {
    .grid-favorites {
      grid-template-columns: 50% 50%;
      margin-left: 13%;
    }
  }
`;
