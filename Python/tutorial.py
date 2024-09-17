mylist = ["Hello", "World", "Its", "Kahasim"]
mylist1 = 42, 3.14, [0,1,2], "spam", True

mytuple = ("Kahasim",1)

start = 1
stop = 10
step = 2

myrange = (start,stop,step)

mynumbers = (10,11,12,13,14,15)
len(mynumbers)
min(mynumbers)
max(mynumbers)

print(max(mynumbers))
print(mylist)
print(mylist1)
# help(mylist1)
print(type(mylist1))

mylist.append("Brown")
# help(mylist)
print(mylist)
print(mylist[0:2])

#tuples
me = (34, "Kahasim", True, ["coding","reading"])

#tuple unpacking
age, name, employed, hobbies = me 
hobbies.append("sleeping")  
print(hobbies)

mylis = [1,2,3,4,5,6,7,8,9,10]

mylis.remove(10)

print(mylis.count(2))

#help(list)
#loop over numbers btwn 1 and 100

evens = []

i = 0
while i <= 100:
    if i % 2 == 0:
        evens.append(i)
    i += 1 

print(evens)

#dictionaries - UNIQUE/IMMUTABLE
print("\n")
me = {'name': "Tyler", 'age': 39}
print(me['name'])
print(me['age'])
print(me.values())
print('name' in me.keys())
print()
mystring = "I love coding with Veroskills"

letters = {}

for char in mystring:
    if char not in letters.keys():
        letters[char] = 1

    letters[char] += 1
print(letters)