import React from "react";
import styled from "styled-components";
import BoxComments from "../../components/BoxComments";
import TopComment from "../../components/TopComment";

function Reviews() {
  return (
    <ReviewsStyle>
      <div className="grid-review">
        <BoxComments />
        <TopComment />
        <br /><br />
      </div>
    </ReviewsStyle>
  );
}

export default Reviews;

const ReviewsStyle = styled.div`
  .grid-review {
    display: grid;
    gap: 1%;
    grid-template-columns: 75% 25%;
    margin-top: 2%;
    margin-left: 17%;
    margin-right: 2%;
  }

  /* MOBILE */
  @media (max-width: 480px) {
    .grid-review {
      grid-template-columns: 100%;
      margin-left: 1%;
    }
  }

  /* TABLET */
  @media (min-width: 500px) and (max-width: 1024px) {
    .grid-review {
      grid-template-columns: 50% 50%;
      margin-left: 13%;
    }
  }
`;
