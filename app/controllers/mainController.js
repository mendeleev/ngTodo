/**
 * Created by andrii on 02.03.16.
 */

(function () {
  var ctrl = angular.module("controllers", []);

  ctrl.controller('testCtrl', function () {
    this.currentItem = null;
    this.field = "";
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

    this.add = function(title) {
      if(title && title.length > 1) {

        if(!this.currentItem) {
          this.items.push({
            title: title,
            checked: false
          });
        } else {
          this.currentItem.title = title;
        }

        this.currentItem = null;
        this.field = "";
        this.save();
      }
    };

    this.clear = function() {
      this.items = [];
      this.save();
    };

    this.edit = function(item) {
      this.field = item.title;
      this.currentItem = item;
    };
  });

})();