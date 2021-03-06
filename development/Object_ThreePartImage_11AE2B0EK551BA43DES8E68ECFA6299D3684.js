// Generated by CoffeeScript 1.12.7
(function() {
  var Object_ThreePartImage,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Object_ThreePartImage = (function(superClass) {
    extend(Object_ThreePartImage, superClass);


    /**
    * An object to display a three-part image using three
    * sub-images: start, middle and end. For info, see ui.Component_ThreePartImage.
    *
    * @module ui
    * @class Object_ThreePartImage
    * @extends ui.Object_UIElement
    * @memberof ui
    * @constructor
    * @see ui.Component_ThreePartImage
     */

    function Object_ThreePartImage(skin) {
      Object_ThreePartImage.__super__.constructor.apply(this, arguments);
      this.image = skin;

      /**
      * The object's visual-component to display the game object on screen.
      * @property visual
      * @type gs.Component_Sprite
       */
      this.visual = new gs.Component_ThreePartImage();

      /**
      * A hotspot behavior-component to make the UI object clickable/touchable.
      * @property hotspot
      * @type gs.Component_HotspotBehavior
       */
      this.hotspot = new gs.Component_HotspotBehavior();
      this.addComponent(this.hotspot);
      this.addComponent(this.visual);
    }

    return Object_ThreePartImage;

  })(ui.Object_UIElement);

  ui.Object_ThreePartImage = Object_ThreePartImage;

}).call(this);
