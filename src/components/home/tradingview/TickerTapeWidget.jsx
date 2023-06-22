"use client";

import { useEffect, useRef } from "react";

const TickerTapeWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
    "symbols": [
        {
        "description": "Bitcoin",
        "proName": "BINANCE:BTCTRY"
        },
        {
        "description": "Ethereum",
        "proName": "BINANCE:ETHTRY"
        },
        {
        "description": "Ripple",
        "proName": "BINANCE:XRPTRY"
        },
        {
        "description": "EUR/USD",
        "proName": "FX:EURUSD"
        },
        {
        "description": "BIST100",
        "proName": "BIST:XU100"
        },
        {
        "description": "BIST30",
        "proName": "BIST:XU030"
        }
    ],
    "showSymbolLogo": true,
    "colorTheme": "dark",
    "isTransparent": true,
    "displayMode": "regular",
    "locale": "tr"
    }`;
    container?.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TickerTapeWidget;
