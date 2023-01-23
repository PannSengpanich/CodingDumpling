# ใส่ค่า แล้ว + กันไปเรื่อยๆ ค่าไม่ 100 ทำงานไปเรื่อน
# ค่าผลรวมเกิน 100 หยุด

'''
sum = 0
while(sum <= 100):
    number = int(input("number : "))
    sum = sum+number
    print(sum)
'''
sum = 0
while (True):
    number = int(input("insert number : "))
    sum = sum + number
    print("sum is : ", sum)
    if (sum > 100):
        break
