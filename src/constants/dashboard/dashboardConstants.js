import {
  HeartOutlined,
  TrophyOutlined,
  WechatOutlined,
  BookOutlined,
  PhoneOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

export const cardMediumList = [
  { heading: "Backlog", number: "288", icon: <BookOutlined /> },
  { heading: "Followup", number: "12", icon: <WechatOutlined /> },
  { heading: "Win", number: "22", icon: <TrophyOutlined /> },
  { heading: "Lost", number: "43", icon: <HeartOutlined /> },
];

export const cardSmallList = [
  { heading: "Incoming Calls", number: "28", icon: <PhoneOutlined /> },
  { heading: "Outgoing Calls", number: "12", icon: <UserAddOutlined /> },
  { heading: "Successful", number: "22", icon: <TrophyOutlined /> },
  { heading: "Lost", number: "43", icon: <HeartOutlined /> },
];

export const cardLargeList = [
  {
    name: "Oscar Holloway",
    amount: "+1,500",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    leads: "22",
    transactions: "+1 trade",
  },
  {
    name: "Owen Chambers",
    amount: "+10,000",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    leads: "12",
    transactions: "+12 trade",
  },
  {
    name: "Gabriel Flowers",
    amount: "+1,500",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    leads: "43",
    transactions: "+15 trade",
  },
];

export const teamsList = [
  {
    team: "Lead Generation Team",
    leader: "Violet Robbins",
    agents: 12,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    tasks: 132,
  },
  {
    team: "Retention Team",
    leader: "Violet Robbins",
    agents: 12,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    tasks: 111
    ,
  },
  {
    team: "Digital Marketing Team",
    leader: "Violet Robbins",
    agents: 12,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    tasks: 100,
  },
];
