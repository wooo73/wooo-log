# DynamoDB

NoSQL기반 데이터베이스

- 장점

  - 서버리스, 자동 스케일링, 유지보수 간편
  - 대용량 읽기/쓰기 트래픽 처리 가능
  - 정해진 조회 패턴 존재, 스키마가 자주 바뀌는 구조일 때 유리
  - 낮은 사용량에선 저렴

- 단점

  - join 불가, 서브쿼리 불가
  - 정렬, 집계 연산 불가
  - 테이블 설계가 어려움(쿼리부터 설계)
    - 조회 패턴이 자주 바뀌는 경우 설계를 다시 해야 함

## 모델링

데이터 접근 방식(조회 패턴)을 먼저 정의하고, 그에 맞게 테이블을 설계해야 함.

- Key 설계
  - DynamoDB는 테이블당 기본적으로 파티션 키, 정렬 키로 구분됨.
  - Partition Key(PK) 데이터를 분산 저장하기 위한 해시키(userId, productId)
  - Sort Key(SK) 같은 파티션 안에서 데이터를 정렬(createdAt, orderId)
    - ex) useId(PK) + createdAt(SK) -> 같은 유저의 데이터를 시간순으로 정렬해서 조회 가능

### 예시

사용자 ID롤 주문 목록을 시간순으로 조회하는 상황.

테이블 설계
Table: Orders
Partition Key: userId
Sort Key: orderId 또는 createdAt

- userId로 주문 조회
- 정렬은 Sort key 기준
- 특정 주문ID로 조회(PK + SK)

## 인덱스

최근 주문 내역 100건을 시간순으로 조회(userId 없이)
-> Global Secondary Index(GSI) 필요!

GSI1:
Partition Key: status
Sort Key: createdAt
-> status가 completed인 주문을 시간순으로 조회 가능함.

## 정리

1. 설계는 쿼리를 먼저 생각하고 설계
2. PK + SK로 정렬 가능
3. 추가적인 조회 패턴은 GSI를 사용

- Q1. PK 조회가 아닌 경우 모두 GSI를 만들어야 하는가?
- A1. PK없이 데이터를 조회하라는 경우 ScanCommand, Global Secondary Index(GSI) 2가지 방법이 있다.
  - **ScanCommand**
    - 테이블 전체 조회(SELECT \* FROM 느낌)
    - 성능, 비용 증가
    - 개발 환경에선 디버깅용으로 사용하며, 실 서비스에선 금지
  - **Global Secondary Index(GSI)**
    - 다른 키 조합으로 데이터를 빠르게 조회할 수 있게 만듦
    - 조회 성능은 PK 수준
    - 실서비스에서 PK 외의 쿼리는 GSI 사용
