function a() {
    console.log("a1")
    b()
    console.log("a2")
}

function b() {
    console.log("b1")
    c()
    console.log("b2")
}

async function c() {
    console.log("c1")
    setTimeout(() => console.log("c2"), 0)
    await d()
    console.log("c3")
}

function d() {
    return new Promise((resolve) => {
        console.log("d1")
        resolve()
        console.log("d2")
    }).then(() => console.log("d3"))
}

Promise.resolve()
    .then(() => {
        console.log("e1")
        setTimeout(() => {
            console.log("e2")
        }, 0)
    })
    .then(() => {
        console.log("e3")
    })

a()

// a1, b1, c1, d1, d2, b2, a2, e1, d3, e3, c3, c2, e2

/** 실행 과정
 * 1. then 콜백(e1, setTimeout) 마이크로태스크 큐 등록
 * 2. a()
 * 3. a1 출력
 * 4. b()
 * 5. b1 출력
 * 6. c()
 * 7. c1 출력
 * 8. c2 매크로태스크 큐 등록
 * 9. d()
 * 10. d1 출력
 * 11. resolve()
 * 12. d2 출력
 * 13. d3 마이크로태스크 큐 등록
 * 14. c 함수 일시 정지
 * 15. b2 출력
 * 16. a2 출력
 * 동기 코드 처리 완료 마이크로 / 매크로 태스크 큐 확인 및 처리 진행
 * 17. e1 출력
 * 18. e2 매크로태스크 큐 등록
 * 19. e3 마이크로태스크 큐  등록
 * 20. d3 출력
 * 21. c3 마이크로태스크 큐 등록
 * 22. e3 출력
 * 23. c3 출력
 * 24. c2 출력
 * 25. e2 출력
 */
