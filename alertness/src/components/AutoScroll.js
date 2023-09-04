import React, { useState, useEffect, useRef } from 'react';

const AutoScroll = ({ elements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // 5초마다 다음 요소로 자동 스크롤하기 위한 인터벌 설정
    const interval = setInterval(scrollNext, 5000);

    return () => {
      // 컴포넌트 언마운트 시에 인터벌을 정리하여 메모리 누수 방지
      clearInterval(interval);
    };
  }, [currentIndex]);

  const scrollNext = () => {
    // 다음 요소 인덱스로 업데이트하며 요소를 순환(loop)시킴
    setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
  };

  useEffect(() => {
    // 현재 인덱스에 해당하는 요소를 부드럽게 스크롤하기 위한 코드
    const element = containerRef.current.querySelector(`#element${currentIndex}`);
    element.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex]);

  return (
    <div ref={containerRef} style={{ overflow: 'hidden', height: '100%'}}>
      {elements.map((element, index) => (
        // 각 요소에 고유한 ID를 부여하고 스크롤 가능한 컨테이너 안에 렌더링
        <div key={index} id={`element${index}`} className="scroll-element">
          {element}
        </div>
      ))}
    </div>
  );
};

export default AutoScroll;
