/*** get the "data" ***/
var results = [];

var personData = {
    name: 'Rafal',
    age: '34',
    loves: 'Polish Things',
    bio: 'Rafal is passionate about Amazon Prime, steamed cauliflower, and Chopin Vodka. His favorite Polish stereotype is that Polish people always try to find a way around the rules. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur ante nibh, at auctor lorem.',
    image: 'rafal.jpg',
    email: 'rafal@rafal.com'
}
results.push(personData);

//personData = {
//    name: 'Rafal\'s Brother',
//    age: '25',
//    loves: 'Polish Meat Sandwiches', 
//    bio: 'Rafal is passionate about Amazon Prime, steamed cauliflower, and Chopin Vodka. His favorite Polish stereotype is that Polish people always try to find a way around the rules. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur ante nibh, at auctor lorem.',
//    image: 'rafal.jpg',
//    email: 'rafal@rafal.com'
//}
//results.push(personData); 

/*** angular time ***/
var app = angular.module('polishApp', []);
app.controller('polishController', function ($scope) {

    // initially results are not shown, also if user clicks back button
    $scope.initalFormState = function () {
        $scope.resultsActive = false;
        $scope.hasErrors = false;
    }

    // submit is clicked, results show and get users input
    $scope.loadResults = function (name, gender, food, vodka) {
        // get applicant inputs
        var applicantInfo = {
            name: name,
            food: food,
            vodka: vodka
        };

        //form validation
        if (name == null || name == '' || gender == null || gender == '' || food == null || food == '' || vodka == null || vodka == '') {
            $scope.hasErrors = true;
        } else {
            $scope.resultsActive = true;
        }
    }

    // get the results in the scope
    $scope.results = results;

    //get number of results for display and formatting
    $scope.numberOfResults = $scope.results.length;

    $scope.moreThanOneResult = function () {
        if ($scope.numberOfResults > 1) {
            return true;
        } else {
            return false;
        }
    }
});

/*** get those polish flags dancing ***/
$(function () {
    var x = 0;
    setInterval(function () {
        x += 1;
        $('.flags').css('background-position', x + 'px 0');
    }, 15);
})