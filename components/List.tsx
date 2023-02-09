import { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";

const AwardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 200px;
`;

const Award = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 80%;
  height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  :last-child {
    border-bottom: 3px solid rgba(0, 0, 0, 0.6);
  }
  div {
    display: flex;
    align-items: center;
    :first-child {
      justify-content: center;
      width: 20%;
      font-size: 14px;
      font-weight: 600;
    }
    :nth-child(2) {
      width: 50%;
      font-size: 18px;
    }
    :last-child {
      justify-content: center;
      width: 30%;
      font-size: 14px;
    }
  }
`;

interface Props {
  datas: {
    date: string;
    description: string;
    place: string;
  }[];
  isLong?: boolean;
}

interface ItemProps {
  data: { date: string; description: string; place: string };
}

const Item = ({ data }: ItemProps) => {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  return (
    <Award
      ref={ref}
      style={{
        opacity: scrollYProgress,
        transformOrigin: "top",
      }}
    >
      <div>{data.date}</div>
      <div>{data.description}</div>
      <div>{data.place}</div>
    </Award>
  );
};

export default function List({ datas, isLong = false }: Props) {
  return (
    <AwardList>
      {datas.map((data, index) => (
        <Item key={index} data={data} />
      ))}
    </AwardList>
  );
}
