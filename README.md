# Redux

## 20231106 ~             

Pure Redux 이후 React Hooks를 듣고 React Redux 이어서 듣기.

- [Redux](#redux)
  - [20231106 ~](#20231106-)
- [](#)
- [](#-1)
  - [react project create](#react-project-create)
  - [redux install](#redux-install)
  - [cancle-line in createStore](#cancle-line-in-createstore)
  - [About Store](#about-store)


Learning Vanilla-Redux and React-Redux

#

https://redux.js.org/

Redux : 기본적으로 Javascript application들의 state(상태)를 관리하는 방법
- React와 많이 사용하면서 유명해졌으나, React에 의존하는 라이브러리는 아님.
- 이와는 별개로 Angular, Vue.js, Vanilla JS 등 JS 언어내의 여러곳에서 사용가능함.

#

## react project create

`npx create-react-app vanilla-redux`

## redux install

`npm install redux` or `yarn add redux`

## cancle-line in createStore

change to `import {legacy_createStore} from "redux";`

## About Store
✅ Store는 data를 저장하는 곳

✅ CreateStore는 reducer를 요구함.

✅ Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.