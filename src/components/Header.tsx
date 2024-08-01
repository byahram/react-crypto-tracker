import styled from "styled-components";
import { FaRegStar, FaStar, FaChevronLeft, FaSearch } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";

const Header = () => {
  let { params } = useParams();
  const { username } = useParams<{ name: string }>();
  console.log(username);

  // 현재 날짜
  const today = new Date();

  // 원하는 형식
  const formatted = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

  return (
    <HeaderWrap>
      <FaRegStar size={20} />
      <Title>
        <span>{formatted}</span> 코인 Top 100
      </Title>
      <FaSearch size={20} />
      {/* <SearchBar keyword={keyword} handleKeyword={handleKeyword} /> */}
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5rem 0;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`;
