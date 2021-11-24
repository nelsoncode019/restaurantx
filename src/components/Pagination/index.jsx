import React from "react";
import styled from "styled-components";

function Pagination() {
  return (
    <PaginationStyle>
      <div className="center">
        <div className="paginate-number active-number center">1</div>
        <div className="paginate-number center">2</div>
        <div className="paginate-number center">3</div>
        <div className="paginate-number center">4</div>
        <div className="paginate-number center">5</div>
        <div className="paginate-number center">...</div>
      </div>
    </PaginationStyle>
  );
}

export default Pagination;

const PaginationStyle = styled.div`
  .paginate-number {
    height: 30px;
    width: 30px;
    background: rgb(250, 128, 114);
    border-radius: 50%;
    margin-left: 10px;
    color: #ffffff;
    cursor: pointer;
    transform: 0.2s;
  }
  .active-number {
    background: rgb(230, 117, 104);
  }
  .paginate-number:hover {
    transform: 0.2s;
    background: rgb(230, 117, 104);
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
  }
`;
