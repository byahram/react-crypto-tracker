import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import Price from "../components/Price";
import { CoinDetailInterface, TickerInterface } from "../api/interface";
import { useQuery } from "react-query";
import { fetchCoinDetail, fetchTickerDetail } from "../api/api";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

export default function Detail() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  const [tab, setTab] = useState("chart");

  // react-query
  const { isLoading: infoLoading, data: infoData } = useQuery<CoinDetailInterface>(
    ["info", coinId],
    () => fetchCoinDetail(coinId)
  );

  // const { isLoading: tickersLoading, data: tickersData } = useQuery<TickerInterface>(
  //   ["tickers", coinId],
  //   () => fetchTickerDetail(coinId),
  //   {
  //     refetchInterval: 5000,
  //   }
  // );

  // const loading = infoLoading || tickersLoading;
  const loading = infoLoading;

  return <DetailWrap><Container>
  {/* <Helmet>
    <title>
      {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
    </title>
  </Helmet> */}
  <Header>
    <Title>{state ? state : loading ? "Loading..." : infoData?.name}</Title>
  </Header>
  {loading ? (
    <Loader>Loading...</Loader>
  ) : (
    <>
      <Overview>
        <OverviewItem>
          <span>Rank:</span>
          <span>{infoData?.rank}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Symbol:</span>
          <span>${infoData?.symbol}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Price:</span>
          {/* <span>${tickersData?.quotes?.USD?.price?.toFixed(3)}</span> */}
        </OverviewItem>
      </Overview>
      <Description>{infoData?.description}</Description>
      <Overview>
        <OverviewItem>
          <span>Total Supply:</span>
          {/* <span>{tickersData?.total_supply}</span> */}
        </OverviewItem>
        <OverviewItem>
          <span>Max Supply:</span>
          {/* <span>{tickersData?.max_supply}</span> */}
        </OverviewItem>
      </Overview>

      <Tabs>
        <Tab isActive={tab === "chart"} onClick={() => setTab("chart")}>
          Chart
        </Tab>
        <Tab isActive={tab === "price"} onClick={() => setTab("price")}>
          Price
        </Tab>
      </Tabs>
      {/* {tab === "chart" && <Chart coinId={coinId} isDark={isDark} />} */}
      {/* {tab === "chart" && <Chart coinId={coinId} />}
      {tab === "price" && <Price />} */}
    </>
  )}
</Container></DetailWrap>;
}

const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`; 

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
