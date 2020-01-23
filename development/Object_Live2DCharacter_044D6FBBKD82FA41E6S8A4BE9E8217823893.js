// Generated by CoffeeScript 1.12.7
(function() {
  var Object_Live2DCharacter,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Object_Live2DCharacter = (function(superClass) {
    extend(Object_Live2DCharacter, superClass);

    Object_Live2DCharacter.objectCodecBlackList = ["parent"];


    /**
    * A game object for an animated Live2D visual novel character. 
    *
    * @module gs
    * @class Object_Live2DCharacter
    * @extends gs.Object_Visual
    * @memberof gs
    * @constructor
     */

    function Object_Live2DCharacter(record, data) {
      var ref;
      Object_Live2DCharacter.__super__.constructor.call(this, data);
      this.zIndex = 200;

      /**
      * The ID of the character-record used.
      * @property rid
      * @type number
       */
      this.rid = (data != null ? data.id : void 0) || ((ref = record != null ? record.index : void 0) != null ? ref : -1);

      /**
      * The rotation-angle of the character in degrees. The rotation center depends on the
      * anchor-point.
      * @property angle
      * @type number
       */
      this.angle = 0;

      /**
      * The color tone of the object used for the visual presentation.
      * @property tone
      * @type gs.Tone
       */
      this.tone = new Tone(0, 0, 0, 0);

      /**
      * The color of the object used for the visual presentation.
      * @property color
      * @type gs.Color
       */
      this.color = new Color(255, 255, 255, 0);

      /**
      * The Live2D model used for the visual presentation.
      * @property model
      * @type gs.Live2DModel
       */
      this.model = data != null ? ResourceManager.getLive2DModel("Live2D/" + data.modelName) : null;

      /**
      * The resource name of a Live2D model used for the visual presentation.
      * @property modelName
      * @type string
       */
      this.modelName = data != null ? data.modelName : void 0;

      /**
      * The Live2D motion.
      * @property motion
      * @type gs.Live2DMotion
       */
      this.motion = (data != null ? data.motion : void 0) || {
        name: "",
        loop: true

        /**
        * The Live2D motion group.
        * @property motion
        * @type gs.Live2DMotionGroup
         */
      };
      this.motionGroup = data != null ? data.motionGroup : void 0;

      /**
      * The Live2D expression.
      * @property expression
      * @type gs.Live2DExpression
       */
      this.expression = (data != null ? data.expression : void 0) || {
        name: ""

        /**
        * The character's behavior component which contains the character-specific logic.
        * @property behavior
        * @type vn.Component_CharacterBehavior
         */
      };
      this.behavior = new vn.Component_CharacterBehavior();
      this.logic = this.behavior;

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
      this.visual = new gs.Component_Live2D();
      this.visual.modelFolder = "Live2D";
      this.addComponent(this.logic);
      this.addComponent(this.animator);
      this.addComponent(this.visual);
    }


    /**
    * Serializes the object into a data-bundle.
    *
    * @method toDataBundle
    * @return {Object} The data-bundle.
     */

    Object_Live2DCharacter.prototype.toDataBundle = function() {
      return {
        rid: this.rid,
        x: this.dstRect.x,
        y: this.dstRect.y,
        opacity: this.opacity,
        offset: this.offset,
        zoom: this.zoom,
        origin: this.origin,
        mirror: this.mirror,
        expression: this.expression,
        modelName: this.modelName,
        motion: this.motion,
        motionGroup: this.motionGroup,
        expression: this.expression
      };
    };

    return Object_Live2DCharacter;

  })(gs.Object_Visual);

  vn.Object_Live2DCharacter = Object_Live2DCharacter;

}).call(this);