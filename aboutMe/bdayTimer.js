function bdayTimer(var day,var mth, var yr){
    var bday=new Date(yr,mth,day,00,00,00,00);
    var d=new Date();
    var mthL=d.getMonths()-mth;
    var dayL=d.getdate()-day;
    if(dayL<0){
      dayL=30+dayL;}
    var hrL=23-d.getHours();
    var minL=59-d.getMinutes();
    var secL=59-d.getSeconds(); 
    setTimeOut("bdayTimer()",1000);	
    var tLeft=new Date(0000,mthl,dayL,hrL,minL,secL);
    document.write(tLeft.toString()+"left");    
}
