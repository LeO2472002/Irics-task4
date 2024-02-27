// IframeRenderer.js

import React from 'react';
import ReactPlayer from 'react-player';
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

function IframeRenderer({ links }) {
  return (
    <div className="iframe-container">
      <h2>Render Iframe</h2>
      <div className="render-container">
        {links.map((link, index) => (
          <div className="render-item" key={index}>
            {link.includes('youtube') ? (
              <ReactPlayer
                title={`iframe-${index}`}
                url={link}
                width="400px"
                height="380px"
               
              />
            ) : link.includes('tiktok') ? (
              <div className="render-item">
                <TikTokEmbed url={link} width="400px"
                height="380px" />
              </div>
            ) : link.includes('instagram') ? (
              <div className="render-item">
              <InstagramEmbed url={link} width="400px"
              height="380px" hideCaption />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IframeRenderer;
