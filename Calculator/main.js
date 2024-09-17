function CalculateCal(e) {
  var inputValOne = parseFloat(document.getElementById('input1').value);
  var inputValSecond = parseFloat(document.getElementById('input2').value);
  var inputValOperator = document.getElementById('operator').value;
  var result;
  switch (inputValOperator) {
      case '+':
          result = inputValOne + inputValSecond;
      break;
      case '-':
          result = inputValOne - inputValSecond;
      break;
      case '*':
          result = inputValOne * inputValSecond;
      break;
      case '/':
          if(inputValSecond === 0) {
              // throw new Error('cannot divide by 0')
              alert('cannot divide by 0');
              break;
          }
          result = inputValOne / inputValSecond;
      break;
      default:
      result = 'invalid operator';
          break;
  }
  document.getElementById('result').textContent = result;
  }
  function ResetCal(e) {
      document.getElementById('input1').value = '';
      document.getElementById('input2').value = '';
      document.getElementById('operator').value = '+';
      document.getElementById('result').textContent = '0';
  }
  function setInputValue(e) {
      var input = document.getElementById('input1');
      input.setAttribute =( "1");
  }

  const score = document.querySelector('.scoreValue')

function handleClick(e){

}

function Reset(e){
  
  if(e.target.id === 'Reset'){
    score.textContent = 0
  }
  else{
    score.textContent = 0
  }
}

function handleClick(e){
  
  if(e.target.id === 'calculator-button1'){
    score.textContent =score.textContent*10 + 1
  }
  if(e.target.id === 'calculator-button2'){
    score.textContent = 2
  }
  if(e.target.id === 'calculator-button3'){
    score.textContent = 3
  }
  if(e.target.id === 'calculator-button4'){
    score.textContent = 4
  }
  if(e.target.id === 'calculator-button5'){
    score.textContent = 5
  }
  if(e.target.id === 'calculator-button6'){
    score.textContent = 6
  }
  if(e.target.id === 'calculator-button7'){
    score.textContent = 7
  }
  if(e.target.id === 'calculator-button8'){
    score.textContent = 8
  }
  if(e.target.id === 'calculator-button9'){
    score.textContent = 9
  }
  if(e.target.id === 'plus'){
    score.textContent++
  }

}