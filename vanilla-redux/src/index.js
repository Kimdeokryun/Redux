import {legacy_createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

// DATA를 수정하는 유일한 함수.
const countModifier = (count = 0, action) => {
  /*if (action.type === "ADD"){ 
    count += 1; 
  }
  else if(action.type === "MINUS"){ 
    count -= 1; 
  }*/

  switch(action.type)
  {
    case "ADD":
      count += 1;
      break;
    case "MINUS":
      count -= 1;
      break;
    default:
      break; 
  }

  return count;
}

const countStore = legacy_createStore(countModifier);

// 데이터 변화시 실행 함수.
const onChange = () => {
  number.innerText = countStore.getState();
  console.log(countStore.getState());
}

// 데이터 변화를 감지하는 함수.
countStore.subscribe(onChange);


const handleAdd = () => {
  countStore.dispatch({type: "ADD"});
}

const handleMinus = () => {
  countStore.dispatch({type: "MINUS"});
}

add.addEventListener("click", () => handleAdd());
minus.addEventListener("click", () => handleMinus());