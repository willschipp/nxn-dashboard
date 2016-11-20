angular.module('nxn-app').controller('dashboardController',['$scope','$stateParams',function($scope,$stateParams) {

  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];

  $scope.barlabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  $scope.barseries = ['Series A', 'Series B'];

  $scope.bardata = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.linelabels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.lineseries = ['Series A', 'Series B'];
  $scope.linedata = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.linedatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.lineoptions = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

  //TODO --load data based on the passed identity
  console.log($stateParams);

}]);
