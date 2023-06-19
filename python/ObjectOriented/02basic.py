class Student:
    def __init__(self, name: str, id: str) -> None:
        self.name = name
        self.id = id

    def __str__(self) -> str:
        return f"This is student named {self.name} with id {self.id}"

# Inheritance
# SCA = Student Representative Assembly
# SC = Student Council

# simply inherit a class by put it into the child inner parentheses


class SCA(Student):
    types = "Student Representative Assembly"

    def __init__(self, name: str, id: str, position: str) -> None:
        super().__init__(name, id)
        self.position = position

    # self already contains all the property for both parent and child
    def __str__(self) -> str:
        return f"This is {self.name}. He is a {self.position} in {self.types}"


class SC(Student):
    types = "Student Council"

    def __init__(self, name: str, id: str, position: str) -> None:
        super().__init__(name, id)
        self.position = position

    # This call method from the parent
    def __str__(self) -> str:
        return super().__str__()


sca1 = SCA("Andi", "12345", "Chairman")
sc1 = SC("Siti", "13152", "Secretary")

# print from __str__()
print(sc1)
print(sca1)
