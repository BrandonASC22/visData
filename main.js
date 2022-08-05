// console.log(data);

let randomButton = document.querySelector("#random_btn");
randomButton.onclick = pickRandomUser;

function pickRandomUser() {
    // for picking a random user
    let randomIndex = Math.random();
    randomIndex *= data.length;
    randomIndex = Math.floor(randomIndex);
    let randomUser = data[randomIndex];

    let userImg = document.getElementById("user_img");
    userImg.src = randomUser.picture;

    let userName = document.getElementById("user_name");
    userName.innerHTML = `${randomUser.name[0]} ${randomUser.name[1]} ${randomUser.name[2]}`;

    let userGender = document.querySelector("#user_gender");
    userGender.innerHTML = `${randomUser.gender}`;

    let userDob = document.querySelector("#user_dob");
    userDob.innerHTML = `${randomUser.date}`;

    let userAddress = document.querySelector("#user_address");
    userAddress.innerHTML = `${randomUser.location[0]} ${randomUser.location[1]}, ${randomUser.location[2]}, ${randomUser.location[3]}, ${randomUser.location[4]} ${randomUser.location[5]}`;

    let userEmail = document.querySelector("#user_email");
    userEmail.innerHTML = `${randomUser.email}`;

    let userPhone = document.querySelector("#user_phone");
    userPhone.innerHTML = `${randomUser.phone}`;

    let userCellphone = document.querySelector("#user_cell_phone");
    userCellphone.innerHTML = `${randomUser.cell}`;
}
