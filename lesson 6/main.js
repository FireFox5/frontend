//es5 and es6
//features
//string expression = интерполяция строк
// const getFullname = (user)=>{
//     return `First name: ${user.first_name}\n Last Name: ${user.Last_name}`;
//
// }
// const user = {
//     first_name: 'JAck',
//     Last_name: 'Barbara'
// }
// console.log(getFullname(user))

//spread operator   class component function
// const mass = [1,2,3,4,5,6];
// // const mass2 = [...mass];
// console.log(mass2)

// for (let i=0; i<mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)


// destruction  деструктизация    props React
const props = {
    onSubmit:  () => {
        console.log('Submit')
    },
    data:[ {
        Key:'VAlue'
    },
        {
            Key: "Value"
        },
        {
            Key:'VElue1'
        }


    ]
}
const {data , onSubmit} = props;

console.log(data);
onSubmit()













