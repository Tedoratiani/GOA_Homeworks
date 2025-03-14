def manual_min(list):
    x=list[0]
    for i in range(len(list)):
        if  list[i]<x:
            x=list[i]
    return x

def manual_max(list1):
    y=list1[0]
    for i in range(len(list1)):
        if list1[i]>y:
            y=list1[i]
    return y