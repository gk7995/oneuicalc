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
acre.value=(valnum*2.4710538147).toFixed(10);
ares.value=(valnum*100).toFixed();
sqcm.value=(valnum*100000000).toFixed();
sqft.value=(valnum*107639.1041671).toFixed(7);
sqin.value=(valnum*15500031.000062).toFixed(6);
sqms.value=(valnum*10000).toFixed();
}
if (source=="sqcm") {
acre.value=(valnum*0.000000024711).toFixed(12);
ares.value=(valnum*0.000001).toFixed(6);
hect.value=(valnum*0.00000001).toFixed(8);
sqft.value=(valnum*0.001076391).toFixed(9);
sqin.value=(valnum*0.15500031).toFixed(8);
sqms.value=(valnum*0.0001).toFixed(4);
}
if (source=="sqft") {
acre.value=(valnum*0.0000229568).toFixed(10);
ares.value=(valnum*0.0009290304).toFixed(10);
hect.value=(valnum*0.0000092903).toFixed(10);
sqcm.value=(valnum*929.0304).toFixed(4);
sqin.value=(valnum*144).toFixed();
sqms.value=(valnum*0.09290304).toFixed(8);
}
if (source=="sqin") {
acre.value=(valnum*0.00000015942).toFixed(11);
ares.value=(valnum*0.0000064516).toFixed(10);
hect.value=(valnum*0.000000064516).toFixed(12);
sqcm.value=(valnum*6.4516).toFixed(4);
sqft.value=(valnum*0.0069444444).toFixed(10);
sqms.value=(valnum*0.00064516).toFixed(8);
}
if (source=="sqms") {
acre.value=(valnum*0.0002471054).toFixed(10);
ares.value=(valnum*0.01).toFixed(2);
hect.value=(valnum*0.0001).toFixed(4);
sqcm.value=(valnum*10000).toFixed();
sqft.value=(valnum*10.7639104167).toFixed(10);
sqin.value=(valnum*1550.0031000062).toFixed(10);
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
mt.value=(valnum1*10).toFixed();
ms.value=(valnum1*0.01).toFixed(2);
km.value=(valnum1*0.00001).toFixed(5);
ih.value=(valnum1*0.3937007874).toFixed(10);
ft.value=(valnum1*0.032808399).toFixed(9);
yd.value=(valnum1*0.010936133).toFixed(9);
mi.value=(valnum1*0.0000062137).toFixed(10);
NM.value=(valnum1*0.0000053996).toFixed(10);
mil.value=(valnum1*393.7007874016).toFixed(10);
}
if (source=="ms"){
mt.value=(valnum1*1000).toFixed();
cm.value=(valnum1*100).toFixed();
km.value=(valnum1*0.001).toFixed(3);
ih.value=(valnum1*39.3700787402).toFixed(10);
ft.value=(valnum1*3.280839895).toFixed(9);
yd.value=(valnum1*1.0936132983).toFixed(10);
mi.value=(valnum1*0.0006213712).toFixed(10);
NM.value=(valnum1*0.0005399568).toFixed(10);
mil.value=(valnum1*39370.078740158).toFixed(9);
}
if (source=="km"){
mt.value=(valnum1*1000000).toFixed();
cm.value=(valnum1*100000).toFixed();
ms.value=(valnum1*1000).toFixed();
ih.value=(valnum1*39370.078740158).toFixed(9);
ft.value=(valnum1*3280.8398950131).toFixed(10);
yd.value=(valnum1*1093.6132983377).toFixed(10);
mi.value=(valnum1*0.6213711922).toFixed(10);
NM.value=(valnum1*0.5399568035).toFixed(10);
mil.value=(valnum1*39370078.740157).toFixed(6);
}
if (source=="ih"){
mt.value=(valnum1*25.4).toFixed(1);
cm.value=(valnum1*2.54).toFixed(2);
ms.value=(valnum1*0.0254).toFixed(4);
km.value=(valnum1*0.0000254).toFixed(7);
ft.value=(valnum1*0.0833333333).toFixed(10);
yd.value=(valnum1*0.0277777778).toFixed(10);
mi.value=(valnum1*0.0000157828).toFixed(10);
NM.value=(valnum1*0.0000137149).toFixed(10);
mil.value=(valnum1*1000).toFixed();
}
if (source=="ft"){
mt.value=(valnum1*304.8).toFixed(1);
cm.value=(valnum1*30.48).toFixed(2);
ms.value=(valnum1*0.3048).toFixed(4);
km.value=(valnum1*0.0003048).toFixed(7);
ih.value=(valnum1*12).toFixed();
yd.value=(valnum1*0.3333333333).toFixed(10);
mi.value=(valnum1*0.0001893939).toFixed(10);
NM.value=(valnum1*0.0001645788).toFixed(10);
mil.value=(valnum1*12000).toFixed();
}
if (source=="yd"){
mt.value=(valnum1*914.4).toFixed(1);
cm.value=(valnum1*91.44).toFixed(2);
ms.value=(valnum1*0.9144).toFixed(4);
km.value=(valnum1*0.0009144).toFixed(7);
ih.value=(valnum1*36).toFixed();
ft.value=(valnum1*3).toFixed();
mi.value=(valnum1*0.0005681818).toFixed(10);
NM.value=(valnum1*0.0004937365).toFixed(10);
mil.value=(valnum1*36000).toFixed();
}
if (source=="mi"){
mt.value=(valnum1*1609344).toFixed();
cm.value=(valnum1*160934.4).toFixed(1);
ms.value=(valnum1*1609.344).toFixed(3);
km.value=(valnum1*1.609344).toFixed(6);
ih.value=(valnum1*63360).toFixed();
ft.value=(valnum1*5280).toFixed();
yd.value=(valnum1*1760).toFixed();
NM.value=(valnum1*0.8689762419).toFixed(10);
mil.value=(valnum1*63360000).toFixed();
}
if (source=="NM"){
mt.value=(valnum1*1852000).toFixed();
cm.value=(valnum1*185200).toFixed();
ms.value=(valnum1*1852).toFixed();
km.value=(valnum1*1.852).toFixed(3);
ih.value=(valnum1*72913.385826772).toFixed(9);
ft.value=(valnum1*6076.1154855643).toFixed(10);
yd.value=(valnum1*2025.3718285214).toFixed(10);
mi.value=(valnum1*1.150779448).toFixed(9);
mil.value=(valnum1*72913385.826772).toFixed(6);
}
if (source=="mil"){
mt.value=(valnum1*0.0254).toFixed(4);
cm.value=(valnum1*0.00254).toFixed(5);
ms.value=(valnum1*0.0000254).toFixed(7);
km.value=(valnum1*0.0000000254).toFixed(10);
ih.value=(valnum1*0.001).toFixed(3);
ft.value=(valnum1*0.0000833333).toFixed(10);
yd.value=(valnum1*0.0000277778).toFixed(10);
mi.value=(valnum1*0.000000015783).toFixed(12);
NM.value=(valnum1*0.000000013715).toFixed(12);
}
}
function TempConv(source,valnum2){
valnum2 = parseFloat(valnum2);
var degc = document.getElementById("degc");
var degf = document.getElementById("degf");
var kel = document.getElementById("kel");
if (source=="degc"){
degf.value=((valnum2*1.8)+32).toFixed(1);
kel.value=(valnum2+273.15).toFixed(2);
}
if (source=="degf"){
degc.value=((valnum2-32)*5/9).toFixed(10);
kel.value=((valnum2-32)*5/9+273.15).toFixed(10);
}
if (source=="kel"){
degc.value=(valnum2-273.15).toFixed(2);
degf.value=((valnum2-273.15)*1.8+32).toFixed(2);
}
}
function VoluConv(source,valnum3){
valnum3 = parseFloat(valnum3);
var gal = document.getElementById("");
var GAL = document.getElementById("");
var l = document.getElementById("");
var ml = document.getElementById("");
var cucm = document.getElementById("");
var cums = document.getElementById("");
var cuih = document.getElementById("");
var cuft = document.getElementById("");
if (source==""){







}
if (source==""){







}
if (source==""){







}
if (source==""){







}
if (source==""){







}
if (source==""){







}
if (source==""){







}
if (source==""){







}
}
function MassConv(source,valnum4){
valnum4 = parseFloat(valnum4);
var t = document.getElementById("");
var ukt = document.getElementById("");
var ust = document.getElementById("");
var lb = document.getElementById("");
var oz = document.getElementById("");
var kg = document.getElementById("");
var g = document.getElementById("");
if (source==""){






}
if (source==""){






}
if (source==""){






}
if (source==""){






}
if (source==""){






}
if (source==""){






}
if (source==""){






}
}
function DataConv(source,valnum5){
valnum5 = parseFloat(valnum5);
var bit = document.getElementById("");
var b = document.getElementById("");
var kb = document.getElementById("");
var mb = document.getElementById("");
var gb = document.getElementById("");
var tb = document.getElementById("");
if (source==""){





}
if (source==""){





}
if (source==""){





}
if (source==""){





}
if (source==""){





}
if (source==""){





}
}
function SpeeConv(source,valnum6){
valnum6 = parseFloat(valnum6);
var mps = document.getElementById("");
var mph = document.getElementById("");
var kps = document.getElementById("");
var kph = document.getElementById("");
var ips = document.getElementById("");
var iph = document.getElementById("");
var fps = document.getElementById("");
var fph = document.getElementById("");
var mis = document.getElementById("");
var mih = document.getElementById("");
var kn = document.getElementById("");
if (source==""){










}
if (source==""){










}
if (source==""){










}
if (source==""){










}
if (source==""){










}
if (source==""){










}
if (source==""){










}
if (source==""){










}
if (source==""){










}
if (source==""){










}
if (source==""){










}
}
function TimeConv(source,valnum7){
valnum7 = parseFloat(valnum7);
var mls = document.getElementById("");
var sec = document.getElementById("");
var min = document.getElementById("");
var h = document.getElementById("");
var d = document.getElementById("");
var wk = document.getElementById("");
if (source==""){





}
if (source==""){





}
if (source==""){





}
if (source==""){





}
if (source==""){





}
if (source==""){





}
}