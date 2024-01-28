/* Variable decleration*/
let homeTotalPoints = 0;
let guestTotalPoints = 0;

let homeResultEl=document.getElementById("resulthome") ;
let guestResultEl=document.getElementById("resultguest") ;

/*Function section */
function add1(){
    homeTotalPoints += 1 ;
    homeResultEl.textContent = homeTotalPoints ;
}

function add2(){
    homeTotalPoints += 2 ;
    homeResultEl.textContent = homeTotalPoints ;
}

function add3(){
    homeTotalPoints += 3 ;
    homeResultEl.textContent = homeTotalPoints ;
}

function add1g(){
    guestTotalPoints += 1 ;
   guestResultEl.textContent = guestTotalPoints ;
}

function add2g(){
    guestTotalPoints += 2 ;
    guestResultEl.textContent = guestTotalPoints ;
}

function add3g(){
    guestTotalPoints += 3 ;
    guestResultEl.textContent = guestTotalPoints ;
}