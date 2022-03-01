function weatherIcon() {
  // var images_src = new Array("images/0.jpeg","pics/1.jpeg","pics/2.jpeg","pics/3.jpeg","pics/4.jpeg","pics/5.jpeg","pics/6.jpeg","pics/7.jpeg","pics/8.jpeg","pics/9.jpeg","pics/10.jpeg","pics/11.jpeg","pics/12.jpeg","pics/13.jpeg","pics/14.jpeg","pics/15.jpeg","pics/16.jpeg","pics/17.jpeg","pics/18.jpeg");
  //天気
  angular.module('myApp', [])
  .controller('MyController', ['$scope', '$http', function($scope, $http) {
    $http.jsonp('https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          callback: 'JSON_CALLBACK',  // 1コールバック関数の名前
          id: $scope.city,            // コード
          lat: 35.18356981077938,
          lon: 137.11296568164514,
          APPID: 'c79b8ff1d56f9c7d9a242382f719ceb4'  // キー
        }
      }
    )
    // Web APIの結果に基づいて天気アイコンを表示
    .success(function(data) 
      {
        console.log(data.weather[0].icon);
        //$scope.weather =  'http://openweathermap.org/img/wn/' + data.weather[0].icon +'.png';
        $scope.weather =  './images/' + data.weather[0].icon +'.svg';
        switch (data.weather[0].icon) {
          case "01d":
          case "01n":
            selectWeather.value = "sun";
            break;
          case "03d":
          case "03n":
            selectWeather.value = "cloud";
            break;
          case "09d":
          case "09n":
          case "10d":
          case "10n":
            selectWeather.value = "rain";
            break;
          default:
            break;
        }
      }
    )
    .error(function(err) {
        console.log(err);
      }
    );
  }]);
}
