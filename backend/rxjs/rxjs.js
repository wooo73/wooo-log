import { Observable, filter, map, tap } from "rxjs";

//Observable을 생성해서 숫자 1~5를 emit 하고, 각 숫자에 * 2 해서 출력
const obs = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.next(5);
  observer.complete();
});

obs.subscribe({
  next: (value) => console.log("받은 값:", value * 2),
});

/**
 * Observable에서 1~10까지의 숫자를 발행하고
 * 짝수만 필터링하고
 * 각 짝수에 100을 더한 값으로 변환한 뒤
 * tap()으로 변환된 값을 로그에 찍고
 * subscribe()로 최종 값을 출력
 */

const obs2 = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.next(5);
  observer.next(6);
  observer.next(7);
  observer.next(8);
  observer.next(9);
  observer.next(10);
  observer.complete();
});

obs2
  .pipe(
    filter((x) => x % 2 === 0),
    map((x) => x + 100),
    tap((x) => console.log("중간값:", x))
  )
  .subscribe((x) => console.log("최종값:", x));
