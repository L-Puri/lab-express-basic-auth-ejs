// // routes/auth.routes.js
// const router  = require('express').Router();
// // const router = new Router();
// const bcryptjs = require('bcryptjs');
// const UserModel = require('../models/User.model')

// const saltRounds = 10
// // GET route ==> to display the signup form to users
// router.get('/signup', (req, res, next) => res.render('auth/signup'));
// // POST route ==> to process form data

// router.post('/signup', async (req, res, next) => {
//     const { username, email, password } = req.body

//     // if(!username || '/signup', async)
//     // .genSalt(saltRounds)
//     // .then(salt => {
//     // console.log(`Salt: ${salt}`);

//     // return bcrypt.hash(password, salt);
//     // })
//     // .then(hash => console.log(`Hash: ${hash}`))
//     // .catch(err => console.error(err.message));

//     try{
//     const salt = await bcryptjs.genSalt(saltRounds)
//     const hashedPassword = await bcryptjs.hash(password, salt)
//     console.log(`Password hash: ${hashedPassword}`)
//     const userFromDB = await User.create({
//         username,
//         email,
//         passwordHash: hashedPassword
//     });
//     }
//     catch(error) {
//         next(error)
//     }
//     })

// module.exports = router;
