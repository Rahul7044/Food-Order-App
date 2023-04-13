import React from "react";
import Card from "../UI/Card";

import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Kadhai Paneer",
    description: "Paneer with extra masala",
    price: 250,
  },
  {
    id: "m2",
    name: "Butter-Nan",
    description: "Nan with extra Butter",
    price: 50,
  },
  {
    id: "m3",
    name: "Mix-Vedge",
    description: "Potato,beans,cauliflower,cheese,Tomato",
    price: 200,
  },
  {
    id: "m4",
    name: "Nimboo Pani",
    description: "Healthy....",
    price: 40,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
