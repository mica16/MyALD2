"use strict";
var HomeController = (function () {
    function HomeController() {
        this.name = 'Hello';
    }
    HomeController.prototype.generateNumbersList = function () {
        var ratings = [];
        for (var i = 0; i < 500; i++) {
            ratings.push(i);
        }
        return ratings;
    };
    return HomeController;
}());
exports.__esModule = true;
exports["default"] = HomeController;
//# sourceMappingURL=home.controller.js.map