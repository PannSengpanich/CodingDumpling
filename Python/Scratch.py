list = [1,6,7,3,5,9,0]

def BubbleSort(list):
    for n in len(list):
        for i in len(list)-1:
            if (list(i)>list(i+1)):
                spare = list(i+1)
                list(i+1)=list(i)
                list(i)=spare
        
        