def manual_replace(list,old,new):
    for i in range(len(list)):
        if list[i]==old:
            list[i]=new
lists=[1,2,3,4,5]
manual_replace(lists,4,34)
print(lists)

def manual_len(list1):
    len=0
    for i in list1:
        len+=1
    return len
print(manual_len(lists))
# codewars
