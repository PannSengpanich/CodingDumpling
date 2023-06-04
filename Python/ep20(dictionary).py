# Properties: unordered, mutable, key-value pair, unique keys, dynamic size
# Symbol: {}

dict = {"Fri": 20, "Thu": 6, "Sat": 1}
dict["Thu"] = 13
dict["Sat"] = 2
dict["Sun"] = 9
print(dict)  # {'Fri': 20, 'Thu': 13, 'Sat': 2, 'Sun': 9}
print(sorted(dict))  # ['Fri', 'Sat', 'Sun', 'Thu']

# dict_items([('Fri', 20), ('Thu', 13), ('Sat', 2), ('Sun', 9)])
print(dict.items())
# [('Fri', 20), ('Sat', 2), ('Sun', 9), ('Thu', 13)]
print(sorted(dict.items()))  # sorted according to first element of the tuple

# [(2, 'Sat'), (9, 'Sun'), (13, 'Thu'), (20, 'Fri')]
print(sorted([(v, k) for (k, v) in dict.items()]))

for key in dict:
    if dict[key] > 10:
        print(key, dict[key])

print('------------------------------------------')

for (k, i) in dict.items():
    print(k, i)

print('------------------------------------------')

my_dict = {"name": "John", "age": 25}

name = my_dict.get("name")
print(name)  # Output: John

occupation = my_dict.get("occupation")
print(occupation)  # Output: None

city = my_dict.get("city", "Unknown")
print(city)  # Output: Unknown
