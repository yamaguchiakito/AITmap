let point = [　//各館座標
  [35.18356981077938,137.11296568164514],
  [35.183989009866586, 137.11130670369684],
  [35.184781517866284, 137.11097770394048],
  [35.18371109561032, 137.11421094235644],
  [35.18415774988815, 137.11300830972763],
  [35.183944924335776, 137.11501955004408],
  [35.18486483080106, 137.1150041316709],
  [35.18522046917276, 137.1153176384701],
  [35.18461068506319, 137.1140915273254],
  [35.184639041043425, 137.11603908791804],
  [35.18473521179817, 137.11269903243718],
  [35.18480241927642, 137.11166771490755],
  [35.18425635687346, 137.11100472506442],
  [35.185264044377696, 137.11592219586547],
  [35.18378407513417, 137.1134980857329],
  [35.184765590394235, 137.11577143847572],
  [35.18320160113823, 137.11203334074048],
  [35.183610453510916, 137.11237939746078],
  [35.184654977988586, 137.1150090858319],
  [35.18369446402341, 137.112949877078],
  [35.18467318003848, 137.11454310846588],
  [35.18325340788503, 137.11469729213204],
  [35.18426062162338, 137.11393981778662],
  [35.184333577845095, 137.11239258531052],
  [35.18434780720036, 137.1117854063872],
  [35.18286024837517, 137.1103037349929],
  [35.18224430976271, 137.11375218426383],
  [35.18143011191469, 137.10945919161637]
];
var startP;
var goalP;
var map;
var infoWindow;

//時間、マップを表示
function visible() {
  const timeVi = document.getElementById("timeVisi");
  const mapVi = document.getElementById("map");

	if(timeVi.style.display=="none"){
		// blockで表示
		timeVi.style.display ="block";
	}
  if(mapVi.style.display=="none"){
		// blockで表示
		mapVi.style.display ="block";
	}
}

//天気で移動時間を変化させる関数
function weatherTime(duration) {
  var time;
  const wtr = selectWeather.value;
  switch (wtr) {
    case "sun":
    case "cloud":
      time = duration*1.0;
      break;
    case "rain":
      time = duration*1.3;
      break;
    default:
      break;
  }
  time = Math.round(time/60);
  return time;
}

// 現在地取得処理
function geolocation() {
  // Geolocation APIに対応している
  if (navigator.geolocation) {
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(
      // 取得成功した場合
      function(position) {
        // 緯度・経度を変数に格納
        point[0] = [position.coords.latitude, position.coords.longitude];
        //var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      },
      // 取得失敗した場合
      function(error) {
        // エラーメッセージを表示
        switch(error.code) {
          case 1: // PERMISSION_DENIED
            alert("位置情報の利用が許可されていません");
            break;
          case 2: // POSITION_UNAVAILABLE
            alert("現在位置が取得できませんでした");
            break;
          case 3: // TIMEOUT
            alert("タイムアウトになりました");
            break;
          default:
            alert("その他のエラー(エラーコード:"+error.code+")");
            break;
        }
      }
    );
  // Geolocation APIに対応していない
  } else {
    alert("この端末では位置情報が取得できません");
  }
}

//地点指定関数
function pointSet(buildingS, buildingG) {
  /* 開始地点の座標を指定*/
  startP = new google.maps.LatLng(point[buildingS][0],point[buildingS][1]);
  /* 目的地点の座標を指定*/
  goalP = new google.maps.LatLng(point[buildingG][0],point[buildingG][1]);
}

//マーカーを設置
function createMaker(p) {
  marker = new google.maps.Marker({ // マーカーの追加
    position: p, // マーカーを立てる位置を指定
    map: map // マーカーを立てる地図を指定
  });
  infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
    content: '<div class="sample">TAM 大阪</div>' // 吹き出しに表示する内容
  });
  marker.addListener('click', function() { // マーカーをクリックしたとき
    infoWindow.open(map, marker); // 吹き出しの表示
  });
}

//距離計算関数
function initLenge() {  //距離検索関数
  // DistanceMatrix サービスを生成
  var distanceMatrixService = new google.maps.DistanceMatrixService();

  var origns = [startP]; //出発点
  var destinations = [goalP]; //到着点

  // DistanceMatrix の実行
  distanceMatrixService.getDistanceMatrix({
    origins: origns, // 出発地点
    destinations: destinations, // 到着地点
    travelMode: google.maps.TravelMode.WALKING, // 車モード or 徒歩モード
  }, function(response, status) {
    if (status == google.maps.DistanceMatrixStatus.OK) {

      // 出発地点と到着地点の住所（配列）を取得
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;

      // 出発地点から到着地点への計算結果を取得
      var results = response.rows[0].elements;

      // 到着地点でループ
      var from = origins[0]; // 出発地点の住所
      var to = destinations[0]; // 到着地点の住所
      var duration = results[0].duration.value; // 時間
      var distance = results[0].distance.value; // 距離
      //htmlに返す
      var lenge = document.getElementById("lenge");
      var time = document.getElementById("time");
      //lenge.innerHTML = distance + "m";
      time.innerHTML = weatherTime(duration) + "分";
    }
  });
}

function initRoute() {  //ルート検索関数
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: new google.maps.LatLng(point[0][0],point[0][1]),
    mapTypeId: "roadmap"
  });

  //DirectionsService のオブジェクトを生成
  var directionsService = new google.maps.DirectionsService();
  //DirectionsRenderer のオブジェクトを生成
  var directionsRenderer = new google.maps.DirectionsRenderer();

  directionsRenderer.setMap(map);

  // ルートを取得するリクエスト
  var request = {
    origin: startP,      // 出発地点の緯度経度
    destination: goalP,   // 到着地点の緯度経度
    travelMode: 'WALKING' //トラベルモード（歩き）
  };
  //DirectionsService のオブジェクトのメソッド route() にリクエストを渡し、
  //コールバック関数で結果を setDirections(result) で directionsRenderer にセットして表示
  directionsService.route(request, function(result, status) {
    //ステータスがOKの場合、
    if (status === 'OK') {
      directionsRenderer.setDirections(result); //取得したルート（結果：result）をセット
    }else{
      alert("取得できませんでした：" + status);
    }
  });
}

function weatherRouteMap() {  //ルート表示メイン関数
  visible();
  geolocation();
  const buildingS = startpoint.selectedIndex;
  const buildingG = goalpoint.selectedIndex + 1;
  pointSet(buildingS, buildingG);  //スタート地、目的地設定関数
  initRoute();  //ルート検索関数呼び出し
  initLenge();  //距離検索関数呼び出し
  createMaker(goalP);
}
