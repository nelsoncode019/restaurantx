import React from "react";
import styled from "styled-components";
import Pagination from "../Pagination";

function TableCustomers() {
  return (
    <TableCustomerStyle>
      <div className="scroll-table">
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Last Order</th>
              <th>Registration Date</th>
            </tr>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((value) => {
              return (
                <tr key={value}>
                  <td data-th="ID">686868686</td>
                  <td data-th="Name">Nelson Mendez</td>
                  <td data-th="Location">49 Avenida Sur, San Salvador</td>
                  <td data-th="Email">nelson@gmail.com</td>
                  <td data-th="Total to Pay">$ 20 USD</td>
                  <td data-th="Date">
                    26 March {new Date().getFullYear()}, 10:00 AM
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <Pagination />
    </TableCustomerStyle>
  );
}

export default TableCustomers;

const TableCustomerStyle = styled.div`
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 20px;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }

  tr,
  td {
    min-width: 200px;
  }

  tr {
    cursor: pointer;
  }

  tr:hover {
    transition: 0.3s;
    background: var(--background-body);
  }

  .rwd-table {
    width: 100%;
    background: white;
    border-radius: 0.4em;
    font-size: 14px;
    box-shadow: var(--shawdow);
  }

  .rwd-table th {
    color: black;
    background: #f8f8f8;
  }
  .rwd-table {
    margin: 1em 0;
    min-width: 81%;
    padding: 5px;
  }

  /* SCROLL TABLE */
  .scroll-table {
    overflow: scroll;
    overflow-y: hidden;
    transition: 1s;
    margin-left: 17%;
    margin-right: 2%;
  }
  .scroll-table::-webkit-scrollbar {
    width: 5px;
  }
  /* Handle */
  .scroll-table::-webkit-scrollbar-thumb {
    background: var(--lightyellow);
  }
  /* MOBILE */
  @media (max-width: 1025px) {
    .scroll-table {
      margin-left: 2%;
    }
  }
  /* TABLET */
  @media (min-width: 500px) and (max-width: 1024px) {
    .scroll-table {
      margin-left: 13%;
    }
  }
`;
