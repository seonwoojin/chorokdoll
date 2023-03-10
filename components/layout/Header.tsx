import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  background-color: white;
  z-index: 99;
  a {
    color: #191f28;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 36px;
    gap: 10px;
  }
`;

const HeaderContainer = styled(motion.div)`
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
  width: 80%;
  height: 100%;
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

const HeaderDetail = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  padding: 0 30% 0 30%;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
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
  const [show, setShow] = useState(true);
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > scroll) {
      setShow(false);
    } else if (latest < scroll) {
      setShow(true);
    }
    setScroll(latest);
  });
  return (
    <HeaderWrapper onMouseLeave={() => setHover(0)}>
      <AnimatePresence>
        {show ? (
          <HeaderContainer
            initial={{ opacity: 1, y: -100 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          >
            <Link href={"/"}>
              <div className="logo">
                <span>????????????</span>
                <span>?????????????????????</span>
              </div>
            </Link>
            <HeaderItemContainer>
              <Link href={"/"}>
                <HeaderItem
                  hover={(hover === 1).toString()}
                  onMouseEnter={() => setHover(1)}
                >
                  ??????
                </HeaderItem>
              </Link>
              <Link href={"/"}>
                <HeaderItem
                  hover={(hover === 2).toString()}
                  onMouseEnter={() => setHover(2)}
                >
                  ????????????
                </HeaderItem>
              </Link>
              <Link href={"/"}>
                <HeaderItem
                  hover={(hover === 3).toString()}
                  onMouseEnter={() => setHover(3)}
                >
                  ????????????
                </HeaderItem>
              </Link>
              <Link href={"/"}>
                <HeaderItem
                  hover={(hover === 4).toString()}
                  onMouseEnter={() => setHover(4)}
                >
                  ?????????
                </HeaderItem>
              </Link>
              <Link href={"/"}>
                <HeaderItem
                  hover={(hover === 5).toString()}
                  onMouseEnter={() => setHover(5)}
                >
                  ?????????
                </HeaderItem>
              </Link>
              <Link href={"/"}>
                <HeaderItem
                  hover={(hover === 6).toString()}
                  onMouseEnter={() => setHover(6)}
                >
                  ?????? ??? ??????
                </HeaderItem>
              </Link>
            </HeaderItemContainer>
          </HeaderContainer>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {hover === 1 ? (
          <HeaderDetail
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            onMouseLeave={() => setHover(0)}
          >
            <HeaderDetailText>
              <Link href={"/"}>?????????</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>?????? ??????</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>??????</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>?????????</Link>
            </HeaderDetailText>
          </HeaderDetail>
        ) : null}
        {hover === 2 ? (
          <HeaderDetail
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            onMouseLeave={() => setHover(0)}
          >
            <HeaderDetailText>
              <Link href={"/"}>???????????????????</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>?????? ??????</Link>
            </HeaderDetailText>
          </HeaderDetail>
        ) : null}
        {hover === 3 ? (
          <HeaderDetail
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            onMouseLeave={() => setHover(0)}
          >
            <HeaderDetailText>
              <Link href={"/"}>?????? ??????</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>?????? ??????</Link>
            </HeaderDetailText>
          </HeaderDetail>
        ) : null}
        {hover === 4 ? (
          <HeaderDetail
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            onMouseLeave={() => setHover(0)}
          >
            <HeaderDetailText>
              <Link href={"/"}>?????? ??????</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>?????? ??????</Link>
            </HeaderDetailText>
          </HeaderDetail>
        ) : null}
        {hover === 5 ? (
          <HeaderDetail
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            onMouseLeave={() => setHover(0)}
          >
            <HeaderDetailText>
              <Link href={"/"}>2003~2007</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>2001~2002</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>1999 ????????? ?????????</Link>
            </HeaderDetailText>
          </HeaderDetail>
        ) : null}
        {hover === 6 ? (
          <HeaderDetail
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            onMouseLeave={() => setHover(0)}
          >
            <HeaderDetailText>
              <Link href={"/"}>?????? ??????</Link>
            </HeaderDetailText>
            <HeaderDetailText>
              <Link href={"/"}>?????? ??????</Link>
            </HeaderDetailText>
          </HeaderDetail>
        ) : null}
      </AnimatePresence>
    </HeaderWrapper>
  );
}
