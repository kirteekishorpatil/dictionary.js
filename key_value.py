a=[1,2,3,4,5]
c={}
for i in a[::-1]:
    c={i:c}
print(c)
