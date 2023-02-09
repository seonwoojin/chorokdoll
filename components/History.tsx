import { motion, useScroll, Variants } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const HistoryWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 5% 0 5%;
  margin-bottom: 50px;
  background-color: white;
  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  h2 {
    display: flex;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 10px;
    width: 45%;
  }
  :nth-child(odd) {
    align-items: flex-end;
    h2 {
      justify-content: flex-end;
    }
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function History({ children }: LayoutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  return (
    <HistoryWrapper
      ref={ref}
      style={{
        opacity: scrollYProgress,
        transformOrigin: "top",
        transitionDuration: "1s",
      }}
    >
      {children}
    </HistoryWrapper>
  );
}
