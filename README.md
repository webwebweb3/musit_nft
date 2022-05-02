

# Musit x NFT 프로젝트

### 팀원 : 박준혁 <a href="https://github.com/berrypjh"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> , 이관훈 <a href="https://github.com/Flavordash"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> , 최현석 <a href="https://github.com/Tozinoo"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a>

### 협업자료 : <a href="https://quiver-revolve-23f.notion.site/aa58a42722a54bc9ad5cc70ddaf86ed0"><img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/></a> , <a href="https://drive.google.com/drive/folders/16AmkK7grpi34fmx2zUlagan6jQQSZbuz?usp=sharing"><img src="https://img.shields.io/badge/Google Drive-4285F4?style=flat-square&logo=Google Drive&logoColor=white"/></a>

---------------------------------------

## 프로젝트 기간 
####  2022-04-08 ~ 2022-05-02 (총 56일)

## 목적
이더리움 기반 NFT 음악 스트리밍 플랫폼 개발
음원의 블록체인을 적용하여 투명한 수익 분배 제공 

## 개발 환경
<img src="https://user-images.githubusercontent.com/89543695/166198341-49e41db4-9315-4276-b6b5-18413cce5b96.png" width="520px" hight="680px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>

## 실행 방법
### 🛠 설치
```
npm i && yarn

cd client && npm i or cd client && yarn

cd hardhat && npm i
```
### 🔒 환경변수
<b>/.env</b>
```
COOKIE_SECRET='YOUR_COOKIE_SECRET'
DB_HOST='YOUR_DB_HOST'
DB_PASSWORD='YOUR_DB_PASSWORD'
S3_ACCESS_KEY_ID='YOUR_S3_ACCESS_KEY_ID'
S3_SECRET_ACCESS_KEY='YOUR_S3_SECRET_ACCESS_KEY'
```

<b>/client/.env</b>
```
NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID='YOUR_AWS_S3_ACCESS_KEY_ID'
NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY='YOUR_AWS_S3_SECRET_ACCESS_KEY'
NEXT_PUBLIC_TARGET_CHAIN_ID='TEST_NET_CHAIN_ID' or 'MAIN_NET_CHAIN_ID'
```

<b>/hardhat/.env</b>
```
ROPSTEN_PRIVATE_KEY='YOUR_ROPSTEN_PRIVATE_KEY'
ALCHEMY_ROPSTEN_API_KEY='YOUR_ALCHEMY_ROPSTEN_API_KEY'
ALCHEMY_RINKEBY_API_KEY='YOUR_ALCHEMY_RINKEBY_API_KEY'
ETHERSCAN_API_KEY='ETHERSCAN_API_KEY'
```

# ER Diagram
##### * 사진을 클릭하면 크게 자세히 볼 수 있어요!!
<img src="https://user-images.githubusercontent.com/89543695/166198280-bfc6ba81-9a52-4ee8-8bd7-a15745735511.png" width="470px" hight="610px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>
