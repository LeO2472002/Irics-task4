import React, { useState } from 'react';
import InputLinks from './components/InputLink';
import LinkList from './components/LinkList';
import IframeRenderer from './components/IframeRenderer';


function App() {
  const [validLinks, setValidLinks] = useState([]);
 

  const handleSubmitLink =(link) => {
    if (link.includes('youtube') || link.includes('tiktok') || link.includes('instagram')) {
      setValidLinks([link, ...validLinks]);
    }
     else {
      alert('Invalid link! Only YouTube, TikTok, and Instagram links are allowed.');
    }
   
  };
 
  return (
    <div >
      <h3>Social Media Link Viewer</h3>
      <div  >
        
      <InputLinks onSubmit={(link) => handleSubmitLink(link, setValidLinks, validLinks)} />
      <LinkList links={validLinks} />
      <IframeRenderer links={validLinks} />
      
      </div>
      </div>
  );
}

export default App;
