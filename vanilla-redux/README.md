# Vanilla(Pure) Redux

## 20231106 ~ 
Learning Vanilla-Redux

- [Vanilla(Pure) Redux](#vanillapure-redux)
  - [20231106 ~](#20231106-)
  - [redux install](#redux-install)
  - [Vanila-Redux](#vanila-redux)
    - [cancle-line in createStore](#cancle-line-in-createstore)
    - [About Store](#about-store)
    - [Actions](#actions)
    - [Subscriptions](#subscriptions)


## redux install

`npm install redux` or `yarn add redux`


## Vanila-Redux

### cancle-line in createStore

change to `import {legacy_createStore} from "redux";`

### About Store
✅ Store는 data를 저장하는 곳

✅ CreateStore는 reducer를 요구함.

✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.

### Actions

✅ Action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법
✅ Reducer에게 Action을 보내는 방법 : store.dispatch({key: value});

### Subscriptions

✅ Subscribe : store 안에 있는 변화 감지
store.subscribe(func); // store안의 변화를 감지하면 func 실행
