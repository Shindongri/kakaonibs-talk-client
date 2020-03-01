# KAKAONIBS Chat Service - Client

[![typescript](https://img.shields.io/badge/typescript-v.3.7.2-blue)](https://www.typescriptlang.org/)
[![react](https://img.shields.io/badge/react-v.16.12.0-blue)](https://reactjs.org/)
[![redux](https://img.shields.io/badge/redux-v.4.0.5-purple)](https://redux.js.org/)
[![redux-saga](https://img.shields.io/badge/redux--saga-v.1.1.3-brightgreen)](https://redux-saga.js.org/)
[![socket.io-client](https://img.shields.io/badge/socket.io--client-v.2.3.0-black)](https://socket.io/docs/client-api/)  

## Prerequisites

- [Node.js](https://nodejs.org/ko/)
- [Yarn](https://yarnpkg.com/)

## Installation

### 1. Clone the project

```bash
$ git clone https://github.com/Shindongri/kakaonibs-talk-client.git
```

### 2. Install Packages

```bash
$ yarn (install)
```

### 3. Environment Variables (.env)

```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_API_HOST = http://localhost:8080
```

### 4. Start Application

```bash
$ yarn start
```

## Description

>### 과제
>- 채팅 어플리케이션 만들기
>
>### 기능
>- 사용자는 첫 진입 시, ID를 입력하여 접속할 수 있다.
>- 채팅방 리스트에서 채팅방을 선택하여 들어갈 수 있다.
>- 채팅방에 다른 사용자를 초대할 수 있다.
>- 사용자는 채팅방에서 텍스트를 입력할 수 있다.
>- 사용자는 채팅방에서 이미지를 입력할 수 있다.

>### 과제 요구사항
>- Client side rendering으로 개발
>- 언어에 대한 제한은 없음
>- 서버 구현 방법에 대한 제한 없음 (REST API, Long Polling, Socket...)
>- 프론트엔드 구현 방법은 제한 없음 (Angular, React, Preact, Vue, jQuery...)
>- UI 구현에 대한 제약은 없음
>- 단위 테스트 필수, UI 테스트(Storybook, Selenium)와 통합 테스트는 선택
>- README.md 파일에 문제해결 전략 및 프로젝트 빌드, 실행 방법 명시

>### 예시 및 설명
>- 위 언급되지 않은 내용에 대해서는 자유롭게 작성할 수 있다.

### 기능 설명

* *해당 어플리케이션은 모바일 사이즈를 기준으로 개발 되었습니다.*

*- 로그인 & 로그아웃*

- 유저는 첫 화면에서 본인의 대화명을 입력하고 로그인 할 수 있다.
- 로그인 시, `req.session` 에 uuid 로 로그인 정보를 저장하고, `redux-persist` 모듈을 통해 `session-storage` 에도 동시에 저장한다.
- 로그아웃 시, `req.session` 의 정보를 모두 삭제하고, `session-storage` 도 모두 비운다.

*- 채팅*

- 유저는 채팅방을 생성할 수 있고, 다른 유저를 초대할 수 있다.
- 이전 대화 목록은 DB (MongoDB) 에 저장되어 채팅창 상세 진입 시, 노출된다.
- 새로운 채팅방이 생길 시, 실시간으로 구독 가능하다.
- 상대방과 1:1 대화가 가능하다. (텍스트 ⭕️ / 이미지 ❌)

### 구조 설계

* 해당 어플리케이션은 기본적으로 [create-react-app](https://create-react-app.dev/) 으로 구성했습니다.

#### *Unit Test*
: Jest + Enzyme 을 통하여, Unit Test 를 진행했습니다.
```bash
$ yarn test
```

```
src
├── assets
│   └── images
├── components
│   ├── ChatList.tsx
│   ├── ...
│   ├── ...
│   ├── ...
│   ├── RoomList.tsx
│   ├── ...
│   ├── ...
│   ├── ...
│   └── UserList.tsx
├── containers
│   ├── Login.tsx
│   ├── RoomDetail.tsx
│   ├── Rooms.tsx
│   ├── Setting.tsx
│   └── Users.tsx
├── hooks
│   └── useAuth.ts
├── modules
│   ├── auth
│   │   ├── actions.ts
│   │   ├── index.ts
│   │   ├── reducer.ts
│   │   └── types.ts
│   ├── room
│   │   ├── actions.ts
│   │   ├── index.ts
│   │   ├── reducer.ts
│   │   └── types.ts
│   └── user
│       ├── actions.ts
│       ├── index.ts
│       ├── reducer.ts
│       └── types.ts
├── sagas
│   ├── auth.ts
│   ├── room.ts
│   ├── user.ts
│   └── index.ts
├── utils
│   ├── errorHandler.ts
│   └── date.ts
├── socket.ts
├── axios.ts
├── index.tsx
└── App.tsx
```

1.  `components`
: Presentational Components

2.  `containers`
: Container Components

3.  `hooks`
: Custom made hooks 

4.  `modules`
: Redux Actions & Action Types & Reducers 

5.  `sagas`
: Redux Middleware ( Side Effects )

6.  `utils`
: Common Util Modules

## Main Dependencies

- antd
- date-fns
- lodash
- redux & react-redux
- redux-saga
- redux-persist
- styled-components
- socket.io-client
- jest
- enzyme
