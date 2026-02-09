
# 🍶 MCA
*MCA 월간도예 매거진 웹사이트 리디자인*
>기존에 운영 중인 [월간도예](https://www.cerazine.co.kr/) 사이트는  매달 새로운 매거진이 발행되는 웹사이트라는 인상이 약했고, 매거진 콘텐츠 뿐만 아니라 뉴스, 회사 소개, 구직 정보 등이 포함되어 있어 전체적으로 정리가 필요하다고 느꼈습니다.<br/><br/>월간도예에서 발행하는 매거진 MCA에 집중한 별도의 매거진 사이트를 기획, 제작하게 되었습니다.

<img width="1500" height="844" alt="image" src="https://github.com/user-attachments/assets/145f0e17-c6d4-4227-97ac-2044e0f62c62" />



<details>
  <summary><h3>👤 Role</h3></summary>

  |기획|디자인|구현|
|:-:|:-:|:-:|
|이지은|이지은|[dlwldms](https://www.github.com/317dlwldms)|
</details>

<details>
  <summary><h3>📚 Stack</h3></summary>

<img src="https://img.shields.io/badge/React-61dafb?style=flat&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/SCSS-cc6699?style=flat&logo=sass&logoColor=white" />
- React 기반 SPA 구조
- react-router-dom을 활용한 페이지 · 데이터 연결
- SASS를 사용한 스타일링 css 작성
</details>

<details>
  <summary><h3>📁 Process</h3></summary>

  |Process|Description|
  |:-:|:-|
  |문제|월호 리스트에서 이미지를 클릭하면 월호의 세부 정보를 보여주는 페이지로 이동해야한다.<br/>각 월호의 상세페이지는 동일한 구조를 가지기 때문에 개별 페이지를 모두 생성하지 않고 하나의 구조로 연결해야한다.|
  |해결|react-router-dom의 `useParams`를 활용하여 사용자가 특정 이미지를 클릭하면 해당 월호의 `id` 값을 기준으로 데이터에 매칭하고 연결된 정보를 실시간으로 화면에 렌더링하도록 구현했습니다.|
  |결과|데이터 렌더링으로 매달 추가되는 잡지 데이터를 일관된 포맷으로 유지할 수 있으며, 수정 및 유지보수에 용이합니다.|
</details>
