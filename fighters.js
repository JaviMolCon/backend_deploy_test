const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
const PORT = process.env.PORT || 8080;

const fighters = [
  {
    id: 1,
    first_name: "Bruce",
    last_name: "Lee",
    country_id: 10,
    style: "Jeet Kune Do",
  },
  {
    id: 2,
    first_name: "Chuck",
    last_name: "Norris",
    country_id: 2,
    style: "Chunk Kuk Do",
  },
  {
    id: 3,
    first_name: "Jackie",
    last_name: "Chan",
    country_id: 11,
    style: "Kung Fu",
  },
  {
    id: 4,
    first_name: "Ip",
    last_name: "Man",
    country_id: 10,
    style: "Wing Chun",
  },
  {
    id: 5,
    first_name: "Tony",
    last_name: "Jaa",
    country_id: 87,
    style: "Muay Thai",
  },
  {
    id: 6,
    first_name: "Jean Claude",
    last_name: "Van Damme",
    country_id: 8,
    style: "Kickboxing",
  },
  {
    id: 7,
    first_name: "Jet",
    last_name: "Li",
    country_id: 10,
    style: "Wushu",
  },
];

app.get("/", (req, res) => {
  res.json("welcome to my API");
});

app.get("/fighters", (req, res) => {
  res.json(fighters);
});

app.get("/fighters/:id", (req, res) => {
  const { id } = req.params;
  const fighter = fighters.find((f) => f.id === parseInt(id, 10)); //f is a chicken param describes each object in the array . parseInt turns the string that is id into a number//
  if (fighter) {
    res.json(fighter);
  } else {
    res.status(404).json({ msg: "fighter not found :(" });
  }
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
