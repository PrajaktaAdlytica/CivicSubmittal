import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Header,Footer,MotionProvider} from './ui';
import {editorialPages} from './data';
import {Home,ProductsPage,ProductPage,EditorialPage,CoveragePage,SourcesPage,PricingPage,PilotPage,ResultsPage,ResourcesPage,ResourceArticle,LeadPage,AccessPage,LegalPage,DemoEntry,DemoQueue,DemoRecord,DemoReport,NotFound} from './pages';
export function App(){return <BrowserRouter><MotionProvider><Header/><Routes>
 <Route path="/" element={<Home/>}/>
 {Object.keys(editorialPages).map(path=><Route key={path} path={path} element={<EditorialPage/>}/>)}
 <Route path="/products" element={<ProductsPage/>}/><Route path="/products/:slug" element={<ProductPage/>}/>
 <Route path="/coverage" element={<CoveragePage/>}/><Route path="/coverage/philadelphia/tenant-improvements" element={<CoveragePage detail/>}/>
 <Route path="/sources" element={<SourcesPage/>}/><Route path="/pricing" element={<PricingPage/>}/><Route path="/pilot" element={<PilotPage/>}/><Route path="/results" element={<ResultsPage/>}/>
 <Route path="/resources" element={<ResourcesPage/>}/><Route path="/resources/:slug" element={<ResourceArticle/>}/>
 <Route path="/request-demo" element={<LeadPage/>}/><Route path="/contact" element={<LeadPage contact/>}/>
 <Route path="/sign-in" element={<AccessPage/>}/><Route path="/access-help" element={<AccessPage help/>}/>
 <Route path="/legal/privacy" element={<LegalPage/>}/><Route path="/legal/terms" element={<LegalPage terms/>}/>
 <Route path="/demo" element={<DemoEntry/>}/><Route path="/demo/queue" element={<DemoQueue/>}/><Route path="/demo/projects/:id" element={<DemoRecord/>}/><Route path="/demo/report" element={<DemoReport/>}/>
 <Route path="*" element={<NotFound/>}/>
 </Routes><Footer/></MotionProvider></BrowserRouter>}
