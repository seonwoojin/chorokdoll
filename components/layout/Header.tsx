import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  a {
    color: #191f28;
  }
  .logo {
    display: flex;
    flex-direction: column;
    font-size: 36px;
    gap: 10px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 160px;
  padding: 30px 0px 30px 0px;
`;

const HeaderItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 100%;
  background-color: white;
  a {
    width: 100%;
    height: 100%;
  }
`;

const HeaderItem = styled.div<{ hover: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${(props) => (props.hover === "true" ? "24px" : "20px")};
  color: ${(props) => (props.hover === "true" ? "black" : "inherit")};
  font-weight: 600;
  transition: all 0.2s linear;
`;

const HeaderDetail = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  padding: 0 30% 0 30%;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  animation: fadein 1s;
`;

const HeaderDetailText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  font-size: 18px;
`;

export default function Header() {
  const [hover, setHover] = useState(0);
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link href={"/"}>
          <div className="logo">
            <span>정문영의</span>
            <span>초록인형</span>
          </div>
        </Link>
        <HeaderItemContainer>
          <Link href={"/"}>
            <HeaderItem
              hover={(hover === 1).toString()}
              onMouseEnter={() => setHover(1)}
            >
              작가
            </HeaderItem>
          </Link>
          <Link href={"/"}>
            <HeaderItem
              hover={(hover === 2).toString()}
              onMouseEnter={() => setHover(2)}
            >
              초록인형
            </HeaderItem>
          </Link>
          <Link href={"/"}>
            <HeaderItem
              hover={(hover === 3).toString()}
              onMouseEnter={() => setHover(3)}
            >
              수상경력
            </HeaderItem>
          </Link>
          <Link href={"/"}>
            <HeaderItem
              hover={(hover === 4).toString()}
              onMouseEnter={() => setHover(4)}
            >
              전시회
            </HeaderItem>
          </Link>
          <Link href={"/"}>
            <HeaderItem
              hover={(hover === 5).toString()}
              onMouseEnter={() => setHover(5)}
            >
              갤러리
            </HeaderItem>
          </Link>
          <Link href={"/"}>
            <HeaderItem
              hover={(hover === 6).toString()}
              onMouseEnter={() => setHover(6)}
            >
              방송 및 언론
            </HeaderItem>
          </Link>
        </HeaderItemContainer>
      </HeaderContainer>
      {hover === 1 ? (
        <HeaderDetail onMouseLeave={() => setHover(0)}>
          <HeaderDetailText>
            <Link href={"/"}>소개글</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>활동 연혁</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>저서</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>한국화</Link>
          </HeaderDetailText>
        </HeaderDetail>
      ) : null}
      {hover === 2 ? (
        <HeaderDetail onMouseLeave={() => setHover(0)}>
          <HeaderDetailText>
            <Link href={"/"}>초록인형이란?</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>인형 평론</Link>
          </HeaderDetailText>
        </HeaderDetail>
      ) : null}
      {hover === 3 ? (
        <HeaderDetail onMouseLeave={() => setHover(0)}>
          <HeaderDetailText>
            <Link href={"/"}>국내 수상</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>해외 수상</Link>
          </HeaderDetailText>
        </HeaderDetail>
      ) : null}
      {hover === 4 ? (
        <HeaderDetail onMouseLeave={() => setHover(0)}>
          <HeaderDetailText>
            <Link href={"/"}>국내 전시</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>해외 전시</Link>
          </HeaderDetailText>
        </HeaderDetail>
      ) : null}
      {hover === 5 ? (
        <HeaderDetail onMouseLeave={() => setHover(0)}>
          <HeaderDetailText>
            <Link href={"/"}>2003~2007</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>2001~2002</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>1999 이후의 초기작</Link>
          </HeaderDetailText>
        </HeaderDetail>
      ) : null}
      {hover === 6 ? (
        <HeaderDetail onMouseLeave={() => setHover(0)}>
          <HeaderDetailText>
            <Link href={"/"}>국내 매체</Link>
          </HeaderDetailText>
          <HeaderDetailText>
            <Link href={"/"}>해외 매체</Link>
          </HeaderDetailText>
        </HeaderDetail>
      ) : null}
    </HeaderWrapper>
  );
}
