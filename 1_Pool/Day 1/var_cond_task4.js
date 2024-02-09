let score = 20

if (score < 0 || score > 100){
    console.log("the note should be less than 100 and great than 0")
}
else if (score > 85){
    console.log("grade is A.")
}
else if (score <= 85 && score > 70){
    console.log("grade is B.")
}
else if (score <= 70 && score > 50){
    console.log("grade is C.")
}
else if (score <= 55 && score > 40){
    console.log("grade is D.")
}
else if (score <= 40 && score > 15){
    console.log("grade is E.")
}
else{
    console.log("grade is F.")
}
