import styled from "styled-components";

function Search() {
  return (
    <SearchStyle>
      <div className="center">
        <div className="search-wrapper">
          <input className="search-input" type="text" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="feather feather-search"
            viewBox="0 0 24 24"
          >
            <defs />
            <circle cx={11} cy={11} r={8} />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>
    </SearchStyle>
  );
}

export default Search;

const SearchStyle = styled.div`
  .search-wrapper {
    border-radius: 4px;
    padding-right: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--shawdow);
    overflow: hidden;
  }

  .search-input {
    border: none;
    outline: none;
    height: 100%;
    padding: 0 12px;
    font-size: 12px;
    width: 500px;
  }
  /* MOBILE */
  @media (max-width: 480px) {
    .search-wrapper {
      display: none;
    }
  }
`;
