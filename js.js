const sum = document.querySelector('.sum');
const title = document.getElementById('title');
let sumValue = sum.textContent;
const numbs = document.querySelectorAll('.box__num');
const reset = document.getElementById('reset');
const del = document.getElementById('del');

function speakText(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

numbs.forEach(el => {
  el.addEventListener('click', () => {
    const textValue = el.textContent;

    if (sum.textContent.length > 12) {
      sumValue = '0';
    }
    if (textValue === 'Del' && textValue.length >= 1) {
      speakText(`удалим`);
      sumValue = sumValue.slice(0, -1);
    }
    if(textValue !== '=') {
        if (sumValue === '0') {
        sumValue = textValue;
        } else if(textValue !== 'Del') {
          sumValue += textValue;
        }

    } else if (textValue === '=') {
      speakText('равно');
        sumValue = eval(sumValue);
      } 
     
    sum.textContent = sumValue;
    speakText(sum.textContent);
  });
});

reset.addEventListener('click', () => {
  speakText('сброс');
  sumValue = '0';
  sum.textContent = sumValue;
})


numbs.forEach(el => {
  el.addEventListener('mousedown', () => {
    el.style.transform = 'scale(1.1)';
  });

  el.addEventListener('mouseup', () => {
    el.style.transform = 'scale(1)';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
  });
});

window.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key.match(/[0-9+\-=]/)) {
    if (sumValue === '0' || sumValue === 'Error') {
      sumValue = key;
    } else {
      sumValue += key;
    }
    currentExpression += key;
    sum.textContent = sumValue;
  }
});


function updateTime() {
  const timeElement = document.getElementById('time');
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);

updateTime();


title.addEventListener('click', () => {
  speakText('Calcuuuullllllaaaalalalalalltortortor by Nadi 5000', 0.5);
})