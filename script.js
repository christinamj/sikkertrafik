window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menu_knap").addEventListener("click", toggleMenu);

    start();

}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    var erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menu_knap").textContent = "☰";
    } else {
        document.querySelector("#menu_knap").textContent = "X";
    }
}

function start() {

    console.log("start");
    document.querySelector("#firs_container").addEventListener("click", firs);
    document.querySelector("#halvfems_container").addEventListener("click", halvfems);

    document.querySelector("#hundrede_container").addEventListener("click", hundrede);

    document.querySelector("#hundti_container").addEventListener("click", hundti);

    //            if (document.querySelector("#popup80")) {
    // document.querySelector("#popup80").classList.add("hide");
    // }
    //
    // if (document.querySelector("#popup90")) {
    // document.querySelector("#popup90").classList.add("hide");
    // }
    //
    // if (document.querySelector("#popup100")) {
    // document.querySelector("#popup100").classList.add("hide");
    // }
    //
    // if (document.querySelector("#popup110")) {
    // document.querySelector("#popup110").classList.add("hide");
    // }


}

function firs() {

    document.querySelector("#firs_container").classList.add("firs_farve");
    document.querySelector("#car_container").classList.add("car_firs");

    document.querySelector("#car_container").addEventListener("animationend", firsPopup);

}

function halvfems() {

    document.querySelector("#halvfems_container").classList.add("halvfems_farve");
    document.querySelector("#car_container").classList.add("car_halvfems");

    document.querySelector("#car_container").addEventListener("animationend", halvfemsPopup);

}


function hundrede() {

    document.querySelector("#hundrede_container").classList.add("hundrede_farve");
    document.querySelector("#car_container").classList.add("car_hundrede");

    document.querySelector("#car_container").addEventListener("animationend", hundredePopup);

}

function hundti() {

    document.querySelector("#hundti_container").classList.add("hundti_farve");
    document.querySelector("#car_container").classList.add("car_hundti");

    document.querySelector("#car_container").addEventListener("animationend", hundtiPopup);

}

function firsPopup() {
    console.log('firs')
    document.querySelector("#popup80").classList.remove("hide");

    document.querySelector("#popup80").addEventListener("click", firsSlut);

    document.querySelector("#car_container").removeEventListener("animationend", firsPopup);
}

function halvfemsPopup() {
    console.log('halvfems')
    document.querySelector("#popup90").classList.remove("hide");

    document.querySelector("#popup90").addEventListener("click", halvfemsSlut);

    document.querySelector("#car_container").removeEventListener("animationend", halvfemsPopup);
}

function hundredePopup() {
    console.log('hundrede')
    document.querySelector("#popup100").classList.remove("hide");

    document.querySelector("#popup100").addEventListener("click", hundredeSlut);

    document.querySelector("#car_container").removeEventListener("animationend", hundredePopup);
}

function hundtiPopup() {
    console.log('hundti')
    document.querySelector("#popup110").classList.remove("hide");

    document.querySelector("#popup110").addEventListener("click", hundtiSlut);
    document.querySelector("#car_container").removeEventListener("animationend", hundtiPopup);
}

function firsSlut() {

    document.querySelector("#popup80").classList.add("hide");
    document.querySelector("#firs_container").classList.remove("firs_farve");
    document.querySelector("#car_container").classList.remove("car_firs");
}

function halvfemsSlut() {
    document.querySelector("#popup90").classList.add("hide");
    document.querySelector("#halvfems_container").classList.remove("halvfems_farve");
    document.querySelector("#car_container").classList.remove("car_halvfems");
}

function hundredeSlut() {

    document.querySelector("#popup100").classList.add("hide");
    document.querySelector("#hundrede_container").classList.remove("hundrede_farve");
    document.querySelector("#car_container").classList.remove("car_hundrede");
}

function hundtiSlut() {

    document.querySelector("#popup110").classList.add("hide");
    document.querySelector("#hundti_container").classList.remove("hundti_farve");
    document.querySelector("#car_container").classList.remove("car_hundti");
}
