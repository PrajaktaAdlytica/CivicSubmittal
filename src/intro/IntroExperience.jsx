import React,{useCallback,useEffect,useLayoutEffect,useRef,useState} from 'react';
import {Player} from '@remotion/player';
import {AtlasFilm} from './AtlasFilm';
import {Icon,useMotion} from '../ui';
import './intro.css';
const assets=['/assets/intro-city.webp','/assets/intro-drawing.webp','/assets/parcel-map.webp','/brand/logo-horizontal-ink.svg'];

export function IntroExperience(){
 const {reduced,systemReduced,setPaused,lenis}=useMotion();
 const root=useRef(),player=useRef(),manual=useRef(false),handoff=useRef(false),completion=useRef();
 const [size,setSize]=useState({width:1440,height:900});const [ready,setReady]=useState(false),[failed,setFailed]=useState(false),[playing,setPlaying]=useState(false),[ended,setEnded]=useState(false),[frame,setFrame]=useState(0);
 useLayoutEffect(()=>{const observer=new ResizeObserver(([entry])=>setSize({width:Math.round(entry.contentRect.width),height:Math.round(entry.contentRect.height)}));observer.observe(root.current);return()=>observer.disconnect()},[]);
 useEffect(()=>{let active=true;Promise.all([document.fonts.ready,...assets.map(src=>new Promise((resolve,reject)=>{const img=new Image();img.onload=resolve;img.onerror=reject;img.src=src}))]).then(()=>{if(active)setReady(true)}).catch(()=>{if(active)setFailed(true)});return()=>{active=false}},[]);
 const moveToHero=useCallback((explicit=false)=>{
  const hero=document.getElementById('hero');if(!hero)return;
  player.current?.pause();handoff.current=true;
  const done=()=>{handoff.current=false;if(explicit)hero.focus({preventScroll:true})};
  if(reduced){hero.scrollIntoView({behavior:'instant',block:'start'});done()}
  else if(lenis.current)lenis.current.scrollTo(hero,{duration:1.35,easing:t=>1-Math.pow(1-t,4),onComplete:done});
  else {hero.scrollIntoView({behavior:'smooth',block:'start'});completion.current=setTimeout(done,1400)}
 },[reduced,lenis]);
 useEffect(()=>{
  const cancel=()=>{manual.current=true;if(handoff.current){handoff.current=false;lenis.current?.scrollTo(window.scrollY,{immediate:true});clearTimeout(completion.current)}};
  const key=e=>{if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(e.key)&&!e.target.closest('button,a,input,select,textarea'))cancel()};
  const scroll=()=>{if(window.scrollY>60&&!handoff.current){manual.current=true;player.current?.pause()}};
  const visibility=()=>{if(document.hidden){manual.current=true;player.current?.pause()}};
  window.addEventListener('wheel',cancel,{passive:true});window.addEventListener('touchstart',cancel,{passive:true});window.addEventListener('keydown',key);window.addEventListener('scroll',scroll,{passive:true});document.addEventListener('visibilitychange',visibility);
  return()=>{window.removeEventListener('wheel',cancel);window.removeEventListener('touchstart',cancel);window.removeEventListener('keydown',key);window.removeEventListener('scroll',scroll);document.removeEventListener('visibilitychange',visibility);clearTimeout(completion.current)}
 },[lenis]);
 useEffect(()=>{
  const p=player.current;if(!p)return;
  const onFrame=e=>setFrame(e.detail.frame),onPlay=()=>setPlaying(true),onPause=()=>setPlaying(false),onEnd=()=>{setEnded(true);setPlaying(false);if(!manual.current&&window.scrollY<40)moveToHero(false)};
  p.addEventListener('frameupdate',onFrame);p.addEventListener('play',onPlay);p.addEventListener('pause',onPause);p.addEventListener('ended',onEnd);
  if(ready&&!reduced&&!manual.current&&!document.hidden)p.play();
  return()=>{p.removeEventListener('frameupdate',onFrame);p.removeEventListener('play',onPlay);p.removeEventListener('pause',onPause);p.removeEventListener('ended',onEnd)}
 },[ready,reduced,moveToHero]);
 function skip(){manual.current=true;moveToHero(true)}
 function togglePlay(){if(playing)player.current?.pause();else{if(ended){player.current?.seekTo(0);setEnded(false)}manual.current=false;player.current?.play()}}
 function reduceMotion(){manual.current=true;player.current?.pause();setPaused(true)}
 const still=reduced||failed;const light=still||frame>=121;
 return <section ref={root} className={'cinematic-intro '+(light?'intro-light':'intro-dark')} aria-label="CivicSubmittal introduction" data-intro-state={still?'reduced':ended?'ended':playing?'playing':'paused'}>
  <div className="intro-stage" aria-hidden="true">
   {still?<div className="intro-still"><img className="still-map" src="/assets/parcel-map.webp" alt=""/><img className="still-drawing" src="/assets/exploded-plans.webp" alt=""/><div className="still-copy"><span>ONE ADDRESS, MANY LAYERS</span><img src="/brand/logo-horizontal-ink.svg" alt=""/><p>One place.<br/>Every dependency.</p></div></div>:<>
    {!ready&&<img className="intro-poster" src="/assets/intro-city.webp" alt=""/>}
    {ready&&<Player ref={player} component={AtlasFilm} compositionWidth={size.width} compositionHeight={size.height} durationInFrames={270} fps={30} style={{width:'100%',height:'100%'}} initiallyMuted controls={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} moveToBeginningWhenEnded={false} showPosterWhenUnplayed={false} errorFallback={()=> <div className="intro-error">The introduction is unavailable. Continue to the workspace below.</div>}/>}
   </>}
  </div>
  <div className="intro-top"><span className="intro-caption">CIVICSUBMITTAL <span>/ AN INTRODUCTION</span></span><button className="intro-skip" onClick={skip}>{still?'Continue to site':'Skip intro'}<Icon name="arrowDown" size={17}/></button></div>
  <p className="sr-only">An illustrative city focuses on a fictional project, TI-107. Drawing layers separate to connect project scope, source evidence and human review. This is a concept preview with synthetic data and no live coverage.</p>
  <div className="intro-bottom"><div className="intro-controls">
   {!still&&<button onClick={togglePlay} disabled={!ready} aria-label={ended?'Replay intro':playing?'Pause intro':'Play intro'}><Icon name={playing?'pause':'play'} size={15}/>{ended?'Replay':playing?'Pause':'Play'}</button>}
   {!still?<button onClick={reduceMotion}>Reduce motion</button>:<span className="intro-reduced-label">{failed?'Preview unavailable':'Reduced motion · no autoplay'}</span>}
   {reduced&&!systemReduced&&<button onClick={()=>{manual.current=false;setEnded(false);setFrame(0);setPaused(false)}}>Enable motion</button>}
  </div><span className="intro-disclosure">DEMO · SYNTHETIC DATA<span>Illustrative map · no live coverage</span></span><span className="intro-chapter">{still?'SCROLL TO EXPLORE':frame<105?'01 / PLACE':frame<234?'02 / LAYERS':'03 / WORKSPACE'}</span></div>
  <div className="intro-progress" aria-hidden="true"><span style={{transform:`scaleX(${still?1:frame/269})`}}/></div>
 </section>
}
