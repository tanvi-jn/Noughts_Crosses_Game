var i = 0, j, k, l, m, n, o, p, q, r;
const element = document.querySelectorAll(".a1")
element.forEach(function (el) {
    el.addEventListener('click', function () {
        if (i === 0 && el.textContent == "_") {

            function myFunction(x) {
                if (x.matches) { // If media query matches
                    document.getElementById("gameover").innerHTML="<p style='margin-top:1rem; background-color: #fff; font-size:4rem;'>O's TURN</p>";
                } else {
                    document.getElementById("gameover").innerHTML="<p style='margin-top:1rem; background-color: #fff; font-size:2rem;'>O's TURN</p>";
                }
              }
              
              var x = window.matchMedia("(max-width: 998px)")
              myFunction(x)
            
            var audio = new Audio("sounds/tapsound.mpeg");
            audio.play();
            el.innerHTML = "X";
            
            i++;
            j = document.getElementById("c11").textContent;
            k = document.getElementById("c12").textContent;
            l = document.getElementById("c13").textContent;
            m = document.getElementById("c14").textContent;
            n = document.getElementById("c15").textContent;
            o = document.getElementById("c16").textContent;
            p = document.getElementById("c17").textContent;
            q = document.getElementById("c18").textContent;
            r = document.getElementById("c19").textContent;
            checkwin();
           
        }

        else {
            if (el.textContent == "_") {
                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        document.getElementById("gameover").innerHTML="<p style='margin-top:1rem; background-color: #fff; font-size:4rem;'>X's TURN</p>";
                    } else {
                        document.getElementById("gameover").innerHTML="<p style='margin-top:1rem; background-color: #fff; font-size:2rem;'>X's TURN</p>";
                    }
                  }
                  
                  var x = window.matchMedia("(max-width: 998px)")
                  myFunction(x)
                
                var audio = new Audio("sounds/tapsound.mpeg");
                audio.play();
                el.innerHTML = "O";
                i = 0;
                j = document.getElementById("c11").textContent;
                k = document.getElementById("c12").textContent;
                l = document.getElementById("c13").textContent;
                m = document.getElementById("c14").textContent;
                n = document.getElementById("c15").textContent;
                o = document.getElementById("c16").textContent;
                p = document.getElementById("c17").textContent;
                q = document.getElementById("c18").textContent;
                r = document.getElementById("c19").textContent;
                checkwin();
                
            }
        }

    });

});

var over;
function checkwin() {
    if (j == "X" && k == "X" && l == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Column1";
        setdisable();
        
        gameover();
        
        return 0;
    }
    if (j == "O" && k == "O" && l == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Column1";
        setdisable();
        gameover();
        return 0;
    }
    if (m == "O" && n == "O" && o == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Column2";
        setdisable();
        gameover();
        return 0;
    }
    if (m == "X" && n == "X" && o == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Column2";
        setdisable();
        gameover();
        return 0;
    }
    if (p == "X" && q == "X" && r == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Column3";
        setdisable();
        gameover();
        return 0;
    }
    if (p == "O" && q == "O" && r == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Column3";
        setdisable();
        gameover();
        return 0;
    }

    if (j == "X" && m == "X" && p == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Row1";
        setdisable();
        gameover();
        return 0;
    }
    if (j == "O" && m == "O" && p == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Row1";
        setdisable();
        gameover();
        return 0;
    }
    if (k == "O" && n == "O" && q == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Row2";
        setdisable();
        gameover();
        return 0;
    }
    if (k == "X" && n == "X" && q == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Row2";
        setdisable();
        gameover();
        return 0;
    }
    if (l == "O" && o == "O" && r == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Row3";
        setdisable();
        gameover();
        return 0;
    }
    if (l == "X" && o == "X" && r == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Row3";
        setdisable();
        gameover();
        return 0;
    }
    if (j == "O" && n == "O" && r == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Left Diagonal";
        setdisable();
        gameover();
        return 0;
    }

    if (j == "X" && n == "X" && r == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Left Diagonal";
        setdisable();
        gameover();
        return 0;
    }
    
    if (p == "O" && n == "O" && l == "O") {
        document.querySelector(".head22").innerHTML = "O WON!!! by Right Diagonal";
        setdisable();
        gameover();
        return 0;
    }
    if (p == "X" && n == "X" && l == "X") {
        document.querySelector(".head22").innerHTML = "X WON!!! by Right Diagonal";
        setdisable();
        gameover();
        return 0;
    }
 
}

function setdisable(){

        for(var z=11;z<20;z++){
            document.getElementById("c" + z).setAttribute("disabled", "true");
        }
    
    
}
function gameover(){
    document.getElementById("gameover").innerHTML="<p style='margin-top:1rem; background-color: #fff;'>GAME OVER click RESET to play a New GAME!</p>";
    var audio = new Audio("sounds/gameover.mp3");
    audio.play();
}
