const get_user = (req, res)=>{
    res.send("successfully")
}
const post_user = (req, res)=>{
    res.send("created")
}

module.exports = {get_user,post_user}