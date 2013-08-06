// Generated by CoffeeScript 1.6.2
(function() {
  (function($) {
    var defaults, pluginName;

    this.superTextArea = {
      init: function(options) {
        this.cacheElements(options);
        superTextArea.counter.init();
        return superTextArea.style.init();
      },
      cacheElements: function(options) {
        this.tArea = options.tArea;
        this.counterSpan = options.counterSpan;
        this.bgColor = options.bgColor;
        this.textColor = options.textColor;
        this.fontFamily = options.fontFamily;
        return this.fontSize = options.fontSize;
      }
    };
    superTextArea.counter = {
      init: function() {
        return this.bindEvents();
      },
      bindEvents: function() {
        var _this = this;

        superTextArea.tArea.on("keydown", function(e) {
          return _this.count(e);
        });
        superTextArea.tArea.on("focus", function(e) {
          return e.target.placeholder = "";
        });
        return superTextArea.tArea.on("blur", function(e) {
          return e.target.placeholder = "Enter your text";
        });
      },
      fwd: function(e) {
        if (e.target.value.length < 255) {
          return superTextArea.counterSpan.text(255 - (e.target.value.length + 1) + " characters left");
        } else {
          return superTextArea.counterSpan.text(255 - e.target.value.length + " characters left");
        }
      },
      back: function(e) {
        if (e.keyCode === 8) {
          if (e.target.value.length > 0) {
            return superTextArea.counterSpan.text(255 - (--e.target.value.length) + " characters left");
          } else {
            return superTextArea.counterSpan.text("255 characters left");
          }
        }
      },
      count: function(e) {
        this.fwd(e);
        this.back(e);
        if (e.keyCode === 13) {
          alert(e.target.value);
          superTextArea.counterSpan.text("255 characters left");
          e.preventDefault();
          return e.target.value = "";
        }
      }
    };
    superTextArea.style = {
      init: function() {
        return this.bindEvents();
      },
      bindEvents: function() {
        superTextArea.bgColor.on("click", function(e) {
          return superTextArea.tArea.css({
            "backgroundColor": e.target.value
          });
        });
        superTextArea.textColor.on("click", function(e) {
          return superTextArea.tArea.css({
            "color": e.target.value
          });
        });
        superTextArea.fontFamily.on("click", function(e) {
          return superTextArea.tArea.css({
            "fontFamily": e.target.value
          });
        });
        return superTextArea.fontSize.on("click", function(e) {
          return superTextArea.tArea.css({
            "fontSize": e.target.value
          });
        });
      }
    };
    pluginName = "superTextArea";
    defaults = {
      tArea: $("textarea"),
      counterSpan: $("span"),
      bgColor: $("select#bg-color"),
      textColor: $("select#text-color"),
      fontFamily: $("select#font-family"),
      fontSize: $("select#font-size")
    };
    $.fn[pluginName] = function(custom) {
      if (typeof custom !== "undefined") {
        superTextArea.init(custom);
        return this;
      } else {
        superTextArea.init(defaults);
        return this;
      }
    };
    return $(document.body).superTextArea();
  })($);

}).call(this);
