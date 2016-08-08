  app.controller('MainCtrl', function($scope) {

      $scope.name = '';
      $scope.style = '';
      $scope.abv = '';
      $scope.image = '';
      $scope.beerList = [];



      $scope.addBeer = function(){
        var name = $scope.name;
        var style = $scope.style;
        var abv = $scope.abv;
        var img = $scope.image;
        var list = $scope.beerList;

        list.push(
          {name: name,
           style: style,
           abv: abv,
           img: img
          })
        console.log(list);
      }

      $scope.removeBeer = function($index){
        $scope.beerList.splice($index, 1)
      }



  });