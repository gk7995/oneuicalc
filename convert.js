function AreaConv(source, valnum) {
    valnum = parseFloat(valnum);
    var acre = document.getElementById("acre");
    var ares = document.getElementById("ares");
    var hect = document.getElementById("hect");
    var sqcm = document.getElementById("sqcm");
    var sqft = document.getElementById("sqft");
    var sqin = document.getElementById("sqin");
    var sqms = document.getElementById("sqms");
    if (source == "acre") {
        ares.value = (valnum * 40.468564224).toFixed(9);
        hect.value = (valnum * 0.4046856422).toFixed(10);
        sqcm.value = (valnum * 40468654.224).toFixed(3);
        sqft.value = (valnum * 43560).toFixed();
        sqin.value = (valnum * 6272640).toFixed();
        sqms.value = (valnum * 4046.8564224).toFixed(7);
    }
    if (source == "ares") {
        acre.value = (valnum * 0.0247105381).toFixed(10);
        hect.value = (valnum * 0.01).toFixed(2);
        sqcm.value = (valnum * 1000000).toFixed();
        sqft.value = (valnum * 1076.391041671).toFixed(9);
        sqin.value = (valnum * 155000.31000062).toFixed(8);
        sqms.value = (valnum * 100).toFixed();
    }
    if (source == "hect") {
        acre.value = (valnum * 2.4710538147).toFixed(10);
        ares.value = (valnum * 100).toFixed();
        sqcm.value = (valnum * 100000000).toFixed();
        sqft.value = (valnum * 107639.1041671).toFixed(7);
        sqin.value = (valnum * 15500031.000062).toFixed(6);
        sqms.value = (valnum * 10000).toFixed();
    }
    if (source == "sqcm") {
        acre.value = (valnum * 0.000000024711).toFixed(12);
        ares.value = (valnum * 0.000001).toFixed(6);
        hect.value = (valnum * 0.00000001).toFixed(8);
        sqft.value = (valnum * 0.001076391).toFixed(9);
        sqin.value = (valnum * 0.15500031).toFixed(8);
        sqms.value = (valnum * 0.0001).toFixed(4);
    }
    if (source == "sqft") {
        acre.value = (valnum * 0.0000229568).toFixed(10);
        ares.value = (valnum * 0.0009290304).toFixed(10);
        hect.value = (valnum * 0.0000092903).toFixed(10);
        sqcm.value = (valnum * 929.0304).toFixed(4);
        sqin.value = (valnum * 144).toFixed();
        sqms.value = (valnum * 0.09290304).toFixed(8);
    }
    if (source == "sqin") {
        acre.value = (valnum * 0.00000015942).toFixed(11);
        ares.value = (valnum * 0.0000064516).toFixed(10);
        hect.value = (valnum * 0.000000064516).toFixed(12);
        sqcm.value = (valnum * 6.4516).toFixed(4);
        sqft.value = (valnum * 0.0069444444).toFixed(10);
        sqms.value = (valnum * 0.00064516).toFixed(8);
    }
    if (source == "sqms") {
        acre.value = (valnum * 0.0002471054).toFixed(10);
        ares.value = (valnum * 0.01).toFixed(2);
        hect.value = (valnum * 0.0001).toFixed(4);
        sqcm.value = (valnum * 10000).toFixed();
        sqft.value = (valnum * 10.7639104167).toFixed(10);
        sqin.value = (valnum * 1550.0031000062).toFixed(10);
    }
}

function LengConv(source, valnum1) {
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
    if (source == "mt") {
        cm.value = (valnum1 * 0.1).toFixed(1);
        ms.value = (valnum1 * 0.001).toFixed(3);
        km.value = (valnum1 * 0.000001).toFixed(6);
        ih.value = (valnum1 * 0.0393700787).toFixed(10);
        ft.value = (valnum1 * 0.0032808399).toFixed(10);
        yd.value = (valnum1 * 0.0010936133).toFixed(10);
        mi.value = (valnum1 * 0.00000062137).toFixed(11);
        NM.value = (valnum1 * 0.00000053996).toFixed(11);
        mil.value = (valnum1 * 393.7007874016).toFixed(10);
    }
    if (source == "cm") {
        mt.value = (valnum1 * 10).toFixed();
        ms.value = (valnum1 * 0.01).toFixed(2);
        km.value = (valnum1 * 0.00001).toFixed(5);
        ih.value = (valnum1 * 0.3937007874).toFixed(10);
        ft.value = (valnum1 * 0.032808399).toFixed(9);
        yd.value = (valnum1 * 0.010936133).toFixed(9);
        mi.value = (valnum1 * 0.0000062137).toFixed(10);
        NM.value = (valnum1 * 0.0000053996).toFixed(10);
        mil.value = (valnum1 * 393.7007874016).toFixed(10);
    }
    if (source == "ms") {
        mt.value = (valnum1 * 1000).toFixed();
        cm.value = (valnum1 * 100).toFixed();
        km.value = (valnum1 * 0.001).toFixed(3);
        ih.value = (valnum1 * 39.3700787402).toFixed(10);
        ft.value = (valnum1 * 3.280839895).toFixed(9);
        yd.value = (valnum1 * 1.0936132983).toFixed(10);
        mi.value = (valnum1 * 0.0006213712).toFixed(10);
        NM.value = (valnum1 * 0.0005399568).toFixed(10);
        mil.value = (valnum1 * 39370.078740158).toFixed(9);
    }
    if (source == "km") {
        mt.value = (valnum1 * 1000000).toFixed();
        cm.value = (valnum1 * 100000).toFixed();
        ms.value = (valnum1 * 1000).toFixed();
        ih.value = (valnum1 * 39370.078740158).toFixed(9);
        ft.value = (valnum1 * 3280.8398950131).toFixed(10);
        yd.value = (valnum1 * 1093.6132983377).toFixed(10);
        mi.value = (valnum1 * 0.6213711922).toFixed(10);
        NM.value = (valnum1 * 0.5399568035).toFixed(10);
        mil.value = (valnum1 * 39370078.740157).toFixed(6);
    }
    if (source == "ih") {
        mt.value = (valnum1 * 25.4).toFixed(1);
        cm.value = (valnum1 * 2.54).toFixed(2);
        ms.value = (valnum1 * 0.0254).toFixed(4);
        km.value = (valnum1 * 0.0000254).toFixed(7);
        ft.value = (valnum1 * 0.0833333333).toFixed(10);
        yd.value = (valnum1 * 0.0277777778).toFixed(10);
        mi.value = (valnum1 * 0.0000157828).toFixed(10);
        NM.value = (valnum1 * 0.0000137149).toFixed(10);
        mil.value = (valnum1 * 1000).toFixed();
    }
    if (source == "ft") {
        mt.value = (valnum1 * 304.8).toFixed(1);
        cm.value = (valnum1 * 30.48).toFixed(2);
        ms.value = (valnum1 * 0.3048).toFixed(4);
        km.value = (valnum1 * 0.0003048).toFixed(7);
        ih.value = (valnum1 * 12).toFixed();
        yd.value = (valnum1 * 0.3333333333).toFixed(10);
        mi.value = (valnum1 * 0.0001893939).toFixed(10);
        NM.value = (valnum1 * 0.0001645788).toFixed(10);
        mil.value = (valnum1 * 12000).toFixed();
    }
    if (source == "yd") {
        mt.value = (valnum1 * 914.4).toFixed(1);
        cm.value = (valnum1 * 91.44).toFixed(2);
        ms.value = (valnum1 * 0.9144).toFixed(4);
        km.value = (valnum1 * 0.0009144).toFixed(7);
        ih.value = (valnum1 * 36).toFixed();
        ft.value = (valnum1 * 3).toFixed();
        mi.value = (valnum1 * 0.0005681818).toFixed(10);
        NM.value = (valnum1 * 0.0004937365).toFixed(10);
        mil.value = (valnum1 * 36000).toFixed();
    }
    if (source == "mi") {
        mt.value = (valnum1 * 1609344).toFixed();
        cm.value = (valnum1 * 160934.4).toFixed(1);
        ms.value = (valnum1 * 1609.344).toFixed(3);
        km.value = (valnum1 * 1.609344).toFixed(6);
        ih.value = (valnum1 * 63360).toFixed();
        ft.value = (valnum1 * 5280).toFixed();
        yd.value = (valnum1 * 1760).toFixed();
        NM.value = (valnum1 * 0.8689762419).toFixed(10);
        mil.value = (valnum1 * 63360000).toFixed();
    }
    if (source == "NM") {
        mt.value = (valnum1 * 1852000).toFixed();
        cm.value = (valnum1 * 185200).toFixed();
        ms.value = (valnum1 * 1852).toFixed();
        km.value = (valnum1 * 1.852).toFixed(3);
        ih.value = (valnum1 * 72913.385826772).toFixed(9);
        ft.value = (valnum1 * 6076.1154855643).toFixed(10);
        yd.value = (valnum1 * 2025.3718285214).toFixed(10);
        mi.value = (valnum1 * 1.150779448).toFixed(9);
        mil.value = (valnum1 * 72913385.826772).toFixed(6);
    }
    if (source == "mil") {
        mt.value = (valnum1 * 0.0254).toFixed(4);
        cm.value = (valnum1 * 0.00254).toFixed(5);
        ms.value = (valnum1 * 0.0000254).toFixed(7);
        km.value = (valnum1 * 0.0000000254).toFixed(10);
        ih.value = (valnum1 * 0.001).toFixed(3);
        ft.value = (valnum1 * 0.0000833333).toFixed(10);
        yd.value = (valnum1 * 0.0000277778).toFixed(10);
        mi.value = (valnum1 * 0.000000015783).toFixed(12);
        NM.value = (valnum1 * 0.000000013715).toFixed(12);
    }
}

function TempConv(source, valnum2) {
    valnum2 = parseFloat(valnum2);
    var degc = document.getElementById("degc");
    var degf = document.getElementById("degf");
    var kel = document.getElementById("kel");
    if (source == "degc") {
        degf.value = ((valnum2 * 1.8) + 32).toFixed(1);
        kel.value = (valnum2 + 273.15).toFixed(2);
    }
    if (source == "degf") {
        degc.value = ((valnum2 - 32) * 5 / 9).toFixed(10);
        kel.value = ((valnum2 - 32) * 5 / 9 + 273.15).toFixed(10);
    }
    if (source == "kel") {
        degc.value = (valnum2 - 273.15).toFixed(2);
        degf.value = ((valnum2 - 273.15) * 1.8 + 32).toFixed(2);
    }
}

function VoluConv(source, valnum3) {
    valnum3 = parseFloat(valnum3);
    var gal = document.getElementById("gal");
    var GAL = document.getElementById("GAL");
    var l = document.getElementById("l");
    var ml = document.getElementById("ml");
    var cucm = document.getElementById("cucm");
    var cums = document.getElementById("cums");
    var cuih = document.getElementById("cuih");
    var cuft = document.getElementById("cuft");
    if (source == "gal") {
        GAL.value = (valnum * 1.2009499255).toFixed(10);
        l.value = (valnum * 4.54609).toFixed(4);
        ml.value = (valnum * 4546.09).toFixed(2);
        cucm.value = (valnum * 4546.09).toFixed(2);
        cums.value = (valnum * 0.00454609).toFixed(8);
        cuih.value = (valnum * 277.4194327916).toFixed(10);
        cuft.value = (valnum * 0.1605436532).toFixed(10);
    }
    if (source == "GAL") {
        gal.value = (valnum * 0.8326741846).toFixed(10);
        l.value = (valnum * 3.785411784).toFixed(9);
        ml.value = (valnum * 3785.411784).toFixed(6);
        cucm.value = (valnum * 3785.411784).toFixed(6);
        cums.value = (valnum * 0.0037854118).toFixed(10);
        cuih.value = (valnum * 231).toFixed();
        cuft.value = (valnum * 0.1336805556).toFixed(10);
    }
    if (source == "l") {
        gal.value = (valnum * 0.2199692483).toFixed(10);
        GAL.value = (valnum * 0.2641720524).toFixed(10);
        ml.value = (valnum * 1000).toFixed();
        cucm.value = (valnum * 1000).toFixed();
        cums.value = (valnum * 0.001).toFixed(3);
        cuih.value = (valnum * 61.0237440947).toFixed(10);
        cuft.value = (valnum * 0.0353146667).toFixed(10);
    }
    if (source == "ml") {
        gal.value = (valnum * 0.0002199692).toFixed(10);
        GAL.value = (valnum * 0.0002641721).toFixed(10);
        l.value = (valnum * 0.0001).toFixed(4);
        cucm.value = (valnum * 1).toFixed();
        cums.value = (valnum * 0.000001).toFixed(6);
        cuih.value = (valnum * 0.0610237441).toFixed(10);
        cuft.value = (valnum * 0.0000353147).toFixed(10);
    }
    if (source == "cucm") {
        gal.value = (valnum * 0.0002199692).toFixed(10);
        GAL.value = (valnum * 0.0002641721).toFixed(10);
        l.value = (valnum * 0.0001).toFixed(4);
        ml.value = (valnum * 1).toFixed();
        cums.value = (valnum * 0.000001).toFixed(6);
        cuih.value = (valnum * 0.0610237441).toFixed(10);
        cuft.value = (valnum * 0.0000353147).toFixed(10);
    }
    if (source == "cums") {
        gal.value = (valnum * 219.9692482991).toFixed(10);
        GAL.value = (valnum * 264.1720523581).toFixed(10);
        l.value = (valnum * 1000).toFixed();
        ml.value = (valnum * 1000000).toFixed();
        cucm.value = (valnum * 1000000).toFixed();
        cuih.value = (valnum * 61023.744094732).toFixed(9);
        cuft.value = (valnum * 35.3146667215).toFixed(10);
    }
    if (source == "cuih") {
        gal.value = (valnum * 0.0036046501).toFixed(10);
        GAL.value = (valnum * 0.0043290043).toFixed(10);
        l.value = (valnum * 0.016387064).toFixed(9);
        ml.value = (valnum * 16.387064).toFixed(6);
        cucm.value = (valnum * 16.387064).toFixed(6);
        cums.value = (valnum * 0.0000163871).toFixed(10);
        cuft.value = (valnum * 0.0005787037).toFixed(10);
    }
    if (source == "cuft") {
        gal.value = (valnum * 6.228835459).toFixed(9);
        GAL.value = (valnum * 7.4805194805).toFixed(10);
        l.value = (valnum * 28.316846592).toFixed(9);
        ml.value = (valnum * 28316.846592).toFixed(6);
        cucm.value = (valnum * 28316.846592).toFixed(6);
        cums.value = (valnum * 0.0283168466).toFixed(10);
        cuih.value = (valnum * 1728).toFixed();
    }
}

function MassConv(source, valnum4) {
    valnum4 = parseFloat(valnum4);
    var t = document.getElementById("t");
    var ukt = document.getElementById("ukt");
    var ust = document.getElementById("ust");
    var lb = document.getElementById("lb");
    var oz = document.getElementById("oz");
    var kg = document.getElementById("kg");
    var g = document.getElementById("g");
    if (source == "t") {
        ukt.value = (valnum * 0.9842065276).toFixed(10);
        ust.value = (valnum * 1.1023113109).toFixed(10);
        lb.value = (valnum * 2204.6226218488).toFixed(10);
        oz.value = (valnum * 35273.96194958).toFixed(8);
        kg.value = (valnum * 1000).toFixed();
        g.value = (valnum * 1000000).toFixed();
    }
    if (source == "ukt") {
        t.value = (valnum * 1.0160469088).toFixed(10);
        ust.value = (valnum * 1.12).toFixed(2);
        lb.value = (valnum * 2240).toFixed();
        oz.value = (valnum * 35840).toFixed();
        kg.value = (valnum * 1016.0469088).toFixed(7);
        g.value = (valnum * 1016046.9088).toFixed(4);
    }
    if (source == "ust") {
        t.value = (valnum * 0.90718474).toFixed(8);
        ukt.value = (valnum * 0.8928571429).toFixed(10);
        lb.value = (valnum * 2000).toFixed();
        oz.value = (valnum * 32000).toFixed();
        kg.value = (valnum * 907.18474).toFixed(5);
        g.value = (valnum * 907184.74).toFixed(2);
    }
    if (source == "lb") {
        t.value = (valnum * 0.0004535924).toFixed(10);
        ukt.value = (valnum * 0.0004464286).toFixed(10);
        ust.value = (valnum * 0.0005).toFixed(4);
        oz.value = (valnum * 16).toFixed();
        kg.value = (valnum * 0.45359237).toFixed(8);
        g.value = (valnum * 453.59237).toFixed(5);
    }
    if (source == "oz") {
        t.value = (valnum * 0.0000283495).toFixed(10);
        ukt.value = (valnum * 0.0000279018).toFixed(10);
        ust.value = (valnum * 0.00003125).toFixed(8);
        lb.value = (valnum * 0.0625).toFixed(4);
        kg.value = (valnum * 0.0283495231).toFixed(10);
        g.value = (valnum * 28.349523125).toFixed(9);
    }
    if (source == "kg") {
        t.value = (valnum * 0.001).toFixed(3);
        ukt.value = (valnum * 0.0009842065).toFixed(10);
        ust.value = (valnum * 0.0011023113).toFixed(10);
        lb.value = (valnum * 2.2046226218).toFixed(10);
        oz.value = (valnum * 35.2739619496).toFixed(10);
        g.value = (valnum * 1000).toFixed();
    }
    if (source == "g") {
        t.value = (valnum * 0.000001).toFixed(6);
        ukt.value = (valnum * 0.00000098421).toFixed(11);
        ust.value = (valnum * 0.0000011023).toFixed(10);
        lb.value = (valnum * 0.0022046226).toFixed(10);
        oz.value = (valnum * 0.0352739619).toFixed(10);
        kg.value = (valnum * 0.001).toFixed(3);
    }
}

function DataConv(source, valnum5) {
    valnum5 = parseFloat(valnum5);
    var bit = document.getElementById("bit");
    var b = document.getElementById("b");
    var kb = document.getElementById("kb");
    var mb = document.getElementById("mb");
    var gb = document.getElementById("gb");
    var tb = document.getElementById("tb");
    if (source == "bit") {
        b.value = (valnum * 0.125).toFixed(3);
        kb.value = (valnum * 0.0001220703).toFixed(10);
        mb.value = (valnum * 0.00000011921).toFixed(11);
        gb.value = (valnum * 0.00000000011642).toFixed(14);
        tb.value = (valnum * 0.00000000000011369).toFixed(17);
    }
    if (source == "b") {
        bit.value = (valnum * 8).toFixed();
        kb.value = (valnum * 0.0009765625).toFixed(10);
        mb.value = (valnum * 0.00000095367).toFixed(11);
        gb.value = (valnum * 0.00000000093132).toFixed(14);
        tb.value = (valnum * 0.00000000000090949).toFixed(17);
    }
    if (source == "kb") {
        bit.value = (valnum * 8192).toFixed();
        b.value = (valnum * 1024).toFixed();
        mb.value = (valnum * 0.0009765625).toFixed(10);
        gb.value = (valnum * 0.00000095367).toFixed(11);
        tb.value = (valnum * 0.00000000093132).toFixed(14);
    }
    if (source == "mb") {
        bit.value = (valnum * 8388608).toFixed();
        b.value = (valnum * 1048576).toFixed();
        kb.value = (valnum * 1024).toFixed();
        gb.value = (valnum * 0.0009765625).toFixed(10);
        tb.value = (valnum * 0.00000095367).toFixed(11);
    }
    if (source == "gb") {
        bit.value = (valnum * 8589934592).toFixed();
        b.value = (valnum * 1073741824).toFixed();
        kb.value = (valnum * 1048576).toFixed();
        mb.value = (valnum * 1024).toFixed();
        tb.value = (valnum * 0.0009765625).toFixed(10);
    }
    if (source == "tb") {
        bit.value = (valnum * 8796093022208).toFixed();
        b.value = (valnum * 1099511627776).toFixed();
        kb.value = (valnum * 1073741824).toFixed();
        mb.value = (valnum * 1048576).toFixed();
        gb.value = (valnum * 1024).toFixed();
    }
}

function SpeeConv(source, valnum6) {
    valnum6 = parseFloat(valnum6);
    var mps = document.getElementById("mps");
    var mph = document.getElementById("mph");
    var kps = document.getElementById("kps");
    var kph = document.getElementById("kph");
    var ips = document.getElementById("ips");
    var iph = document.getElementById("iph");
    var fps = document.getElementById("fps");
    var fph = document.getElementById("fph");
    var mis = document.getElementById("mis");
    var mih = document.getElementById("mih");
    var kn = document.getElementById("kn");
    if (source == "mps") {
        mph.value = (valnum * 3600).toFixed();
        kps.value = (valnum * 0.001).toFixed(3);
        kph.value = (valnum * 3.6).toFixed(1);
        ips.value = (valnum * 39.3700787402).toFixed(10);
        iph.value = (valnum * 141732.28346457).toFixed(8);
        fps.value = (valnum * 3.280839895).toFixed(9);
        fph.value = (valnum * 11811.023622047).toFixed(9);
        mis.value = (valnum * 0.0006213712).toFixed(10);
        mih.value = (valnum * 2.2369362921).toFixed(10);
        kn.value = (valnum * 1.9438444924).toFixed(10);
    }
    if (source == "mph") {
        mps.value = (valnum * 0.0002777778).toFixed(10);
        kps.value = (valnum * 0.00000027778).toFixed(11);
        kph.value = (valnum * 0.001).toFixed(3);
        ips.value = (valnum * 0.010936133).toFixed(9);
        iph.value = (valnum * 39.3700787402).toFixed(10);
        fps.value = (valnum * 0.0009113444).toFixed(10);
        fph.value = (valnum * 3.280839895).toFixed(9);
        mis.value = (valnum * 0.0000001726).toFixed(10);
        mih.value = (valnum * 0.0006213712).toFixed(10);
        kn.value = (valnum * 0.0005399568).toFixed(10);
    }
    if (source == "kps") {
        mps.value = (valnum * 1000).toFixed();
        mph.value = (valnum * 3600000).toFixed();
        kph.value = (valnum * 3600).toFixed();
        ips.value = (valnum * 39370.078740158).toFixed(9);
        iph.value = (valnum * 141732283.46457).toFixed(5);
        fps.value = (valnum * 3280.8398950131).toFixed(10);
        fph.value = (valnum * 11811023.622047).toFixed(6);
        mis.value = (valnum * 0.6213711922).toFixed(10);
        mih.value = (valnum * 2236.9362920544).toFixed(10);
        kn.value = (valnum * 1943.8444924406).toFixed(10);
    }
    if (source == "kph") {
        mps.value = (valnum * 0.2777777778).toFixed(10);
        mph.value = (valnum * 1000).toFixed();
        kps.value = (valnum * 0.0002777778).toFixed(10);
        ips.value = (valnum * 10.9361329834).toFixed(10);
        iph.value = (valnum * 39370.078740158).toFixed(9);
        fps.value = (valnum * 0.9113444153).toFixed(10);
        fph.value = (valnum * 3280.8398950131).toFixed(10);
        mis.value = (valnum * 0.0001726031).toFixed(10);
        mih.value = (valnum * 0.6213711922).toFixed(10);
        kn.value = (valnum * 0.5399568035).toFixed(10);
    }
    if (source == "ips") {
        mps.value = (valnum * 0.0254).toFixed(4);
        mph.value = (valnum * 91.44).toFixed(2);
        kps.value = (valnum * 0.0000254).toFixed(7);
        kph.value = (valnum * 0.09144).toFixed(5);
        iph.value = (valnum * 3600).toFixed();
        fps.value = (valnum * 0.0833333333).toFixed(10);
        fph.value = (valnum * 300).toFixed();
        mis.value = (valnum * 0.0000157828).toFixed(10);
        mih.value = (valnum * 0.0568181818).toFixed(10);
        kn.value = (valnum * 0.0493736501).toFixed(10);
    }
    if (source == "iph") {
        mps.value = (valnum * 0.0000070556).toFixed(10);
        mph.value = (valnum * 0.0254).toFixed(4);
        kps.value = (valnum * 0.0000000070556).toFixed(13);
        kph.value = (valnum * 0.0000254).toFixed(7);
        ips.value = (valnum * 0.0002777778).toFixed(10);
        fps.value = (valnum * 0.0000231481).toFixed(10);
        fph.value = (valnum * 0.0833333333).toFixed(10);
        mis.value = (valnum * 0.0000000043841).toFixed(13);
        mih.value = (valnum * 0.0000157828).toFixed(10);
        kn.value = (valnum * 0.0000137149).toFixed(10);
    }
    if (source == "fps") {
        mps.value = (valnum * 0.3048).toFixed(4);
        mph.value = (valnum * 1097.28).toFixed(2);
        kps.value = (valnum * 0.0003048).toFixed(7);
        kph.value = (valnum * 1.09728).toFixed(5);
        ips.value = (valnum * 12).toFixed();
        iph.value = (valnum * 43200).toFixed();
        fph.value = (valnum * 3600).toFixed();
        mis.value = (valnum * 0.0001893939).toFixed(10);
        mih.value = (valnum * 0.6818181818).toFixed(10);
        kn.value = (valnum * 0.5924838013).toFixed(10);
    }
    if (source == "fph") {
        mps.value = (valnum * 0.0000846667).toFixed(10);
        mph.value = (valnum * 0.3048).toFixed(4);
        kps.value = (valnum * 0.000000084667).toFixed(12);
        kph.value = (valnum * 0.0003048).toFixed(7);
        ips.value = (valnum * 0.0033333333).toFixed(10);
        iph.value = (valnum * 12).toFixed();
        fps.value = (valnum * 0.0002777778).toFixed(10);
        mis.value = (valnum * 0.000000052609).toFixed(12);
        mih.value = (valnum * 0.0001893939).toFixed(10);
        kn.value = (valnum * 0.0001645788).toFixed(10);
    }
    if (source == "mis") {
        mps.value = (valnum * 1609.344).toFixed(3);
        mph.value = (valnum * 5793638.4).toFixed(1);
        kps.value = (valnum * 1.609344).toFixed(6);
        kph.value = (valnum * 5793.6384).toFixed(4);
        ips.value = (valnum * 63360).toFixed();
        iph.value = (valnum * 228096000).toFixed();
        fps.value = (valnum * 5280).toFixed();
        fph.value = (valnum * 19008000).toFixed();
        mih.value = (valnum * 3600).toFixed();
        kn.value = (valnum * 3128.3144708423).toFixed(10);
    }
    if (source == "mih") {
        mps.value = (valnum * 0.44704).toFixed(5);
        mph.value = (valnum * 1609.344).toFixed(3);
        kps.value = (valnum * 0.00044704).toFixed(8);
        kph.value = (valnum * 1.609344).toFixed(6);
        ips.value = (valnum * 17.6).toFixed(1);
        iph.value = (valnum * 63360).toFixed();
        fps.value = (valnum * 1.4666666667).toFixed(10);
        fph.value = (valnum * 5280).toFixed();
        mis.value = (valnum * 0.0002777778).toFixed(10);
        kn.value = (valnum * 0.8689762419).toFixed(10);
    }
    if (source == "kn") {
        mps.value = (valnum * 0.5144444444).toFixed(10);
        mph.value = (valnum * 1852).toFixed();
        kps.value = (valnum * 0.0005144444).toFixed(10);
        kph.value = (valnum * 1.852).toFixed(3);
        ips.value = (valnum * 20.2537182852).toFixed(10);
        iph.value = (valnum * 72913.385826772).toFixed(9);
        fps.value = (valnum * 1.6878098571).toFixed(10);
        fph.value = (valnum * 6076.1154855643).toFixed(10);
        mis.value = (valnum * 0.000319661).toFixed(9);
        mih.value = (valnum * 1.150779448).toFixed(9);
    }
}

function TimeConv(source, valnum7) {
    valnum7 = parseFloat(valnum7);
    var mls = document.getElementById("mls");
    var sec = document.getElementById("sec");
    var min = document.getElementById("min");
    var h = document.getElementById("h");
    var d = document.getElementById("d");
    var wk = document.getElementById("wk");
    if (source == "mls") {
        sec.value = (valnum * 0.001).toFixed(3);
        min.value = (valnum * 0.0000166667).toFixed(10);
        h.value = (valnum * 0.00000027778).toFixed(11);
        d.value = (valnum * 0.000000011574).toFixed(12);
        wk.value = (valnum * 0.0000000016534).toFixed();
    }
    if (source == "sec") {
        mls.value = (valnum * 1000).toFixed();
        min.value = (valnum * 0.0166666667).toFixed(10);
        h.value = (valnum * 0.0002777778).toFixed(10);
        d.value = (valnum * 0.0000115741).toFixed(10);
        wk.value = (valnum * 0.0000016534).toFixed(10);
    }
    if (source == "min") {
        mls.value = (valnum * 60000).toFixed();
        sec.value = (valnum * 60).toFixed();
        h.value = (valnum * 0.0166666667).toFixed(10);
        d.value = (valnum * 0.0006944444).toFixed(10);
        wk.value = (valnum * 0.0000992063).toFixed(10);
    }
    if (source == "h") {
        mls.value = (valnum * 3600000).toFixed();
        sec.value = (valnum * 3600).toFixed();
        min.value = (valnum * 60).toFixed();
        d.value = (valnum * 0.0416666667).toFixed(10);
        wk.value = (valnum * 0.005952381).toFixed(9);
    }
    if (source == "d") {
        mls.value = (valnum * 86400000).toFixed();
        sec.value = (valnum * 86400).toFixed();
        min.value = (valnum * 1440).toFixed();
        h.value = (valnum * 24).toFixed();
        wk.value = (valnum * 0.1428571429).toFixed(10);
    }
    if (source == "wk") {
        mls.value = (valnum * 604800000).toFixed();
        sec.value = (valnum * 604800).toFixed();
        min.value = (valnum * 10080).toFixed();
        h.value = (valnum * 168).toFixed();
        d.value = (valnum * 7).toFixed();
    }
}