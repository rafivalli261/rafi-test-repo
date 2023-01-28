import pyqrcode
from pyqrcode import QRCode

# string which represent the QR Code
s = "https://medium.com/coders-camp/60-python-projects-with-source-code-919cd8a6e512"

# Generate QR Code
url = pyqrcode.create(s)

# Create and save the png file naming "myqr.png"
url.svg("pythonproject.svg", scale=8)