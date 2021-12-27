# Project overview
#### 서비스 이름
* Forour

#### 서비스 소개
* ##### 꽃 추천 서비스
  -. 선택한 기념일에 상대에게 선물하면 좋을 꽃을 추천해준다.  
  -. 주어진 상황에 상대가 했을 법한 행동을 선택한다. 선택한 내용을 바탕으로 상대의 성향을 분석하고, 어울리는 꽃을 추천해준다.

#### 링크
* https://forour.space/

# Team members
#### Front-end
* 최예흠 
* 김건우

#### Back-end
* 이태현

#### Product-design
* 이승호

# Development
### Skill
* Next.JS
* React
* recoil
* styled-components
* TypeScript

### Architecture
* MVC

### Details
* 개요

* MVC패턴 적용
MVC패턴을 적용한 이유는, View, Data, Logic 을 분리하기 위함이다.

##### Model
프론트엔드 기준 API를 관리하기 위한 모듈을 생성하였다.
API를 통해 서버로부터 데이터를 받아오기 때문에 각 API를 Data로 생각하였다.
각 API를 통해 받는 데이터는 interface로 data type을 선언하여 관리하였다.

##### View
View 개발을 위해 React를 선택하였다.

##### Controller
Model을 통해 Data를 받고, 받은 Data를 가공하여 View로 전달한다.
기능 중심으로 Controller 모듈을 구성하였다.








