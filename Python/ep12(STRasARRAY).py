name = "Pann Sengpanich"
print(len(name))
print(name.upper())
print(name.lower())
print(name.capitalize())
name = name.replace("Seng", "Sang")
print(name.split())
print(name)

chk = "Sang" in name
print(chk)

name2 = "    Pann Sengpanich       "
print(len(name2))
print(name2.strip())

namestrip = name2.strip()
namestripleft = name2.lstrip()
namestripright = name2.rstrip()

print(name2, "length : ", len(name2))
print(namestrip, "length : ", len(namestrip))
print(namestripleft, "length : ", len(namestripleft))
print(namestripright, "length : ", len(namestripright))

print(namestrip[0])
print(namestrip[3])
print(namestrip[0:3])  # ตัวที่ 0 1 2
print(namestrip[-1])  # ตัวสุดท้าย
print(namestrip[-4:-1])
