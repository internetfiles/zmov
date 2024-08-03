import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    useEffect(() => {
        // Load the Google AdSense script
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.setAttribute('data-ad-client', 'ca-pub-4422065117489144');
        document.head.appendChild(script);

        // Initialize adsbygoogle
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div id="footer">
            <div id="footer-left">
                <div style={{ display: "flex", fontSize: "1.1rem", fontWeight: "bold", gap: "3px" }}>
                    <p></p>
                </div>
                <div style={{ fontSize: "0.875rem" }}>
                    <p></p>
                </div>
                <div style={{ fontSize: "0.875rem" }}></div>
            </div>
            <div id="footer-right">
                <ins className="adsbygoogle"
                     style={{ display: 'block' }}
                     data-ad-client="ca-pub-4422065117489144"
                     data-ad-slot="8514490355"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
            </div>
        </div>
    );
}
