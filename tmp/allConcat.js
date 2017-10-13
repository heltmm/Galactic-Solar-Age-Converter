
import {Age} from './../js/solarcalc.js'

$(document).ready(function() {
  $("#age_input").submit(function(event){
    event.preventDefault();
    let species = $("#species").val();
    let day = parseInt($("#day").val());
    let month = parseInt($("#month").val());
    let year = parseInt($("#year").val());
    let user = new Age(species, [year,month,day])
    user.birthToSeconds();
    user.secondsToAge();
    user.setLife();
    user.determineLife();

    let mercury = user.mercury();
    let venus = user.venus();
    let mars = user.mars();
    let jupiter = user.jupiter();

    $("#planets").html("<div class='row'><div id='earth' class='col-md-2'></div><div id='mars' class='col-md-2'><img src='./img/mars.png'></div><div id='mercury' class='col-md-2'><img src='./img/mercury.png'></div><div id='venus' class='col-md-2'><img src='./img/venus.png'></div><div id='jupiter' class='col-md-2'><img src='./img/jupiter.png'></div></div></div>")

    $("#earth").html(`<img src='./img/earth.png'><h1>Earth</h1><h4>Age: ${user.age}<h4><h6>Life Expectecy:  ${user.life}</h6><h6>Time Left: ${user.lifeLeft}</h6>`)
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
