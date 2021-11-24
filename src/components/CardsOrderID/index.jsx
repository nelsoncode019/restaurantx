import React from "react";
import styled from "styled-components";

function CardsOrderID() {
  return (
    <CardsOrderIDStyle>
      <div className="scroll-table">
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((value) => {
              return (
                <tr key={value}>
                  <td data-th="ID">
                    <div className="grid-item">
                      <div>
                        <img
                          src="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg"
                          alt=""
                          className="img-product"
                        />
                      </div>
                      <div className="center">Super Personal Pizza Menu</div>
                    </div>
                  </td>
                  <td data-th="Location">3</td>
                  <td data-th="Location">$ 5.00 USD</td>
                  <td>$ 15.00 USD</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </CardsOrderIDStyle>
  );
}

export default CardsOrderID;

const CardsOrderIDStyle = styled.div`
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 5px;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }

  tr,
  td {
    min-width: 200px;
  }

  tr {
    cursor: pointer;
  }
  tr:hover {
    background: var(--background-body);
  }

  .rwd-table {
    width: 100%;
    background: white;
    border-radius: 0.4em;
    box-shadow: var(--shawdow);
    font-size: 14px;
    text-align: center;
  }

  .rwd-table th {
    color: black;
  }
  .rwd-table {
    margin: 1em 0;
    min-width: 81%;
    padding: 5px;
  }

  .img-product {
    height: 90px;
    width: 90px;
    border-radius: 50%;
  }
  .grid-item {
    display: grid;
    grid-template-columns: 55% 45%;
  }

  /* SCROLL TABLE */
  .scroll-table {
    overflow: scroll;
    overflow-y: hidden;
    transition: 1s;
  }
  .scroll-table::-webkit-scrollbar {
    width: 5px;
  }
  /* Handle */
  .scroll-table::-webkit-scrollbar-thumb {
    background: var(--lightyellow);
  }
`;
