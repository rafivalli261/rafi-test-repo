#! python
# lyric = open("cidro.txt")

# for text in lyric:
#     print(text.strip())

# lyric.close()

with open("cidro.txt") as lyric:
    for line in lyric:
        print(line.strip().upper()) 