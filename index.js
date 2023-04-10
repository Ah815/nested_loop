// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//         console.log(fullNames)
//     }    
// }

// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br/>")
// }

// let i, j, k;
// for (i = 1; i <= 5; i++) {
//     for (k = 1; k <= 5 - i; k++) {
//         document.write("&nbsp;&nbsp;")
//     }
//     for (j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br/>")
// }

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 5 - i; j++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (var k = 1; k <= i; k++) {
//         document.write("*");
//     }
//     for (var l = 1; l <= i - 1; l++) {
//         document.write("*");
//     }
//     document.write("<br/>");
// }

// for (var i = 5; i >= 1; --i) {
//     for (var k = 1; k <= 5 - i; k++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     for (var l = 1; l <= i - 1; l++) {
//         document.write("*");
//     }
//     document.write("<br/>");
// }

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 5 - i; j++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (var k = 1; k <= i; k++) {
//         document.write("*");
//     }
//     for (var l = 1; l <= i - 1; l++) {
//         document.write("*");
//     }
//     document.write("<br/>");
// }
// for (var i = 4; i >= 1; --i) {
//     for (var k = 1; k <= 5 - i; k++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     for (var l = 1; l <= i - 1; l++) {
//         document.write("*");
//     }
//     document.write("<br/>");
// }

// for (var i = 5; i >= 1; --i) {
//     for (var k = 1; k <= 5 - i; k++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     for (var l = 1; l <= i - 1; l++) {
//         document.write("*");
//     }
//     document.write("<br/>");
// }
// for (var i = 2; i <= 5; i++) {
//     for (var j = 1; j <= 5 - i; j++) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (var k = 1; k <= i; k++) {
//         document.write("*");
//     }
//     for (var l = 1; l <= i - 1; l++) {
//         document.write("*");
//     }
//     document.write("<br/>");
// }



// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("No double spaces!");
        break;

    }
}