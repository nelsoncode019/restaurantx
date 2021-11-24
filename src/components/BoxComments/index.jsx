import React from "react";
import styled from "styled-components";
import avatarImage from "../../../public/images/avatar1.jpg";
import starIcon from "../../../public/images/star.svg";
import Pagination from "../../components/Pagination";

function BoxComments() {
  return (
    <BoxCommentsStyle>
      <div className="box">
        <div className="header">
          <h2>Recents Comments</h2>
          <p>Here are the comments of all customers</p>
        </div>
        <br />
        {[1, 2, 3, 4, 5, 6, 7].map((value) => {
          return (
            <div className="grid-box-comments" key={value}>
              <div>
                <img src={avatarImage} alt="" className="img-avatar" />
              </div>
              <div>
                <h3>Nelson Mendez</h3>
                <p>
                  <i>Monday 24 June {new Date().getFullYear()}</i>
                </p>
                <br />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam necessitatibus ipsum fuga tenetur temporibus? Quod
                  doloribus quis officia repudiandae in minus repellendus
                  recusandae incidunt, aliquam corrupti sit iste deserunt velit.
                </p>
              </div>
              <div>
                <p className="rating-number">5</p>
                <div className="center">
                  <img src={starIcon} alt="" height="15px" width="15px" />
                  <img src={starIcon} alt="" height="15px" width="15px" />
                  <img src={starIcon} alt="" height="15px" width="15px" />
                  <img src={starIcon} alt="" height="15px" width="15px" />
                  <img src={starIcon} alt="" height="15px" width="15px" />
                </div>
              </div>
            </div>
          );
        })}
        <Pagination />
        <br />
      </div>
    </BoxCommentsStyle>
  );
}

export default BoxComments;

const BoxCommentsStyle = styled.div`
  .grid-box-comments {
    display: grid;
    grid-template-columns: 7% 77% 15%;
    padding: 10px;
  }
  .grid-box-comments:hover {
    background: var(--background-body);
  }
  .img-avatar {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  .box {
    background: var(--white);
    box-shadow: var(--shawdow);
  }
  .header {
    padding: 10px;
    background: linear-gradient(to left, #ff9472, #f2709c);
    color: var(--white);
  }
  .header,
  .box {
    -moz-border-radius: 10px;
    -khtml-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  .rating-number {
    font-size: 25px;
    font-weight: 900;
    text-align: center;
  }
  /* MOBILE AND TABLET */
  @media (max-width: 1025px) {
    .grid-box-comments {
      grid-template-columns: 100%;
      text-align: center;
    }
  }
`;
