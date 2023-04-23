let [milliseconds, seconds , minutes, hours] = [0,0,0,0];
let timeRef = document.querySelector('.timer-display');
let int=null;


document.getElementById('start-btn').addEventListener('click' , ()=>{
     if (int !=null){
        clearInterval(int);
     }
     int= setInterval(displayTimer ,10);
});
document.getElementById('stop-btn').addEventListener('click',()=>{
    clearInterval(int);
});


document.getElementById('reset-btn').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds, seconds , minutes, hours] = [0,0,0,0];
    timeRef.innerHTML='00 : 00 : 00 : 000';

})

function displayTimer(){
    milliseconds+=10;
    if(milliseconds==1000){
        milliseconds=0
        seconds++;
        if(seconds==60){
            minutes++;
            seconds=0;
            if(minutes==60){
                hours++;
                minutes=0;
            }
        }
    }
    
    let h= hours<10?'0'+hours:hours;
    let m =minutes<10?'0'+minutes:minutes;
    let s=seconds<10?'0'+seconds:seconds;
    let mi=milliseconds<10?'00'+milliseconds:milliseconds<100? '0'+milliseconds:milliseconds;
     

    timeRef.innerHTML= `${h} : ${m} : ${s} : ${mi}`




}