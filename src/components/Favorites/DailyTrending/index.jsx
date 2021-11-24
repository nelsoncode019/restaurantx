import React from "react";
import styled from "styled-components";

function DailyTrending() {
  return (
    <DailyTrendingStyle>
      <div className="box-trending scroll-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
          return (
            <div className="grid-top-favorites" key={value}>
              <div className="number-top center">{value}°</div>
              <div>
                <strong>Super Personal Pizza Menu</strong>
                <br />
                <br />
                <p className="ml-orders-numbers">Orders: 30</p>
              </div>
              <div>
                <img
                  src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg"
                  alt="Pizza"
                  height="50px"
                  width="50px"
                  className="img-product"
                />
              </div>
            </div>
          );
        })}
      </div>
    </DailyTrendingStyle>
  );
}

export default DailyTrending;

const DailyTrendingStyle = styled.div`
  .box-trending {
    width: 100%;
    height: 500px;
    background: white;
    border-radius: 2%;
    box-shadow: var(--shawdow);
  }

  .grid-top-favorites {
    display: grid;
    grid-template-columns: 10% 70% 20%;
    padding: 10px;
    cursor: pointer;
  }
  .grid-top-favorites:hover {
    background: #f9f9f9;
  }
  .img-product {
    border-radius: 50%;
  }
  .number-top {
    font-size: 20px;
  }
  .ml-orders-numbers {
    margin-left: 5px;
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
  /* Track */
  .scroll-container::-webkit-scrollbar-track {
    background: transparent;
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
