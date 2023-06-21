import {
  faBars,
  faWallet,
  faShuffle,
  faRightLeft,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
export const pieChartData = [
  {
    name: "Ethereum",
    icon: "/images/eth.png",
    value: 1476,
  },
  {
    name: "Bitcoin",
    icon: "/images/btc.png",
    value: 5248,
  },
  {
    name: "Dash",
    icon: "/images/dash.png",
    value: 1476,
  },
];
export const coinInformation = [
  {
    id: 1,
    name: "Bitcoin",
    shortscut: "BTC",
    icon: "/images/btc.png",
    color: "to-purple-700",
    wallet: 600,
    price: 5000,
    processes: [
      {
        id: 1,
        price: 6642.22,
        sellPrice: 1200,
        sellCount: 0.075,
        trend: "down",
      },
      {
        id: 2,
        price: 6264.35,
        sellPrice: 1200,
        sellCount: 0.034,
        trend: "down",
      },
      {
        id: 3,
        price: 6542.35,
        sellPrice: 1200,
        sellCount: 0.074,
        trend: "up",
      },
    ],
  },
  {
    id: 2,
    name: "Ethereum",
    shortscut: "ETH",
    icon: "/images/eth.png",
    color: "to-indigo-700",
    wallet: 600,
    price: 5000,
    processes: [
      {
        id: 1,
        price: 6642.22,
        sellPrice: 1200,
        sellCount: 0.075,
        trend: "down",
      },
      {
        id: 2,
        price: 6264.35,
        sellPrice: 1200,
        sellCount: 0.034,
        trend: "down",
      },
      {
        id: 3,
        price: 6542.35,
        sellPrice: 1200,
        sellCount: 0.074,
        trend: "up",
      },
    ],
  },
  {
    id: 3,
    name: "GridCoin",
    shortscut: "GRC",
    icon: "/images/grc.png",
    color: "to-blue-700",
    wallet: 600,
    price: 5000,
    processes: [
      {
        id: 1,
        price: 6642.22,
        sellPrice: 1200,
        sellCount: 0.075,
        trend: "down",
      },
      {
        id: 2,
        price: 6264.35,
        sellPrice: 1200,
        sellCount: 0.034,
        trend: "down",
      },
      {
        id: 3,
        price: 6542.35,
        sellPrice: 1200,
        sellCount: 0.074,
        trend: "up",
      },
    ],
  },
  {
    id: 4,
    name: "Aeternity",
    shortscut: "AE",
    icon: "/images/ae.png",
    color: "to-sky-700",
    wallet: 600,
    price: 5000,
    processes: [
      {
        id: 1,
        price: 6642.22,
        sellPrice: 1200,
        sellCount: 0.075,
        trend: "down",
      },
      {
        id: 2,
        price: 6264.35,
        sellPrice: 1200,
        sellCount: 0.034,
        trend: "down",
      },
      {
        id: 3,
        price: 6542.35,
        sellPrice: 1200,
        sellCount: 0.074,
        trend: "up",
      },
    ],
  },
];
export const renderMenu = [
  {
    id: 1,
    title: "Overview",
    icon: faBars,
    url: "/overview",
  },
  {
    id: 2,
    title: "Wallets",
    icon: faWallet,
    url: "/wallets",
  },
  {
    id: 3,
    title: "Transictions",
    icon: faShuffle,
    url: "/transictions",
  },
  {
    id: 4,
    title: "Exchange",
    icon: faRightLeft,
    url: "/exchange",
  },
  {
    id: 5,
    title: "Market",
    icon: faSquarePollVertical,
    url: "/market",
  },
];

export const spendingData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const fetchDashboardData = () => {};