
// class Phone{
//     constructor(name, model){
//         this.name = name
//         this.model = model
//     }
//     update_model(new_model){
//         this.model = new_model
//     }
// }
// const iphone = new Phone("iphone", "i 15")

// console.log(iphone.update_model("i 15 pro"))

// console.log(iphone.model)

//-----------------------------------------------------

// const enhance = {
//     _pswd : 122,
//     get password(){
//         return this._pswd
//     },
//     set password(new_pswd){
//         if (new_pswd >= 100  && new_pswd <= 999)
//         {
//             this._pswd = new_pswd
//             console.log("the update successfully ")
//         }
//         else{
//             console.log("enter 3 digit")
//         }
//     }
// }
// enhance.password = 188

// console.log(enhance.password)


//-----------------------------------------------------

// const phone={
//     model:"iPhone 15 pro",
//     password:199,
//     locked:true,
//     open:function(pass){
//         if (this.password === pass){
//             this.locked = false;
//             // console.log("successful")
//         }
//     }
// }
// phone.open(199)

// console.log(phone.locked) 
//-----------------------------------------------------
// const phone={
    //     model:"iPhone 15 pro",
    //     wifiOn: false,
    //     turnOnwifi(){
        //         this.wifiOn = true
        //     }
        // }
        // console.log(phone['model']) 
        // phone.turnOnwifi() 
        // console.log(phone.wifiOn)
        
//-----------------------------------------------------
        
        
        // let student = { 
            //     name: "Alice", 
//     age: 15,
//     hobbies: ["Reading", "Chess", "Coding"],
//     teacher: {
//         fullname: 'John Doe',
//         age: 49,
//     },   
//     study: function() { 
//         console.log("Studying hard!"); 
//     },
// };

// console.log(student.name)
// console.log(student.teacher.fullname)
// console.log(student.teacher.age)
// console.log(student.age)

// console.log(student['age'])
// console.log(student['teacher']['fullname'])
