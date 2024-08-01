import styled from "styled-components";
import { PriceInterface } from "../../api/interface";
import Row from "./Row";

interface PriceProps {
  data: PriceInterface;
}

function Price({ data }: PriceProps) {
  const quotesUSD = data.quotes.USD;

  return (
    <Container>
      <Wrapper>
        <Name>All Time High</Name>
        <Desc>
          {"(" + quotesUSD.ath_date.slice(0, 10).replaceAll("-", ". ") + ")"}
        </Desc>
        <Value>{"$" + quotesUSD.ath_price.toFixed(3)}</Value>
      </Wrapper>
      <Row name="From ATH" value={quotesUSD.percent_from_price_ath} />
      <Row name="15 minutes" value={quotesUSD.percent_change_15m} />
      <Row name="30 Minutes" value={quotesUSD.percent_change_30m} />
      <Row name="1 Hour" value={quotesUSD.percent_change_1h} />
      <Row name="6 Hours" value={quotesUSD.percent_change_6h} />
      <Row name="12 Hours" value={quotesUSD.percent_change_12h} />
      <Row name="24 Hours" value={quotesUSD.percent_change_24h} />
      <Row name="7 Days" value={quotesUSD.percent_change_7d} />
      <Row name="30 Days" value={quotesUSD.percent_change_30d} />
      <Row name="1 Year" value={quotesUSD.percent_change_1y} />
    </Container>
  );
}

export default Price;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.coinBgColor};
  border-radius: 8px;
`;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 600;
`;

const Name = styled.span``;

const Desc = styled.span`
  flex: 1;
  font-size: 13px;
  color: ${({ theme }) => theme.subTextColor};
  margin: 0 5px;
`;

const Value = styled.span``;
