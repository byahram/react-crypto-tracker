import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { ChangeEventHandler } from "react";

interface SearchBar {
  keyword: string;
  handleKeyword: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({ keyword, handleKeyword }: SearchBar) => {
  return (
    <Wrapper>
      <IoSearchSharp size={20} />
      <Input
        type="text"
        placeholder="코인명 검색"
        value={keyword}
        onChange={handleKeyword}
      />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const Input = styled.input`
  width: 100px;
  padding: 0.4rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.cardBgColor};

  &::placeholder {
    color: ${(props) => props.theme.textColor};
  }
`;
