games=['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']
total=0
for i in range(len(games)):
        x=games[i].split()
        y=[int(x[0]),int(x[2])]
        if y[0]>y[1]:
            total+=2
        elif y[0]==y[1]:
            total+=1
print( total)
