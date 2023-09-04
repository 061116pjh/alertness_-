// DOM에서 펜타닐 요소를 선택합니다.
const fentanyl = document.querySelector(".fentanyl");

// 자동 스크롤할 텍스트 목록입니다.
const textList = [
  "펜타닐...합성진통제 중 하나로 2mg 투약으로도 호흡중추를 마비 시켜 사망에 이르게 할수 있다.",
];

// 모든 .content 클래스를 가진 요소를 선택합니다.
const content = document.querySelectorAll(".content");

// 경고 메시지입니다.
const alert_text = "이래도 마약 하시겠습니까?";

// 텍스트 인덱스를 초기화합니다.
let index = 0;

// 텍스트를 타이핑하는 함수입니다.
const typing = async (target, index) => {
  // 타이핑 속도입니다.
  const speed = 170;
  // 텍스트를 한 글자씩 나눕니다.
  const letter = textList[index].split("");

  while (letter.length) {
    await wait(speed);
    // 텍스트를 한 글자씩 추가합니다.
    target.innerHTML += letter.shift();
  }

  await wait(3000);
};

// 지정된 시간(ms)만큼 대기하는 함수입니다.
const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// 자동 스크롤 함수입니다.
const autoScroll = () => {
  // content[index]의 위치로 부드러운 스크롤을 수행합니다.
  window.scrollTo({
    top: content[index].offsetTop,
    left: content[index].offsetLeft,
    behavior: "smooth",
  });
  index++;
};

// 초기 텍스트 타이핑을 시작합니다.
typing(fentanyl, 0);

// 일정 시간 간격으로 자동 스크롤 함수를 호출합니다.
setInterval(autoScroll, 6000);
