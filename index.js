let buffer = '0';
runningTotal = 0;
const screen = document.querySelector('.screen')
let pastOperator;

const handleClick =(value)=>{
if (isNaN(value)){
    handleSymbol(value);
}else{
handleNumber(value)
}
screen.innerText = buffer;
}
const handleNumber = (numberString) =>{
if (buffer === '0'){
buffer = numberString
}
else{
buffer += numberString;
}
}
const handleSymbol = (symbol) =>{
    switch (symbol) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            break;
    case'=':
    if(pastOperator === null){
        return
    }else{
        flushOperation(parseInt(buffer));
    }
    previousOperator = null;
    buffer = runningTotal;
    runningTotal = 0;
    break;
    case'←':
    if(buffer.length === 1){
        buffer = "0";
    }
    else{
buffer  = buffer.substring(0, buffer.length - 1)
    }
            break;
    case '+':
    case '−':
    case '×': 
    case '÷':
        handleMath(symbol);
        break;
}
}
const handleMath = (symbol) =>{
    if(buffer === 0){
        return;
    }
    const intBuffer = parseInt(buffer);
if(runningTotal === 0){
    runningTotal = intBuffer;
}else{
    flushOperation(intBuffer)
}
previousOperator = symbol;
buffer = '0';
}
const init =()=>{
    document.querySelector('.calcButtons').addEventListener('click' ,(event)=>{
        handleClick(event.target.innerText)
    })
}
const flushOperation = (intBuffer) =>{
    if(previousOperator === '+'){
        runningTotal += intBuffer;
    }else if(previousOperator === '−'){
        runningTotal -= intBuffer;
    }else if(previousOperator === '×'){
        runningTotal *= intBuffer;
    }else if(previousOperator === '÷'){
        runningTotal /= intBuffer;
    }
}
init();