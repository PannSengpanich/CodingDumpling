# TempCoverter

# 1

temp = input("Enter your temp : ")


if ("c" in temp.lower()):
    tempconv = int(temp[:len(temp)-1])*9/5 + 32
    print(tempconv, "F")
else:
    tempconv = (int(temp[:len(temp)-1])-32)*5/9
    print(tempconv, "C")

# 2

temp = input("Enter your temp : ")
unit = temp[-1].lower()
val = int(temp[:-1])

if(unit == "c"):
    result = val*9/5+32
    unit_conv = "F"

if(unit == "f"):
    result = (val-32)*5/9
    unit_conv = "C"

print(result, unit_conv)
