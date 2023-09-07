import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardPage from "./dashboard-page";
import AnalyticsPage from "./analytics-page";
import OrderDetailPage from "./order-detail-page";
import OrderListPage from "./order-list-page";
import CustomerPage from "./customer-page";
import ReviewsPage from "./reviews-page";
import FoodPage from "./food-page";
import FoodDetailPage from "./food-detail-page";
import CustomerDetailPage from "./customer-detail-page";
import CalenderPage from "./calender-page";
import ChatPage from "./chat-page";
import WalletPage from "./wallet-page";
import { TiHomeOutline } from "react-icons/ti";
import { BsListColumnsReverse, BsPeople, BsChatDots } from "react-icons/bs";
import { GrNote } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { BiPencil, BiUser } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";
import { PiNotePencilDuotone } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { CiWallet } from "react-icons/ci";
import DashboardHeader from "../../components/header";
import AppDrawer from "../../components/drawer";


type Page = {
  name: string;
  route: string;
  icon: React.ReactNode;
};

const drawerWidth = 240;

export default function Dashboard(props: { window?: () => Window }) {

  const pagesArr: Page[] = [
    {
      name: "Dashboard",
      route: "",
      icon: <TiHomeOutline />,
    },
    {
      name: "OrderList",
      route: "order-list-page",
      icon: <BsListColumnsReverse />,
    },
    {
      name: "OrderDetail",
      route: "order-detail-page",
      icon: <GrNote />,
    },
    {
      name: "Customer",
      route: "customer-page",
      icon: <BsPeople />,
    },
    {
      name: "Analytics",
      route: "analytics-page",
      icon: <SiSimpleanalytics />,
    },
    {
      name: "Reviews",
      route: "reviews-page",
      icon: <BiPencil />,
    },
    {
      name: "Food",
      route: "food-page",
      icon: <RiFilePaper2Line />,
    },
    {
      name: "FoodDetail",
      route: "food-detail-page",
      icon: <PiNotePencilDuotone />,
    },
    {
      name: "CustomerDetail",
      route: "customer-detail-page",
      icon: <BiUser />,
    },
    {
      name: "Calender",
      route: "calender-page",
      icon: <SlCalender />,
    },
    {
      name: "Chat",
      route: "chat-page",
      icon: <BsChatDots />,
    },
    {
      name: "Wallet",
      route: "wallet-page",
      icon: <CiWallet />,
    },
  ];


  const navigate = useNavigate();

  const openPage = (route: string) => {
    navigate(`/dashboard/${route}`);
  };

  return (
    <Box sx={{ display: "flex", }}>
      {/* header */}
      <DashboardHeader />
      {/* drawer */}
     <AppDrawer>
     {pagesArr.map((x, index) => (
          <ListItem sx={{ height:'7vh', paddingX:3, paddingY:3}} key={index} disablePadding>
            <ListItemButton
              onClick={
                  () => openPage(x.route)
              }
              className="item_active"
            >
              <ListItemIcon sx={{ fontSize: "1.5rem" }} className="item_active_icon">
                {x.icon ? x.icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
     </AppDrawer>
      {/* routes */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height:'100vh'
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="" element={<DashboardPage />} />
          <Route path="order-list-page" element={<OrderListPage />} />
          <Route path="order-detail-page" element={<OrderDetailPage />} />
          <Route path="customer-page" element={<CustomerPage />} />
          <Route path="analytics-page" element={<AnalyticsPage />} />
          <Route path="reviews-page" element={<ReviewsPage />} />
          <Route path="food-page" element={<FoodPage />} />
          <Route path="food-detail-page" element={<FoodDetailPage />} />
          <Route path="customer-detail-page" element={<CustomerDetailPage />} />
          <Route path="calender-page" element={<CalenderPage />} />
          <Route path="chat-page" element={<ChatPage />} />
          <Route path="wallet-page" element={<WalletPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
