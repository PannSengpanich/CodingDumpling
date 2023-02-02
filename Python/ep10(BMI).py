'''
BMI = weight / height**2

< 18.50     ผอม
18.50-22.90 ปกติ
23-24.90    ท้วม
25-29.90    อ้วน
> 30        อ้วนมาก
'''

h = float(input("enter your height in m : "))
w = float(input("enter your weight in kg : "))

if (h < 0 or w < 0):
    print("error")

bmi = w / (h**2)

if (bmi < 18.50):
    print("ผอม")
elif (bmi < 22.9):
    print("ปกติ")
elif (bmi < 24.9):
    print("ท้วม")
elif (bmi < 29.9):
    print("อ้วน")
elif (bmi > 30):
    print("อ้วนมาก")
