gel = document.getElementById;

function bdayTimer(){
	var day=20, mth=11,  yr=2012;
    var bday=new Date(yr,mth,day,00,00,00,00);
    var d=new Date();
    var mthL=mth-d.getMonth();
    var dayL=d.getDate()-day;
    if(dayL<0){
      dayL=30+dayL;
      }
    var hrL=23-d.getHours();
    var minL=59-d.getMinutes();
    var secL=59-d.getSeconds(); 	
    var tLeft=new Date(0000,mthL,dayL,hrL,minL,secL);
    console.log(tLeft.toString());
    document.getElementById("btimer").innerHTML=(mthL+":"+dayL+":"+hrL+":"+minL+":"+secL); 
    setTimeout("bdayTimer()",1000);
}
