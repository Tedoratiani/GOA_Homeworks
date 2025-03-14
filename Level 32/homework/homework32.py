# Manual_find
def manual_find(ist,word):
    index=0
    for i in range(len(list)):
        if list[i]==word:
            return index
        else:
            index+=1
list=[1,2,3,4,5,6]
print(manual_find(list,5))

# Manual_swapcase
def manual_swapcase(s):
    result = ''
    for char in s:
        if char.islower():
            result += char.upper()
        elif char.isupper():
            result += char.lower()
        else:
            result += char
    return result


