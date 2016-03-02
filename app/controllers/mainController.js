/**
 * Created by andrii on 02.03.16.
 */

(function () {
  var ctrl = angular.module("controllers", []);

  ctrl.controller('testCtrl', function () {
    this.items = JSON.parse(localStorage.getItem("todo") || "[]") || [];

    this.save = function() {
      localStorage.setItem("todo", JSON.stringify(this.items));
    };

    this.change = function (item) {
      this.save();
    };

    this.remove = function(item) {
      if(this.items.indexOf(item) >= 0) {
        this.items.splice(this.items.indexOf(item), 1);
        this.save();
      }
    };

    this.add = function(item) {
      if(item && item.length > 1) {
        this.items.push({
          title: item,
          checked: false
        });

        this.save();
      }
    };

    this.clear = function() {
      this.items = [];
      this.save();
    };
  });
})();