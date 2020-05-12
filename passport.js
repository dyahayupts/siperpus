//Import module passport dan passport-http
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

//Import User Controller dan User Model
const UserCtrl = require('./routes/api/users/users.controller')
const Users = require('./routes/api/users/users.scheme')

//import file secret dan modul passport-jwt
const { JWT_SECRET } = require('./secret')
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;


// Passport memiliki fungsi untuk serialize dan deserialize 
// object User yang mana object User berisi informasi user yang login.
passport.serializeUser((user, done)=>{
    done(null, user);
 });
 passport.deserializeUser((obj, done)=>{
    done(null, obj);
 });

//untuk mengimplementasi Basic Auth Strategy
 passport.use(new BasicStrategy((username, passwd, done)=>{
    UserCtrl.login(username, passwd).then(user => {
        return done(null, user, { message : 'Logged In Successfully'})
    }).catch(err=>{
        return done(err, null)
    })
 }));

 
 passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : JWT_SECRET
 }, (user, done)=>{
    Users.findOne({ username: user.username }).populate('role')
    .then(foundUser => {
        return done(null, foundUser)
    })
    .catch(err => {
        return done(err, null)
    })
 }));
 
  
 module.exports = passport
 