"use client"
import React, { useEffect, useRef, memo } from 'react';

function TopTableList({ coin }) {
    const contariner = useRef();

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
            {
            "symbol": "${coin}",
            "width": "100%",
            "height": 220,
            "locale": "tr",
            "dateRange": "12M",
            "colorTheme": "dark",
            "isTransparent": true,
            "autosize": false,
            "largeChartUrl": ""
            }`;
            contariner?.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={contariner}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}

export default memo(TopTableList);
