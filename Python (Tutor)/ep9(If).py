# if

age = int(input("ป้อนอายุคุณ : "))
if (age < 12):
    print("เป็นเด็กประถม")
    if (age == 7):
        print("ป.1")
    if (age == 8):
        print("ป.2")
elif (age < 15):
    print("เป็นเด็ก ม ต้น")
else:
    print("คุณเป็นผู้ใหญ่")

print("end 2")
