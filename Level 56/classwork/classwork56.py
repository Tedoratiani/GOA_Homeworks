# 1) შექმენით list'ი და ამოწერეთ მხოლოდ ისეთი რიცხვები, რომლებიც მეტია ან ტოლია 40-ის
numbers = [12, 45, 22, 40, 67, 30, 50]
greater_than_40 = list(filter(lambda x: x >= 40, numbers))
print("რიცხვები, რომლებიც მეტია ან ტოლია 40-ის:", greater_than_40)

# 2) შექმენით list'ი და გამოიტანეთ ყველა რიცხვის კვადრატი
squared_numbers = list(map(lambda x: x**2, numbers))
print("რიცხვების კვადრატები:", squared_numbers)

# 3) შექმენით list'ი string'ებით და ამოწერეთ მხოლოდ ისეთები, რომლებიც მთავრდება 'a'-ზე
strings = ["banana", "apple", "mango", "grape", "papaya", "pear"]
ends_with_a = list(filter(lambda x: x.endswith('a'), strings))
print("სტრინგები, რომლებიც მთავრდება 'a'-ზე:", ends_with_a)