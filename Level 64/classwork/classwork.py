thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
print(thislist)

def pipe_fix(nums):
    for i in range(len(nums)):
        if nums[i]+1!=nums[i+1]:
            nums.insert(i+1,nums[i]+1)
    return nums
print(pipe_fix([1, 2, 3, 5, 6, 8, 9]))
