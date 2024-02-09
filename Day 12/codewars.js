var number = function(busStops){
    let sum_in = 0
    let sum_out = 0
for (let i = 0; i < busStops.length; i++){
    sum_in = sum_in + busStops[i][0]
    sum_out = sum_out + busStops[i][1]
    }
    console.log(sum_in - sum_out)
}
number([[10,0],[3,5],[5,8]])