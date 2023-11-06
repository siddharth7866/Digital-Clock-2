setInterval(Showtime,1000)

function Showtime() {
    let timeshow=new Date()
    let hours=timeshow.getHours()
    let minute=timeshow.getMinutes()
    let seconds=timeshow.getSeconds()
    if (hours>=12) {
        hours=hours-12
        if (hours==0) {
            hours
        }
    }
    hours=hours<10?"0"+hours:hours
    seconds=seconds<10?"0"+seconds:seconds
    minute=minute<10?"0"+minute:minute
    let timefinal=hours+":"+minute+":"+seconds
    document.getElementById("clock").innerHTML=timefinal
    console.log([hours,minute,seconds])
}

