# Q. 다음과 같이 영어로 되어 있는 문자열이 있을 때, 이 문자열에서 반복되지 않는 첫번째 문자를 반환하시오.
# 만약 그런 문자가 없다면 _ 를 반환하시오.


# 시간복잡도: O(n²)
def AS_IS_find_not_repeating_first_character(string):

    history = []

    for value in string:
        # O(n)
        if value in history:
            history.remove(value)
        # O(n)
        else:
            history.append(value)

    if len(history) > 0:
        return history[0]
    else:
        return "_"


result = AS_IS_find_not_repeating_first_character
print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))


# 시간복잡도: O(n)
def find_not_repeating_first_character(string):

    alphabet_occurrence_array = [0] * 26

    # O(n)
    for char in string:
        alphabet_occurrence_array[ord(char) - ord("a")] += 1

    not_repeating_array = []

    # O(1)
    for index in range(len(alphabet_occurrence_array)):
        if alphabet_occurrence_array[index] == 1:
            not_repeating_array.append(chr(index + ord("a")))

    # O(n)
    for char in string:
        if char in not_repeating_array:
            return char

    return "_"


result = find_not_repeating_first_character
print("\n")
print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))
