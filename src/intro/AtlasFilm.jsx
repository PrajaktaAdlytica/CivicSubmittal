import React from 'react';
import {AbsoluteFill,Img,Sequence,interpolate,Easing,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.22,1,.36,1)};
const mono="'IBM Plex Mono',monospace";

export function CityScene(){
 const f=useCurrentFrame(),{fps,width,height}=useVideoConfig();const mobile=width<1000;
 return <AbsoluteFill style={{overflow:'hidden',background:'#181e20',opacity:interpolate(f,[3.55*fps,4.4*fps],[1,0],clamp)}}>
  <Img src={staticFile('assets/intro-city.webp')} style={{position:'absolute',width:'100%',height:'100%',objectFit:'cover',objectPosition:mobile?'79% center':'center',transformOrigin:mobile?'79% 48%':'70% 50%',scale:interpolate(f,[0,1.8*fps,3.9*fps],[1.04,1.12,1.48],clamp),rotate:interpolate(f,[0,4*fps],['-1deg','1.5deg'],clamp),opacity:interpolate(f,[0,.7*fps],[.42,1],clamp)}}/>
  <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(10,16,18,.34),transparent 32%,rgba(8,14,16,.45))'}}/>
  <div style={{position:'absolute',left:mobile?24:56,bottom:mobile?160:145,color:'#faf9f0',opacity:interpolate(f,[0,.5*fps,2.3*fps,2.7*fps],[0,1,1,0],clamp)}}>
   <div style={{fontFamily:mono,fontSize:mobile?10:11,letterSpacing:2,marginBottom:22}}>01 / LOCATE THE WORK</div>
   <div style={{overflow:'hidden'}}><div style={{fontSize:mobile?49:Math.min(width*.065,104),letterSpacing:'-.055em',lineHeight:1.01,fontWeight:500,translate:`0 ${interpolate(f,[0,.9*fps],[80,0],clamp)}px`}}>Scope begins<br/>with a place.</div></div>
  </div>
  <div style={{position:'absolute',left:mobile?24:'61%',top:mobile?'27%':'27%',padding:'18px 22px',background:'#e0ed88',color:'#202629',boxShadow:'0 18px 60px #0003',opacity:interpolate(f,[2*fps,2.45*fps,3.7*fps,4.1*fps],[0,1,1,0],clamp),translate:`0 ${interpolate(f,[2*fps,2.6*fps],[24,0],clamp)}px`}}>
   <div style={{fontFamily:mono,fontSize:10,letterSpacing:1}}>ONE PROJECT / TI-107</div><div style={{fontSize:mobile?21:26,marginTop:8,letterSpacing:'-.03em'}}>A place to start.</div><div style={{fontFamily:mono,fontSize:9,marginTop:12}}>Fictional site · scope unverified</div>
  </div>
 </AbsoluteFill>
}

function DrawingPlane({level=0,highlight=false}){
 const f=useCurrentFrame(),{fps,width,height}=useVideoConfig();const mobile=width<1000;
 const spread=interpolate(f,[0,1.3*fps,3.9*fps,4.7*fps],[0,1,1,0],clamp);
 const y=(level-1)*(mobile?(width<700?100:150):Math.min(height*.2,180))*spread;
 return <Img src={staticFile('assets/intro-drawing.webp')} style={{position:'absolute',width:mobile?Math.min(width*.98,500):Math.min(width*.40,620),maxWidth:'none',left:'50%',top:'50%',transform:`translate(-50%,calc(-50% + ${y}px)) scaleY(.6)`,filter:highlight?'drop-shadow(0 22px 18px #30351e20)':'grayscale(1) drop-shadow(0 22px 18px #30351e15)',opacity:interpolate(f,[0,.4*fps],[0,highlight?1:.94],clamp),zIndex:3-level}}/>
}
export function LayersScene(){
 const f=useCurrentFrame(),{fps,width}=useVideoConfig();const mobile=width<1000;
 return <AbsoluteFill style={{opacity:interpolate(f,[0,.6*fps],[0,1],clamp),background:'#f7f7f0'}}>
  <Img src={staticFile('assets/parcel-map.webp')} style={{position:'absolute',height:'110%',width:mobile?'150%':'63%',maxWidth:'none',objectFit:'cover',left:mobile?'-70%':'-24%',top:'4%',opacity:interpolate(f,[0,1.3*fps,2.5*fps],[.1,.18,.65],clamp),maskImage:'linear-gradient(to right,#000,transparent)'}}/>
  <div style={{position:'absolute',left:mobile?24:56,top:mobile?105:115,opacity:interpolate(f,[.3*fps,.7*fps,2.1*fps,2.6*fps],[0,1,1,0],clamp)}}><div style={{fontFamily:mono,fontSize:10,letterSpacing:2,marginBottom:14}}>02 / REVEAL THE LAYERS</div><div style={{fontSize:mobile?36:54,letterSpacing:'-.05em',lineHeight:1.05}}>One address.<br/>Many dependencies.</div></div>
  <div style={{position:'absolute',inset:mobile?'7% 0 0':'0',translate:`${interpolate(f,[2.3*fps,3.2*fps],[mobile?0:90,0],clamp)}px 0`,scale:interpolate(f,[0,1.1*fps,3.8*fps,4.7*fps],[.75,1,1,.8],clamp)}}>
   <DrawingPlane level={2}/><DrawingPlane level={1} highlight/><DrawingPlane level={0}/>
  </div>
  {!mobile&&['Evidence / reference','Drawing / design','Source / context'].map((t,i)=><div key={t} style={{position:'absolute',left:'74%',top:`${32+i*17}%`,display:'flex',alignItems:'center',gap:13,fontFamily:mono,fontSize:10,letterSpacing:1,textTransform:'uppercase',opacity:interpolate(f,[(.6+i*.13)*fps,(1.1+i*.13)*fps,2.2*fps,2.7*fps],[0,1,1,0],clamp),translate:`${interpolate(f,[.7*fps,1.3*fps],[24,0],clamp)}px 0`}}><span style={{width:70,height:1,background:'#8d9e34'}}/><span style={{width:7,height:7,borderRadius:'50%',background:'#71802e',boxShadow:'0 0 0 4px #dfe99c'}}/>{t}</div>)}
  <div style={{position:'absolute',left:mobile?24:56,top:mobile?undefined:'48%',bottom:mobile?155:undefined,width:mobile?Math.min(width*.38,180):240,background:'#fdfcf7',padding:mobile?17:24,border:'1px solid #dadbd0',boxShadow:'0 15px 40px #242c2410',opacity:interpolate(f,[2.2*fps,2.8*fps,4*fps,4.4*fps],[0,1,1,0],clamp),translate:`${interpolate(f,[2.2*fps,3*fps],[-60,0],clamp)}px 0`}}><div style={{fontFamily:mono,fontSize:9,marginBottom:9}}>PROJECT SITE</div><div style={{fontSize:mobile?27:39,letterSpacing:'-.05em'}}>TI-107</div><div style={{fontSize:11,marginTop:10}}>Commercial tenant improvement</div></div>
  <div style={{position:'absolute',right:mobile?20:56,top:mobile?undefined:'33%',bottom:mobile?130:undefined,width:mobile?Math.min(width*.45,220):275,background:'#fdfcf7',border:'1px solid #dadbd0',padding:mobile?15:22,boxShadow:'0 15px 40px #242c2410',opacity:interpolate(f,[2.5*fps,3.1*fps,4*fps,4.4*fps],[0,1,1,0],clamp),translate:`${interpolate(f,[2.5*fps,3.2*fps],[60,0],clamp)}px 0`}}>
   <div style={{fontSize:mobile?12:16,fontWeight:600,marginBottom:14}}>Architect review pending</div>
   {['Missing life-safety drawing','Coordinate with architect','Source effective date unknown'].map((t,i)=><div key={t} style={{fontSize:mobile?9:12,padding:'13px 0',borderTop:'1px solid #dedfd5',display:'flex',gap:12,alignItems:'center',opacity:interpolate(f,[(2.7+i*.12)*fps,(3.1+i*.12)*fps],[0,1],clamp)}}><span style={{width:5,height:20,background:i===0?'#de9b7a':'#d8e981',flexShrink:0}}/>{t}</div>)}
  </div>
 </AbsoluteFill>
}
export function BrandScene(){
 const f=useCurrentFrame(),{fps,width}=useVideoConfig();const mobile=width<1000;
 return <AbsoluteFill style={{justifyContent:'center',alignItems:'center',background:'#f7f7f0',opacity:interpolate(f,[0,.5*fps],[0,1],clamp)}}>
  <div style={{display:'flex',alignItems:'center',flexDirection:'column',gap:mobile?24:30,translate:`0 ${interpolate(f,[0,.7*fps],[35,0],clamp)}px`}}><Img src={staticFile('brand/logo-horizontal-ink.svg')} style={{width:mobile?width-72:Math.min(width*.46,680)}}/><div style={{fontSize:mobile?26:44,letterSpacing:'-.045em',textAlign:'center'}}>One place. Every dependency.</div></div>
  <div style={{position:'absolute',bottom:'14%',fontFamily:mono,fontSize:9,letterSpacing:2}}>THE WORKSPACE BEGINS BELOW ↓</div>
 </AbsoluteFill>
}
export function AtlasFilm(){const {fps}=useVideoConfig();return <AbsoluteFill style={{background:'#f7f7f0',color:'#242a2b',fontFamily:"'Inter Tight Variable',Arial,sans-serif",overflow:'hidden'}}><Sequence name="City and parcel" durationInFrames={4.4*fps} premountFor={fps}><CityScene/></Sequence><Sequence name="Drawing and evidence" from={3.5*fps} durationInFrames={5.5*fps} premountFor={fps}><LayersScene/></Sequence><Sequence name="Drawing Clasp signature" from={7.8*fps} premountFor={fps}><BrandScene/></Sequence></AbsoluteFill>}
