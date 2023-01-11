const express = require('express');
const mongoose = require('mongoose');
const student = require('./student');
const dotenv = require('dotenv');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser=require("body-parser")
app.use(bodyParser.json());
// After you declare "app"
app.use(session({ secret: 'melody hensley is my spirit animal' }));
const uri =
	'mongodb+srv://raju:Ra%409058837496@cluster0.kjkyk5j.mongodb.net/cluster0?retryWrites=true&w=majority';
// mongodb+srv://raju:<password>@cluster0.uwtgdvq.mongodb.net/test
// mongodb+srv://raju:<password>@cluster0.uwtgdvq.mongodb.net/test
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
  function(email, password, done) {
	  console.log(email,password)
    student.findOne({ email: email }, function (err, std) {
      if (err) { return done(err); }
      if (!std) { return done(null, false); }
      if (!std.password==password) { return done(null, false); }
      return done(null, std);
    });
  }
));
app.post('/login', 
  passport.authenticate('local'),
  function(req, res) {
	  console.log("hello")
   res.send(res)
  });
  passport.serializeUser((std,done)=>{
	  if(std){
		  return done(null,user.id)
	  }
	  return done(null,std.id)
	 
  })
  passport.deserializeUser((id,done)=>{
	  student.findById(id,(err,std)=>{
		  if(err){
			  return done(null,false)
		  }
		  return done(null,std)
	  })
  })
mongoose.connect(uri, options).then(() => {
	console.log('database connnected');
});
app.get('/user', async (req, res) => {
	res.send({ response: 'all fine' });
});

// const app=expres();
//passport check

app.listen(8000, () => console.log('server running at 8000'));
