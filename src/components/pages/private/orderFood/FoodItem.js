import React from "react";
import {
  Box,
  Typography,
  Avatar,

  Grid,
  Container,

} from "@mui/material";
import CustomBtn from "../../../designComponents/CustomBtn";
import { useNavigate } from "react-router-dom";

import CustomAppBar from "../../../designComponents/CustomAppBar";
const FoodItem = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/fastfood");
  };
  const restaurant = {
    id: 1,
    name: "Gourmet Eats",
    description:
      "Gourmet Eats offers an exquisite dining experience with a blend of traditional and modern dishes.",
    imageUrl: "/images/gourmet-eats.jpg",
    menu: [
      {
        name: "Truffle Risotto",
        description: "Creamy risotto with black truffles and Parmesan cheese.",
        imageUrl: "/images/truffle-risotto.jpg",
        price: "550 $",
      },
      {
        name: "Grilled Salmon",
        description: "Freshly grilled salmon with  seasonal vegetables.",
        imageUrl: "/images/grilled-salmon.jpg",
        price: "650 $",
      },
      {
        name: "Grilled Salmon",
        description: "Freshly grilled salmon with  seasonal vegetables.",
        imageUrl: "/images/grilled-salmon.jpg",
        price: "650 $",
      },
      {
        name: "Grilled Salmon",
        description: "Freshly grilled salmon with  seasonal vegetables.",
        imageUrl: "/images/grilled-salmon.jpg",
        price: "650 $",
      },
    ],
  };

  return (
    <Container>
      <CustomAppBar text={restaurant.name} onClick={handleClick} />
      <Box
        p={2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {" "}
        <Avatar
          justifyContent={"center"}
          alt={restaurant.name}
          src={restaurant.imageUrl}
          style={{ width: "200px", height: "200px" }}
        />
        <Typography variant="h4">{restaurant.name}</Typography>
        <Typography variant="body1">{restaurant.description}</Typography>
      </Box>

      <Grid container spacing={2} marginTop="20px" marginBottom={"20px"}>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <Typography color={"#272643"} variant="h4">
            MENU
          </Typography>
        </Grid>
        {restaurant.menu.map((dish, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              boxShadow={2}
              p={2}
              justifyContent="center"
              alignItems="center"
              display="flex"
              flexDirection="column"
              height={"100%"}
            >
              <Avatar
                alt={dish.name}
                src={dish.imageUrl}
                style={{ width: "100px", height: "100px" }}
              />
              <Typography variant="h6">{dish.name}</Typography>
              <Typography>{dish.description}</Typography>
              <Typography color="textSecondary">{dish.price}</Typography>
              <CustomBtn variant="primary" text={"Заказать"} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FoodItem;
