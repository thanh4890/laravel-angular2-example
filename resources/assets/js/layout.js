var Layout = function () {
    var handleBaseLayout = function () {
        console.log('init base layout');
    };

    return {
        initBaseLayout: function () {
            handleBaseLayout();
        },
        init: function () {
            this.initBaseLayout();
        }
    }
}();
