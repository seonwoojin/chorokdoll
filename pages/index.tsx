import Header from "@components/layout/Header";
import WithHead from "@libs/client/WithHead";
import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  padding-top: 50vh;
  height: 200vh;
`;

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container></Container>
    </>
  );
};

export default Home;
