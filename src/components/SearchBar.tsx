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
      <IoSearchSharp size={25} />
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
  width: 200px;
  padding: 0.4rem 1.2rem;
  border-radius: 1rem;
  background-color: #f1f3f5;

  &::placeholder {
    color: #adb5bd;
  }
`;
