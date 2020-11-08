function AreaConv(source,valnum){
valnum = parseFloat(valnum);
var acre = document.getElementById("acre");
var ares = document.getElementById("ares");
var hect = document.getElementById("hect");
var sqcm = document.getElementById("sqcm");
var sqft = document.getElementById("sqft");
var sqin = document.getElementById("sqin");
var sqms = document.getElementById("sqms");
if (source=="acre") {
ares.value=(valnum*40.468564224).toFixed(9);
hect.value=(valnum*0.4046856422).toFixed(10);
sqcm.value=(valnum*40468654.224).toFixed(3);
sqft.value=(valnum*43560).toFixed();
sqin.value=(valnum*6272640).toFixed();
sqms.value=(valnum*4046.8564224).toFixed(7);
}
if (source=="ares") {
acre.value=(valnum*0.0247105381).toFixed(10);
hect.value=(valnum*0.01).toFixed(2);
sqcm.value=(valnum*1000000).toFixed();
sqft.value=(valnum*1076.391041671).toFixed(9);
sqin.value=(valnum*155000.31000062).toFixed(8);
sqms.value=(valnum*100).toFixed();
}
if (source=="hect") {
acre.value=(valnum*).toFixed();
ares.value=(valnum*).toFixed();
sqcm.value=(valnum*).toFixed();
sqft.value=(valnum*).toFixed();
sqin.value=(valnum*).toFixed();
sqms.value=(valnum*).toFixed();
}
if (source=="sqcm") {
acre.value=(valnum*).toFixed();
ares.value=(valnum*).toFixed();
hect.value=(valnum*).toFixed();
sqft.value=(valnum*).toFixed();
sqin.value=(valnum*).toFixed();
sqms.value=(valnum*).toFixed();
}
if (source=="sqft") {
acre.value=(valnum*).toFixed();
ares.value=(valnum*).toFixed();
hect.value=(valnum*).toFixed();
sqcm.value=(valnum*).toFixed();
sqin.value=(valnum*).toFixed();
sqms.value=(valnum*).toFixed();
}
if (source=="sqin") {
acre.value=(valnum*).toFixed();
ares.value=(valnum*).toFixed();
hect.value=(valnum*).toFixed();
sqcm.value=(valnum*).toFixed();
sqft.value=(valnum*).toFixed();
sqms.value=(valnum*).toFixed();
}
if (source=="sqms") {
acre.value=(valnum*).toFixed();
ares.value=(valnum*).toFixed();
hect.value=(valnum*).toFixed();
sqcm.value=(valnum*).toFixed();
sqft.value=(valnum*).toFixed();
sqin.value=(valnum*).toFixed();
}
}
function LengConv(source,valnum1){
valnum1 = parseFloat(valnum1);
var mt = document.getElementById("mt");
var cm = document.getElementById("cm");
var ms = document.getElementById("ms");
var km = document.getElementById("km");
var ih = document.getElementById("ih");
var ft = document.getElementById("ft");
var yd = document.getElementById("yd");
var mi = document.getElementById("mi");
var NM = document.getElementById("NM");
var mil = document.getElementById("mil");
if (source=="mt"){
cm.value=(valnum1*0.1).toFixed(1);
ms.value=(valnum1*0.001).toFixed(3);
km.value=(valnum1*0.000001).toFixed(6);
ih.value=(valnum1*0.0393700787).toFixed(10);
ft.value=(valnum1*0.0032808399).toFixed(10);
yd.value=(valnum1*0.0010936133).toFixed(10);
mi.value=(valnum1*0.00000062137).toFixed(11);
NM.value=(valnum1*0.00000053996).toFixed(11);
mil.value=(valnum1*393.7007874016).toFixed(10);
}
if (source=="cm"){
mt.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
if (source=="ms"){
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
if (source=="km"){
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
if (source=="ih"){
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
if (source=="ft"){
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
if (source=="yd"){
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
if (source=="mi"){
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
if (source=="NM"){
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
if (source=="mil"){
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
.value=(valnum1*).toFixed();
}
}
function TempConv(source,valnum2){
valnum2 = parseFloat(valnum2);
var degc = document.getElementById("degc");
var degf = document.getElementById("degf");
var kel = document.getElementById("kel");
if (source=="degc"){
degf.value=(valnum2*).toFixed();
kel.value=(valnum2*).toFixed();
}
if (source=="degf"){
degc.value=(valnum2*).toFixed();
kel.value=(valnum2*).toFixed();
}
if (source=="kel"){
degc.value=(valnum2*).toFixed();
degf.value=(valnum2*).toFixed();
}
}