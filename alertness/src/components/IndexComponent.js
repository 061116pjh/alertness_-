
import '../styles/style.css';
import AutoScroll from './AutoScroll';


const IndexComponent = () => {
  const elementsToScroll = [
    <div className="issue align-center content">
      "펜타닐 합성진통제 중 하나로 2mg 투약으로도 호흡중추를 마비 시켜 사망에 이르게 할수 있다."
    </div>,
    <div className="alert align-center content">
      이래도 마약을 하시겠습니까?
    </div>,
    <div className="issue align-center content">
      고교생 등 10대 41명이 부산/경남 지역 병원, 약국 등에서 마약성 진통제인 '펜탈닐 패치'를 처방받아 공원 및 상가 화장실, 학교 내에서 투약하여 무더기 적발됨
    </div>,
    <div className="issue align-center content">
      충북 청주시 고등학생 A 다크웹을 이용하여 케타민 대마 등을 구매후 본인 주거지 내에서 투약하다 두통 및 구투 등 심각한 부작용을 겪음 
    </div>,
    <div className="issue align-center content">
      만 14세 중학생 B 트위터를 통해 '나비약'으로 불리는 다이어트약을 구매 알고보니 팬타민 성분으로 이루어져있는 항정신성의약품 불법 구입시 처벌 대상이 될수 있음
    </div>,
    <div class="alert align-center content">
      이래도 마약을 하실 건가요?
    </div>
  ];

  return (
    <div>
      {/* AutoScroll 컴포넌트를 렌더링하여 자동 스크롤 기능을 제공합니다 */}
      <AutoScroll elements={elementsToScroll} />
    </div>
  );
};

export default IndexComponent;
