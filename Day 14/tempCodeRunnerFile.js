
async function get_data(){
    const resp = await fetch(api)
    const json = await resp.json()
    console.log(json)
}
get_data()