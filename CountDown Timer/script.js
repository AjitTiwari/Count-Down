const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");

const newYear='1 Jan 2023'

function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const totalsec=(newYearDate-currentDate) /1000;
    const days=Math.floor(totalsec/3600/24);
    const hours=Math.floor(totalsec/3600%24);
    const min=Math.floor(totalsec/60)%60;
    const sec=Math.floor(totalsec)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formattime(hours);
    minsEl.innerHTML = formattime(min);
    secondsEl.innerHTML = formattime(sec);

}

function formattime(time){
    return time<10 ?(`0${time}`): time;
}

countdown();
setInterval(countdown,1000)