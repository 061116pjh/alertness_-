const fentanyl = document.querySelector(".fentanyl")

const textList = [
    "펜타닐...합성진통제 중 하나로 2mg 투약으로도 호흡중추를 마비 시켜 사망에 이르게 할수 있다."
];

const content = document.querySelectorAll(".content");

const alert_text = "이래도 마약 하시겠습니까?"

let index = 0;

const typing = async(target,index) => {  
      
        const speed = 170;
        const letter = textList[index].split("");
        
        while (letter.length) {
          await wait(speed);
          target.innerHTML += letter.shift(); 
        }
        
        await wait(3000);
}

const wait = (ms)=> {
    return new Promise(res => setTimeout(res, ms))
}

const autoScroll = () =>{

   window.scrollTo({top:content[index].offsetTop,left:content[index].offsetLeft, behavior:'smooth'});
   index++;

}
typing(fentanyl,0);
setInterval(autoScroll,6000);



