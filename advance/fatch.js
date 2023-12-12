// fatch
//thi mathod is more use and syntax is easy than async await.
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch((error) => console.log(error))




// fatch with async await :

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()