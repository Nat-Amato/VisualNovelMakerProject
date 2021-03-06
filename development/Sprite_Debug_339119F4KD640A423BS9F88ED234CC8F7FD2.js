// Generated by CoffeeScript 1.12.7
(function() {
  var Sprite_Debug,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Sprite_Debug = (function(superClass) {
    extend(Sprite_Debug, superClass);


    /**
    * Sprite to display debug information on screen. <b>HINT:</b> Will be probably removed
    * before release.
    *
    * @module gs
    * @class Sprite_Debug
    * @extends gs.Sprite
    * @memberof gs
    * @static
     */

    function Sprite_Debug(viewport) {
      var size;
      Sprite_Debug.__super__.constructor.call(this, viewport);

      /**
      * @property frameTime
      * @type number|string
      * The time / time-text to display.
       */
      this.frameTime = 0;
      size = Math.round(8 / 240 * Graphics.height);
      this.bitmap = new Bitmap(180 * Graphics.scale, 28 * Graphics.scale);
      this.bitmap.font = new Font("Verdana", size);
      this.bitmap.font.color = Color.WHITE;
      this.srcRect = new Rect(0, 0, this.bitmap.width, this.bitmap.height);
      this.z = 15000;
      this.opacity = 255;
      this.visible = true;
      this.x = 0;
      this.y = 0;
    }

    Sprite_Debug.prototype.redraw = function() {
      this.bitmap.clear();
      return this.bitmap.drawText(0, 0, this.bitmap.width, this.bitmap.height, this.frameTime.toString(), 0, 0);
    };

    return Sprite_Debug;

  })(Sprite);

  window.Sprite_Debug = Sprite_Debug;

}).call(this);
