addEventListener('load', function(e) {
    document.querySelector('#test').innerHTML = 'SimonGame';
  });
  
  
  
  let arr = [];
  let current = 0;
  
  const colorBtn = document.querySelectorAll('.btn__color');
  const h2 = document.querySelector('h2');
  const h3 = document.querySelector('h3');
  const button = document.querySelector('button');
  const input = document.querySelector('select');
  let difficultyLevel = input.value;
  
  let level = 1;
  h2.textContent = `Level ${level}`;
  
  function message(msg = '') {
    h3.textContent = msg;
  }
  
  function init() {
  
  level = 1;
  h2.textContent = `Level ${level}`;
  arr = [];
  current = 0;
  
  for (let i = 0; i < 3; i++) {
    arr.push(Math.floor(Math.random()*4));
  }
  
  console.log(arr);
  
  render();
  
  }
  
  function render() {
  
  h2.textContent = `Level ${level}`;
  h3.textContent = '';
  
  arr.forEach((item, key) => { 
    (function (num, i) {
    setTimeout(() => {
  document.getElementById(num).classList.add("active");
  }, difficultyLevel*i + 500*i);
    setTimeout(() => {
  document.getElementById(num).classList.remove("active");
  }, difficultyLevel*(i+1) + 500*i);
  })(item, key);
  });
  
  setTimeout(check, (difficultyLevel*arr.length + 500*arr.length));
  
  }
  
  function checkCurrent(event) {
    if (event.target.getAttribute("id") ==   arr[current]) {
          message("That's right!");
          setTimeout(message, 500);
          if (current == arr.length - 1) {
            removeListener();
            nextLevel();
          } else {
            current++;
          }
        } else {
          message("Game over!");
          removeListener();
          button.style.display = 'block';
          input.removeAttribute('disabled');
        }
  }
  
  function check() {
    colorBtn.forEach(item => {
      item.addEventListener('click', checkCurrent);
    });
  }
  
  function removeListener() {
    colorBtn.forEach(item => {
      item.removeEventListener('click', checkCurrent);
    });
  }
  
  function nextLevel() {
     
    level++;
    current=0;
    arr.push(Math.floor(Math.random()*4));
    
      
    setTimeout(render, 1000);
  }
  
  button.addEventListener('click', ()=> {
    setTimeout(init, 1000);
    button.style.display = 'none';
    difficultyLevel = input.value;
    input.setAttribute('disabled', '');
  });  