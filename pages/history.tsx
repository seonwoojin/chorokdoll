import WithHead from "@libs/client/WithHead";
import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  padding-top: 300px;
  height: 200vh;
`;

const ContextWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: 80%;
  height: auto;
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

const Home: NextPage = () => {
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
    </Container>
  );
};

export default WithHead(Home, "정문영의 초록인형연구소0", "", "", "");
