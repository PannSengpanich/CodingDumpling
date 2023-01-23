# max, min
# เลขติดลบ ออกจากโปรแกรม


num1 = 0
min = 99999
for i in range(1, 11):
    num = int(input("enter number :"))
    if (num < 0):
        print("error")
        break
    if (num > num1):
        num1 = num
    if (num < min):
        min = num

print(num1)
print(min)
