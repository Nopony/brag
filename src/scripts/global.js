define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    exports.__esModule = true;
    console.log("XDDDDDDDDDDD");
    $(document).on('ready', function () {
        setTimeout(function () {
            console.log("SLIDE BITCH");
            $('#sliding-hr').addClass('animate-hr');
        }, 275);
    });
});
