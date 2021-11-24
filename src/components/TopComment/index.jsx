import React from "react";
import styled from "styled-components";
import avatarImage from "../../../public/images/avatar1.jpg";
import starIcon from "../../../public/images/star-white.svg";

function TopComment() {
  return (
    <TopCommentStyle>
      <div className="box-top">
        <h2>Top Comment</h2>
        <br />
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            necessitatibus ipsum fuga tenetur temporibus? Quod doloribus quis
            officia repudiandae in minus repellendus recusandae incidunt,
            aliquam corrupti sit iste deserunt velit.
          </p>
        </div>
        <br />
        <div className="center background-gradient">
          <img src={starIcon} alt="" height="20px" width="20px" />
          <img src={starIcon} alt="" height="20px" width="20px" />
          <img src={starIcon} alt="" height="20px" width="20px" />
          <img src={starIcon} alt="" height="20px" width="20px" />
          <img src={starIcon} alt="" height="20px" width="20px" />
        </div>
      </div>
    </TopCommentStyle>
  );
}

export default TopComment;

const TopCommentStyle = styled.div`
  .box-top {
    background: var(--white);
    box-shadow: var(--shawdow);
    text-align: center;
  }
  .img-avatar {
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  .background-gradient {
    padding: 20px;
    background: linear-gradient(to left, #ff9472, #f2709c);
  }
  .box-top,
  .background-gradient {
    -moz-border-radius: 10px;
    -khtml-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
`;
