async function bring(){
    try{
        const resp = await fetch("https://dummyjson.com/users")
        const dt_file = await resp.json()
        return dt_file 
    }
    catch (err){
        console.log("Error =====>", err)
    }
}

async function rdfunct(){
    try{
        const data_usr = await bring()
        //------------------
        const fltr = data_usr.users.map(x => `${x.age}`)
        console.log(fltr)
    }
    catch (error){
        console.log("error", error)
    }
}

rdfunct()