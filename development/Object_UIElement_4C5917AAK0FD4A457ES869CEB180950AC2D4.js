// Generated by CoffeeScript 1.12.7
(function() {
  var Object_UIElement,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Object_UIElement = (function(superClass) {
    extend(Object_UIElement, superClass);

    Object_UIElement.accessors("image", {
      set: function(image) {
        if (image !== this.image_) {
          this.image_ = image;
          return this.needsUpdate = true;
        }
      },
      get: function() {
        return this.image_;
      }
    });

    Object_UIElement.accessors("opacity", {
      set: function(opacity) {
        if (opacity !== this.opacity_) {
          this.opacity_ = opacity;
          return this.needsUpdate = true;
        }
      },
      get: function() {
        return this.opacity_;
      }
    });

    Object_UIElement.accessors("clipRect", {
      set: function(clipRect) {
        if (clipRect !== this.clipRect_) {
          this.clipRect_ = clipRect;
          return this.needsUpdate = true;
        }
      },
      get: function() {
        return this.clipRect_;
      }
    });

    Object_UIElement.accessors("visible", {
      set: function(v) {
        if (v !== this.visible_) {
          this.visible_ = v;
          this.needsUpdate = true;
          return this.fullRefresh();
        }
      },
      get: function() {
        return this.visible_ && (!this.parent || this.parent.visible);
      }
    });


    /**
    * The base class for all In-Game UI objects.
    *
    * @module ui
    * @class Object_UIElement
    * @extends gs.Object_Base
    * @memberof ui
    * @constructor
     */

    function Object_UIElement() {
      Object_UIElement.__super__.constructor.call(this);
      this.id = "";

      /**
      * Indicates if that UI object will break the binding-chain. If <b>true</b> the UI object
      * will not change any binding-targets for the current binding-execution period.
      * @property breakBindingChain
      * @type boolean
       */
      this.breakBindingChain = false;
      this.numbers = new Array(10);
      this.data = new Array(10);
      this.controlsByStyle = new Array(ui.UIManager.stylesById.length);
      this.parentsByStyle = new Array(ui.UIManager.stylesById.length);
      this.styles = [];
      this.activeStyles = [];
      this.focusable = false;

      /**
      * The UI object's destination rectangle on screen.
      * @property dstRect
      * @type ui.Component_UIElementRectangle
       */
      this.dstRect = new ui.UIElementRectangle(this);

      /**
      * The UI object's margin. The margin defines an extra space around the UI object. 
      * The default is { left: 0, top: 0, right: 0, bottom: 0 }.
      * @property margin
      * @type ui.Space
       */
      this.margin = new ui.Space(0, 0, 0, 0);

      /**
      * The UI object's padding. The default is { left: 0, top: 0, right: 0, bottom: 0 }.
      * @property padding
      * @type ui.Space
       */
      this.padding = new ui.Space(0, 0, 0, 0);

      /**
      * The UI object's alignment.
      * @property alignment
      * @type ui.Alignment
       */
      this.alignment = 0;

      /**
      * Indicates if the UI object is visible on screen.
      * @property visible
      * @type boolean
       */
      this.visible = true;

      /**
      * Indicates if the UI object is enabled and responds to user actions.
      * @property enabled
      * @type boolean
       */
      this.enabled = true;

      /**
      * The UI object's origin.
      * @property origin
      * @type gs.Vector2
       */
      this.origin = new ui.UIElementPoint(this);

      /**
      * The UI object's offset.
      * @property offset
      * @type gs.Vector2
       */
      this.offset = new ui.UIElementPoint(this);

      /**
      * The UI object's opacity to control transparency. For example: 0 = Transparent, 255 = Opaque, 128 = Semi-Transparent.
      * @property opacity
      * @type number
       */
      this.opacity = 255;

      /**
      * The UI object's resize behavior.
      * @property resizable
      * @type boolean
       */
      this.resizable = false;

      /**
      * The UI object's anchor-point. For example: An anchor-point with 0,0 places the object with its top-left corner
      * at its position but with an 0.5, 0.5 anchor-point the object is placed with its center. An anchor-point of 1,1
      * places the object with its lower-right corner.
      * @property anchor
      * @type gs.Point
       */
      this.anchor = new gs.Point(0.0, 0.0);

      /**
      * The UI object's zoom-setting for x and y axis. The default value is
      * { x: 1.0, y: 1.0 }
      * @property zoom
      * @type gs.Point
       */
      this.zoom = new gs.Point(1.0, 1.0);

      /**
      * The UI object's color.
      * @property color
      * @type gs.Color
       */
      this.color = new Color(255, 255, 255, 0);
      this.tone = new Tone(0, 0, 0, 0);

      /**
      * The UI object's rotation-angle in degrees. The rotation center depends on the
      * anchor-point.
      * @property angle
      * @type number
       */
      this.angle = 0;

      /**
      * The UI object's mask for masking-effects.
      * @property mask
      * @type gs.Mask
       */
      this.mask = new gs.Mask();

      /**
      * An event-emitter to emit events.
      * @property events
      * @type gs.Component_EventEmitter
       */
      this.events = new gs.EventEmitter();

      /**
      * The update-behavior of the UI object. The default is ui.UpdateBehavior.NORMAL.
      * @property updateBehavior
      * @type ui.UpdateBehavior
       */
      this.updateBehavior = ui.UpdateBehavior.NORMAL;

      /**
      * @property image_
      * @type string
      * @protected
       */
      this.image_ = null;

      /**
      * The object's clip-rect for visual presentation.
      * @property clipRect_
      * @type gs.Rect
      * @protected
       */
      this.clipRect_ = null;

      /**
      * @property visible_
      * @type boolean
      * @protected
       */
      this.visible_ = true;
      this.addComponent(this.events);
    }


    /**
    * Restores the object from a data-bundle.
    *
    * @method restore
    * @param {Object} data - The data-bundle.
     */

    Object_UIElement.prototype.restore = function(data) {
      this.anchor = new gs.Point(data.anchor.x, data.anchor.y);
      this.offset = new gs.Point(data.offset.x, data.offset.y);
      this.dstRect.x = data.x;
      this.dstRect.y = data.y;
      this.opacity = data.opacity;
      this.zoom = new gs.Point(data.zoom.x, data.zoom.y);
      this.angle = data.angle;
      this.zIndex = data.zIndex;
      this.visible_ = data.visible;
      return this.rid = data.rid;
    };


    /**
    * Serializes the object into a data-bundle.
    *
    * @method toDataBundle
    * @return {Object} The data-bundle.
     */

    Object_UIElement.prototype.toDataBundle = function() {
      return {
        rid: this.rid,
        x: this.dstRect.x,
        y: this.dstRect.y,
        opacity: this.opacity,
        zoom: this.zoom,
        angle: this.angle,
        anchor: {
          x: this.anchor.x,
          y: this.anchor.y
        },
        zIndex: this.zIndex,
        offset: {
          x: this.offset.x,
          y: this.offset.y
        },
        visible: this.visible_
      };
    };

    return Object_UIElement;

  })(gs.Object_Base);

  ui.Object_UIElement = Object_UIElement;

}).call(this);