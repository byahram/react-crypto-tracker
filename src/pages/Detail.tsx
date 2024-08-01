import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart/Chart";
import Price from "../components/Price/Price";
import {
  ChartHistoricalInterface,
  CoinDetailInterface,
  PriceInterface,
} from "../api/interface";
import { useQuery } from "react-query";
import {
  fetchCoinDetail,
  fetchCoinHistory,
  fetchPriceDetail,
} from "../api/api";
import { FaRegStar, FaStar, FaChevronLeft } from "react-icons/fa";
import NoChart from "../components/Chart/NoChart";

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

  // react-query : info
  const { isLoading: infoLoading, data: infoData } =
    useQuery<CoinDetailInterface>(["info", coinId], () =>
      fetchCoinDetail(coinId!)
    );

  // react-query : price
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceInterface>(
    ["price", coinId],
    () => fetchPriceDetail(coinId!)
  );

  // react-query : chart
  const {
    isLoading: chartLoading,
    data: chartData,
    isError,
  } = useQuery<ChartHistoricalInterface[]>({
    queryKey: ["chart", coinId],
    queryFn: () => fetchCoinHistory(coinId!),
    select: (data) => data.filter((_, index) => index > 5 && index < 20),
    retry: 1,
  });

  const loading = infoLoading || priceLoading || chartLoading;

  // go back to main
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <DetailWrap>
      <Container>
        <HeaderWrap>
          <BackBtn size={20} onClick={handleBack} />
          <Title>
            {state ? state : loading ? "Loading..." : infoData?.name}
          </Title>
          <LikedBtn size={20} />
        </HeaderWrap>
        {loading ? (
          <Loader></Loader>
        ) : (
          <ContWrap>
            <OverviewWrap>
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
                  <span>${priceData?.quotes?.USD?.price?.toFixed(3)}</span>
                </OverviewItem>
              </Overview>
              <Description>{infoData?.description}</Description>
              <Overview>
                <OverviewItem>
                  <span>Total Supply:</span>
                  <span>{priceData?.total_supply}</span>
                </OverviewItem>
                <OverviewItem>
                  <span>Max Supply:</span>
                  <span>{priceData?.max_supply}</span>
                </OverviewItem>
              </Overview>
            </OverviewWrap>

            <TabsWrap>
              <Tabs>
                <Tab isActive={tab === "chart"} onClick={() => setTab("chart")}>
                  Chart
                </Tab>
                <Tab isActive={tab === "price"} onClick={() => setTab("price")}>
                  Price
                </Tab>
              </Tabs>
              {tab === "chart" && isError && <NoChart />}
              {tab === "chart" && !isError && <Chart data={chartData!} />}
              {tab === "price" && <Price data={priceData!} />}
            </TabsWrap>
          </ContWrap>
        )}
      </Container>
    </DetailWrap>
  );
}

const BackBtn = styled(FaChevronLeft)`
  cursor: pointer;
`;

const LikedBtn = styled(FaRegStar)`
  cursor: pointer;
`;

const Tab = styled.span<{ isActive: boolean }>`
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  padding: 7px 20px;
  background-color: ${(props) => (props.isActive ? `rgba(0, 0, 0, 0.2)` : "")};
  border-radius: 10px;
  color: ${(props) => (props.isActive ? props.theme.textColor : "")};

  a {
    display: block;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 0 25px 0;
  gap: 10px;
`;

const Description = styled.p`
  margin: 20px 0px 40px;
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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewWrap = styled.div`
  flex: 0.8;
`;

const TabsWrap = styled.div`
  flex: 1;
`;

const ContWrap = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  height: calc(100% - 100px);
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

const HeaderWrap = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5rem 0;
`;

const Container = styled.div`
  margin: 0 auto;
`;

const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
`;
