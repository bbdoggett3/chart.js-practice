//You will need to require the file 
// const nodemailer = require('nodemailer');


//Add this file in the index.js or can add it all in a controller.
// TRANSPORTER EMAIL/ NODEMAILER
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: SERVER_EMAIL,
//       pass: SERVER_PASSWORD
//     }
//   })

//   app.set('tp', transporter)


//YOU CAN ADD THE FOLLOWING INTO A CONTROLLER FILE

// const email = {
//   from: "hearttakendev@gmail.com",
//   to: "",
//   subject: "Welcome to HeartTaken",
//   text: "We are excited for you too begin strenghtening your relationship today!"
// 

//THIS GOES INTO THE REGISTER USER WITH A EMAIL
// register: async (req, res) => {
//     const db = req.app.get("db");
//     // const transporter = req.app.get('tp')
//     const { username, password } = req.body;

//     const existingUser = await db.check_user_for_login(username);
//     if (existingUser[0]) {
//       return res.status(409).send("Username is already taken");
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);

//     const newUser = await db.register_user([username, hash]);
//     await db.register_goals(newUser[0].id)
//     delete newUser[0].password

//     // const emailInfo = {...email, to: email}
//     // transporter.sendMail(emailInfo, (error, data) => {
//     //   if (error) {
//     //     console.log(error)
//     //   }else {
//     //     console.log("Email was sent to the user.")
//     //   }
//     // } )

//     req.session.user = {
//       userId: newUser[0].id,
//       username: newUser[0].username,
//     };
//     res.status(200).send(req.session.user);
//   },
