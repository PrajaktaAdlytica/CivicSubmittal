import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import opentype from 'opentype.js';
import wawoff from 'wawoff2';
import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),out=path.join(root,'public/brand');
const master=await fs.readFile(path.join(root,'scripts/brand/mark-master.svg'),'utf8');
const art=master.slice(master.indexOf('<g fill=')).replace(/<\/svg>$/,'').replace('fill="#232629"','fill="currentColor"');
const mh=Number(master.match(/viewBox="0 0 256 ([\d.]+)"/)[1]);
async function svg(name,body,w,h,color='#232629',bg=''){
const s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="CivicSubmittal Drawing Clasp"><title>CivicSubmittal — Drawing Clasp</title>${bg?`<path fill="${bg}" d="M0 0H${w}V${h}H0Z"/>`:''}<g fill="${color}" color="${color}">${body}</g></svg>`;await fs.writeFile(path.join(out,name),s);return s}
const woff=await fs.readFile(path.join(root,'node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2'));
const ttf=await wawoff.decompress(woff);const font=opentype.parse(ttf.buffer.slice(ttf.byteOffset,ttf.byteOffset+ttf.byteLength));font.variation.set({wght:650});
const glyphPath=new opentype.Path();let penX=0,prev=null;for(const char of 'CivicSubmittal'){const glyph=font.charToGlyph(char);if(prev)penX+=font.getKerningValue(prev,glyph)*70/font.unitsPerEm;glyphPath.extend(glyph.getPath(penX,0,70,{variation:{wght:650}},font));penX+=(glyph.advanceWidth/font.unitsPerEm-.035)*70;prev=glyph;}const bb=glyphPath.getBoundingBox();const ww=+(bb.x2-bb.x1+2).toFixed(3),wh=+(bb.y2-bb.y1+2).toFixed(3);
const word=`<g transform="translate(${1-bb.x1} ${1-bb.y1})"><path d="${glyphPath.toPathData(3)}"/></g>`;
for(const [key,c] of Object.entries({ink:'#232629',white:'#fcfbf7',citron:'#e4f16b',black:'#000000'})){
 await svg(`mark-${key}.svg`,art,256,mh,c);
 await svg(`wordmark-${key}.svg`,word,ww,wh,c);
 await svg(`logo-horizontal-${key}.svg`,`<g transform="translate(0 4) scale(.36)">${art}</g><g transform="translate(110 ${(82-wh)/2})">${word}</g>`,ww+114,82,c);
 await svg(`logo-stacked-${key}.svg`,`<g transform="translate(${(ww-170)/2} 0) scale(${170/256})">${art}</g><g transform="translate(0 155)">${word}</g>`,ww,155+wh+4,c);
}
await svg('mark-reverse.svg',art,256,mh,'#ffffff');
const micro=(await fs.readFile(path.join(out,'micro-paths.txt'),'utf8'));
await svg('mark-micro.svg',micro,64,64);
const fav=await svg('favicon.svg',`<g transform="translate(6 5) scale(.8)">${micro}</g>`,64,64,'#232629','#e4f16b');
for(const size of [16,32,48,180,192,512]){await sharp(Buffer.from(fav)).resize(size,size).png().toFile(path.join(out,size===180?'apple-touch-icon.png':`favicon-${size}.png`))}
execFileSync('python3',['-c',`from PIL import Image\nImage.open('${out}/favicon-512.png').save('${out}/favicon.ico',sizes=[(16,16),(32,32),(48,48)])`]);
for(const name of ['favicon.svg','favicon.ico','apple-touch-icon.png','favicon-16.png','favicon-32.png','favicon-192.png','favicon-512.png'])await fs.copyFile(path.join(out,name),path.join(root,'public',name));
await fs.copyFile(path.join(out,'favicon-32.png'),path.join(root,'public/favicon.png'));
await fs.writeFile(path.join(root,'public/site.webmanifest'),JSON.stringify({name:'CivicSubmittal',short_name:'CivicSubmittal',start_url:'/',display:'standalone',background_color:'#fcfbf7',theme_color:'#232629',icons:[{src:'/favicon-192.png',sizes:'192x192',type:'image/png'},{src:'/favicon-512.png',sizes:'512x512',type:'image/png'}]},null,2));
const licenseFiles=await fs.readdir(path.join(root,'node_modules/@fontsource-variable/inter-tight'));for(const file of licenseFiles.filter(n=>/license/i.test(n)))await fs.copyFile(path.join(root,'node_modules/@fontsource-variable/inter-tight',file),path.join(out,'FONT-LICENSE.txt'));
console.log('Built vector lockups, outlined wordmarks and complete favicon set.');
