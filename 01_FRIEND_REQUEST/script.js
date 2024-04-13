// let isStatus = document.querySelector("h5")
// let addFriend = document.querySelector("#add")
// let removeFriend = document.querySelector("#remove")

// addFriend.addEventListener('click', function(){
//     isStatus.innerHTML = "Friends"
//     isStatus.style.color = "green"
// }, false)


// removeFriend.addEventListener('click', function(){
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color = "red"
// }, false)
let isStatus = document.querySelector("h5")
let btn = document.querySelector("#add")

let check = 0;

btn.addEventListener('click', function(){
    if(check === 0){
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        btn.innerHTML = "REMOVE"
        check = 1;
    }else{
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = "red"
        btn.innerHTML = "ADD FRIEND"
        check = 0;
    }
}, false)