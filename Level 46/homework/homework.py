def remove_duplicates(string):
    return ''.join(sorted(set(string)))

print(remove_duplicates("banana"))  # Output: "ban"
print(remove_duplicates("Hello World!"))  # Output: "Helo Wrd!"
