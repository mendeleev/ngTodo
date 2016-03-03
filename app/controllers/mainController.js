/**
 * Created by andrii on 02.03.16.
 */

(function () {
  var ctrl = angular.module("controllers", []);

  ctrl.controller('testCtrl', function () {
    this.currentItem = null;
    this.field = "";
    this.items = JSON.parse(localStorage.getItem("todo") || "[]") || [];

    /**
     * saves data to localStorage
     * @returns {*}
     */
    this.save = function() {
      return localStorage.setItem("todo", JSON.stringify(this.items));
    };

    /**
     * do it when we change something
     * @returns {*}
     */
    this.change = function () {
      return this.save();
    };

    /**
     * removes item from the list
     * @param item
     * @returns {boolean}
     */
    this.remove = function(item) {
      if(this.items.indexOf(item) >= 0) {
        this.items.splice(this.items.indexOf(item), 1);
        this.save();
      }

      return true;
    };

    /**
     * add a new item to the list
     * @param title - title for new item
     */
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

    /**
     * reinitialize the list with and empty array
     * @returns {*}
     */
    this.clear = function() {
      this.items = [];
      return this.save();
    };

    /**
     * initialize field with a title which we wanna edit
     * @param item
     */
    this.edit = function(item) {
      this.field = item.title;
      this.currentItem = item;
    };
  });

})();