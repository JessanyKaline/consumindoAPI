function fncUsers() {
    fetch("https://reqres.in/api/users")
    .then((res)=>res.json())
    .then((responseData)=>{

        const data = responseData.data;

        //console.log(data)

        const div = document.querySelector("#root");

        data.map ((user)=> {
            //console.log(user.email)

            div.innerHTML += `<div>
            <h3>${user.first_name} ${user.last_name}</h3>
            <a href='${user.email}'>${user.email}</a>
            <img src='${user.avatar}'/>
            </div>`

           


        })

    });

}

fncUsers()