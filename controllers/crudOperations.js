const users = require('../data')



  getUsers = (req, res) =>{
    res.status(200).send(users)
}


const getUserByParam = (req, res) =>{
    //destructure id from req.params
    const {id} = req.params
    //look through users to find rhe user with matching id
    for(let i = 0; i < users.length; i++){
        if(users[i].id === +id){
            //the plus is used to convert the id to a number
            res.status(200).send(users[i])
        }
    }
}

const getUserByQuery =  (req, res) => {
    const {id} = req.query
    const foundUser = users.filter((user)=>{
        if(user.id === +id) return user
    })
    res.status(200).send(foundUser[0])
}

const createNewUser = (req, res)=>{
    const newUser = {
        id: users.length + 1,
        first_name: req.body.first_name|| "",
        last_name: req.body.last_name|| "",
        email: req.body.email|| "",
        hobbies: req.body.hobbies|| [],
        laptop: req.body.laptop || {}
    }
    users.push(newUser)

    res.status(200).send(users)
}

const updateUser = (req, res)=>{
    const {id} = req.params

    for( let i = 0; i< users.length; i++){
        if(users[i].id === +id){
            users[i].first_name = "kyle"
        }
    }
    res.status(200).send(users)
}

const deleteUser = (req, res)=> {
    const {id} = req.params
    users = users.filter((user)=>{
        if(user.id !== +id) return user
    })
    res.status(200).send(users)
}

module.exports = {
    getUsers,
    getUserByParam,
    getUserByQuery,
    createNewUser,
    updateUser,
    deleteUser
}