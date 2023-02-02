# start -> loop(condition) -> increase + decrease value
# while, for

# for i in range (start, stop, step)

i, sum, sum1 = 0, 0, 0
while(i <= 3):
    sum = sum+1
    sum1 = sum1+i
    i += 1
    print(sum, sum1)

for i in range(3):
    print(i, end=" ")
    print("hi")

for i in range(1, 4):
    print("ho")

for i in range(2, 10, 2):
    print(i)

sum = 0
av = 0
for i in range(1, 11):
    sum = sum+i
    print("loop ที่ :", i, "ค่าผลรวม :", sum)
avg = sum/10
print("ผลรวม :", sum, "ค่เปลี่ย :", avg)
