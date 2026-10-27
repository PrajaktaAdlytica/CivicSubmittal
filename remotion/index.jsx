import React from 'react';
import {registerRoot,Composition} from 'remotion';
import {AtlasFilm,CityScene,LayersScene,BrandScene} from '../src/intro/AtlasFilm';
import '@fontsource-variable/inter-tight';
import '@fontsource/ibm-plex-mono/latin-400.css';
registerRoot(()=> <>
 <Composition id="CivicSubmittalIntro" component={AtlasFilm} width={1440} height={900} fps={30} durationInFrames={270}/>
 <Composition id="MobileIntro" component={AtlasFilm} width={390} height={844} fps={30} durationInFrames={270}/>
 <Composition id="CityAndParcel" component={CityScene} width={1440} height={900} fps={30} durationInFrames={132}/>
 <Composition id="DrawingAndEvidence" component={LayersScene} width={1440} height={900} fps={30} durationInFrames={165}/>
 <Composition id="BrandSignature" component={BrandScene} width={1440} height={900} fps={30} durationInFrames={36}/>
</>);
