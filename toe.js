
   var cnt = 1;

   function col(i){
    var y = document.getElementById("won");
   	var x = document.getElementById(i);
    if(cnt%2!=0){
      y.innerHTML = "Player 1 Turn";
      x.innerHTML = "X";
    }
    else{
      y.innerHTML = "Player 2 Turn";
      x.innerHTML = "O";
    }
    cnt++;
    check();
   }

   function check(){

     var z = document.getElementById("won");

     var x1 = document.getElementById('1').innerHTML;
     var x2 = document.getElementById('2').innerHTML;
     var x3 = document.getElementById('3').innerHTML;
     var x4 = document.getElementById('4').innerHTML;
     var x5 = document.getElementById('5').innerHTML;
     var x6 = document.getElementById('6').innerHTML;
     var x7 = document.getElementById('7').innerHTML;
     var x8 = document.getElementById('8').innerHTML; 
     var x9 = document.getElementById('9').innerHTML;

     var r1 = x1==x2 && x1==x3;
     var r2 = x4==x5 && x4==x6;
     var r3 = x7==x8 && x7==x9;

     var c1 = x1==x4 && x1==x7;
     var c2 = x2==x5 && x2==x8;
     var c3 = x3==x6 && x3==x9;

     var d1 = x1==x5 && x1==x9;
     var d2 = x3==x5 && x3==x7;

     if(r1){
     	if(x1=='X')z.innerHTML = "Player 1 Won";
     	else if(x1=='O')z.innerHTML = "Player 2 Won";
      if(x1=='X' || x1 == 'O')chng(1,2,3);
     }
     else if(r2){
     	if(x4=='X')z.innerHTML = "Player 1 Won";
     	else if(x4=='O')z.innerHTML = "Player 2 Won";
      if(x4=='X' || x4 == 'O')chng(4,5,6);
     }
     else if(r3){
     	if(x7=='X')z.innerHTML = "Player 1 Won";
     	else if(x7=='O')z.innerHTML = "Player 2 Won";
      if(x7 =='X' || x7 == 'O')chng(7,8,9);
     }
     else if(c1){
     	if(x1=='X')z.innerHTML = "Player 1 Won";
     	else if(x1=='O')z.innerHTML = "Player 2 Won";
      if(x1=='X' || x1 == 'O')chng(1,4,7);
     }
     else if(c2){
     	if(x2=='X')z.innerHTML = "Player 1 Won";
     	else if(x2=='O')z.innerHTML = "Player 2 Won";
      if(x2 =='X' || x2 == 'O')chng(2,5,8);
     }
     else if(c3){
     	if(x3=='X')z.innerHTML = "Player 1 Won";
     	else if(x3=='O')z.innerHTML = "Player 2 Won";
      if(x3 =='X' || x3 == 'O')chng(3,6,9);
     }     
     else if(d1){
     	if(x1=='X')z.innerHTML = "Player 1 Won";
     	else if(x1=='O')z.innerHTML = "Player 2 Won";
      if(x1 =='X' || x1 == 'O')chng(1,5,9);
     }
     else if(d2){
     	if(x3=='X')z.innerHTML = "Player 1 Won";
     	else if(x3=='O')z.innerHTML = "Player 2 Won";
      if(x3 =='X' || x3 == 'O')chng(3,5,7);
     }
     else if(x1!='' && x2!='' && x3!='' && x4!='' && x5!='' && x6!='' && x7!='' && x8!='' && x9!=''){
         z.innerHTML = "Match tie";
     }
}
function rel(){
  window.location.reload();
} 
function chng(m,n,o){
document.getElementById(m).style.background=" #48ceff";
document.getElementById(n).style.background=" #48ceff";
document.getElementById(o).style.background=" #48ceff";

document.getElementById(m).style.color="rgb(0, 94, 255)";
document.getElementById(n).style.color="rgb(0, 94, 255)";
document.getElementById(o).style.color="rgb(0, 94, 255)";

document.getElementById(m).style.transition = "all 2s";
document.getElementById(n).style.transition = "all 2s";
document.getElementById(o).style.transition = "all 2s";
}

