const User = require('../models/User');
const bcrypt = require("bcryptjs");
const router = require('express').Router();

// register routes
router.post('/register', async (req,res) => {
    try {
        const {username,email,password} = req.body;

        const hashedPassword = await bcrypt.hash(password,10);
        
        const newuser = new User({
          username,email,password:hashedPassword
        });

        const user = await newuser.save();

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json(err);
    }
    
})

// login server
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const findUser = await User.findOne({username});

    if (findUser) {

        const isMatch = await bcrypt.compare(password, findUser.password);


        if (isMatch) {
            
            const {password , email , ...others} = findUser._doc;
            
            res.status(200).json(others);

        } else {

            res.status(400).json("Wrong credentials !");

        }

    } else {

        res.status(400).json("Wrong credentials !")

    }

  } catch (error) {
    res.status(500).json(err);
  }
});




module.exports = router

