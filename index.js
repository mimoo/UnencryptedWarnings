var pageMod = require("sdk/page-mod");

//alert(window.location.protocol);
alert_background = 'background-image: -webkit-linear-gradient(135deg, transparent,           transparent 25%, hsla(0,0%,0%,.05) 25%,           hsla(0,0%,0%,.05) 50%, transparent 50%,           transparent 75%, hsla(0,0%,0%,.05) 75%,           hsla(0,0%,0%,.05));  background-image: -moz-linear-gradient(135deg, transparent,           transparent 25%, hsla(0,0%,0%,.1) 25%,           hsla(0,0%,0%,.1) 50%, transparent 50%,           transparent 75%, hsla(0,0%,0%,.1) 75%,           hsla(0,0%,0%,.1));  background-image: -ms-linear-gradient(135deg, transparent,           transparent 25%, hsla(0,0%,0%,.1) 25%,           hsla(0,0%,0%,.1) 50%, transparent 50%,           transparent 75%, hsla(0,0%,0%,.1) 75%,           hsla(0,0%,0%,.1));  background-image: -o-linear-gradient(135deg, transparent,           transparent 25%, hsla(0,0%,0%,.1) 25%,           hsla(0,0%,0%,.1) 50%, transparent 50%,           transparent 75%, hsla(0,0%,0%,.1) 75%,           hsla(0,0%,0%,.1));  background-image: linear-gradient(135deg, transparent,           transparent 25%, hsla(0,0%,0%,.1) 25%,           hsla(0,0%,0%,.1) 50%, transparent 50%,           transparent 75%, hsla(0,0%,0%,.1) 75%,           hsla(0,0%,0%,.1));  background-size: 20px 20px;'
alert = '<div style="z-index:9999999999;position:fixed;left:0;top:0;width:100%;height:30px;background-color:rgba(255,0,0,.7);' + alert_background + ' color:white; box-shadow:0 0 5px rgba(0,0,0, .8);font-weight:bold; font-size:14px; font-family:Arial; padding:5px;border-bottom:1px black solid;">The connection with this webpage is unsecure. It might have been modified by an active attacker.</div><div style="height:30px;"></div>';

alert2 = "prout";

pageMod.PageMod({
    include: "http://*",
    contentScript: 'document.body.innerHTML += \'' + alert + '\''
});
