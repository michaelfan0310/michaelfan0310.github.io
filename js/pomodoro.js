// var sessionTime = 35;
// var breakTime = 5;
// var timerClock = $('#clock2');
// var sessionMinus = $('#session_minus');
// var sessionPlus = $('#session_plus');
// var breakMinus = $('#break_minus');
// var breakPlus = $('#break_plus');
// var timerTime = sessionTime * 60;
// var timerInterval = 0;
// var timerClock;

// breakMinus.on('click', function(e) {
//   if (breakTime > 1) {
//     breakTime--;
//     $('#break_view').empty().append(breakTime);
//   }
// });

// breakPlus.on('click', function(e) {
//   if (breakTime < 60) {
//     breakTime++;
//     $('#break_view').empty().append(breakTime);
//   }
// });

// sessionMinus.on('click', function(e) {
//   if (sessionTime > 1) {
//     sessionTime--;
//     $('#session_view').empty().append(sessionTime);
//     resetTimer();
//   }
// });

// sessionPlus.on('click', function(e) {
//   if (sessionTime < 60) {
//     sessionTime++;
//     $('#session_view').empty().append(sessionTime);
//     resetTimer();
//   }
// });

// timerClock.on('click', function(e) {
//   if (timerClock.hasClass('inactive')) {
//     if (timerTime > 0) {
//       startTimer();
//     }
//   } else {
//     pauseTimer();
//   }
// });

// function pauseTimer() {
//   clearInterval(timerInterval);
//   timerClock.addClass('inactive');
// }

// function startTimer() {
//   clearInterval(timerInterval);

//   timerInterval = setInterval(function() {
//     timerTime--;
//     timerClock.text(formatSeconds(timerTime));

//     if (timerTime <= 0) {
//       pauseTimer();
//       startBreakTimer();
//       timerClock.removeClass('session-time');
//     }
//   }, 1000);

//   timerClock.removeClass('inactive');
//   timerClock.addClass('session-time');

// }

// function startBreakTimer() {

//   clearInterval(timerInterval);
//   timerTime = breakTime * 60;

//   timerInterval = setInterval(function() {
//     timerTime--;
//     timerClock.text(formatSeconds(timerTime));

//     if (timerTime <= 0) {
//       timerClock.removeClass('break-time');
//       pauseTimer();
//       resetTimer();
//     }
//   }, 1000);

//   timerClock.removeClass('inactive');
//   timerClock.addClass('break-time');

// }

// function resetTimer() {
//   pauseTimer();
//   if (timerClock.hasClass('break-time')) {
//     timerClock.removeClass('break-time');
//   }

//   if (sessionTime) {
//     timerTime = sessionTime * 60;
//     timerClock.text(formatSeconds(timerTime));
//   }
// }

// function formatSeconds(seconds) {
//   var min = Math.floor(seconds / 60);
//   var sec = seconds % 60;
//   return min + ":" + (sec >= 10 ? sec : "0" + sec);
// }

var sessionTime = 45;

var timerClock = $('#clock2');
var sessionMinus = $('#session_minus');
var sessionPlus = $('#session_plus');

var breakPlus = $('#break_plus');
var timerTime = sessionTime * 60;
var timerInterval = 0;
var timerClock;


breakPlus.on('click', function(e) {
  if (breakTime < 60) {
    breakTime++;
    $('#break_view').empty().append(breakTime);
  }
});

sessionMinus.on('click', function(e) {
  if (sessionTime > 1) {
    sessionTime--;
    $('#session_view').empty().append(sessionTime);
    resetTimer();
  }
});

sessionPlus.on('click', function(e) {
  if (sessionTime < 60) {
    sessionTime++;
    $('#session_view').empty().append(sessionTime);
    resetTimer();
  }
});

timerClock.on('click', function(e) {
  if (timerClock.hasClass('inactive')) {
    if (timerTime > 0) {
      startTimer();
    }
  } else {
    pauseTimer();
  }
});

function pauseTimer() {
  clearInterval(timerInterval);
  timerClock.addClass('inactive');
}

function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(function() {
    timerTime--;
    timerClock.text(formatSeconds(timerTime));

    if (timerTime <= 0) {
      pauseTimer();
      startBreakTimer();
      timerClock.removeClass('session-time');
    }
  }, 1000);

  timerClock.removeClass('inactive');
  timerClock.addClass('session-time');

}

function startBreakTimer() {

  clearInterval(timerInterval);
  timerTime = breakTime * 60;

  timerInterval = setInterval(function() {
    timerTime--;
    timerClock.text(formatSeconds(timerTime));

    if (timerTime <= 0) {
      timerClock.removeClass('break-time');
      pauseTimer();
      resetTimer();
    }
  }, 1000);

  timerClock.removeClass('inactive');
  timerClock.addClass('break-time');

}

function resetTimer() {
  pauseTimer();
  if (timerClock.hasClass('break-time')) {
    timerClock.removeClass('break-time');
  }

  if (sessionTime) {
    timerTime = sessionTime * 60;
    timerClock.text(formatSeconds(timerTime));
  }
}

function formatSeconds(seconds) {
  var min = Math.floor(seconds / 60);
  var sec = seconds % 60;
  return min + ":" + (sec >= 10 ? sec : "0" + sec);
}