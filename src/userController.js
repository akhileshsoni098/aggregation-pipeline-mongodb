

const userModel = require('./userModel')



// Fetches all Users
const users = async (req, res) => {

    const allUserDetails =await userModel.find()
   res.status(200).send({status:false, data:allUserDetails})
  
}


//Fetches a Single User
const one_user = async (req, res) => {
    let userID = req.body.userID
    const singleUser =  await  userModel.findById(userID)
    res.status(200).send({status:false, data:singleUser})
}


// Saves user to the database
const store = async (req, res) => {
    data = req.body
    let { name, designation,email,phone,age } = data
    const saveUser =  await  userModel.create(data)
    res.status(201).send({status:false, data:saveUser})
}



// Updates user
const update = async (req, res) => {
    let userID = req.body.userID
    let updatedData= req.body
    let { name, designation,email,phone,age } = updatedData

    const updateUser = await  userModel.findByIdAndUpdate(userID, {$set: updatedData})
    res.status(200).send({status:false, data:saveUser})
}




// Deletes a user
const destroy = async (req, res) => {
    let userID = req.body.userID
    const deleteUser = await   userModel.findByIdAndRemove(userID)
    res.status(204).send({status:false, message:"user deleted successfully"})
}


// Aggregation 
// applying here

const getUserData =async (req, res) => {

   const aggregatingUser = await userModel.aggregate([
        { $match : { designation : 'Mechanical Engineer' } },
        { $sort : {name:1}  },
        { $project : { _id : 0, name : 1  } }
    ])
  res.status(200).send({status:false , data:aggregatingUser})
}

// need more practice on this .....

module.exports = {
    users, one_user, store, update, destroy ,getUserData
}