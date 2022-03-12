list1=["one","two","three","four","five"]
list2=[1,2,3,4,5,] 
dic={}
for key in range(len(list1)):
    dic[list1[key]]=[list2[key]]
print(dic)