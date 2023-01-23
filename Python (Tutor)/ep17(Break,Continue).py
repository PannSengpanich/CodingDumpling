# break = ออกจากลูป
# continue = ไม่ทำคำสั่งข้างแต่วนลูปต่อ

i = 1
while(i <= 10):
    print(i)
    i += 1
    if (i == 4):
        break

i = 0

while(i <= 9):
    i += 1
    if (i % 2 == 0):
        continue
    print(i)

for i in range(0, 12, 2):
    print(i)
