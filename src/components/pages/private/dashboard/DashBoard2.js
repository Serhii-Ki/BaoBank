import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import BalanceDisplay from "./DashboardComponents/BalanceDisplay";

const DashBoard2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [balance, setBalance] = useState(40000);
  const [showBalance, setShowBalance] = useState(true);

  const toggleVisibility = () => {
    setShowBalance(!showBalance);
  };

  const listServices = [
    {
      element: <SyncAltOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Transfer",
      link: "/transfer",
    },
    {
      element: <PriceCheckOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Request money transfer",
      link: "/reqtransfer",
    },
    {
      element: <PeopleOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Manage group of friends",
      link: "/managegroup",
    },
    {
      element: <FastfoodOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Order food online",
      link: "/fastfood",
    },
    {
      element: <RedeemOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Give gifts",
      link: "/gifts",
    },
    {
      element: <BookOnlineOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Pay bills",
      link: "/paybills",
    },
    {
      element: <ConfirmationNumberIcon sx={{ fontSize: "2rem" }} />,
      text: "Buy movie tickets",
      link: "/buy",
    },
    {
      element: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
      text: "Consumer loans",
      link: "/consumer",
    },
    {
      element: <ElectricBoltIcon sx={{ fontSize: "2rem" }} />,
      text: "Electricity payment",
      link: null,
      hidden: !isExpanded,
    },
    {
      element: <WaterDropIcon sx={{ fontSize: "2rem" }} />,
      text: "Water payment",
      link: null,
      hidden: !isExpanded,
    },
    {
      element: <AirplanemodeActiveIcon sx={{ fontSize: "2rem" }} />,
      text: "Airfare",
      link: null,
      hidden: !isExpanded,
    },
    {
      element: <MoreHorizIcon sx={{ fontSize: "2rem" }} />,
      text: "All Services",
      link: null,
    },
  ].filter((item) => !item.hidden);
  return (
    <>
      {" "}
      <BalanceDisplay
        balance={balance}
        showBalance={showBalance}
        toggleVisibility={toggleVisibility}
      />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ padding: "16px" }}
      >
        {listServices.map((item, index) => (
          <Grid
            key={index}
            item
            xs={4}
            sm={3}
            md={2}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: "100%",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "12px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              {item.link === null ? (
                <Link
                  href={item.link}
                  underline="none"
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#272643",
                  }}
                >
                  {" "}
                  <IconButton
                    onClick={() => setIsExpanded(!isExpanded)}
                    sx={{ color: "#272643", fontSize: "2rem" }}
                    color="primary"
                  >
                    {item.element}
                  </IconButton>
                  <Typography variant="body2" align="center">
                    {item.text}
                  </Typography>
                </Link>
              ) : (
                <Link
                  href={item.link}
                  underline="none"
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#272643",
                  }}
                >
                  {" "}
                  <IconButton
                    sx={{ color: "#272643", fontSize: "2rem" }}
                    color="primary"
                  >
                    {item.element}
                  </IconButton>
                  <Typography variant="body2" align="center">
                    {item.text}
                  </Typography>
                </Link>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashBoard2;