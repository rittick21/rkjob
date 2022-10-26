setInterval(()=>{
    let d=new Date();
    hr=d.getHours();
    mi=d.getMinutes();
    se=d.getSeconds();
    let hrotate=30*hr+mi/2;
    let mrotate=6*mi;
    let srotate=6*se;
    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;
},1000)