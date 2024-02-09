async function fetchUserData() {
try {
    const response = await fetch("https://dummyjson.com/users");
    const json = await response.json();
    return json
    }
catch (error) {
        console.error('Error:', error);
    }
}
// console.log(fetchUserData());
// fetchUserData();
function processUserData(json){
    let h = json.users.map(flnm => `Name: ${flnm.firstName} ${flnm.lastName}, Age: ${flnm.age}`)
    return h
}

function summarizeAge(json){
    let aga = json.users.map(flnm => flnm.age)
    let sum = aga.reduce((f,h)=>f+h,0)
    return sum//(json.users.length)
}
async function fetch_process(){
    try {
        const usr = await fetchUserData()
        const dt = processUserData(usr)
        console.log(dt)
        const totalAge = summarizeAge(usr);
        console.log('Total age of active users:', totalAge);
    }catch(error){
        console.error("Error",error)
    }
}
fetch_process();