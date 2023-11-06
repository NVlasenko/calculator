const sum = document.querySelector('.sum');

let sumValue = sum.textContent;
const numbs = document.querySelectorAll('.box__num');
const reset = document.getElementById('reset');
const del = document.getElementById('del');

numbs.forEach(el => {
  el.addEventListener('click', () => {
    const textValue = el.textContent;

    if (sum.textContent.length > 13) {
      sumValue = '0';
    }
    if (textValue === 'Del' && textValue.length >= 1) {
      sumValue = sumValue.slice(0, -1);
    }

    if(textValue !== '=') {
        if (sumValue === '0') {
        sumValue = textValue;
        } else if(textValue !== 'Del') {
          sumValue += textValue;
        }

    } else if (textValue === '=') {
        sumValue = eval(sumValue);
      } 

    sum.textContent = sumValue;
  });
});

reset.addEventListener('click', () => {
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
