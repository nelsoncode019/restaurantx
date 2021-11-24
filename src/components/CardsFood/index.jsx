import React from "react";
import styled from "styled-components";
import burguerImage from "../../../public/images/burguer.jpeg";
import starIcon from "../../../public/images/star.svg";
import Pagination from "../../components/Pagination";

function CardsFood() {
  return (
    <CardsFoodStyle>
      <div className="box">
        <div className="left">
          <button className="btn">Add Food</button>
        </div>

        <div className="grid-cards">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
            return (
              <div className="card-product" key={value}>
                <div>
                  <img src={burguerImage} alt="" className="img-product-size" />
                </div>
                <div className="card-body">
                  <h3 className="p-t">Smash Burguer</h3>
                  <p className="p-t">$ 4.99 USD</p>

                  <p>
                    <img
                      className="p-t"
                      src={starIcon}
                      alt=""
                      height="16px"
                      width="16px"
                    />
                    4.3
                  </p>
                  <br />
                  <div className="grid-tags">
                    <div className="tag">burguer</div>
                    <div className="tag">soda</div>
                    <div className="tag">french fries</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <Pagination/>
      </div>
    </CardsFoodStyle>
  );
}

export default CardsFood;

const CardsFoodStyle = styled.div`
  .box {
    margin-left: 17%;
    margin-right: 2%;
  }
  .grid-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 10px;
  }
  .card-product {
    width: 100%;
    background: var(--white);
    height: 340px;
    transition: 0.2s;
    cursor: pointer;
  }
  .card-product:hover {
    transition: 0.2s;
    box-shadow: var(--shawdow);
  }
  .img-product-size {
    width: 100%;
    height: 200px;
  }
  .card-body {
    padding: 10px;
  }
  .p-t {
    padding-top: 5px;
  }

  .grid-tags {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
  }

  .tag {
    background: rgba(71, 82, 107, 0.1);
    border-radius: 10px;
    padding: 5px;
    text-align: center;
  }

  /* MOBILE */
  @media (max-width: 1025px) {
    .box {
      margin-left: 2%;
    }
  }
  /* TABLET */
  @media (min-width: 500px) and (max-width: 1024px) {
    .box {
      margin-left: 13%;
    }
  }
`;
