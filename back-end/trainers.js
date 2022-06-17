const router = require("express").Router();
const Trainer = require("./db");

router.get("/readAll", (req, res, next) => {
  Trainer.find()
    .then((results) => res.send(results))
    .catch((err) => next(err));
});

router.get("/read/:id", (req, res, next) => {
  const id = req.params.id;
  Trainer.findById(id)
    .then((result) => res.send(result))
    .catch((err) => next(err));
});

router.post("/create", (req, res, next) => {
  const newTrainer = req.body;
  // new Trainer(newTrainer).save()
  Trainer.create(newTrainer)
    .then((result) => res.status(201).send(result))
    .catch((err) => next(err));
});

router.put("/update/:id", (req, res, next) => {
  const id = req.params.id;
  const newTrainer = req.body;
  Trainer.findByIdAndUpdate(id, newTrainer)
    .then((result) => res.status(202).send(result))
    .catch((err) => next(err));
});

router.delete("/remove/:id", (req, res, next) => {
  const id = req.params.id;
  Trainer.findByIdAndDelete(id)
    .then(() => res.status(204).send())
    .catch((err) => next(err));
});

module.exports = router;
