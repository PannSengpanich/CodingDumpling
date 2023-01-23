'''
2000 -> 1000 2 ใบ
1500 -> 1000 1 ใบ 500 1 ใบ
1750 -> 1000x1 500x1 100x2 50x1
'''


x = int(input("enter your money : "))

# 1

thousand = x//1000
fivehundred = (x % 1000)//500
onehundred = (x % 500)//100
fifty = (x % 100)//50
twenty = (x % 50)//20

print("you will have 1000 : " + str(thousand) +
      "\n you will have 500 : " + str(fivehundred) +
      "\n you will have 100 : " + str(onehundred) +
      "\n you will have 50 : " + str(fifty) +
      "\n you will have 20 : " + str(twenty))


print("---------------------------")

# 2

if (x >= 1000):
    thousand = x // 1000
    print("1000 B : ", thousand)
    x = x % 1000

print(x)

if (x >= 500):
    fivehundred = x // 500
    print("500 B : ", fivehundred)
    x = x % 500

print(x)

if (x >= 100):
    onehundred = x // 100
    print("100 B : ", onehundred)
    x = x % 100

print(x)

if (x >= 50):
    fifty = x // 50
    print("50 B : ", fifty)
    x = x % 50

print(x)
