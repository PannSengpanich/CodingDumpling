import re

a = 'pann sengpanich 123-- p pa'
print(re.search('pa', a))
print(re.findall('pa', a))
print(re.findall('[pa]+', a))
print(re.findall('[pa]*', a))
print(re.findall('[pa]', a))
