const joi = require('joi');

//To define the schema 4 validation



// //To check the validate
// const data = {
//     username: 'Abbey123',
//     password: 'mypassword123',
// };

// const validateResult = schema.validate(data);

// if(validateResult.error) {
//     //when the data did not pass validate
//     console.error(validateResult.error.details);
// } else {
//     //Now when the data successfully pass the validation.
//     console.log('Valid data inputed');
// }

const validateRegistration=(data)=>{
    schema = joi.object({
        username: joi.string().alphanum().min(5).max(10).required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9\s]')).min(8).max(16).required(),
    });

    return schema.validate(data);
}


module.exports.validateRegistration=validateRegistration;
// module.exports.blog=blog;