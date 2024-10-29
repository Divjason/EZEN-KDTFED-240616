import React, { useState, useEffect } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.header`
  font-size: 32px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Overview = styled.div`
  width: 600px;
  color: ${(props) => props.theme.bgColor};
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  background: ${(props) => props.theme.textColor};
  border-radius: 8px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Description = styled.div`
  width: 600px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  background: ${(props) => props.theme.accentColor};
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LocationState;
  const { coinId } = useParams<RouterParams | any>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state ? state : loading ? "Loading..." : info?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : </span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol : </span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source : </span>
              <span>{info?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            🌈Information of {info?.type} type : Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi soluta, nesciunt quasi iste
            molestiae consequuntur, sit possimus in voluptatem quam sed, ullam
            aperiam? Voluptatibus quasi recusandae beatae modi nam sequi! Sunt,
            dicta quasi harum magnam nemo ratione! Vel minus autem neque quia
            repellendus placeat voluptates voluptatem? Incidunt accusantium vero
            esse voluptatibus consectetur inventore, minima magni praesentium
            optio iure omnis vitae?
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply : </span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;
