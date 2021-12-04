import React, { useState } from "react";
import "./styles.css";
import foodImage from "./food_image_2.jpg";
export default function App() {
  let foodTags = {
    Italian: [
      {
        title: "Lasagne",
        desc:
          "Believed to have originated from the city of Naples, this well-loved classic Italian dish is made by baking sheets of lasagne pasta layered with cheese, vegetables and different varieties of sauces."
      },
      {
        title: "Pizza and Pasta",
        desc:
          "These popular items are served with a crispy, thin-crust pizza topped with olive oil, garlic, basil, tomatoes, mozzarella and Parmesan cheese."
      },
      {
        title: "Prosciutto",
        desc:
          "An Italian favourite, prosciutto refers to dry-cured ham, served uncooked and cut in thin slices."
      }
    ],
    "North Indian": [
      {
        title: "Kheer (Rice Pudding)",
        desc:
          "This creamy rice pudding is delicately flavored with cardamom and is full of nuts."
      },
      {
        title: "Butter Chicken",
        desc:
          "This dish is among the best-known Indian foods,its creamy gravy can be made as hot or as mild as you like."
      },
      {
        title: "Lachcha Paratha",
        desc:
          "Crispy and multi-layered, this Indian flatbread is a great accompaniment for any thick-gravied, hearty Indian dish, especially tikka masala."
      }
    ],
    Chinese: [
      {
        title: "Dumplings (Momos)",
        desc:
          "Dumplings (饺子 jiǎozi) consist of chopped vegetables wrapped in a thin dough skin.They can be cooked by boiling, steaming, or frying. "
      },
      {
        title: "Chow Mein",
        desc:
          "Chow mein is the Cantonese pronunciation of the Chinese characters above, which means stir-fried noodles. This dish consists of noodles, onions and celery."
      },
      {
        title: "Ma Po Tofu",
        desc:
          "Ma Po is one of the most famous dishes in Chuan Cuisine with a history of more than 100 years. Ma (麻) describes a spicy and hot taste which comes from pepper powder."
      }
    ],
    "South Indian": [
      {
        title: "Idli Sambhar",
        desc:
          "This popular South Indian steamed breakfast dish is combines rava (semolina), cashews, seasonings, and yogurt."
      },
      {
        title: "Nariyal Barfi",
        desc:
          "This traditional Indian sweet is made easy.No boiling water and sugar or use of a candy thermometer in this recipe!"
      },
      {
        title: "Ven Pongal",
        desc:
          "A popular savory South Indian breakfast dish, featuring yellow lentils (moong dal) and rice seasoned with cumin seeds and curry leaves."
      }
    ]
  };

  let [foodTag, setFoodTag] = useState("Chinese");

  let tagSelectHandler = (foodTag) => {
    setFoodTag(foodTag);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${foodImage})`,
        backgroundSize: "fit",
        textAlign: "right"
      }}
    >
      <h1 style={{ fontSize: "40px" }}>
        Looking for International Delicacies?
      </h1>
      <h4 style={{ fontSize: "20px" }}>
        Your search ends here, select any tag to list some of those dishes
      </h4>
      <hr width="60%" align="right" />
      <br />
      <div className="food-tag">
        {Object.keys(foodTags).map((foodTag) => {
          return (
            <span
              style={{
                backgroundColor: "#575366",
                color: "white",
                padding: "1rem",
                borderRadius: "10%",
                fontWeight: "600",
                cursor: "pointer",
                margin: "0.5rem"
              }}
              onClick={() => tagSelectHandler(foodTag)}
              key={foodTag}
            >
              {foodTag}
            </span>
          );
        })}
      </div>
      <br />
      <hr border="5px solid black" width="60%" align="right" />
      <br />
      <div style={{ textAlign: "left" }}>
        <ul>
          {foodTags[foodTag].map((foodName) => {
            return (
              <li
                style={{
                  listStyle: "none",
                  padding: "2rem",
                  margin: "1rem",
                  width: "20rem",
                  border: "1px solid black",
                  borderRadius: "1rem",
                  backgroundColor: "#D1E3DD",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                  float: "right",
                  height: "12rem"
                }}
                key={foodName}
              >
                {" "}
                <div style={{ fontSize: "25px" }}> {foodName.title} </div>{" "}
                <hr />
                <div style={{ fontSize: "18px", fontWeight: "lighter" }}>
                  {" "}
                  {foodName.desc}{" "}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
