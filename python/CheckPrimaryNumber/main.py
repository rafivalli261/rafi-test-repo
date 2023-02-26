def check_primary(number):
    
    # to check if number is less than two
    if number < 2:
        return f"{number} is Not a Primary Number!"
    
    # iterate whole process here
    for n in range(2, number):
        if number == 2:
            return "2 is a Primary Number!"
        
        # to check if number can be mod by other number
        if number % n == 0:
            return f"{number} is Not a Primary Number!"
    
    # if iteration has no return, it means that number is a primary number
    return f"{number} is a Primary Number!"

print(check_primary(131))
print(check_primary(-11))
print(check_primary(27))
print(check_primary(59))