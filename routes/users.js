import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "Rahul",
    lastName: "Hazarika",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Dane",
    age: 50,
  },
  {
    firstName: "Oxy",
    lastName: "Dane",
    age:97,
  },
];

//all routes here are starting with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("POST ROUTE REACHED");

  res.send("POST ROUTE REACHED");
});

export default router;
