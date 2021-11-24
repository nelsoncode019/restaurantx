import styled from "styled-components";
import starIcon from "../../../../public/images/star.svg";

function MostFavorites() {
  return (
    <MostFavoritesStyle>
      <div className="box-favorite scroll-container">
        <div>
          <h2>Most Favorites Item</h2>
        </div>
        <br />
        <div>
          <div className="grid-favorites-products">
            {[1, 2, 3, 4, 5, , 6, 7, 8, 9, 10].map((value) => {
              return (
                <div className="grid-products" key={value}>
                  <div>
                    <img
                      src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg"
                      alt="Pizza"
                      className="img-product"
                    />
                  </div>
                  <div>
                    <strong>Super Personal Pizza Menu</strong>
                    <br />
                    <br />
                    <p>
                      500 Sales <strong>$ 20 USD</strong>
                    </p>
                    <br />
                    <img src={starIcon} alt="" height="15px" width="15px" />
                    <img src={starIcon} alt="" height="15px" width="15px" />
                    <img src={starIcon} alt="" height="15px" width="15px" />
                    <img src={starIcon} alt="" height="15px" width="15px" />
                    <img src={starIcon} alt="" height="15px" width="15px" />
                  </div>
                  <div>
                    <button className="btn-position btn">View Product</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MostFavoritesStyle>
  );
}

export default MostFavorites;

const MostFavoritesStyle = styled.div`
  .box-favorite {
    width: 100%;
    height: 500px;
    background: var(--white);
    border-radius: 2%;
    padding: 10px;
    box-shadow: var(--shawdow);
  }
  .grid-favorites-products {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .grid-products {
    display: grid;
    grid-template-columns: 27% 41% 34%;
    margin: 5px;
    padding: 10px;
    border-radius: 2%;
  }
  .grid-products:hover {
    background: #f9f9f9;
  }

  .img-product {
    border-radius: 20%;
    height: 100px;
    width: 100px;
  }

  .btn-position {
    position: relative;
    top: 70px;
  }

  /* MOBILE AND TABLET */
  @media (max-width: 1025px) {
    .grid-favorites-products {
      grid-template-columns: 100%;
    }
    .img-product {
      height: 70px;
      width: 70px;
    }
  }

  /* SCROLL CONTAINER */
  .scroll-container {
    overflow: scroll;
    height: 500px;
    width: auto;
    overflow-x: hidden;
    transition: 1s;
  }
  .scroll-container::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  .scroll-container::-webkit-scrollbar-thumb {
    background: #baad2a;
  }
  /* Handle on hover */
  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: salmon;
  }
`;
