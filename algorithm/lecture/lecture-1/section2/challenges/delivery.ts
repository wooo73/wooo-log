/**
 * Q. 배달의 민족 서버 개발자로 입사했다.
상점에서 현재 가능한 메뉴가 ["떡볶이", "만두", "오뎅", "사이다", "콜라"] 일 때, 유저가 ["오뎅", "콜라", "만두"] 를 주문했다.

그렇다면, 현재 주문 가능한 상태인지 여부를 반환하시오.

menus = ["떡볶이", "만두", "오뎅", "사이다", "콜라"]
orders = ["오뎅", "콜라", "만두"]
 */

function isDeliveryPossible(menus: string[], orders: string[]): boolean {
  const menusMap = new Map(menus.map((menu) => [menu, true]));

  for (let i = 0; i < orders.length; i++) {
    if (!menusMap.has(orders[i])) {
      return false;
    }

    menusMap.set(orders[i], false);
  }
  return true;
}

console.log(
  isDeliveryPossible(
    ["떡볶이", "만두", "오뎅", "사이다", "콜라"],
    ["오뎅", "콜라", "만두"]
  )
);
