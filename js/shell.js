
(function ($,window,document,undefined) {

    var pluginName = "bgColor",
    defaults = {"backgroundColor":"orange"};


    function Plugin(element,options) { // plugin constructor
        this.element = element;
        this.options = $.extend( {}, defaults, options);// extending defaults
        this._defaults = defaults;
        this._name = pluginName;
    }
    Plugin.prototype.init = function (element,options) {

        $(element).css(options || defaults)

    };

   $.fn[pluginName]=function (options) { // attach a plugin to the $ object
        var $this = this;
        return $this.each(function () {
            var bc = new Plugin;
            bc.init($this)

        });
   };

}(jQuery,window,document));



