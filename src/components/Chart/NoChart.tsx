import styled from "styled-components";

const NoChart = () => {
  return <Wrapper>No Chart Available</Wrapper>;
};

export default NoChart;

const Wrapper = styled.div`
  margin: 30px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;
