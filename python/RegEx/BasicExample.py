# Basic Regex in Python

# import library
import re

# findall -> Returns a list containing all matches
# search -> Returns a Match object if there is a match anywhere in the string
# split -> Returns a list where the string has been split at each match
# sub -> Replaces one or many matches with a string

# The Match object has properties and methods used to retrieve information about the search, and the result:

# .span() returns a tuple containing the start-, and end positions of the match.
# .string returns the string passed into the function
# .group() returns the part of the string where there was a match

# Findall
txt = "The rain in Spain"
x = re.findall("ai", txt)
print(x)
