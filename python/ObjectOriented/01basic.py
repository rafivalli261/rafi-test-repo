# initiate class
class Student:
    # The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.
    # Not have to be self, can be anything but it position should be on the first parameter
    def __init__(self, name: str, id: str, age: int) -> None:
        self.name = name
        self.id = id
        self.age = age

    def __str__(self) -> str:
        return f"My Name is {self.name} with Student ID : {self.id}"

    def show_age(self):
        return f"My age is {self.age} years old"


# instantiate class
student1 = Student("Rafi", "12345", 22)
print(student1)
