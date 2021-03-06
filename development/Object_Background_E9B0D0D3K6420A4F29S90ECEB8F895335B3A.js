// Generated by CoffeeScript 1.12.7
(function() {
  var Object_Background,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Object_Background = (function(superClass) {
    extend(Object_Background, superClass);

    Object_Background.objectCodecBlackList = ["parent"];


    /**
    * A game object used for backgrounds in a scene.
    *
    * @module vn
    * @class Object_Background
    * @extends gs.Object_Visual
    * @memberof vn
    * @constructor
     */

    function Object_Background(parent, data) {
      Object_Background.__super__.constructor.call(this, data);
      this.zIndex = 0;

      /**
      * The object's source rectangle. It controls which part of the object's image is used
      * for visual presentation.
      * @property srcRect
      * @type gs.Rect
       */
      this.srcRect = new Rect();

      /**
      * The object's mask to execute masking-effects on it.
      * @property mask
      * @type gs.Mask
       */
      this.mask = new gs.Mask();

      /**
      * The rotation-angle of the background in degrees. The rotation center depends on the
      * anchor-point.
      * @property angle
      * @type number
       */
      this.angle = 0;

      /**
      * The object's image used for visual presentation.
      * @property image
      * @type string
       */
      this.image = "";

      /**
      * The color tone of the object used for the visual presentation.
      * @property tone
      * @type gs.Tone
       */
      this.tone = new Tone(0, 0, 0, 0);

      /**
      * The object's animator-component to execute different kind of animations like move, rotate, etc. on it.
      * @property animator
      * @type vn.Component_Animator
       */
      this.animator = new gs.Component_Animator();

      /**
      * The object's visual-component to display the game object on screen.
      * @property visual
      * @type gs.Component_Sprite
       */
      this.visual = new gs.Component_TilingPlane();
      this.visual.imageFolder = "Graphics/Backgrounds";
      this.addComponent(this.visual);
      this.addComponent(this.animator);
      this.componentsFromDataBundle(data);
    }


    /**
    * Restores the game object from a data-bundle.
    *
    * @method restore
    * @param {Object} data - The data-bundle.
     */

    Object_Background.prototype.restore = function(data) {
      Object_Background.__super__.restore.call(this, data);
      this.srcRect = gs.Rect.fromObject(data.srcRect);
      this.mask = gs.Mask.fromObject(data.mask);
      return this.visual.looping = data.looping;
    };


    /**
    * Serializes the object into a data-bundle.
    *
    * @method toDataBundle
    * @return {Object} The data-bundle.
     */

    Object_Background.prototype.toDataBundle = function() {
      var components, result;
      components = this.componentsToDataBundle(gs.Component_Animation);
      result = {
        dstRect: this.dstRect,
        srcRect: this.srcRect,
        opacity: this.opacity,
        origin: this.origin,
        zIndex: this.zIndex,
        mask: this.mask.toDataBundle(),
        motionBlur: this.motionBlur,
        zoom: this.zoom,
        angle: this.angle,
        anchor: this.anchor,
        offset: this.offset,
        mirror: this.mirror,
        tone: this.tone,
        image: this.image,
        looping: this.visual.looping,
        components: components
      };
      return result;
    };

    return Object_Background;

  })(gs.Object_Visual);

  vn.Object_Background = Object_Background;

}).call(this);
