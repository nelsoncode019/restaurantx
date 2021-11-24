import React from "react";
import styled from "styled-components";
import notificationIcon from "./icons/notification.svg";
import giftIcon from "./icons/gift.svg";
import settingsIcon from "./icons/settings.svg";
import avatar2 from "../../../../public/images/avatar2.jpeg";

function Toolbar() {
  return (
    <ToolbarStyle>
      <StyleDropdown>
        <div className="left">
          <div className="grid-toolbar">
            <div className="p-7">
              {/* DROPDOWN */}
              <div className="circle-number">
                <strong>4</strong>
              </div>
              <button className="btn-dropdown">
                <img
                  src={notificationIcon}
                  alt="Notificaction"
                  height="24px"
                  width="24px"
                />
                <div className="dropdown">
                  <span>
                    Payment Success
                    <br />
                    Sat, 23 Jul 2021, 1:00 PM
                  </span>
                  <span>
                    Order Delivered
                    <br />
                    Sat, 23 Jul 2021, 10:00 AM
                  </span>
                  <span>
                    Order Delivered
                    <br />
                    Sat, 23 Jul 2021, 9:00 AM
                  </span>
                </div>
              </button>
            </div>
            <div className="p-7">
              <div className="circle-number">
                <strong>4</strong>
              </div>
              <img src={giftIcon} alt="Gift" height="24px" width="24px" />
            </div>
            <div className="p-7">
              <div className="circle-number">
                <strong>1</strong>
              </div>
              <img src={settingsIcon} alt="Gift" height="24px" width="24px" />
            </div>

            <div className="grid-toolbar">
              <button className="btn-dropdown">
                <div>
                  <img
                    src={avatar2}
                    alt="Profile Image"
                    height="30px"
                    width="30px"
                    className="profile-user"
                  />
                </div>
                <div className="dropdown">
                  <span>Profile</span>
                  <span>Inbox</span>
                  <span>Logout</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </StyleDropdown>
    </ToolbarStyle>
  );
}

export default Toolbar;

const ToolbarStyle = styled.div`
  .grid-toolbar {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 7px;
  }
  .profile-user {
    border-radius: 50%;
  }
  .circle-number {
    float: right;
    position: relative;
    bottom: 10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #baad2a;
    color: white;
    text-align: center;
    font-weight: 900;
  }

  .p-7 {
    margin-top: 3px;
  }
`;

const StyleDropdown = styled.div`
  .btn-dropdown {
    outline: 0;
    border: 0;
    overflow: hidden;
    cursor: pointer;
    background: var(--white);
  }
  .btn-dropdown:focus .dropdown,
  .btn-dropdown:active .dropdown {
    transform: translate(0, 20px);
    opacity: 1;
    visibility: visible;
  }
  .btn-dropdown .dropdown {
    position: absolute;
    width: auto;
    margin-left: -20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    opacity: 0;
    background-color: var(--white);
    visibility: hidden;
    transition: 0.3s ease;
    z-index: 1;
  }
  span:hover {
    color: white;
    background: var(--salmon);
  }
  .btn-dropdown .dropdown span {
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 10px;
    text-decoration: none;
  }
`;
