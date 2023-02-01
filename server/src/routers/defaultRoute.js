const Router = require('express').Router();

export const defaultRoute = Router();

defaultRoute.get('/', (req, res) => {
  res.send("homepage");
});