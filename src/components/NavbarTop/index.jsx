import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Toolbar from "./Toolbar";

function NavbarTop() {
  return (
    <NavbarTopStyle>
      <div className="grid-nav-top">
        <div className="ml-title">
          <h1>RestaurantX</h1>
        </div>

        <Search />

        <div>
          <Toolbar />
        </div>
      </div>
    </NavbarTopStyle>
  );
}

export default NavbarTop;

const NavbarTopStyle = styled.div`
  .grid-nav-top {
    display: grid;
    padding-top: 15px;
    padding-bottom: 15px;
    background: var(--white);
  }
  .ml-title {
    display: none;
  }

  /* TABLET */
  @media (min-width: 600px) and (max-width: 801px) {
    .grid-nav-top {
      grid-template-columns: 50% 50%;
      margin-left: 17%;
    }
  }

  /* DESKTOP */
  @media (min-width: 1024px) {
    .ml-title {
      display: flex;
      margin-left: 50%;
    }
    .grid-nav-top {
      grid-template-columns: 33.33% 33.33% 33.33%;
    }
  }
`;
