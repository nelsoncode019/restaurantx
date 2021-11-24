import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <StyleNavbar>
      <div>
        <div className="wrapper-left">
          <div className="sidebar-left">
            <br />
            <Link to="/">
              <div
                className={`grid-sidebar ${
                  pathname === "/" ? "bg-active" : "bg-no-active"
                }`}
              >
                <div>
                  <div className="grid-route">
                    <div>
                      <svg
                        height="24px"
                        width="24px"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="home"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"></path>
                      </svg>
                    </div>
                    <div className="center ml show-text">
                      <p>Home</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/orders">
              <div
                className={`grid-sidebar ${
                  pathname === "/orders" ? "bg-active" : "bg-no-active"
                }`}
              >
                <div>
                  <div className="grid-route">
                    <div>
                      <svg
                        height="24px"
                        width="24px"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="clipboard-list"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16v352z"></path>
                      </svg>
                    </div>
                    <div className="center ml show-text">
                      <p>Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/menus">
              <div
                className={`grid-sidebar ${
                  pathname === "/menus" ? "bg-active" : "bg-no-active"
                }`}
              >
                <div>
                  <div className="grid-route">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="book-open"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        height="24px"
                        width="24px"
                      >
                        <path d="M514.91 32h-.16c-24.08.12-144.75 8.83-219.56 48.09-4.05 2.12-10.33 2.12-14.38 0C205.99 40.83 85.32 32.12 61.25 32h-.16C27.4 32 0 58.47 0 91.01v296.7c0 31.41 25.41 57.28 57.85 58.9 34.77 1.76 122.03 8.26 181.89 30.37 5.27 1.95 10.64 3.02 16.25 3.02h64c5.62 0 10.99-1.08 16.26-3.02 59.87-22.11 147.12-28.61 181.92-30.37 32.41-1.62 57.82-27.48 57.82-58.89V91.01C576 58.47 548.6 32 514.91 32zM272 433c0 8.61-7.14 15.13-15.26 15.13-1.77 0-3.59-.31-5.39-.98-62.45-23.21-148.99-30.33-191.91-32.51-15.39-.77-27.44-12.6-27.44-26.93V91.01c0-14.89 13.06-27 29.09-27 19.28.1 122.46 7.38 192.12 38.29 11.26 5 18.64 15.75 18.66 27.84l.13 100.32V433zm272-45.29c0 14.33-12.05 26.16-27.45 26.93-42.92 2.18-129.46 9.3-191.91 32.51-1.8.67-3.62.98-5.39.98-8.11 0-15.26-6.52-15.26-15.13V230.46l.13-100.32c.01-12.09 7.4-22.84 18.66-27.84 69.66-30.91 172.84-38.19 192.12-38.29 16.03 0 29.09 12.11 29.09 27v296.7z"></path>
                      </svg>
                    </div>
                    <div className="center ml show-text">
                      <p>Menus</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/reviews">
              <div
                className={`grid-sidebar ${
                  pathname === "/reviews" ? "bg-active" : "bg-no-active"
                }`}
              >
                <div>
                  <div className="grid-route">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="comments-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        height="24px"
                        width="24px"
                      >
                        <path d="M512 160h-96V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v160c0 35.3 28.7 64 64 64h32v52c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4l76.9-43.5V384c0 35.3 28.7 64 64 64h96l108.9 61.6c2.2 1.6 4.7 2.4 7.1 2.4 6.2 0 12-4.9 12-12v-52h32c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64zM64 256c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h288c17.6 0 32 14.4 32 32v160c0 17.6-14.4 32-32 32H215.6l-7.3 4.2-80.3 45.4V256zm480 128c0 17.6-14.4 32-32 32h-64v49.6l-80.2-45.4-7.3-4.2H256c-17.6 0-32-14.4-32-32v-96h128c35.3 0 64-28.7 64-64v-32h96c17.6 0 32 14.4 32 32z"></path>
                      </svg>
                    </div>
                    <div className="center ml show-text">
                      <p>Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/customers">
              <div
                className={`grid-sidebar ${
                  pathname === "/customers" ? "bg-active" : "bg-no-active"
                }`}
              >
                <div>
                  <div className="grid-route">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="user-friends"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        height="24px"
                        width="24px"
                      >
                        <path d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-144c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM272.1 276c-11.9 0-23.9 1.7-35.5 5.3-14.2 4.3-29.1 6.7-44.7 6.7s-30.5-2.4-44.7-6.7c-11.6-3.5-23.6-5.3-35.5-5.3-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM336 432H48v-44.8c0-28.9 18.4-53.6 44.1-63.1 10.3-3.8 21.6-3.7 31.9 0 22.1 7.9 45 11.9 68 11.9s45.8-4 68.1-11.9c10.3-3.7 21.6-3.8 31.9 0 25.7 9.4 44.1 34.2 44.1 63.1V432zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-176c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm431.7 237.1C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.3 0-26.2 3-38.2 8.1 5.8 5.9 11.3 12 16 18.9 4.7 7 8.6 14.4 12 22 3.3-.7 6.7-1.1 10.2-1.1 17.2 0 29.6 10 66.8 10 37.4 0 49.5-10 66.8-10 15.7 0 29.5 6.7 37.1 17.9 5.3 7.9 8.1 17.1 8.1 26.7V400H416v32c0 5.5-.6 10.8-1.6 16H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"></path>
                      </svg>
                    </div>
                    <div className="center ml show-text">
                      <p>Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </StyleNavbar>
  );
}

export default Navbar;

const StyleNavbar = styled.div`
  .wrapper-left .sidebar-left {
    position: fixed;
    width: 240px;
    height: 100%;
    background: var(--white);
    box-shadow: var(--shawdow);
  }

  .grid-sidebar {
    display: grid;
    grid-template-columns: 40% 60%;
    margin: 20px;
    padding: 7px;
    border-radius: 10px;
  }
  .bg-active {
    background: var(--lightyellow);
    font-weight: bold;
    color: var(--white);
    fill: var(--white);
  }

  .bg-no-active {
    transition: 0.5s;
    font-weight: bold;
  }

  .bg-no-active:hover {
    transition: 0.5s;
    background: #baad29;
    cursor: pointer;
    fill: var(--white);
  }

  .ml {
    margin-left: 20px;
  }

  .grid-sidebar:hover p {
    color: var(--white);
    cursor: pointer;
  }

  .grid-route {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-left: 5px;
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .wrapper-left {
      display: none;
    }
  }
  /* TABLET */
  @media (min-width: 500px) and (max-width: 1024px) {
    .wrapper-left .sidebar-left {
      width: 90px;
    }
    .show-text {
      display: none;
    }
  }
`;
