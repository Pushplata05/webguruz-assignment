  // Set the date we're counting down to
  var countDownDate = new Date("Oct 5, 2023 15:37:25").getTime();
  
  // Update the count down every 1 second
  var countdownfunction = setInterval(function() {
  
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d: " + hours + "h: "
    + minutes + "m: " + seconds + "s ";
    document.getElementById("countdown1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    document.getElementById("countdown2").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    document.getElementById("countdown3").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    document.getElementById("countdown4").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    document.getElementById("countdown5").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("countdown").innerHTML = "EXPIRED";
      document.getElementById("countdown1").innerHTML = "EXPIRED";
      document.getElementById("countdown2").innerHTML = "EXPIRED";
      document.getElementById("countdown3").innerHTML = "EXPIRED";
      document.getElementById("countdown4").innerHTML = "EXPIRED";
      document.getElementById("countdown5").innerHTML = "EXPIRED";
      
    }
  }, 1000);

  