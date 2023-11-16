import React, { useState } from "react";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Burger Place",
    type: "Burgers",
    rating: 4.5,
    description: "Delicious burgers and fries",
  },
  {
    id: 2,
    name: "Sushi World",
    type: "Sushi",
    rating: 4.8,
    description: "Fresh sushi and rolls",
  },
  {
    id: 3,
    name: "Pizza Heaven",
    type: "Pizza",
    rating: 4.3,
    description: "Italian-style pizza",
  },
  {
    id: 4,
    name: "FastFood Express",
    type: "FastFood",
    rating: 4.0,
    description: "Quick and tasty meals",
  },
  {
    id: 5,
    name: "Gourmet Eats",
    type: "Fine Dining",
    rating: 4.9,
    description: "Exquisite fine dining experience",
  },
];

const OrderFood = () => {
  const [filter, setFilter] = useState({ type: "", rating: "" });

  const handleTypeChange = (event) => {
    setFilter({ ...filter, type: event.target.value });
  };

  const handleRatingChange = (event) => {
    setFilter({ ...filter, rating: event.target.value });
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      (filter.type ? restaurant.type === filter.type : true) &&
      (filter.rating ? restaurant.rating >= filter.rating : true)
    );
  });

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              value={filter.type}
              onChange={handleTypeChange}
              displayEmpty
            >
              <MenuItem value="">All Types</MenuItem>
              <MenuItem value="FastFood">FastFood</MenuItem>
              <MenuItem value="Sushi">Sushi</MenuItem>
              <MenuItem value="Pizza">Pizza</MenuItem>
              <MenuItem value="Burgers">Burgers</MenuItem>
              <MenuItem value="Fine Dining">Fine Dining</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              value={filter.rating}
              onChange={handleRatingChange}
              displayEmpty
            >
              <MenuItem value="">All Ratings</MenuItem>
              <MenuItem value={4.0}>4 stars & up</MenuItem>
              <MenuItem value={4.5}>4.5 stars & up</MenuItem>
              <MenuItem value={5.0}>5 stars</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {filteredRestaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
            <Box p={2} boxShadow={3} borderRadius={2} >
              <Avatar
                alt={restaurant.name}
                src={`/images/${restaurant.name}.jpg`}
              />
              <Typography variant="h6">{restaurant.name}</Typography>
              <Typography>{restaurant.description}</Typography>
              <Box display="flex" alignItems="center">
                <Rating value={restaurant.rating} defaultValue={2.5} precision={1} readOnly />
                <Typography style={{ marginLeft: 8 }}>
                  {restaurant.rating}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderFood;
