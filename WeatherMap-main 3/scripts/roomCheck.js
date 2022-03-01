var num = 0;
var numm = 0;
//部屋番号
function check(n){
    var building = "教室";
    var floor = "エラー"
    switch(n){
      case "キャリアセンター":
      case "メディアセンター":
      case "1-301":
      case "1-303":
      case "1-401":
      case "1-501":
      case "1-502":
      case "1-601":
      case "1-602":
      case "1-701":
        building = "1号館";
        num = 1;
        break;
      case "B101":
      case "Gギャラリー":
        building = "新2号館";
        num = 3;
        break;
      case "C1215":
      case "C1315":
      case "C1401":
      case "C1411":
        building = "3号館";
        num = 5;
        break;
      case "K401":
      case "K404":
        building = "4号館";
        num = 6;
        break;
      case "機器実験室":
      case "計測実験室":
      case "ER221":
      case "ER222":
      case "ER321":
      case "ER322":
      case "ER323":
      case "ER324":
        building = "5号館";
        num = 8;
        break;
      case "7-201":
      case "7-202":
      case "7-203":
      case "7-205":
      case "7-206":
        building = "7号館";
        num = 10;
        break;
      case "8-102":
      case "8-104":
      case "8-201":
      case "8-203":
      case "8-205":
      case "8-303":
      case "8-304":
        building = "8号館";
        num = 5;
        break;
      case "G3201":
      case "G3202":
      case "G3203":
      case "G3301":
      case "G3302":
      case "G3303":
      case "G3401":
      case "G3402":
      case "G3403":
      case "G3501":
      case "G3502":
      case "G3503":
      case "G3504":
        building = "9号館";
        num = 12;
        break;
      case "G2208":
      case "G2209":
      case "G2309":
      case "G2310":
      case "G2311":
      case "G2407":
      case "G2408":
      case "G2409":
      case "G2505":
      case "G2506":
      case "G2507":
        building = "10号館";
        num = 13;
        break;
      case "11-101":
      case "11-201":
      case "11-301":
      case "11-401":
        building = "11号館";
        num = 14;
        break;
      case "12-201":
      case "12-202":
      case "12-303":
        building = "12号館";
        num = 15;
        break;
      case "13-101":
      case "13-201":
      case "13-301":
      case "13-401":
        building = "13号館";
        num = 16;
        break;
      case "G151":
      case "G152":
      case "G251":
      case "G252":
        building = "1号館別館";
        num = 2;
        break;
      case "C2101":
        building = "3号館別館";
        //num = 14;
        break;
      case "G2110":
      case "G2210":
        building = "10号館大講義室";
        //num = 15;
        break;
      case "情教実習室A":
      case "情教実習室B":
        building = "情報教育センター";
        num = 19;
        break;
      case "セー講義室":
      case "マイコン室1":
      case "マイコン室2":
      case "セー実習室1":
      case "セー実習室2":
        building = "計算センター";
        num = 21;
        break;
      default:
        //num = 18;
        break;
    }
    switch(n){
      case "G151":
      case "G152":
      case "機器実験室":
      case "計測実験室":
      case "11-101":
      case "13-101":
      case "セー講義室":
      case "C2101":
      case "8-102":
      case "8-104":
      case "G2110":
        floor = "1F";
        break;
      case "キャリアセンター":
      case "メディアセンター":
      case "G2208":
      case "G2209":
      case "G251":
      case "G252":
      case "G3201":
      case "G3202":
      case "G3203":
      case "7-201":
      case "7-202":
      case "7-203":
      case "7-205":
      case "7-206":
      case "ER221":
      case "ER222":
      case "11-201":
      case "13-201":
      case "情教実習室A":
      case "C1215":
      case "8-201":
      case "8-203":
      case "8-205":
      case "12-201":
      case "12-202":
      case "G2210":
        floor = "2F";
        break;
      case "G2309":
      case "G2310":
      case "G2311":
      case "G3301":
      case "G3302":
      case "G3303":
      case "ER321":
      case "ER322":
      case "ER323":
      case "ER324":
      case "11-301":
      case "13-301":
      case "情教実習室B":
      case "マイコン室1":
      case "マイコン室2":
      case "セー実習室1":
      case "C1315":
      case "8-303":
      case "8-304":
      case "12-303":
      case "1-301":
      case "1-303":
        floor = "3F";
        break;
      case "G2407":
      case "G2408":
      case "G2409":
      case "G3401":
      case "G3402":
      case "G3403":
      case "K401":
      case "K404":
      case "11-401":
      case "13-401":
      case "セー実習室2":
      case "C1401":
      case "C1411":
      case "1-401":
        floor = "4F";
        break;
      case "G2505":
      case "G2506":
      case "G2507":
      case "G3501":
      case "G3502":
      case "G3503":
      case "G3504":
      case "1-501":
      case "1-502":
        floor = "5F";
        break;
      case "1-601":
      case "1-602":
        floor = "6F";
        break;
      case "1-701":
        floor = "7F";
        break;
      case "B101":
        floor = "B1F";
        break;
      case "Gギャラリー":
        floor = "B2F";
        break;
      default:
        break;
    }
    var g = document.getElementById('guest');
    var goalpoint = document.getElementById('goalpoint');
    g.value = n + "は" + building + "の" + floor;
    goalpoint.value = num;
    // document.getElementById("mypic").src=images_src[num];
  }
  
