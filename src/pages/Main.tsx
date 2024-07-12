/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchTickers } from "../api/api";
import { TickerInterface } from "../api/interface";
import CoinRow from "../components/CoinRow";
// import SearchBar from "../components/SearchBar";
// import React, { useState } from "react";

const ColGroup = () => {
  return (
    <colgroup>
      <col width="5%" />
      <col width="8%" />
      <col width="37%" />
      <col width="20%" />
      <col width="15%" />
      <col width="20%" />
    </colgroup>
  );
};

export default function Main() {
  // search
  // const [keyword, setKeyword] = useState("");
  // const handleKeyword = (event: React.FormEvent<HTMLSelectElement>) => {
  //   setKeyword(event.target.value as any);
  // };

  const { isLoading, data } = useQuery<TickerInterface[]>(
    "allTickers",
    fetchTickers
  );

  return (
    <MainContainer>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <CoinHeaderWrap>
            <Title>코인 Top 100</Title>
            {/* <SearchBar keyword={keyword} handleKeyword={handleKeyword} /> */}
          </CoinHeaderWrap>
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

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CoinHeaderWrap = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 5rem 0;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`;

const CoinTableWrap = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 8rem);
  height: calc(100% - 200px);
  gap: 2rem;
  padding: 3rem 4rem;
`;

const HeadTable = styled.table`
  font-weight: 700;
`;

const BodyTableWrap = styled.div`
  overflow-y: auto;
  flex: 1;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #ddd;
  }
`;

const BodyTable = styled.table`
  width: 100%;
`;
