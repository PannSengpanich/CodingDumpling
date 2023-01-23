n1 = int(input("first value :"))
n2 = int(input("last value :"))

for i in range(n1, n2+1):
    for j in range(1, 13):
        print(i, "x", j, "=", i*j)
    print("-------------")
