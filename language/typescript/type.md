# 기본 타입

1.  boolean

    ```ts
    let isDone: boolean = false
    ```

2.  number

    ```ts
    let decimal: number = 6
    ```

3.  string

    ```ts
    let fullName: string = `Bob Bobbington`;
    let sentence: string = `Hello, my name is ${ fullName }.
    ```

4.  array

    ```ts
    let list: number[] = [1, 2, 3]

    let list: Array<number> = [1, 2, 3]
    ```

5.  tuple
    요소의 타입과 개수가 고정된 배열을 포함.

    ```ts
    let x: [string, number]
    x = ["hello", 10] // 성공
    x = [10, "hello"] // 실패

    console.log(x[0].substring(1)) // 성공
    console.log(x[1].substring(1)) // 오류, 'number'에는 'substring' 이 없습니다.

    x[3] = "world" // 오류, '[string, number]' 타입에는 프로퍼티 '3'이 없습니다.
    console.log(x[5].toString()) // '[string, number]' 타입에는 프로퍼티 '5'가 없습니다.
    ```

6.  enum

    enum은 0부터 시작하여 멤버들의 번호를 매김.(수동으로 번호 설정 가능)

    ```ts
    enum Color {
        Red,
        Green,
        Blue,
    }
    let c: Color = Color.Green
    ```

    ```ts
    enum Color {
        Red = 1,
        Green = 2,
        Blue = 4,
    }
    let c: Color = Color.Green
    ```

7.  Any

    기존 js 방법으로 작업하는 방식으로 타입 검사를 제외시킴.

    ```ts
    let notSure: any = 4
    notSure = "maybe a string instead"
    notSure = false
    ```

8.  void

    void는 보통 함수에서 반환 값이 없을 때 반환 타입을 표현하기 위해 사용

    ```ts
    function warnUser(): void {
        console.log("This is my warning message")
    }
    ```

9.  null and undefined

    둘 다 각각 자신의 타입 이름으로 undefined , null로 사용

    ```ts
    // 이 밖에 이 변수들에 할당할 수 있는 값이 없음
    let u: undefined = undefined
    let n: null = null
    ```

10. Never

    함수가 항상 예외를 던지거나 무한 루프에 빠져 종료되지 않는 경우, 타입 가드를 통해 어떤 변수가 가질 수 있는 모든 타입을 제거했을 때

    -   never 타입의 값은 어떤 타입의 변수에도 할당 가능.
    -   다른 타입의 값은 never 타입에 할당 불가능(any 포함)

    ```ts
    function error(message: string): never {
        throw new Error(message)
    }

    function fail() {
        return error("Something failed")
    }

    function infiniteLoop(): never {
        while (true) {}
    }

    function processValue(value: string | number) {
        if (typeof value === "string") {
            // string 처리 로직
        } else if (typeof value === "number") {
            // number 처리 로직
        } else {
            // 여기서 value는 never 타입
        }
    }

    function throwError(): never {
        throw new Error("에러 발생")
    }

    let a = throwError() // a는 never 타입
    let b: string = "bbb"
    b = a // 타입 체크는 통과하지만, 실제로는 a에 도달하기 전에 예외가 발생하므로 실행 불가능
    ```

11. object

    number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지

    ```ts
    declare function create(o: object | null): void

    create({ prop: 0 }) // 성공
    create(null) // 성공

    create(42) // 오류
    create("string") // 오류
    create(false) // 오류
    create(undefined) // 오류
    ```
