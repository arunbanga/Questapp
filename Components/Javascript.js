import React from "react";
import $ from "jquery";
const Javascript = () => {
  window.console = window.console || function (t) {};
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
  (function () {
    class RuffleMimeType {
      constructor(a, b, c) {
        (this.type = a), (this.description = b), (this.suffixes = c);
      }
    }
    class RuffleMimeTypeArray {
      constructor(a) {
        (this.__mimetypes = []), (this.__named_mimetypes = {});
        for (let b of a) this.install(b);
      }
      install(a) {
        let b = this.__mimetypes.length;
        this.__mimetypes.push(a),
          (this.__named_mimetypes[a.type] = a),
          (this[a.type] = a),
          (this[b] = a);
      }
      item(a) {
        return this.__mimetypes[a];
      }
      namedItem(a) {
        return this.__named_mimetypes[a];
      }
      get length() {
        return this.__mimetypes.length;
      }
    }
    class RufflePlugin extends RuffleMimeTypeArray {
      constructor(a, b, c, d) {
        super(d), (this.name = a), (this.description = b), (this.filename = c);
      }
      install(a) {
        a.enabledPlugin || (a.enabledPlugin = this), super.install(a);
      }
    }
    class RufflePluginArray {
      constructor(a) {
        (this.__plugins = []), (this.__named_plugins = {});
        for (let b of a) this.install(b);
      }
      install(a) {
        let b = this.__plugins.length;
        this.__plugins.push(a),
          (this.__named_plugins[a.name] = a),
          (this[a.name] = a),
          (this[b] = a);
      }
      item(a) {
        return this.__plugins[a];
      }
      namedItem(a) {
        return this.__named_plugins[a];
      }
      get length() {
        return this.__plugins.length;
      }
    }
    const FLASH_PLUGIN = new RufflePlugin(
      "Shockwave Flash",
      "Shockwave Flash 32.0 r0",
      "ruffle.js",
      [
        new RuffleMimeType(
          "application/futuresplash",
          "Shockwave Flash",
          "spl"
        ),
        new RuffleMimeType(
          "application/x-shockwave-flash",
          "Shockwave Flash",
          "swf"
        ),
        new RuffleMimeType(
          "application/x-shockwave-flash2-preview",
          "Shockwave Flash",
          "swf"
        ),
        new RuffleMimeType(
          "application/vnd.adobe.flash-movie",
          "Shockwave Flash",
          "swf"
        ),
      ]
    );

    function install_plugin(a) {
      navigator.plugins.install ||
        Object.defineProperty(navigator, "plugins", {
          value: new RufflePluginArray(navigator.plugins),
          writable: !1,
        }),
        navigator.plugins.install(a),
        0 < a.length &&
          !navigator.mimeTypes.install &&
          Object.defineProperty(navigator, "mimeTypes", {
            value: new RuffleMimeTypeArray(navigator.mimeTypes),
            writable: !1,
          });
      for (var b = 0; b < a.length; b += 1) navigator.mimeTypes.install(a[b]);
    }
    install_plugin(FLASH_PLUGIN);
  })();

  {
    /* <script id="rendered-js"> */
  }
  //slideshow style interval
  var autoSwap = setInterval(swap, 7000);

  //pause slideshow and reinstantiate on mouseout
  $(".carousel, .slider").hover(
    function () {
      clearInterval(autoSwap);
    },
    function () {
      autoSwap = setInterval(swap, 7000);
    }
  );

  //global variables
  var items = [];
  var startItem = 1;
  var position = 0;
  var itemCount = $(".carousel>li").length;
  var leftpos = itemCount;
  var resetCount = itemCount;

  //unused: gather text inside items class
  $(".carousel>li").each(function (index) {
    items[index] = $(this).text();
  });

  //swap images function
  function swap(action) {
    var direction = action;

    //moving carousel backwards
    if (direction == "counter-clockwise") {
      var leftitem = $(".left-pos").attr("id") - 1;
      if (leftitem == 0) {
        leftitem = itemCount;
      }

      $(".right-pos").removeClass("right-pos").addClass("back-pos");
      $(".main-pos").removeClass("main-pos").addClass("right-pos");
      $(".left-pos").removeClass("left-pos").addClass("main-pos");
      $("#" + leftitem + "")
        .removeClass("back-pos")
        .addClass("left-pos");

      startItem--;
      if (startItem < 1) {
        startItem = itemCount;
      }
    }

    //moving carousel forward
    if (direction == "clockwise" || direction == "" || direction == null) {
      function pos(positionvalue) {
        if (positionvalue != "leftposition") {
          //increment image list id
          position++;

          //if final result is greater than image count, reset position.
          if (startItem + position > resetCount) {
            position = 1 - startItem;
          }
        }

        //setting the left positioned item
        if (positionvalue == "leftposition") {
          //left positioned image should always be one left than main positioned image.
          position = startItem - 1;

          //reset last image in list to left position if first image is in main position
          if (position < 1) {
            position = itemCount;
          }
        }

        return position;
      }

      $("#" + startItem + "")
        .removeClass("main-pos")
        .addClass("left-pos");
      $("#" + (startItem + pos()) + "")
        .removeClass("right-pos")
        .addClass("main-pos");
      $("#" + (startItem + pos()) + "")
        .removeClass("back-pos")
        .addClass("right-pos");
      $("#" + pos("leftposition") + "")
        .removeClass("left-pos")
        .addClass("back-pos");

      startItem++;
      position = 0;
      if (startItem > itemCount) {
        startItem = 1;
      }
    }
  }

  //next button click function
  $("#next").click(function () {
    swap("clockwise");
  });

  //prev button click function
  $("#prev").click(function () {
    swap("counter-clockwise");
  });

  //if any visible items are clicked
  $(".items").click(function () {
    if ($(this).attr("class") == "items left-pos") {
      swap("counter-clockwise");
    } else {
      swap("clockwise");
    }
  });
  //# sourceURL=pen.js
  return <></>;
};

export default Javascript;
