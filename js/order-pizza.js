"use strict";
(() => {
function tab2() {
    // Show second tab (0-indexed, like an array);
    var secondTabElement = document.querySelectorAll("#myTab li")[1].firstElementChild;
    var secondTab = new bootstrap.Tab(secondTabElement);
    secondTab.show();
}

function tab1() {
    var secondTabElement = document.querySelectorAll("#myTab li")[0].firstElementChild;
    var secondTab = new bootstrap.Tab(secondTabElement);
    secondTab.show();
}

function tab3() {
    var secondTabElement = document.querySelectorAll("#myTab li")[2].firstElementChild;
    var secondTab = new bootstrap.Tab(secondTabElement);
    secondTab.show();
}
})();