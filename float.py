b={"a":20,"b":50,"c":70}
di={}
for i in b:
    f=float(b[i])
    di.update({i:f})
print(di)
