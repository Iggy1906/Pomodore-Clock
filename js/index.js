$(function() {
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());
  var count2 = parseInt($("#breakNum").html());

  // buzzer.play();

  $("#session").hide();

  $("#start").click(function() {
    var counter = setInterval(timer, 1000);

    //  count *= 60;
    //  count2 *= 60;

    function timer() {
      $(
        "#start, #a5Break, #breakNum, #m5Break, #session, #m5Time, #a5Time, #title1, #reset, #title2 "
      ).hide();
      $("#session").show();
      $("#session").html("Session Time: ");

      count -= 1;

      if (count === 0) {
        buzzer.play();
        clearInterval(counter);
        var counter2 = setInterval(breakTimer, 1000);
        $("#num").hide();
      }

       $("#num").html(count);

      if (count % 60 >= 10) {
        $("#num").html(Math.floor(count / 60) + ":" + count % 60);
      } else {
        $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
      }
      
      function breakTimer() {
     $("#session").html("Break Time: ");
     $("#breakNum").show();
      $("#session").show();
        
        count2 -=1; 
        
    if (count2 === 0) {
      buzzer.play();
      clearInterval(counter2);
      $("#reset").show();
      $("#breakNum, #session").hide();
    }

     $("#breakNum").html(count2);

    if (count2 % 60 >= 10) {
      $("#breakNum").html(Math.floor(count2 / 60) + ":" + count2 % 60);
    } else {
      $("#breakNum").html(Math.floor(count2 / 60) + ":" + "0" + count2 % 60);
    }
  }
    }
  });

  $("#reset").click(function(){
    count = 5;
    count2 = 5; 
    $("#num").html(count);
    $("#breakNum").html(count2);
    $("#start, #m5Break, #a5Break, #a5Time, #m5Time, #breakNum, #num, #title1, #title2").show();
    $("#reset, #session").hide();
  });

  $("#m5Time").click(function() {
    if (count > 0) {
      count -= 5;
      $("#num").html(count);
      
    }
    event.preventDefault();
  });

  $("#a5Time").click(function() {
    count += 5;
    $("#num").html(count);
    event.preventDefault();
  });

  $("#m5Break").click(function() {
    if (count2 > 0) {
      count2 -= 5;
      $("#breakNum").html(count2);
    }
    event.preventDefault();
  });

  $("#a5Break").click(function() {
    count2 += 5;
    $("#breakNum").html(count2);
    event.preventDefault();
  });

  //  $("#reset").click(function() {
  //    location.reload();
  // });
});
