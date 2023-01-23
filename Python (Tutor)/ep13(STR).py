name = "Pann Sengpanich year 3 grade 3 address 3"
print(name.replace("3", "4"))
print(name.replace("3", "4", 1))

x = "address" in name

if (x):
    name = name.replace("address", "ที่อยู่")

print(name)

fname = "Pann"
lname = "Senngpanich"
age = "21"
salary = 45000.123

print("ชื่อ :", fname, "นามสกุล :", lname, "อายุ :", age)
txt = "ชื่อ : {} \tนามสกุล : {} \tอายุ :{}"
txt2 = "ชื่อ : {2} \tนามสกุล : {1} \tอายุ :{1}, เงินเดือน :{3:.2f}"  # index
print(txt.format(fname, lname, age))
print(txt2.format(fname, lname, age, salary))

name1 = "นายประหยัด ทองแท้"
if (name1.startswith("นาย")):
    print("เป็นผู้ชาย")
else:
    print("เป็นผู้หญิง")

number = "123456"
if (number.endswith("456")):
    print("true")
else:
    print("false")
