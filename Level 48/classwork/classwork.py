# Dictionary example
chair = {
    "color": "black",
    "material": "leather",
    "legs": 4,
    "wheels": True,
    "adjustable": True
}

# 2. Print keys
for key in chair.keys():
    print(key)

# 3. Print values
for value in chair.values():
    print(value)

# 4. Print keys and values
for key, value in chair.items():
    print(f"{key}: {value}")
