//
//------JAVASCRIPT------//

//-- CONSOLE --//

console.log(nama)

//------


//-- VAR --//

//--
var nama = prompt('  Siapa  nama  kamu  ?')

//--
var t = '⬇️'
var c = '<br>'
var k = ' '


//--
var x10 = ' 1&nbsp;&nbsp; 0'
var x11 = ' 1&nbsp;&nbsp; 1'
var x12 = ' 1&nbsp;&nbsp; 2'
var x13 = ' 1&nbsp;&nbsp; 3'
var x14 = ' 1&nbsp;&nbsp; 4'
var x15 = ' 1&nbsp;&nbsp; 5'
var x16 = ' 1&nbsp;&nbsp; 6'
var x17 = ' 1&nbsp;&nbsp; 7'
var x18 = ' 1&nbsp;&nbsp; 8'


//--
var xx10 = ' 10 '
var xx11 = ' 11 '
var xx12 = ' 12 '
var xx13 = ' 13 '
var xx14 = ' 14 '
var xx15 = ' 15️ '
var xx16 = ' 16️ '
var xx17 = ' 17️ '
var xx18 = ' 18️ '

//--
var h0 = "0"
var h1 = "1"
var h2 = "2"
var h3 = "3"
var h4 = "4"
var h5 = "5"
var h6 = "6"
var h7 = "7"
var h8 = "8"
var h9 = "9"


//--
var t0 = '0'
var t1 = '1'
var t2 = '2'
var t3 = '3'
var t4 = '4'
var t5 = '5'
var t6 = '6'
var t7 = '7'
var t8 = '8'
var t9 = '9'

//------

//-- CONDITINAL --// web

if (nama == '' || nama == null) {
    nama = ' Anak Pintar '

}

//------


//-- ALERT --//

alert(' Ayo mulai berhitung  ' + nama + '  !  ')

document.getElementById("next").onclick = function() {
    alert('  Kamu  hebat  ' + nama + '  !  ')
}

//------


//-- WRITE --//

document.getElementById('Pertama').innerHTML = nama;

//------


//-- FUNC ALERT --//

myFunc = (x, y) => alert('Jawabannya adalah      ' + (x + y));

//------


//------BUTTON------//

//-- BUTTON FUNC NO.1 --//

document.getElementById("b-1").addEventListener("click", function() {
    document.getElementById("c-1").innerHTML = c;
});

document.getElementById("b1").addEventListener("click", function() {
    document.getElementById("a1").innerHTML = x11;
});

document.getElementById("b2").addEventListener("click", function() {
    document.getElementById("a2").innerHTML = k;
});

document.getElementById("b3").addEventListener("click", function() {
    document.getElementById("a3").innerHTML = k;
});

document.getElementById("b4").addEventListener("click", function() {
    document.getElementById("a4").innerHTML = h1;
});

document.getElementById("b5").addEventListener("click", function() {
    document.getElementById("a5").innerHTML = h2;
});

document.getElementById("b6").addEventListener("click", function() {
    document.getElementById("a6").innerHTML = h3;
});

document.getElementById("b7").addEventListener("click", function() {
    document.getElementById("a7").innerHTML = h8;
});



//-- BUTTON FUNC NO.2 --//

document.getElementById("b-2").addEventListener("click", function() {
    document.getElementById("c-2").innerHTML = c;
});

document.getElementById("b1-2").addEventListener("click", function() {
    document.getElementById("a1-2").innerHTML = t7;
});

document.getElementById("b2-2").addEventListener("click", function() {
    document.getElementById("a2-2").innerHTML = k;
});

document.getElementById("b3-2").addEventListener("click", function() {
    document.getElementById("a3-2").innerHTML = k;
});

document.getElementById("b4-2").addEventListener("click", function() {
    document.getElementById("a4-2").innerHTML = h7;
});

document.getElementById("b5-2").addEventListener("click", function() {
    document.getElementById("a5-2").innerHTML = h1;
});

document.getElementById("b6-2").addEventListener("click", function() {
    document.getElementById("a6-2").innerHTML = h3;
});

document.getElementById("b7-2").addEventListener("click", function() {
    document.getElementById("a7-2").innerHTML = h4;
});


//-- BUTTON FUNC NO.3 --//

document.getElementById("b-3").addEventListener("click", function() {
    document.getElementById("c-3").innerHTML = c;
});

document.getElementById("b1-3").addEventListener("click", function() {
    document.getElementById("a1-3").innerHTML = x13;
});

document.getElementById("b2-3").addEventListener("click", function() {
    document.getElementById("a2-3").innerHTML = k;
});

document.getElementById("b3-3").addEventListener("click", function() {
    document.getElementById("a3-3").innerHTML = k;
});

document.getElementById("b4-3").addEventListener("click", function() {
    document.getElementById("a4-3").innerHTML = h3;
});

document.getElementById("b5-3").addEventListener("click", function() {
    document.getElementById("a5-3").innerHTML = h2;
});

document.getElementById("b6-3").addEventListener("click", function() {
    document.getElementById("a6-3").innerHTML = h6;
});

document.getElementById("b7-3").addEventListener("click", function() {
    document.getElementById("a7-3").innerHTML = h7;
});


//-- BUTTON FUNC NO.4 --//

document.getElementById("b-4").addEventListener("click", function() {
    document.getElementById("c-4").innerHTML = c;
});

document.getElementById("b1-4").addEventListener("click", function() {
    document.getElementById("a1-4").innerHTML = x13;
});

document.getElementById("b2-4").addEventListener("click", function() {
    document.getElementById("a2-4").innerHTML = k;
});

document.getElementById("b3-4").addEventListener("click", function() {
    document.getElementById("a3-4").innerHTML = k;
});

document.getElementById("b4-4").addEventListener("click", function() {
    document.getElementById("a4-4").innerHTML = h3;
});

document.getElementById("b5-4").addEventListener("click", function() {
    document.getElementById("a5-4").innerHTML = h2;
});

document.getElementById("b6-4").addEventListener("click", function() {
    document.getElementById("a6-4").innerHTML = h8;
});

document.getElementById("b7-4").addEventListener("click", function() {
    document.getElementById("a7-4").innerHTML = h5;
});

//-- BUTTON FUNC NO.5 --//

document.getElementById("b-5").addEventListener("click", function() {
    document.getElementById("c-5").innerHTML = c;
});

document.getElementById("b1-5").addEventListener("click", function() {
    document.getElementById("a1-5").innerHTML = x18;
});

document.getElementById("b2-5").addEventListener("click", function() {
    document.getElementById("a2-5").innerHTML = k;
});

document.getElementById("b3-5").addEventListener("click", function() {
    document.getElementById("a3-5").innerHTML = k;
});

document.getElementById("b4-5").addEventListener("click", function() {
    document.getElementById("a4-5").innerHTML = h8;
});

document.getElementById("b5-5").addEventListener("click", function() {
    document.getElementById("a5-5").innerHTML = h2;
});

document.getElementById("b6-5").addEventListener("click", function() {
    document.getElementById("a6-5").innerHTML = h9;
});

document.getElementById("b7-5").addEventListener("click", function() {
    document.getElementById("a7-5").innerHTML = h9;
});

//-- BUTTON FUNC NO.6 --//

document.getElementById("b-6").addEventListener("click", function() {
    document.getElementById("c-6").innerHTML = c;
});

document.getElementById("b1-6").addEventListener("click", function() {
    document.getElementById("a1-6").innerHTML = x15;
});

document.getElementById("b2-6").addEventListener("click", function() {
    document.getElementById("a2-6").innerHTML = k;
});

document.getElementById("b3-6").addEventListener("click", function() {
    document.getElementById("a3-6").innerHTML = k;
});

document.getElementById("b4-6").addEventListener("click", function() {
    document.getElementById("a4-6").innerHTML = h5;
});

document.getElementById("b5-6").addEventListener("click", function() {
    document.getElementById("a5-6").innerHTML = h7;
});

document.getElementById("b6-6").addEventListener("click", function() {
    document.getElementById("a6-6").innerHTML = h7;
});

document.getElementById("b7-6").addEventListener("click", function() {
    document.getElementById("a7-6").innerHTML = h8;
});

//-- BUTTON FUNC NO.7 --//

document.getElementById("b-7").addEventListener("click", function() {
    document.getElementById("c-7").innerHTML = c;
});

document.getElementById("b1-7").addEventListener("click", function() {
    document.getElementById("a1-7").innerHTML = x15;
});

document.getElementById("b2-7").addEventListener("click", function() {
    document.getElementById("a2-7").innerHTML = k;
});

document.getElementById("b3-7").addEventListener("click", function() {
    document.getElementById("a3-7").innerHTML = k;
});

document.getElementById("b4-7").addEventListener("click", function() {
    document.getElementById("a4-7").innerHTML = h5;
});

document.getElementById("b5-7").addEventListener("click", function() {
    document.getElementById("a5-7").innerHTML = h4;
});

document.getElementById("b6-7").addEventListener("click", function() {
    document.getElementById("a6-7").innerHTML = h6;
});

document.getElementById("b7-7").addEventListener("click", function() {
    document.getElementById("a7-7").innerHTML = h9;
});

//-- BUTTON FUNC NO.8 --//

document.getElementById("b-8").addEventListener("click", function() {
    document.getElementById("c-8").innerHTML = c;
});

document.getElementById("b1-8").addEventListener("click", function() {
    document.getElementById("a1-8").innerHTML = x12;
});

document.getElementById("b2-8").addEventListener("click", function() {
    document.getElementById("a2-8").innerHTML = k;
});

document.getElementById("b3-8").addEventListener("click", function() {
    document.getElementById("a3-8").innerHTML = k;
});

document.getElementById("b4-8").addEventListener("click", function() {
    document.getElementById("a4-8").innerHTML = h2;
});

document.getElementById("b5-8").addEventListener("click", function() {
    document.getElementById("a5-8").innerHTML = h8;
});

document.getElementById("b6-8").addEventListener("click", function() {
    document.getElementById("a6-8").innerHTML = h8;
});

document.getElementById("b7-8").addEventListener("click", function() {
    document.getElementById("a7-8").innerHTML = h4;
});

//-- BUTTON FUNC NO.9 --//

document.getElementById("b-9").addEventListener("click", function() {
    document.getElementById("c-9").innerHTML = c;
});

document.getElementById("b1-9").addEventListener("click", function() {
    document.getElementById("a1-9").innerHTML = t8;
});

document.getElementById("b2-9").addEventListener("click", function() {
    document.getElementById("a2-9").innerHTML = k;
});

document.getElementById("b3-9").addEventListener("click", function() {
    document.getElementById("a3-9").innerHTML = k;
});

document.getElementById("b4-9").addEventListener("click", function() {
    document.getElementById("a4-9").innerHTML = h8;
});

document.getElementById("b5-9").addEventListener("click", function() {
    document.getElementById("a5-9").innerHTML = h5;
});

document.getElementById("b6-9").addEventListener("click", function() {
    document.getElementById("a6-9").innerHTML = h2;
});

document.getElementById("b7-9").addEventListener("click", function() {
    document.getElementById("a7-9").innerHTML = h6;
});

//-- BUTTON FUNC NO.10 --//

document.getElementById("b-10").addEventListener("click", function() {
    document.getElementById("c-10").innerHTML = c;
});

document.getElementById("b1-10").addEventListener("click", function() {
    document.getElementById("a1-10").innerHTML = x10;
});

document.getElementById("b2-10").addEventListener("click", function() {
    document.getElementById("a2-10").innerHTML = k;
});

document.getElementById("b3-10").addEventListener("click", function() {
    document.getElementById("a3-10").innerHTML = k;
});

document.getElementById("b4-10").addEventListener("click", function() {
    document.getElementById("a4-10").innerHTML = h0;
});

document.getElementById("b5-10").addEventListener("click", function() {
    document.getElementById("a5-10").innerHTML = h5;
});

document.getElementById("b6-10").addEventListener("click", function() {
    document.getElementById("a6-10").innerHTML = h8;
});

document.getElementById("b7-10").addEventListener("click", function() {
    document.getElementById("a7-10").innerHTML = h2;
});

//-- BUTTON FUNC NO.11 --//

document.getElementById("b-11").addEventListener("click", function() {
    document.getElementById("c-11").innerHTML = c;
});

document.getElementById("b1-11").addEventListener("click", function() {
    document.getElementById("a1-11").innerHTML = x17;
});

document.getElementById("b2-11").addEventListener("click", function() {
    document.getElementById("a2-11").innerHTML = k;
});

document.getElementById("b3-11").addEventListener("click", function() {
    document.getElementById("a3-11").innerHTML = k;
});

document.getElementById("b4-11").addEventListener("click", function() {
    document.getElementById("a4-11").innerHTML = h7;
});

document.getElementById("b5-11").addEventListener("click", function() {
    document.getElementById("a5-11").innerHTML = h8;
});

document.getElementById("b6-11").addEventListener("click", function() {
    document.getElementById("a6-11").innerHTML = h9;
});

document.getElementById("b7-11").addEventListener("click", function() {
    document.getElementById("a7-11").innerHTML = h8;
});

//-- BUTTON FUNC NO.12 --//

document.getElementById("b-12").addEventListener("click", function() {
    document.getElementById("c-12").innerHTML = c;
});

document.getElementById("b1-12").addEventListener("click", function() {
    document.getElementById("a1-12").innerHTML = x16;
});

document.getElementById("b2-12").addEventListener("click", function() {
    document.getElementById("a2-12").innerHTML = k;
});

document.getElementById("b3-12").addEventListener("click", function() {
    document.getElementById("a3-12").innerHTML = k;
});

document.getElementById("b4-12").addEventListener("click", function() {
    document.getElementById("a4-12").innerHTML = h6;
});

document.getElementById("b5-12").addEventListener("click", function() {
    document.getElementById("a5-12").innerHTML = h9;
});

document.getElementById("b6-12").addEventListener("click", function() {
    document.getElementById("a6-12").innerHTML = h7;
});

document.getElementById("b7-12").addEventListener("click", function() {
    document.getElementById("a7-12").innerHTML = h9;
});

//-- BUTTON FUNC NO.13 --//

document.getElementById("b-13").addEventListener("click", function() {
    document.getElementById("c-13").innerHTML = c;
});

document.getElementById("b1-13").addEventListener("click", function() {
    document.getElementById("a1-13").innerHTML = t8;
});

document.getElementById("b2-13").addEventListener("click", function() {
    document.getElementById("a2-13").innerHTML = k;
});

document.getElementById("b3-13").addEventListener("click", function() {
    document.getElementById("a3-13").innerHTML = k;
});

document.getElementById("b4-13").addEventListener("click", function() {
    document.getElementById("a4-13").innerHTML = h8;
});

document.getElementById("b5-13").addEventListener("click", function() {
    document.getElementById("a5-13").innerHTML = h8;
});

document.getElementById("b6-13").addEventListener("click", function() {
    document.getElementById("a6-13").innerHTML = h3;
});

document.getElementById("b7-13").addEventListener("click", function() {
    document.getElementById("a7-13").innerHTML = h5;
});

//-- BUTTON FUNC NO.14 --//

document.getElementById("b-14").addEventListener("click", function() {
    document.getElementById("c-14").innerHTML = c;
});

document.getElementById("b1-14").addEventListener("click", function() {
    document.getElementById("a1-14").innerHTML = x11;
});

document.getElementById("b2-14").addEventListener("click", function() {
    document.getElementById("a2-14").innerHTML = k;
});

document.getElementById("b3-14").addEventListener("click", function() {
    document.getElementById("a3-14").innerHTML = k;
});

document.getElementById("b4-14").addEventListener("click", function() {
    document.getElementById("a4-14").innerHTML = h1;
});

document.getElementById("b5-14").addEventListener("click", function() {
    document.getElementById("a5-14").innerHTML = h7;
});

document.getElementById("b6-14").addEventListener("click", function() {
    document.getElementById("a6-14").innerHTML = h4;
});

document.getElementById("b7-14").addEventListener("click", function() {
    document.getElementById("a7-14").innerHTML = h7;
});

//-- BUTTON FUNC NO.15 --//

document.getElementById("b-15").addEventListener("click", function() {
    document.getElementById("c-15").innerHTML = c;
});

document.getElementById("b1-15").addEventListener("click", function() {
    document.getElementById("a1-15").innerHTML = x15;
});

document.getElementById("b2-15").addEventListener("click", function() {
    document.getElementById("a2-15").innerHTML = k;
});

document.getElementById("b3-15").addEventListener("click", function() {
    document.getElementById("a3-15").innerHTML = k;
});

document.getElementById("b4-15").addEventListener("click", function() {
    document.getElementById("a4-15").innerHTML = h5;
});

document.getElementById("b5-15").addEventListener("click", function() {
    document.getElementById("a5-15").innerHTML = h6;
});

document.getElementById("b6-15").addEventListener("click", function() {
    document.getElementById("a6-15").innerHTML = h8;
});

document.getElementById("b7-15").addEventListener("click", function() {
    document.getElementById("a7-15").innerHTML = h7;
});

//-- BUTTON FUNC NO.16 --//

document.getElementById("b-16").addEventListener("click", function() {
    document.getElementById("c-16").innerHTML = c;
});

document.getElementById("b1-16").addEventListener("click", function() {
    document.getElementById("a1-16").innerHTML = x11;
});

document.getElementById("b2-16").addEventListener("click", function() {
    document.getElementById("a2-16").innerHTML = k;
});

document.getElementById("b3-16").addEventListener("click", function() {
    document.getElementById("a3-16").innerHTML = k;
});

document.getElementById("b4-16").addEventListener("click", function() {
    document.getElementById("a4-16").innerHTML = h1;
});

document.getElementById("b5-16").addEventListener("click", function() {
    document.getElementById("a5-16").innerHTML = h7;
});

document.getElementById("b6-16").addEventListener("click", function() {
    document.getElementById("a6-16").innerHTML = h2;
});

document.getElementById("b7-16").addEventListener("click", function() {
    document.getElementById("a7-16").innerHTML = h9;
});

//-- BUTTON FUNC NO.17 --//

document.getElementById("b-17").addEventListener("click", function() {
    document.getElementById("c-17").innerHTML = c;
});

document.getElementById("b1-17").addEventListener("click", function() {
    document.getElementById("a1-17").innerHTML = t3;
});

document.getElementById("b2-17").addEventListener("click", function() {
    document.getElementById("a2-17").innerHTML = k;
});

document.getElementById("b3-17").addEventListener("click", function() {
    document.getElementById("a3-17").innerHTML = k;
});

document.getElementById("b4-17").addEventListener("click", function() {
    document.getElementById("a4-17").innerHTML = h3;
});

document.getElementById("b5-17").addEventListener("click", function() {
    document.getElementById("a5-17").innerHTML = h6;
});

document.getElementById("b6-17").addEventListener("click", function() {
    document.getElementById("a6-17").innerHTML = h0;
});

document.getElementById("b7-17").addEventListener("click", function() {
    document.getElementById("a7-17").innerHTML = h3;
});

//-- BUTTON FUNC NO.18 --//

document.getElementById("b-18").addEventListener("click", function() {
    document.getElementById("c-18").innerHTML = c;
});

document.getElementById("b1-18").addEventListener("click", function() {
    document.getElementById("a1-18").innerHTML = x11;
});

document.getElementById("b2-18").addEventListener("click", function() {
    document.getElementById("a2-18").innerHTML = k;
});

document.getElementById("b3-18").addEventListener("click", function() {
    document.getElementById("a3-18").innerHTML = k;
});

document.getElementById("b4-18").addEventListener("click", function() {
    document.getElementById("a4-18").innerHTML = h1;
});

document.getElementById("b5-18").addEventListener("click", function() {
    document.getElementById("a5-18").innerHTML = h8;
});

document.getElementById("b6-18").addEventListener("click", function() {
    document.getElementById("a6-18").innerHTML = h9;
});

document.getElementById("b7-18").addEventListener("click", function() {
    document.getElementById("a7-18").innerHTML = h2;
});

//-- BUTTON FUNC NO.19 --//

document.getElementById("b-19").addEventListener("click", function() {
    document.getElementById("c-19").innerHTML = c;
});

document.getElementById("b1-19").addEventListener("click", function() {
    document.getElementById("a1-19").innerHTML = x10;
});

document.getElementById("b2-19").addEventListener("click", function() {
    document.getElementById("a2-19").innerHTML = k;
});

document.getElementById("b3-19").addEventListener("click", function() {
    document.getElementById("a3-19").innerHTML = k;
});

document.getElementById("b4-19").addEventListener("click", function() {
    document.getElementById("a4-19").innerHTML = t0;
});

document.getElementById("b5-19").addEventListener("click", function() {
    document.getElementById("a5-19").innerHTML = h5;
});

document.getElementById("b6-19").addEventListener("click", function() {
    document.getElementById("a6-19").innerHTML = h5;
});

document.getElementById("b7-19").addEventListener("click", function() {
    document.getElementById("a7-19").innerHTML = h5;
});

//-- BUTTON FUNC NO.20 --//

document.getElementById("b-20").addEventListener("click", function() {
    document.getElementById("c-20").innerHTML = c;
});

document.getElementById("b1-20").addEventListener("click", function() {
    document.getElementById("a1-20").innerHTML = x14;
});

document.getElementById("b2-20").addEventListener("click", function() {
    document.getElementById("a2-20").innerHTML = k;
});

document.getElementById("b3-20").addEventListener("click", function() {
    document.getElementById("a3-20").innerHTML = k;
});

document.getElementById("b4-20").addEventListener("click", function() {
    document.getElementById("a4-20").innerHTML = h4;
});

document.getElementById("b5-20").addEventListener("click", function() {
    document.getElementById("a5-20").innerHTML = xx18;
});

document.getElementById("b6-20").addEventListener("click", function() {
    document.getElementById("a6-20").innerHTML = h8;
});

document.getElementById("b7-20").addEventListener("click", function() {
    document.getElementById("a7-20").innerHTML = h6;
});

//------end BUTTON-------//

//------end JAVASCRIPT------//

//