const mongoose = require('mongoose');
const schema = mongoose.Schema;

//User's Schema
const userSchema = new schema({
    userName: {type: String,
         required: [true,'feild should not be empty']
        },
    password: {type: String, require: true},
});

const Users = mongoose.model('Users', userSchema);



//Post's Schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
});

const Posts = mongoose.model('Posts', postSchema);

module.exports=Users;
module.exports=Posts;