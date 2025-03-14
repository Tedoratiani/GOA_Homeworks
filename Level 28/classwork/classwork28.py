def manual_index(main_str, search_char):
    for i in range(len(main_str)):
        if main_str[i] == search_char:
            return i
    return -1
print(manual_index("coolguy","u"))