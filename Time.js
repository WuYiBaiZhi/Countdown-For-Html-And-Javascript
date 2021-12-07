//获取现在的时间戳
function Time_Nix () {
    var now = new Date();
    var year = now.getFullYear();
    var moth = now.getMonth();
    var day = now.getDate();
    var hor = now.getHours();
    var set = now.getSeconds();
    var Time_Nix_Time = now.getTime()
    var Time_list = {year:year,moth:moth+1,day:day,hor:hor,set:set};
    return Time_Nix_Time
};
//获取2021.12.16.0.0.0的时间戳
function Time_TM () {
    var TM = new Date(2021,11,16,0,0,0);
    var TM_Time = TM.getTime();
    return TM_Time
};
//计算两个时间的差
function Time () {
    var Now_Time = Time_Nix();
    var TM_Time = Time_TM();
    var X = TM_Time - Now_Time;
    return X
}
//换算天,小时,分钟,秒
function Time_Now_set () {
    var Time_Ms = Time ();
    var Time_Set = Time_Ms/1000;
    var day = Math.trunc(Time_Set / (60*60*24));
    var hor = Math.trunc(Time_Set % (60*60*24) / (60*60));
    var min = Math.trunc(Time_Set % (60*60*24) % (60*60) /60);
    var set = Math.trunc(Time_Set % 60);
    var Time_list = {day:day,hor:hor,min:min,set:set};
    return Time_list
}
//修改到前端
function Time_Html() {
    var Time_Now_list = Time_Now_set();
    var day = Time_Now_list["day"];
    var hor = Time_Now_list["hor"];
    var min = Time_Now_list["min"];
    var set = Time_Now_list["set"];
    var day_text = document.querySelector(".day");
    day_text.innerText = day;
    var hor_text = document.querySelector(".hor");
    hor_text.innerText = hor;
    var min_text = document.querySelector(".min");
    min_text.innerText = min;
    var set_text = document.querySelector(".set");
    set_text.innerText = set;
}
/*
////每1000ms运行一次
setInterval (function () {
    var Time_Now_list = Time_Now_set();
    var day = Time_Now_list["day"];
    var hor = Time_Now_list["hor"];
    var min = Time_Now_list["min"];
    var set = Time_Now_list["set"];
    var day_text = document.querySelector(".day");
    day_text.innerText = day;
    var hor_text = document.querySelector(".hor");
    hor_text.innerText = hor;
    var min_text = document.querySelector(".min");
    min_text.innerText = min;
    var set_text = document.querySelector(".set");
    set_text.innerText = set;
}
,1000);
*/
//每1000ms运行一次
setInterval("Time_Html()",1000);