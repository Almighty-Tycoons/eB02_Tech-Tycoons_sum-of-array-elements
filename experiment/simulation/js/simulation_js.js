document.getElementById("InputBlock").hidden = true;
document.getElementById("next-btn").hidden = true;
document.getElementById("next-btn1").hidden = true;
document.getElementById("box-A").hidden = true;
document.getElementById("box-B").hidden = true;
document.getElementById("box-D").hidden = true;
document.getElementById("re").hidden = true;
document.getElementById("submit-btn").hidden = true;
document.getElementById("hr").hidden = true;

document.getElementById("in").hidden = true;
document.getElementById("in1").hidden = true;
document.getElementById("in2").hidden = true;
document.getElementById("in3").hidden = true;
document.getElementById("in4").hidden = true;
document.getElementById("in5").hidden = true;
document.getElementById("in6").hidden = true;
document.getElementById("in7").hidden = true;
document.getElementById("in8").hidden = true;
document.getElementById("in9").hidden = true;
document.getElementById("in10").hidden = true;

$('.di').hide();
document.getElementById("di1").hidden = true;
document.getElementById("di2").hidden = true;
document.getElementById("di3").hidden = true;
document.getElementById("di4").hidden = true;
document.getElementById("di5").hidden = true;
document.getElementById("di6").hidden = true;
document.getElementById("di7").hidden = true;
document.getElementById("di8").hidden = true;
document.getElementById("di9").hidden = true;
document.getElementById("di10").hidden = true;
document.getElementById("a[]").hidden = true;


var c = "line";
var cn = 1;
var cn1 = 0;

function Start() {
  document.getElementById("next-btn").hidden = false;
  changeClass(c + cn, 'showDivInRed code-text');
  cn += 1;
  cn1 += 1;

  document.getElementById("start-btn").hidden = true;
}

function Next() {
  if (cn == 2) {
    $('.di').show();
    changeClassColor(c + cn1, 'showDivInRed');
    changeClass(c + cn, 'showDivInRed code-text');
    cn += 1;
    cn1 += 1;

  } else {
    if (cn == 3) {
      document.getElementById("a[]").hidden = false;
      document.getElementById("a[]").innerHTML = "a[10]";
      changeClassColor(c + cn1, 'showDivInRed');
      document.getElementById("box-A").hidden = false;
      document.getElementById("box-D").hidden = false;
      changeClass(c + cn, 'showDivInRed code-text');
      cn += 1;
      cn1 += 1;
    } else {
      if (cn == 4) {
        document.getElementById("next-btn").hidden = true;
        changeClassColor(c + cn1, 'showDivInRed');
        document.getElementById("InputBlock").hidden = false;
        changeClass(c + cn, 'showDivInRed code-text');
        cn += 1;
        cn1 += 1;
      } else {
        if (cn == 9) {
          changeClass(c + cn1, 'showDivInRed code-text');
        } else {
          changeClassColor(c + cn1, 'showDivInRed');
          changeClass(c + cn, 'showDivInRed code-text');
          cn += 1;
          cn1 += 1;
        }
      }
    }
  }

}

var N;

function enter() {
  document.getElementById("next-btn").hidden = true;
  N = document.getElementById("inputV1").value.trim();
  if (N == "") {
    $(".validation").html("Please provide input in N");
    return;
  }

  N = Number(N);
  if (isNaN(N)) {
    $(".validation").html("Please provide input in numbers only");
    return;
  }
  if (!Number.isInteger(N)) {
    $(".validation").html("Value of N can't be in float enter only positive Integer(max 10).");
    return;
  }
  if (N === 0 || N < 0) {
    $(".validation").html("Minimum value of N : 1");
    return;
  }
  if (N > 10) {
    $(".validation").html("Maximum limit of N : 10");
    return;
  }
  $(".validation").hide();
  Next();
  Next();
  for (var i = 1; i <= N; i++) {
    $("#d" + i).addClass("fil");
  }

  document.getElementById("a[]").hidden = false;
  document.getElementById("a[]").innerHTML = "a[" + N + "]";
  for (var i = 1; i <= N; i++) {
    document.getElementById("in" + parseInt(i)).hidden = false;
  }

  document.getElementById("enter-btn").hidden = true;
  document.getElementById("submit-btn").hidden = false;

  document.getElementById("in").hidden = false;

}


function displayElements() {
  Next();
  for (var i = 1; i <= N; i++) {
    var s = document.getElementById("in" + parseInt(i)).value.trim();
    if (s == "") {
        $(".validation1").show();
      $(".validation1").html("Please provide inputs in array elements");
      return;
    }
    s = Number(s);
    if (isNaN(s)) {
        $(".validation1").show();
      $(".validation1").html("Please provide input in numbers only");
      return;
    }
    $(".validation").hide();
    document.getElementById("di" + parseInt(i)).hidden = false;
    document.getElementById("di" + parseInt(i)).innerHTML = s;
    Next();
  }


  document.getElementById("box-B").hidden = false;
  document.getElementById("submit-btn").hidden = true;
  document.getElementById("next-btn1").hidden = false;

      $(".validation1").hide();
}




function changeClass(id, className) {
  document.getElementById(id).className = className;
}

function changeClassColor(id, className) {
  document.getElementById(id).classList.remove(className);
}

function createBoxes() {

  changeClass('resultDisplay', 'resultDisplay');

}
var i = 0;
var finished = false;
var finish = 0;
var result = 0;

function Execution() {
  changeClass("fline0", "showDivInRed code-text"); ///

  if (finished) { ////
    alert("Program over");
    location.reload();
  }
  if (finish == 1) {
    finished = true;
    changeClassColor("fline0", "showDivInRed");
    changeClassColor("rline0", "showDivInRed");
    changeClass("rline1", "showDivInRed code-text");

  } else {
    if (i == 0 && i < N) {
      var s = Number(document.getElementById("in1").value);
      document.getElementById("B").innerHTML = s;
      document.getElementById("A").innerHTML = i;
      changeClass("di1", 'arrayColor');
      changeClassColor("fline0", "showDivInRed");
      changeClass("fline1", "showDivInRed code-text");
      changeClassColor("line8", "showDivInRed");
      result += s;
      document.getElementById("D").innerHTML = result;
      i += 1;
    } else {
      if (i == 1 && i < N) {
        var s = Number(document.getElementById("in2").value);
        document.getElementById("B").innerHTML = s;
        document.getElementById("A").innerHTML = i;
        changeClass("di2", 'arrayColor');
        changeClassColor("fline0", "showDivInRed");
        changeClass("fline1", "showDivInRed code-text");
        result += s;
        document.getElementById("D").innerHTML = result;
        i += 1;
      } else {
        if (i == 2 && i < N) {
          var s = Number(document.getElementById("in3").value);
          document.getElementById("B").innerHTML = s;
          document.getElementById("A").innerHTML = i;
          changeClass("di3", 'arrayColor');
          changeClassColor("fline0", "showDivInRed");
          changeClass("fline1", "showDivInRed code-text");
          result += s;
          document.getElementById("D").innerHTML = result;
          i += 1;
        } else {
          if (i == 3 && i < N) {
            var s = Number(document.getElementById("in4").value);
            document.getElementById("B").innerHTML = s;
            document.getElementById("A").innerHTML = i;
            changeClass("di4", 'arrayColor');
            changeClassColor("fline0", "showDivInRed");
            changeClass("fline1", "showDivInRed code-text");
            result += s;
            document.getElementById("D").innerHTML = result;
            i += 1;
          } else {
            if (i == 4 && i < N) {
              var s = Number(document.getElementById("in5").value);
              document.getElementById("B").innerHTML = s;
              document.getElementById("A").innerHTML = i;
              changeClass("di5", 'arrayColor');
              changeClassColor("fline0", "showDivInRed");
              changeClass("fline1", "showDivInRed code-text");
              result += s;
              document.getElementById("D").innerHTML = result;
              i += 1;
            } else {
              if (i == 5 && i < N) {
                var s = Number(document.getElementById("in6").value);
                document.getElementById("B").innerHTML = s;
                document.getElementById("A").innerHTML = i;
                changeClass("di6", 'arrayColor');
                changeClassColor("fline0", "showDivInRed");
                changeClass("fline1", "showDivInRed code-text");
                result += s;
                document.getElementById("D").innerHTML = result;
                i += 1;
              } else {
                if (i == 6 && i < N) {
                  var s = Number(document.getElementById("in7").value);
                  document.getElementById("B").innerHTML = s;
                  document.getElementById("A").innerHTML = i;
                  changeClass("di7", 'arrayColor');
                  changeClassColor("fline0", "showDivInRed");
                  changeClass("fline1", "showDivInRed code-text");
                  result += s;
                  document.getElementById("D").innerHTML = result;
                  i += 1;
                } else {
                  if (i == 7 && i < N) {
                    var s = Number(document.getElementById("in8").value);
                    document.getElementById("B").innerHTML = s;
                    document.getElementById("A").innerHTML = i;
                    changeClass("di8", 'arrayColor');
                    changeClassColor("fline0", "showDivInRed");
                    changeClass("fline1", "showDivInRed code-text");
                    result += s;
                    document.getElementById("D").innerHTML = result;
                    i += 1;
                  } else {
                    if (i == 8 && i < N) {
                      var s = Number(document.getElementById("in9").value);
                      document.getElementById("B").innerHTML = s;
                      document.getElementById("A").innerHTML = i;
                      changeClass("di9", 'arrayColor');
                      changeClassColor("fline0", "showDivInRed");
                      changeClass("fline1", "showDivInRed code-text");
                      result += s;
                      document.getElementById("D").innerHTML = result;
                      i += 1;
                    } else {
                      if (i == 9 && i < N) {
                        var s = Number(document.getElementById("in10").value);
                        document.getElementById("B").innerHTML = s;
                        document.getElementById("A").innerHTML = i;
                        changeClass("di10", 'arrayColor');
                        changeClassColor("fline0", "showDivInRed");
                        changeClass("fline1", "showDivInRed code-text");
                        result += s;
                        document.getElementById("D").innerHTML = result;
                        i += 1;
                      } else {
                        changeClassColor("fline0", "showDivInRed"); ////
                        changeClassColor("fline1", "showDivInRed"); ////
                        changeClass("rline0", "showDivInRed code-text");
                        document.getElementById("box-A").hidden = false;
                        document.getElementById("box-B").hidden = false;
                        document.getElementById("box-D").hidden = false;
                        document.getElementById("hr").hidden = false;
                        document.getElementById("temp-container").innerHTML = result;
                        document.getElementById("re").hidden = false;
                        document.getElementById("re").innerHTML = "sum";
                        changeClass("temp-container", "result");
                        $(".sum-container").hide();
                        finish = 1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}
