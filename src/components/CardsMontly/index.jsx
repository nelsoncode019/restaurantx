import React from "react";
import styled from "styled-components";
import dollarIcon from "./icons/dollar.svg";
import burguerIcon from "./icons/burguer.svg";
import customerIcon from "./icons/customer.svg";
import reviewIcon from "./icons/review.svg";

function CardsMontly() {
  return (
    <CardsMontlyTyle>
      <div className="container-cards">
        <div>
          <br />
          <strong>Monthly Statistics</strong>
          <div className="cards">
            <div className="card">
              <div className="grid-statistic">
                <div className="box-radius center">
                  <img
                    src={dollarIcon}
                    alt="Dollar"
                    height="40px"
                    width="40px"
                  />
                </div>

                <div>
                  <div className="center mt">
                    <h2>20,000</h2>
                  </div>
                  <div className="center">
                    <p>Total Revenue</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="grid-statistic">
                <div className="box-radius center">
                  <img
                    src={burguerIcon}
                    alt="Dollar"
                    height="40px"
                    width="40px"
                  />
                </div>

                <div>
                  <div className="center mt">
                    <h2>10,000</h2>
                  </div>
                  <div className="center">
                    <p>Total Orders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="grid-statistic">
                <div className="box-radius center">
                  <img
                    src={customerIcon}
                    alt="Dollar"
                    height="30px"
                    width="30px"
                  />
                </div>

                <div>
                  <div className="center mt">
                    <h2>5,000</h2>
                  </div>
                  <div className="center">
                    <p>Total Customers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="grid-statistic">
                <div className="box-radius center">
                  <img
                    src={reviewIcon}
                    alt="Dollar"
                    height="30px"
                    width="30px"
                  />
                </div>

                <div>
                  <div className="center mt">
                    <h2>900</h2>
                  </div>
                  <div className="center">
                    <p>Total Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardsMontlyTyle>
  );
}

export default CardsMontly;

const CardsMontlyTyle = styled.div`
  .container-cards {
    margin-left: 17%;
  }

  .cards {
    display: flex;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    padding: 1em;
    overflow-y: hidden;
  }

  .card {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    margin-right: 1em;
    padding: 10px;
    flex: 1 0 5em;
    border: 0px solid #000000;
    border-radius: 10px;
    height: 130px;
    color: white;
    cursor: pointer;
    background: linear-gradient(to right, #ff9472, #f2709c);
  }

  .grid-statistic {
    display: grid;
    grid-template-columns: 30% 70%;
  }
  .box-radius {
    border-radius: 50%;
    height: 90px;
    width: 90px;
    background: var(--white);
  }
  .mt {
    margin-top: 15%;
  }

  /* MOBILE */
  @media (max-width: 1025px) {
    .container-cards {
      margin-left: 2%;
    }
    .grid-statistic {
      grid-template-columns: 50px 190px;
    }
  }
  /* TABLET */
  @media (min-width: 500px) and (max-width: 1024px) {
    .container-cards {
      margin-left: 13%;
    }
  }
`;
