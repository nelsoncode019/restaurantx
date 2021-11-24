import React from "react";
import styled from "styled-components";
import avatar1 from "../../../public/images/avatar1.jpg";
import avatar2 from "../../../public/images/avatar2.jpeg";

function CustomerInfo() {
  return (
    <CustomerInfoStyle>
      <div className="grid-customer-info">
        <div className="card">
          <div className="center">
            <img src={avatar1} className="img-avatar" />
          </div>
          <br />
          <div className="center">
            <strong>Steven James (Delivery by)</strong>
          </div>
          <br />
          <div className="center">
            <p>+52 728292781</p>
          </div>
          <br />
          <div className="center">
            <button className="btn">View Profile</button>
          </div>
        </div>
        <div className="card">
          <div className="center">
            <img src={avatar2} className="img-avatar" />
          </div>
          <br />
          <div className="center">
            <strong>Steven James (Customer)</strong>
          </div>
          <br />
          <div className="center">
            <p>+52 728292781</p>
          </div>
          <br />
          <div className="center">
            <button className="btn">View Profile</button>
          </div>
        </div>
      </div>
    </CustomerInfoStyle>
  );
}

export default CustomerInfo;

const CustomerInfoStyle = styled.div`
  .grid-customer-info {
    display: grid;
    gap: 1%;
    grid-template-columns: 50% 50%;
    margin-right: 2%;
  }

  .card {
    background: white;
    border-radius: 2%;
    box-shadow: var(--shawdow);
    height: 240px;
    padding: 10px;
  }

  .img-avatar {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .grid-customer-info {
      grid-template-columns: 100%;
      margin-right: 1%;
      margin-left: 1%;
    }
  }
`;
