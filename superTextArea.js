// Generated by CoffeeScript 1.6.2
(function() {
  this.sTA = {
    init: function() {
      this.cacheElements();
      sTA.counter.init();
      return sTA.style.init();
    },
    cacheElements: function() {
      this.tArea = document.querySelector("textarea");
      this.counterSpan = document.querySelector("span");
      this.bgColor = document.querySelector("select[name=bg-color]");
      this.textColor = document.querySelector("select[name=text-color]");
      this.fontFamily = document.querySelector("select[name=font-family]");
      return this.fontSize = document.querySelector("select[name=font-size]");
    }
  };

  sTA.counter = {
    init: function() {
      return this.bindEvents();
    },
    bindEvents: function() {
      var _this = this;

      sTA.tArea.addEventListener("keydown", function(e) {
        return _this.count(e);
      });
      sTA.tArea.addEventListener("focus", function(e) {
        return e.target.placeholder = "";
      });
      return sTA.tArea.addEventListener("blur", function(e) {
        return e.target.placeholder = "Enter your text";
      });
    },
    fwd: function(e) {
      if (e.target.value.length < 255) {
        return sTA.counterSpan.innerText = 255 - (e.target.value.length + 1) + " characters left";
      } else {
        return sTA.counterSpan.innerText = 255 - e.target.value.length + " characters left";
      }
    },
    back: function(e) {
      if (e.keyCode === 8) {
        if (e.target.value.length > 0) {
          return sTA.counterSpan.innerText = 255 - (--e.target.value.length) + " characters left";
        } else {
          return sTA.counterSpan.innerText = "255 characters left";
        }
      }
    },
    count: function(e) {
      this.fwd(e);
      this.back(e);
      if (e.keyCode === 13) {
        alert(e.target.value);
        sTA.counterSpan.innerText = "255 characters left";
        e.preventDefault();
        return e.target.value = "";
      }
    }
  };

  sTA.style = {
    init: function() {
      return this.bindEvents();
    },
    bindEvents: function() {
      sTA.bgColor.addEventListener("click", function(e) {
        return sTA.tArea.style.backgroundColor = e.target.value;
      });
      sTA.textColor.addEventListener("click", function(e) {
        return sTA.tArea.style.color = e.target.value;
      });
      sTA.fontFamily.addEventListener("click", function(e) {
        return sTA.tArea.style.fontFamily = e.target.value;
      });
      return sTA.fontSize.addEventListener("click", function(e) {
        return sTA.tArea.style.fontSize = e.target.value;
      });
    }
  };

  sTA.init();

}).call(this);
