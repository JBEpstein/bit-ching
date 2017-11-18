// 'use strict';
//
// const User = require('../model/userSchema.js');
//
// //add user to the req object for later user
//
// module.exports = (req, res, next) => {
//   const {authorization} = req.headers;
//
//   if(!authorization)
//     return next(new Error('unauthorized: no authorization provided.'));
//
//   let encoded =  authorization.split('Basic ')[1];  //splits off user:password
//   if(!encoded)
//     return next(new Error('unauthorized: no basic auth provided.'));
//
//   let decoded = new Buffer(encoded, 'base64').toString();
//   let [username, password] = decoded.split(':');
//
//   if (!username || !password)
//     return next(new Error('unauthorized: no username or password provided.'));
//
//   // console.log('decoded: ', decoded);
//   // console.log('username: ', username);
//   // console.log('password: ', password);
//
//   // User.findOne({username})
//   //   .then(user => {
//   //     if(!user)
//   //       return next(new Error('unauthorized: user does not exist.'));
//   //     return user.passwordHashCompare(password);
//   //   })
//   //   .then(user => {
//   //     req.user = user;
//   //     next();
//   //   })
//   //   .catch(err => {
//   //     console.log('Error: ', err);
//   //     next(new Error('unauthorized: failed basic-http.js error checks'));
//   //   });
// };

'use strict';

module.exports = (req,res,next) => {
  try{
    let authHeader = req.headers.authorization;
    let base64Header = authHeader.split('Basic ')[1];
    let base64Buf = new Buffer(base64Header, 'base64');
    let stringHeader = base64Buf.toString();
    let authArray = stringHeader.split(':');
    let authObj = {
      username: authArray[0],
      password: authArray[1],
    };
    if(!(authObj.username || authObj.password)) throw new Error('no no no mr superman not here');
    req.auth = authObj;
    next();
  }
  catch(e){
    next(e);
  }
};
