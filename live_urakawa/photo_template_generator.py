import sys
import os
import glob

args = sys.argv

if not args[1:2]:
    raise Exception("please input diary dir")

os.chdir(args[1])

image_descs = [f'{file}' for file in glob.glob('*.jpg')]

print(image_descs)

with open(f'01.md', mode='a') as md:
    map