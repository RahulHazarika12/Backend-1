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
];

//all routes here are starting with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send("Hello");
});

router.post("/", (req, res) => {});

export default router;
