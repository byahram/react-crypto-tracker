/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchPrices } from "../api/api";
import { PriceInterface } from "../api/interface";
import CoinRow from "../components/CoinRow";
import SearchBar from "../components/SearchBar";
import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const ColGroup = () => {
  return (
    <colgroup>
      <col width="5%" />
      <col width="10%" />
      <col width="40%" />
      <col width="15%" />
      <col width="15%" />
      <col width="15%" />
    </colgroup>
  );
};

export default function Main() {
  // 현재 날짜
  const today = new Date();

  // 원하는 형식
  const formatted = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

  // search
  const [keyword, setKeyword] = useState("");
  const handleKeyword = (e: React.FormEvent<HTMLSelectElement>) => {
    setKeyword(e.target as any);
  };

  // react-query : list
  const { isLoading, data } = useQuery<PriceInterface[]>(
    "allPrices",
    fetchPrices
  );

  return (
    <MainContainer>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <HeaderWrap>
            <LikedBtn size={20} />
            <Title>
              <p>{formatted}</p>
              <h2>코인 Top 100</h2>
            </Title>
            <SearchBar keyword={keyword} handleKeyword={handleKeyword} />
          </HeaderWrap>
          <CoinTableWrap>
            <HeadTable>
              <ColGroup />
              <thead>
                <tr>
                  <th>관심</th>
                  <th>순위</th>
                  <th>코인명</th>
                  <th>현재가</th>
                  <th>변동률(24h)</th>
                  <th>거래대금</th>
                </tr>
              </thead>
            </HeadTable>
            <BodyTableWrap>
              <BodyTable>
                <ColGroup />
                <tbody>
                  {data?.map((coin) => (
                    <CoinRow coin={coin} />
                  ))}
                </tbody>
              </BodyTable>
            </BodyTableWrap>
          </CoinTableWrap>
        </>
      )}
    </MainContainer>
  );
}

const LikedBtn = styled(FaRegStar)`
  cursor: pointer;
`;

const HeaderWrap = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5rem 0;
`;

const Title = styled.div`
  font-weight: 600;

  p {
    font-size: 1rem;
    text-align: center;
    color: #535353;
    margin-bottom: 4px;
  }

  h2 {
    font-size: 1.8rem;
  }
`;

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 100px);
`;

const CoinTableWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  gap: 2rem;
  padding: 2rem;
`;

const HeadTable = styled.table`
  font-weight: 700;
`;

const BodyTableWrap = styled.div`
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme.bgColor};
  }
`;

const BodyTable = styled.table`
  width: 100%;
`;
