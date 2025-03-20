
# 시간 복잡도 1 + n * 2  = O(n)
def find_max_num(arr):    
    max = 0
    for num in arr:
        if num > max:
            max = num
    return max    

print("Q1")
print("정답 = 6 / 현재 풀이 값 = ", find_max_num([3, 5, 6, 1, 2, 4]))
print("정답 = 6 / 현재 풀이 값 = ", find_max_num([6, 6, 6]))
print("정답 = 1888 / 현재 풀이 값 = ", find_max_num([6, 9, 2, 7, 1888]))


# Q. 다음과 같은 문자열을 입력받았을 때, 어떤 알파벳이 가장 많이 포함되어 있는지 반환하시오. (단 최빈값을 가진 알파벳이 여러개일 경우 알파벳 순서가 가장 앞에 위치한 알파벳을 출력하시오)

# 시간 복잡도 1 + n * 4 + 2 + 1 * 3 + 3 = O(n)
def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26

    for str in string:
        if not str.isalpha():
            continue            
        alphabet_occurrence_array[ord(str) - ord('a')] += 1

    max = 0
    max_alphabet_index = 0

    for i in range(len(alphabet_occurrence_array)):
        if alphabet_occurrence_array[i] > max:
            max = alphabet_occurrence_array[i]
            max_alphabet_index = i

    return chr(max_alphabet_index + ord('a'))





result = find_max_occurred_alphabet
print("\n")
print("Q2")
print("정답 = i 현재 풀이 값 =", result("hello my name is dingcodingco"))
print("정답 = e 현재 풀이 값 =", result("we love algorithm"))
print("정답 = b 현재 풀이 값 =", result("best of best youtube"))
