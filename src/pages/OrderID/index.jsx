import React from "react";
import styled from "styled-components";
import CardsOrderID from "../../components/CardsOrderID";
import CustomerInfo from "../../components/CustomerInfo";
import LineTime from "../../components/LineTime";

function OrderID() {
  return (
    <OrderIDStyle>
      <div className="grid-order">
        <LineTime />

        <div className="scroll-items">
          <CustomerInfo />
          <CardsOrderID />
        </div>
      </div>
    </OrderIDStyle>
  );
}

export default OrderID;

const OrderIDStyle = styled.div`
  .grid-order {
    display: grid;
    gap: 1%;
    grid-template-columns: 25% 75%;
    margin-top: 2%;
    margin-left: 17%;
    margin-right: 2%;
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .grid-order {
      grid-template-columns: 100%;
      margin-left: 1%;
    }
  }

  /* TABLET */
  @media (min-width: 500px) and (max-width: 1024px) {
    .grid-order {
      grid-template-columns: 50% 50%;
      margin-left: 13%;
    }
  }
`;
