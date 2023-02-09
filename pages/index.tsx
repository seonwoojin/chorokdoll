import WithHead from "@libs/client/WithHead";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";
import History from "@components/History";
import List from "@components/List";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  padding-top: 300px;
  height: auto;
`;

const ContextWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: 80%;
  height: auto;
  margin-bottom: 300px;
  background-color: rgba(0, 0, 0, 0.6);
  gap: 1px;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 5% 0 5%;
    background-color: white;
    :first-child {
    }
    h1 {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 40px;
    }
    h2 {
      font-size: 12px;
    }
    p {
      font-size: 16px;
      margin-bottom: 20px;
      line-height: 20px;
    }
    img {
      position: absolute;
      right: 10%;
      bottom: -10%;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 75%;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const HistoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: auto;
  margin-bottom: 350px;
`;

const ScrollBar = styled(motion.div)`
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0%;
  left: 50%;
  z-index: 60;
`;

const Intestine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: auto;
  margin-bottom: 200px;
  div {
    margin-left: 30px;
  }
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 24px;
  }
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: auto;
  margin-bottom: 200px;
  div {
    margin-top: 20px;
    width: 60%;
    h1 {
      font-size: 24px;
      margin-bottom: 30px;
    }
    h2 {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

const career: { date: string; description: string; place: string }[] = [
  {
    date: "2004년 5월",
    description: "2004 MAX-OSCAR-ARNORD 예술상 최고 청소년 표현 인형상",
    place: "독일의 Neustadt bei Coburg 시청홀",
  },
  {
    date: "2004년 5월",
    description: "2004 MAX-OSCAR-ARNORD 예술상 최고 미니어쳐 인형상",
    place: "독일의 Neustadt bei Coburg 시청홀",
  },
  {
    date: "2004년 11월",
    description: "제 24회 한국미술문화대상전 입선",
    place: "",
  },
  {
    date: "2005년 5월",
    description: "'제 2회 이탈리아 테디베어와 아티스트인형 콘테스트'중 1등상",
    place: "이탈리아 노벨라나지역의 Rocca dei Gonzaga 캐슬",
  },
  {
    date: "2005년 6월",
    description: "제 26회 대한민국현대미술대상전에서 입선",
    place: "",
  },
  {
    date: "2006년 5월",
    description: "2006 MAX-OSCAR-ARNORD 예술상 최고작품상",
    place: "독일의 Neustadt bei Coburg 시청홀",
  },
];

const broad: { date: string; description: string; place: string }[] = [
  {
    date: "2002년 7월",
    description: "중앙 M&B의 The Style 8월호",
    place: "",
  },
  {
    date: "2002년 12월",
    description: "인형전문잡지 Dolls 웹진에 전시회 소개",
    place: "",
  },
  {
    date: "2003년 1월 23일",
    description: "전남일보에 초록인형소개와 전시회 소개  ",
    place: "",
  },
  {
    date: "2003년 1월 25일",
    description: "케이블 방송 웹앤티비의 지역 뉴스  방송",
    place: "",
  },
  {
    date: "2003년 1월 25일",
    description: "KBC 오전 7시 뉴스 초록인형전시회 방송",
    place: "",
  },
  {
    date: "2003년 1월 28일",
    description: "KBS 1R 오후 4시 '라디오는 내친구'에 취재방송",
    place: "",
  },
  {
    date: "2003년 2월3일",
    description: "경향신문 35면 기사",
    place: "",
  },
  {
    date: "2003년 3월",
    description: "인형전문잡지 Dolls 헝겊인형특집호 제 6호",
    place: "",
  },
  {
    date: "2003년 3월",
    description: "생활성서사에서의 인터뷰 기사, 5월호에 표지모델",
    place: "",
  },
  {
    date: "2003년 4월",
    description: "인형전문잡지 DOLLS 메일진에 초록인형평론",
    place: "",
  },
  {
    date: "2003년 11월",
    description: "월간일러스트 2월호 헝겊인형부분에 초록인형 취재기사",
    place: "",
  },
  {
    date: "2004년 2월",
    description: "오마이뉴스에 초록인형소개",
    place: "",
  },
  {
    date: "2004년 3월",
    description: "인천일보에 초록인형책 소개",
    place: "",
  },
  {
    date: "2005년 7월",
    description: `KBS 1TV 'TV문화지대 디지털미술관'에 방영 "인형 길을 나서다"`,
    place: "",
  },
  {
    date: "2006년 6월",
    description:
      "여약사 신문 제307호 2006년 6월 12일자'희망인터뷰' 코너에 초록인형 기사",
    place: "",
  },
  {
    date: "2006년 12월",
    description: "서울경제신문에 수제작 초록인형소개",
    place: "",
  },
  {
    date: "2007년 12월",
    description: "[리빙앤 조이]인형에 담긴 사연들에 초록인형'오리엔'소개",
    place: "",
  },
  {
    date: "2007년 12월",
    description: "세계인형대축제중에 각종 온라인 오프라인 각종 일간지에 소개",
    place: "",
  },
  {
    date: "2007년 12월",
    description: "MBC아침영상에 '아름다운 우리인형'으로 전시중인 초록인형 소개",
    place: "",
  },
  {
    date: "2008년 2월",
    description:
      "월간조선에서 발행하는 잡지'TOP class'안의 'Sucess디렉토리내에 '초록인형창안한 정문영씨'기사",
    place: "",
  },
  {
    date: "2008년 3월",
    description: "데일리팜이라는 의약신문 인물코너에 인터뷰 소개",
    place: "",
  },
  {
    date: "2008년 4월",
    description: "KBS 라디오 '나의 삶 나의 보람' 출연",
    place: "",
  },
];

const broadOver: { date: string; description: string; place: string }[] = [
  {
    date: "2004년 8월",
    description: "독일인형잡지 'Dollami' 8월호",
    place: "",
  },
  {
    date: "2004년 8월",
    description: "독일인형잡지 'Puppen marchen' 8월호",
    place: "",
  },
  {
    date: "2004년 12월",
    description: "미국인형잡지 'DOLLS' Holiday호",
    place: "",
  },
  {
    date: "2005년 10월",
    description: "중국CRAFT사이트에 정문영작가, 초록인형 소개 ",
    place: "",
  },
  {
    date: "2006년 3월",
    description: "중국craft잡지 'KAKA' 3월호 인터뷰기사 ",
    place: "",
  },
  {
    date: "2006년 8월",
    description: "독일'Dollami' 8월호",
    place: "",
  },
  {
    date: "2006년 8월",
    description: "독일인형잡지 'Puppen marchen' 8월호",
    place: "",
  },
  {
    date: "2007년 5월",
    description:
      "독일에서의 '한국인형예술전'전시일정을 소개한 초록인형화보(독일 각종 여러 잡지 및 언론 매체에 소개)",
    place: "",
  },
  {
    date: "2008년 2월",
    description: "독일Ciesliks Puppenmagazin에 portrait 인터뷰기사",
    place: "",
  },
  {
    date: "2008년 5월",
    description:
      "독일의 각종 언론매체에 소개된 Spielzeug Museum 전시관련 기사에 초록인형 소개",
    place: "",
  },
];

const agency: { date: string; description: string; place: string }[] = [
  {
    date: "2002년 8월",
    description: "서령창작의 로고인형 제작, 전시",
    place: "",
  },
  {
    date: "2003년 1월",
    description: "제1회 개인전 ‘초록인형이야기’",
    place: "롯데백화점 갤러리",
  },
  {
    date: "2003년 7월",
    description:
      "인형전문잡지 Dolls주최 ‘제1회 한국 현대인형 신인작가전’ 에 심사위원 및 초청작가로 초대전시",
    place: "",
  },
  {
    date: "2003년 8월",
    description: "서령창작의 새 로고인형 제작",
    place: "명동 아바타 매장",
  },
  {
    date: "2004년 5월",
    description:
      "13th Internationales Puppen Festival행사중 Max Oscar Arnord 예술상에 노미네이트 및 두개부문에서 수상, 전시",
    place: "독일의 Neustadt b. Coburg시 주최",
  },
  {
    date: "2004년 6월",
    description: "리마쇼에 (주)오콘의 캐릭인형제작 전시",
    place: "미국 뉴욕",
  },
  {
    date: "2004년 10월",
    description: "바늘쌈지 4인작가전 NEEDLE's PARTY",
    place: "",
  },
  {
    date: "2004년 11월",
    description: "제24회 한국미술문화대상전 전시",
    place: "",
  },
  {
    date: "2004년 11월",
    description: "제3회 테디베어컨벤션&페스티벌 참가 전시",
    place: "",
  },
  {
    date: "2005년 1월",
    description: "제5회 토이페어전 참가 전시",
    place: "",
  },
  {
    date: "2005년 2월",
    description: "와와페스티벌 참가 전시",
    place: "",
  },
  {
    date: "2005년 5월",
    description:
      "14th Internationales Puppen Festival행사중 Max Oscar Arnord예술상 콘테스트 기존수상작가카테고리에서 노미네이트, 전시",
    place: "독일의 Neustadt b. Coburg시 주최",
  },
  {
    date: "2005년 5월 11일~17일",
    description: "박은혜 돌하우스전시에 미니초록인형 제공전시",
    place: "",
  },
  {
    date: "2005년 5월",
    description:
      "'제 2회 이탈리아 테디베어와 아티스트인형콘테스트'에 참가, 인형부문 기타재료카테고리에서 1등상 수상작품으로 전시",
    place: "이탈리아 노벨라나지역의 Rocca dei Gonzaga 캐슬",
  },
  {
    date: "2005년 6월",
    description: "제 26회 대한민국현대미술전 전시",
    place: "",
  },
  {
    date: "2005년 9월",
    description: "청주국제 공예비엔날레 초대전시",
    place: "",
  },
  {
    date: "2006년 5월",
    description:
      "15th Internationales Puppen Festival행사중 Max Oscar Arnord 예술상에서 기존수상작가카테고리에서 최고작품상 수상, 전시",
    place: "독일의 Neustadt b. Coburg시 주최",
  },
  {
    date: "2006년 12월",
    description: "세계인형대축제 후원단체로 참가 전시",
    place: "",
  },
  {
    date: "2007년 5월~8월",
    description: "'한국인형예술전' 초청전시",
    place: "독일의 Spielzeug Museum(Neustadt b. Coburg소재) 주최",
  },
  {
    date: "2007년 12월",
    description:
      "제2회 세계인형대축제 후원단체로 참가하여 특별전시 작가존에서 전시",
    place: "",
  },
  {
    date: "2008년 5월",
    description: "박물관특별전에 (테마:여자의 방) 3작품 초대 전시 ",
    place: "독일의 Spielzeug Museum(Neustadt b. Coburg소재)주최",
  },
  {
    date: "2008년 11월",
    description: "두번째 바늘쌈지 4인작가전 NEEDLE's PARTY",
    place: "",
  },
  {
    date: "2008년 12월",
    description: "2008 서울인형전시회 후원 참가",
    place: "",
  },
];

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {});

  return (
    <Container>
      <ContextWrapper>
        <div>
          <h1>안녕하세요?</h1>
          <p>
            초록인형을 만든 정문영입니다. 제 삶에 우연히 찾아온 이 헝겊몸뚱이의
            인형의 존재가 어느새 제 삶에서 초록인형이란 이름으로 크게 자리
            잡았습니다. 제가 살아오면서 가장 고립되고 외부와 단절된 생활을 하게
            된 때 제 삶에 새로운 의욕을 준 이 인형만들기는 그 때 이후 제 모든
            생활방식이 되어오고 있습니다.
          </p>
          <p>
            초록인형이라는 존재감을 갖기 전까지는 누구도 거들떠 보지 않는 작은
            존재인 헝겊이 그 시발점이고 또 그 안에 표정과 이야기 등 사람들과
            공감할 무언가를 담을 수 있는 특별함을 만들 수 있다는 것은 작가로서는
            아주 큰 보람입니다.
          </p>
          <p>
            제가 처음 인형을 시작하고 만들던 때, 처음인형은 아주 단순한
            컨트리인형이었습니다. 미리 선행되어 제작된 아무런 표본없이, 제시된
            방법도 없이, 갖춰진 재료없이 시작된 인형제작은 빈번한 실패와
            시행착오를 주었고 그렇게 새로운 가능성을 찾는 작업들로 초록인형을
            성장시켜 왔습니다. 인터넷 홈페이지를 통해 그 과정들을 함께 해준 많은
            회원님들의 격려와 조언의 글, 칭찬과 평가의 글, 때로는 이견이지만 그
            관심어린 질타들은 또한 초록인형의 성장의 큰 원동력이 되었습니다.
          </p>
        </div>
        <div>
          <p>
            저는 이제 겨우 올해 햇수로 인형을 만든지 10년째 10살짜리
            인형작가입니다. 그런데 그간 10살도 안된 인형작가가 만든 초록인형이
            국제대회에서 여러차례 큰 상을 받으면서 20~30년 이상의 오랜 경력을
            가진 해외작가들과 함께 교류하게 되었습니다. 부족한 부분도 많고
            앞으로 겪을 일들도 많을것이지만 인형제작은 언제나 즐거운 작업이어야
            한다는 원칙을 제가 가지고 있는 한, 인형과 함께 하는 시간은 행복할
            것입니다.
          </p>
          <p>
            여러 기회를 통해 앞으로도 끊임없는 시도와 다양한 모습들의 초록인형을
            즐겁게 지켜봐주시고 응원해 주시길 부탁드립니다.
          </p>
          <h2>2008년 어느 봄날에</h2>
          <Image src={"/images/jmy.jpg"} width={200} height={248} alt="" />
        </div>
      </ContextWrapper>
      <Title>활동 연혁</Title>
      <HistoryWrapper>
        <ScrollBar
          ref={ref}
          style={{
            scaleY: scrollYProgress,
            transformOrigin: "top",
          }}
        />
        <History>
          <h1>Start</h1>
          <h2>1999년 인형제작시작</h2>
          <h2>2000년 3월14일 인터넷 홈페이지 오픈</h2>
        </History>
        <History>
          <h1>초록인형 창안</h1>
          <h2>
            2002년 10월 당시 특허출원시 바늘조각기법의 인형을 '초록인형'
            명명,소개 (후에 출원은 포기, 초록인형 이름은 사용)
          </h2>
          <h2>
            2002년 12월 첫번째 저서 '초록인형이야기' 인형책 출간 (바늘조각기법과
            이중스킨 소개)
          </h2>
          <h2>
            2003년 1월 첫번째 정문영 개인전, 책출간기념회로 국내최초
            바늘조각기법, 이중스킨의 초록인형전시, 소개
          </h2>
        </History>
        <History>
          <h1>인형인들과의 모임</h1>
          <h2>2003년 초록인형홈페이지의 온라인,오프라인 동호회 '달인들'창립</h2>
          <h2>2003년 12인의 인형인 모임'The doll'결성(2004년 해체)</h2>
          <h2>2004년 동호회 '달인들' 초록인형홈페이지'에서 해체</h2>
          <h2>
            2007년 돌메이트운영진들의 '한국헝겊인형협회'로의 창립 자문
            (회장:이애자님)
          </h2>
          <h2>
            2008년 한국인형작가회(Korea contemporary doll artists association)
            설립 작가회원
          </h2>
        </History>
        <History>
          <h1>심사위원,후원,초대작가로의 활동</h1>
          <h2>
            2003 얀스주최 제1회 한국신인작가전에 헝겊인형부문 심사위원 및
            초대작가
          </h2>
          <h2>2006,2007 세계인형대축제 후원, 초대작가</h2>
          <h2>2008 서울인형전시회 후원, 초대작가</h2>
          <h2>
            2007,2008,2009 독일 Neustadt b. coburg시 'Spielzeug Museum'의 특별전
            초대작가
          </h2>
        </History>
        <History>
          <h1>미국에서의 초록인형</h1>
          <h2>
            2010년 NIADA(National Institute of American Doll Artists) artist
            member로 선출됨
          </h2>
          <h2>
            2010년 미국 캘리포니아주 샌프란시스코에 위치한 The Susan Quinlan
            Doll & Teddy Bear Museum & Library에'바람을 가르고-다모'작품 소장
            전시
          </h2>
          <h2>2010년 7월 NIADA Annual Conference에 참가 Show & Sale</h2>
        </History>
        <History>
          <h1>독일에서의 초록인형</h1>
          <h2>
            2004~2006 독일 Neustadt b. coburg시 주최 Max Oscar Arnold 예술상에
            3년간 3개부문에서 수상(최고청소년표현인형상, 최고미니어쳐인형상,
            기존수상자가운데서의 최고작품상 수상)
          </h2>
          <h2>
            2006년 독일 Neustadt b. coburg시 박물관'Spielzeug Museum'에
            한국예술인형으로 정문영의 초록인형'탈춤을 마치고'작품이 영구 소장
            전시
          </h2>
          <h2>
            2007년 독일 Neustadt b. coburg시 박물관'Spielzeug Museum'의
            '한국인형예술전' 오픈행사에 대표작가로 참석
          </h2>
          <h2>
            2007,2008,2009년 독일 Neustadt b. coburg시 박물관'Spielzeug
            Museum'의 특별전 초대작가로 선정 초청
          </h2>
        </History>
        <History>
          <h1>이탈리아에서의 초록인형</h1>
          <h2>
            2005년 이탈리아에서의 아티스트인형콘테스트에서 1등상 수상및 전시
          </h2>
        </History>
        <History>
          <h1>중국에서의 초록인형</h1>
          <h2>2005년 중국 Craft사이트에 정문영작가, 초록인형소개</h2>
          <h2>
            2006년 중국 craft잡지 'KAKA'3월호에 정문영과초록인형 인터뷰기사
          </h2>
        </History>
        <History>
          <h1>동양화모임</h1>
          <h2>홍예회 회원(석당 우희춘 선생님 사사),창석회 회원</h2>
          <h2> * 한국여성미술공모전에서 동상 수상</h2>
          <h2> * 한국과 일본의예술제인 전일전에서 예술상 수상</h2>
        </History>
      </HistoryWrapper>
      <Title>
        수상 경력 <img src="/images/in6.jpg" />
      </Title>
      <List datas={career} />
      <Title>작품소장처</Title>
      <Intestine>
        <img src="/images/in1.jpg" />
        <div>
          <h1>독일 Spielzeug Museum (Neustadt bei Coburg시 소재)</h1>
          <h2>
            소장작품명: 초록인형'탈춤을 마치고' 영구소장,전시 (since 2006.5~)
          </h2>
        </div>
      </Intestine>
      <Title>저서</Title>
      <BookWrapper>
        <img src="/images/bookimg.gif" />
        <div>
          <h1>정문영의 초록인형이야기 'A DOLL'</h1>
          <h2>
            국내최초로 바늘조각기법과 이중스킨이 설명, 소개되어 있는 정문영의
            개인 인형저서로 초록인형을 설명,소개. 특히 마리아 수녀님인형과
            입체인형 쥴리의 제작과정이 사진과정으로 상세히 실려 있다. 인형책속에
            실려 있는 인형작품사진 및 자료, 패턴들은 2002년 9월까지의 정문영의
            인형작업자료중에서 골라 구성되었으며, 2002년 12월 출판되었고, 현재는
            절판됨.
          </h2>
        </div>
      </BookWrapper>
      <Title>
        수상 경력 <img src="/images/in5.jpg" />
      </Title>
      <List datas={agency} isLong={true} />
      <Title>국내 방송 및 언론 보도</Title>
      <List datas={broad} isLong={true} />
      <Title>
        해외 잡지속의 초록인형 <img src="/images/in2.jpg" />
      </Title>
      <List datas={broadOver} isLong={true} />
    </Container>
  );
};

export default WithHead(Home, "정문영의 초록인형연구소0", "", "", "");
