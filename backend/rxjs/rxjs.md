# rxjs

## 개념 정리

- **Observable**: 비동기 데이터 스트림을 나타내는 객체
- **Observer**: Observable로부터 데이터를 "구독(subscribe)" 하는 소비자
- **Subscription**: 구독 결과를 제어할 수 있는 객체(unsubscribe() 가능)
- **Operator**: 스트림 데이터를 조작하는 함수들(ex. map, filter)

```js
import { Observable } from "rxjs";

const obs = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

obs.subscribe({
  next: (value) => console.log("받은 값:", value),
  complete: () => console.log("완료!"),
});
```

Observable이 Observer에게 데이터를 전달하고 있음 -> emit
next() -> 데이터 방출
error() -> 에러 방출 후 스트림 종료
complete() -> 스트림 종료 알림

### pipe

- 여러 연산자를 체이닝해서 하나의 데이터 흐름(stream)으로 만드는 함수
- pipe()는 마치 수도관을 연결하듯, 데이터가 한 관(연산자)을 거쳐서 다음 관으로 흐르게 해주는 연결기

## 연산자

- **map()**

  - `map(x => x * 2)`
  - 들어온 값을 가공해서 새로운 값으로 변환

  ```js
  from([1, 2, 3]).pipe(map((n) => n * 2));
  // emit: 2, 4, 6
  ```

- **filter()**

  - `filter(x => x % 2 === 0)`
  - 조건에 맞는 값만 다음 연산자로 전달
  - 스트림에서 값을 거를 때 사용

- **tap()**

  - `tap(x => console.log('지금 값:', x))`
  - 값을 변경하지 않고 로그를 찍거나, 외부 시스템 호출 등의 side effect를 주기 위해 사용
  - map()과 달리 값은 그대로 다음으로 넘어감

  ```js
  from([10, 20]).pipe(tap((x) => console.log("중간값:", x)));
  // emit: 10, 20 (로그만 찍고 값은 그대로 전달됨)
  ```
