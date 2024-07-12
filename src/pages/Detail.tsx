import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

export default function Detail() {
  const { coinId } = useParams<RouteParams>();

  return <DetailWrap>coinId : {coinId}</DetailWrap>;
}

const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`; 
