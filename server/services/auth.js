const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) {
          return res.status(403).json({ message: "Token is not valid" });
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).send("Authorization token must be provided");
    }
  };

module.exports = auth;
  