const { Router } = require("express");
const dns = require("dns");

const dnsRoutes = Router();

dnsRoutes.post("/getmeip", (req, res) => {
  const hostname = req.body.website_name;
  dns.lookup(hostname, (err, address, family) => {
    if (err) {
      res.send(err);
    }
    console.log(address);
    res.send(`${address}`);
  });
});

module.exports = dnsRoutes;
