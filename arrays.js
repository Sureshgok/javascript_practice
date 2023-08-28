// // var a=[

// //     {firstname:"suresh",Lastname:"goka",age:20},
// //     {firstname:"sai",Lastname:"teja",age:22},
// //     {firstname:"mahesh",Lastname:"sunkara",age:24},
// //     {firstname:"prasad",Lastname:"pippala",age:21}
// // ]

// // var b=a.map(function age(x)
// // {
// //     return x.age
// // })
// // console.log(b)
// //...............................................................
// //print first names above age of 20 ["sai","prasad"]
// // var a=[

// //         {firstname:"suresh",Lastname:"goka",age:20},
// //         {firstname:"sai",Lastname:"teja",age:22},
        
// //         {firstname:"mahesh",Lastname:"sunkara",age:20},
// //         {firstname:"prasad",Lastname:"pippala",age:21}
// // ]
// // //

// // const res = a.filter((person)=>{
// //         if(person.age > 20){
// //                 return person.firstname
// //         }
// // }).map((res)=>res.firstname)
// // console.log(res);
// //.................................................................................................
// // output of the program{20:2,21:1,22:1}
// // var b=a.reduce((acc,curr)=>
// // {
// //     if(acc[curr.age])
// //     {
// //        acc[curr.age] = ++acc[curr.age]
// //     }
// //     else
// //     {
// //         acc[curr.age]=1
// //     }
// //     return acc
// // },{})
// // console.log(b)
// //............................................................
// // object creation and updtion and deletion
// // var a={
// //     firstname:"suresh",
// //     lastname:"  goka",
// //     age:20,
// //     city:{current:"hyd",permenante:"ktvm"}

// // }
// // a.firstname="nani"
// // delete a.age
// // a.country="india"
// // console.log(a.firstname)
// // console.log(a.age)
// // console.log(a.country)
// // console.log(a.city.current)
// //     console.log(a["firstname"])
// //     console.log(a["city"]["current"])
// //     console.log(a.city.permenante)
// //...................................................
// // //print age less than 20 person last name==["teja"]
// // var  a= [

// //             {firstname:"suresh",Lastname:"goka",age:20},
// //             {firstname:"sai",Lastname:"teja",age:18,city:"kethavaram"},
// //             {firstname:"mahesh",Lastname:"sunkara",age:24},
// //             {firstname:"prasad",Lastname:"pippala",age:17 }
// //         ] 
// //         var res=a.reduce((acc,curr)=>
// //         {
// //                 if(acc[curr.age])
// //                 {
// //                   acc[curr.age]= ++acc[curr.age]
// //                 }
// //                 else
// //                 {
// //                         acc[curr.age]=1
// //                 }
// //                 return acc
// //         },{})
// //         console.log(res)
        
 
// //         const res23 = a.reduce((acc,curr)=>
// //         {
// //                 console.log(acc);
// //                 if(curr.age<20)
// //                 {
// //                   acc.push(curr.Lastname)
// //                 }
// //                 return acc;
// //         },[])
// //         console.log(res23)

// //         var a=[1,2,3,4,2,8,6,9,3,0]
// //         var b=a.sort((a,b)=>
// //         {
// //                 return b-a
// //         })
// //         console.log(b);
// //         var c=Math.max(...a)
// //         console.log(c)const person = {
// //    var person={
// //         firstName: "John",
// //          lastName: "Doe",
// //          get fullName() 
// //          {
// //              return this.firstName + " " + this.lastName;
// //          }
// // };
// // console.log(person.fullName)
// var str="suresh"
// var str1=str.length
// console.log(str1)