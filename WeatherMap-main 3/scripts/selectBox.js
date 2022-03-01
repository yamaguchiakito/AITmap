var selectPoint = [
    {cd:"0", lable:"現在地"},
    {cd:"1", lable:"1号館"},
    {cd:"2", lable:"1号館別館"},
    {cd:"3", lable:"新2号館"},
    {cd:"4", lable:"2号館実験棟"},
    {cd:"5", lable:"3号館"},
    {cd:"6", lable:"4号館"},
    {cd:"7", lable:"4号館別館"},
    {cd:"8", lable:"5号館実験棟"},
    {cd:"9", lable:"6号館"},
    {cd:"10", lable:"7号館"},
    {cd:"11", lable:"8号館"},
    {cd:"12", lable:"9号館"},
    {cd:"13", lable:"10号館"},
    {cd:"14", lable:"11号館"},
    {cd:"15", lable:"12号館"},
    {cd:"16", lable:"13号館"},
    {cd:"17", lable:"本部棟"},
    {cd:"18", lable:"第2本部棟"},
    {cd:"19", lable:"情報教育センター"},
    {cd:"20", lable:"図書館"},
    {cd:"21", lable:"計算センター"},
    {cd:"22", lable:"総合技術研究所"},
    {cd:"23", lable:"セントラルテラス"},
    {cd:"24", lable:"愛和会館"},
    {cd:"25", lable:"AITプラザ"},
    {cd:"26", lable:"駐車場"},
    {cd:"27", lable:"鉀徳館"},
    {cd:"28", lable:"正門"}
];

//selectBoxの生成
function createSelectBox() {
    //スタートポイントの生成
    for(var i=0;i<selectPoint.length;i++){
        let op = document.createElement("option");
        op.value = selectPoint[i].cd;
        op.text = selectPoint[i].lable;
        document.getElementById("startpoint").appendChild(op);
    }
    //ゴールポイントの生成
    for(var i=1;i<selectPoint.length;i++){
        let op = document.createElement("option");
        op.value = selectPoint[i].cd;
        op.text = selectPoint[i].lable;
        document.getElementById("goalpoint").appendChild(op);
    }
}
