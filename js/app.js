
// let userNames = [`cloudpunch`, `siobhan174`, `shark`, `c-rage`, `freddyX`, `soybeanx`, `m-o-o-nSpellsX`, `king217`, `constantReaderrr`, `kingsDomINION`];
// let userAges = [26, 23, 32, 27, 16, 17, 20, 19, 18, 26];

// let counter = 0;
// while (counter < userAges.length){
//     if (userAges >= 18){
//         console.log(userNames);
//     }
//     counter = counter +1;
// }

// users is an Object, I put userInfo into an Array then made it an Object as well to hold key values for each user.
let users = { userInfo: [
        {
            userName: `cloudpunch`,
            userAge: 26,
        },
        {
            userName: `siobhan174`,
            userAge: 15,
        },
        {
            userName: `shark`,
            userAge: 32,
        },
        {
            userName: `c-rage`,
            userAge: 27,
        },
        {
            userName: `freddyX`,
            userAge: 16,
        },
        {
            userName: `soybeanx`,
            userAge: 17,
        },
        {
            userName: `m-o-o-nSpellsX`,
            userAge: 20,
        },
        {
            userName: `king217`,
            userAge: 19,
        },
        {
            userName: `constantReaderrr`,
            userAge: 18,
        },
        {
            userName: `kingsDomINION`,
            userAge: 26,
        }
    ]
};

// accessing the nested values within ->(obj/array/object) to create my while loop for users >=18yr old
let counter = 0;
while (counter < users[`userInfo`].length){
    if (users[`userInfo`][counter][`userAge`] >= 18){
        console.log(users[`userInfo`][counter][`userName`]);
    }
    counter = counter +1;
}

// counter ++ (at the very end>) is equivalent to counter +1
for (let counter = 0; counter < users[`userInfo`].length; counter = counter +1){
    if (users[`userInfo`][counter][`userAge`] <= 17){
        console.log(users[`userInfo`][counter][`userName`]);
    }
}