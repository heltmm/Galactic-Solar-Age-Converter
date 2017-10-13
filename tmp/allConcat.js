
import {Age} from './../js/solarcalc.js'

$(document).ready(function() {
  $("#age_input").submit(function(event){
    event.preventDefault();
    $("#planets").show();
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

    $("#planets").html(`<h1>You Are ${user.seconds} seconds old!</h1><div class='row'><div class='col-md-1'></div><div id='earth' class='col-md-2'></div><div id='mars' class='col-md-2'></div><div id='mercury' class='col-md-2'></div><div id='venus' class='col-md-2'></div><div id='jupiter' class='col-md-2'></div><div class='col-md-1'></div></div></div>`)

    $("#earth").html(`<img src='./img/earth.png'><h1>Earth</h1><h4>Age: ${user.age}<h4><h6>Life Expectecy:  ${user.life} Years</h6><h6>Years Left: ${user.lifeLeft}</h6>`)

    $("#mars").html(`<img src='./img/mars.png'><h1>Mars</h1><h4>Age: ${mars[0]}<h4><h6>Life Expectecy:  ${mars[1]} Years</h6><h6>Years Left: ${mars[2]}</h6>`)

    $("#mercury").html(`<img src='./img/mercury.png'><h1>Mercury</h1><h4>Age: ${mercury[0]}<h4><h6>Life Expectecy:  ${mercury[1]} Years</h6><h6>Years Left: ${mercury[2]}</h6>`)

    $("#venus").html(`<img src='./img/venus.png'><h1>Venus</h1><h4>Age: ${venus[0]}<h4><h6>Life Expectecy:  ${venus[1]} Years</h6><h6>Years Left: ${venus[2]}</h6>`)

    $("#jupiter").html(`<img src='./img/jupiter.png'><h1>Jupiter</h1><h4>Age: ${jupiter[0]}<h4><h6>Life Expectecy:  ${jupiter[1]} Years</h6><h6>Years Left: ${jupiter[2]}</h6>`)
  });
});
