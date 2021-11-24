import React from "react";
import styled from "styled-components";
import utensilsIcon from "./icons/utensils.svg";
import pizzaIcon from "./icons/pizza.svg";
import burguerIcon from "./icons/burguer.svg";
import tacoIcon from "./icons/taco.svg";
import dessersIcon from "./icons/dessers.svg";
import barbecueIcon from "./icons/barbecue.svg";
import soupIcon from "./icons/soup.svg";
import fishIcon from "./icons/fish.svg";
import cheeseIcon from "./icons/cheese.svg";
import saladIcon from "./icons/salad.svg";
import hotdogIcon from "./icons/hotdog.svg";
import burritoIcon from "./icons/burrito.svg";
import turkeyIcon from "./icons/turkey.svg";

function TypesFood() {
  return (
    <CardsFoodTyle>
      <div className="container-cards">
        <div>
          <br />
          <strong>Types of Food</strong>
          <div className="cards">
            <div className="card card-active">
              <div className="box-radius center">
                <img src={utensilsIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">All</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={pizzaIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Pizza</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={burguerIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Burguer</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={tacoIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Tacos</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={dessersIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Dessers</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={barbecueIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Steak</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={dessersIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Dessers</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={soupIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Soups</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={fishIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Seafood</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={cheeseIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Cheese</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={saladIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Salad</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={hotdogIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Hotdog</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={burritoIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Burrito</strong>
            </div>
            <div className="card">
              <div className="box-radius center">
                <img src={turkeyIcon} alt="" height="30px" width="30px" />
              </div>
              <br />
              <br />
              <strong className="center">Turkey</strong>
            </div>
          </div>
        </div>
      </div>
    </CardsFoodTyle>
  );
}

export default TypesFood;

const CardsFoodTyle = styled.div`
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
    cursor: pointer;
    box-shadow: var(--shawdow);
    transition: 0.2s;
    background: var(--white);
  }
  .card:hover {
    transition: 0.2s;
    color: white;
    background: linear-gradient(to right, #ff9472, #f2709c);
  }

  .card-active {
    color: var(--white);
    background: linear-gradient(to right, #ff9472, #f2709c);
  }

  .box-radius {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background: var(--white);
  }
  /* MOBILE */
  @media (max-width: 1025px) {
    .container-cards {
      margin-left: 2%;
    }
  }
  /* TABLET */
  @media (min-width: 500px) and (max-width: 1024px) {
    .container-cards {
      margin-left: 13%;
    }
  }
`;
