"""Reproduce the selected Drawing Clasp vector and favicon package."""
from pathlib import Path
from PIL import Image, ImageOps
import subprocess, re, io, json, shutil
import xml.etree.ElementTree as ET





root=Path(__file__).resolve().parent.parent
out=root/'public/brand';out.mkdir(exist_ok=True)
source=Image.open(root/'public/identity/drawing-clasp-master.png').convert('RGBA')
mask=source.getchannel('A').point(lambda x:255 if x>150 else 0)
bbox=mask.getbbox(); mask=ImageOps.expand(mask.crop(bbox),border=16,fill=0)
ImageOps.invert(mask).convert('1').save('/tmp/civic-clasp.pbm')
subprocess.run(['potrace','/tmp/civic-clasp.pbm','--svg','--output','/tmp/civic-clasp.svg','--turdsize','12','--alphamax','1.15','--opttolerance','0.45'],check=True)
trace=ET.parse('/tmp/civic-clasp.svg').getroot();group=trace.find('{http://www.w3.org/2000/svg}g'); group.attrib.pop('fill',None);group.attrib.pop('stroke',None)
ET.register_namespace('','http://www.w3.org/2000/svg')
art=ET.tostring(group,encoding='unicode'); w,h=mask.size
# The standalone masters have a normalized viewBox and no raster payload.
mark=f'<g transform="scale({256/w:.8f})">{art}</g>'; mh=h*256/w
colors={'ink':'#232629','white':'#fcfbf7','citron':'#e4f16b'}
def svg(name,body,width,height,color='#232629',background=None):
 bg=f'<path fill="{background}" d="M0 0H{width}V{height}H0Z"/>' if background else ''
 code=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" role="img" aria-label="CivicSubmittal Drawing Clasp"><title>CivicSubmittal — Drawing Clasp</title>{bg}<g fill="{color}">{body}</g></svg>'
 (out/name).write_text(code);return code
for key,color in colors.items():svg(f'mark-{key}.svg',mark,256,round(mh,4),color)

print("Traced selected Drawing Clasp master to clean SVG paths.")
