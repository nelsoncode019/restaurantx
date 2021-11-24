import React from "react";
import styled from "styled-components";

function LineTime() {
  return (
    <StyleLineOfTime>
      <div className="grid-line-time">
        <div>
          <div className="vl" />
          <div className="circle" />
          <div className="vl" />
        </div>
        <div>
          <div className="card-registro-taller">
            <p className="mt-txt-card">
              <strong>Order Delivered</strong>
            </p>
            <p className="mt-txt-card">
              Sat, 23 Jul {new Date().getFullYear()}, 10:00 AM
            </p>
          </div>
        </div>
      </div>

      <div className="grid-line-time">
        <div>
          <div className="vl" />
          <div className="circle" />
          <div className="vl" />
        </div>
        <div>
          <div className="card-registro-taller">
            <p className="mt-txt-card">
              <strong>On Delivery</strong>
            </p>
            <p className="mt-txt-card">
              Sat, 23 Jul {new Date().getFullYear()}, 10:00 AM
            </p>
          </div>
        </div>
      </div>

      <div className="grid-line-time">
        <div>
          <div className="vl" />
          <div className="circle" />
          <div className="vl" />
        </div>
        <div>
          <div className="card-registro-taller">
            <p className="mt-txt-card">
              <strong>Payment Success</strong>
            </p>
            <p className="mt-txt-card">
              Sat, 23 Jul {new Date().getFullYear()}, 10:00 AM
            </p>
          </div>
        </div>
      </div>

      <div className="grid-line-time">
        <div>
          <div className="vl" />
          <div className="circle" />
          <div className="vl" />
        </div>
        <div>
          <div className="card-registro-taller">
            <p className="mt-txt-card">
              <strong>Order Created</strong>
            </p>
            <p className="mt-txt-card">
              Sat, 23 Jul {new Date().getFullYear()}, 10:00 AM
            </p>
          </div>
        </div>
      </div>
    </StyleLineOfTime>
  );
}

export default LineTime;

const StyleLineOfTime = styled.div`
  .vl {
    border-left: 6px solid var(--salmon);
    height: 65px;
    margin-left: 21px;
  }
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    border: 4px solid #f72585;
    transition: all 0.3s ease 0s;
  }
  .vl-detalle {
    border-left: 6px solid #f72585;
    height: 50px;
    margin-left: 120px;
  }
  .circle-detalle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    border: 4px solid #f72585;
    transition: all 0.3s ease 0s;
    margin-left: 100px;
  }

  .card-registro-taller {
    margin-top: 35px;
    min-height: 100px;
    height: auto;
    background: rgb(255, 255, 255);
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 200px;
    text-align: center;
  }
  .mt-txt-card {
    margin-top: 5px;
  }

  .grid-line-time:hover .card-registro-taller {
    transition: 0.3s ease 0s;
    background: #baad2a;
    color: #ffffff;
  }

  .grid-line-time:hover .vl {
    border-left: 6px solid var(--lightyellow);
  }
  .grid-line-time {
    display: grid;
    grid-template-columns: 20% 7% auto;
  }
`;
