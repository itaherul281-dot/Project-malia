function showPassword(){

    document.getElementById("welcome").classList.add("hidden");

    document.getElementById("password").classList.remove("hidden");

}


function checkPassword(){

    let code = document.getElementById("passcode").value;


    if(code === "2908"){

        document.getElementById("password").classList.add("hidden");

        document.getElementById("birthday").classList.remove("hidden");

    }

    else{

        document.getElementById("error").innerHTML =
        "Wrong code, Sweetheart 💔 Try again";

    }

}


function openMenu(){

    document.getElementById("birthday").classList.add("hidden");

    document.getElementById("menu").classList.remove("hidden");

}


function showPage(page){

    let pages = document.querySelectorAll(".page");


    pages.forEach(function(item){

        item.classList.add("hidden");

    });


    document.getElementById(page).classList.remove("hidden");

}