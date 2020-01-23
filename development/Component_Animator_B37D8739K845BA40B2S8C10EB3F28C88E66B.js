// Generated by CoffeeScript 1.12.7
(function() {
  var Component_Animator,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_Animator = (function(superClass) {
    extend(Component_Animator, superClass);


    /**
    * An animator-component allows to execute different kind of animations 
    * on a game object. The animations are using the game object's 
    * dstRect & offset-property to execute.
    *
    * @module gs
    * @class Component_Animator
    * @extends gs.Component
    * @memberof gs
    * @constructor
     */

    function Component_Animator() {
      Component_Animator.__super__.constructor.apply(this, arguments);
      this.moveAnimation = new gs.Component_MoveAnimation();
      this.pathAnimation = new gs.Component_PathAnimation();
      this.zoomAnimation = new gs.Component_ZoomAnimation();
      this.blendAnimation = new gs.Component_BlendAnimation();
      this.blurAnimation = new gs.Component_BlurAnimation();
      this.pixelateAnimation = new gs.Component_PixelateAnimation();
      this.wobbleAnimation = new gs.Component_WobbleAnimation();
      this.colorAnimation = new gs.Component_ColorAnimation();
      this.imageAnimation = new gs.Component_ImageAnimation();
      this.frameAnimation = new gs.Component_FrameAnimation();
      this.fieldAnimation = new gs.Component_FieldAnimation();
      this.shakeAnimation = new gs.Component_ShakeAnimation();
      this.tintAnimation = new gs.Component_TintAnimation();
      this.rotateAnimation = new gs.Component_RotateAnimation();
      this.maskAnimation = new gs.Component_MaskAnimation();
      this.l2dAnimation = new gs.Component_Live2DAnimation();

      /**
      * Standard Callback Routine
      * @property callback
      * @type function
      * @private
       */
      this.callback = function(object, animation) {
        return object.removeComponent(animation);
      };
      this.onBlendFinish = function(object, animation, callback) {
        object.removeComponent(animation);
        return typeof callback === "function" ? callback(object) : void 0;
      };
    }

    Component_Animator.accessors("isAnimating", {
      get: function() {
        return this.object;
      }

      /**
      * Updates the animator.
      *
      * @method update
       */
    });

    Component_Animator.prototype.update = function() {
      var ref, ref1;
      Component_Animator.__super__.update.apply(this, arguments);
      if (((ref = this.object.mask) != null ? (ref1 = ref.source) != null ? ref1.videoElement : void 0 : void 0) != null) {
        return this.object.mask.source.update();
      }
    };


    /**
    * Moves the game object with a specified speed.
    *
    * @method move
    * @param {number} speedX The speed on x-axis in pixels per frame.
    * @param {number} speedY The speed on y-axis in pixels per frame.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type used for the animation.
     */

    Component_Animator.prototype.move = function(speedX, speedY, duration, easingType) {
      this.object.addComponent(this.moveAnimation);
      this.moveAnimation.move(speedX, speedY, duration, easingType, this.callback);
      return this.moveAnimation;
    };


    /**
    * Moves the game object to a specified position.
    *
    * @method moveTo
    * @param {number} x The x-coordinate of the position.
    * @param {number} y The y-coordinate of the position.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.moveTo = function(x, y, duration, easingType) {
      this.object.addComponent(this.moveAnimation);
      this.moveAnimation.moveTo(x, y, duration, easingType, this.callback);
      return this.moveAnimation;
    };


    /**
    * Moves the game object along a path.
    *
    * @method movePath
    * @param {Object} path The path to follow.
    * @param {gs.AnimationLoopType} loopType The loop-Type.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {Object[]} effects Optional array of effects executed during the path-movement like playing a sound.
     */

    Component_Animator.prototype.movePath = function(path, loopType, duration, easingType, effects) {
      var c;
      c = this.object.findComponent("Component_PathAnimation");
      if (c != null) {
        c.loopType = loopType;
      } else {
        this.object.addComponent(this.pathAnimation);
        this.pathAnimation.start(path, loopType, duration, easingType, effects, this.callback);
      }
      return this.pathAnimation;
    };


    /**
    * Scrolls the game object with a specified speed.
    *
    * @method scroll
    * @param {number} speedX The speed on x-axis in pixels per frame.
    * @param {number} speedY The speed on y-axis in pixels per frame.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type used for the animation.
     */

    Component_Animator.prototype.scroll = function(speedX, speedY, duration, easingType) {
      this.object.addComponent(this.moveAnimation);
      this.moveAnimation.scroll(speedX, speedY, duration, easingType, this.callback);
      return this.moveAnimation;
    };


    /**
    * Scrolls the game object to a specified position.
    *
    * @method scrollTo
    * @param {number} x The x-coordinate of the position.
    * @param {number} y The y-coordinate of the position.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.scrollTo = function(x, y, duration, easingType) {
      this.object.addComponent(this.moveAnimation);
      this.moveAnimation.scrollTo(x, y, duration, easingType, this.callback);
      return this.moveAnimation;
    };


    /**
    * Scrolls the game object along a path.
    *
    * @method scrollPath
    * @param {Object} path The path to follow.
    * @param {gs.AnimationLoopType} loopType The loop-Type.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.scrollPath = function(path, loopType, duration, easingType) {
      this.object.addComponent(this.pathAnimation);
      this.pathAnimation.scroll(path, loopType, duration, easingType, this.callback);
      return this.pathAnimation;
    };


    /**
    * Zooms a game object to specified size.
    *
    * @method zoomTo
    * @param {number} x The x-axis zoom-factor.
    * @param {number} y The y-axis zoom-factor.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.zoomTo = function(x, y, duration, easingType) {
      this.object.addComponent(this.zoomAnimation);
      this.zoomAnimation.start(x, y, duration, easingType, this.callback);
      return this.zoomAnimation;
    };


    /**
    * Blends a game object to specified opacity.
    *
    * @method blendTo
    * @param {number} opacity The target opacity.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback called if blending is finished.
     */

    Component_Animator.prototype.blendTo = function(opacity, duration, easingType, callback) {
      this.blendAnimation.stop();
      this.object.addComponent(this.blendAnimation);
      this.blendAnimation.start(opacity, duration, easingType, gs.CallBack("onBlendFinish", this, callback));
      return this.blendAnimation;
    };


    /**
    * Animates a Live2D model parameter of a Live2D game object to a specified value.
    *
    * @method blendTo
    * @param {string} param The name of the parameter to animate.
    * @param {number} value The target value.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback called if blending is finished.
     */

    Component_Animator.prototype.l2dParameterTo = function(param, value, duration, easingType, callback) {
      this.object.addComponent(this.l2dAnimation);
      this.l2dAnimation.start(param, value, duration, easingType, gs.CallBack("onBlendFinish", this, callback));
      return this.l2dAnimation;
    };


    /**
    * Blurs a game object to specified blur-power.
    *
    * @method blurTo
    * @param {number} power The target blur-power.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.blurTo = function(power, duration, easingType) {
      this.object.addComponent(this.blurAnimation);
      this.blurAnimation.start(power, duration, easingType);
      return this.blurAnimation;
    };


    /**
    * Pixelates a game object to specified pixel-size/block-size
    *
    * @method pixelateTo
    * @param {number} width - The target block-width
    * @param {number} height - The target block-height
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.pixelateTo = function(width, height, duration, easingType) {
      this.object.addComponent(this.pixelateAnimation);
      this.pixelateAnimation.start(width, height, duration, easingType);
      return this.pixelateAnimation;
    };


    /**
    * Wobbles a game object to specified wobble-power and wobble-speed.
    *
    * @method wobbleTo
    * @param {number} power The target wobble-power.
    * @param {number} speed The target wobble-speed.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.wobbleTo = function(power, speed, duration, easingType) {
      this.object.addComponent(this.wobbleAnimation);
      this.wobbleAnimation.start(power, speed, duration, easingType);
      return this.wobbleAnimation;
    };


    /**
    * Colors a game object to a specified target color.
    *
    * @method colorTo
    * @param {Color} color The target color.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.colorTo = function(color, duration, easingType) {
      this.object.addComponent(this.colorAnimation);
      this.colorAnimation.start(color, duration, easingType, this.callback);
      return this.colorAnimation;
    };


    /**
    * An image animation runs from left to right using the game object's
    * image-property.
    *
    * @method changeImages
    * @param {Array} images An array of image names.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.changeImages = function(images, duration, easingType) {
      this.object.addComponent(this.imageAnimation);
      this.imageAnimation.start(images, duration, easingType, this.callback);
      return this.imageAnimation;
    };


    /**
    * A frame animation which modifies the game object's srcRect property
    * a play an animation.
    *
    * @method changeFrames
    * @param {gs.Rect[]} frames An array of source rectangles (frames).
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */


    /**
    * A frame animation which modifies the game object's srcRect property
    * a play an animation.
    *
    * @method playAnimation
    * @param {gs.Rect[]} frames An array of source rectangles (frames).
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.playAnimation = function(animationRecord) {
      this.frameAnimation.refresh(animationRecord);
      this.object.addComponent(this.frameAnimation);
      this.frameAnimation.start(this.callback);
      return this.frameAnimation;
    };


    /**
    * Changes a field of the game object to a specified value.
    *
    * @method change
    * @param {number} Value The target value.
    * @param {string} field The name of the field/property.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.change = function(value, field, duration, easingType) {
      this.object.addComponent(this.fieldAnimation);
      this.fieldAnimation.start(value, field, duration, easingType, this.callback);
      return this.fieldAnimation;
    };


    /**
    * Shakes the game object horizontally using the game object's offset-property.
    *
    * @method shake
    * @param {gs.Range} range The horizontal shake-range.
    * @param {number} speed The shake speed.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.shake = function(range, speed, duration, easing) {
      this.object.addComponent(this.shakeAnimation);
      this.shakeAnimation.start(range, speed, duration, easing, this.callback);
      return this.shakeAnimation;
    };


    /**
    * Tints the game object to a specified tone.
    *
    * @method tintTo
    * @param {Tone} tone The target tone.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.tintTo = function(tone, duration, easingType) {
      this.object.addComponent(this.tintAnimation);
      this.tintAnimation.start(tone, duration, easingType, this.callback);
      return this.tintAnimation;
    };


    /**
    * Rotates the game object around its anchor-point.
    *
    * @method rotate
    * @param {gs.RotationDirection} direction The rotation-direction.
    * @param {number} speed The rotation speed in degrees per frame.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.rotate = function(direction, speed, duration, easingType) {
      this.object.addComponent(this.rotateAnimation);
      this.rotateAnimation.rotate(direction, speed, duration, easingType, this.callback);
      return this.rotateAnimation;
    };


    /**
    * Rotates the game object around its anchor-point to a specified angle.
    *
    * @method rotateTo
    * @param {number} angle The target angle.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
     */

    Component_Animator.prototype.rotateTo = function(angle, duration, easingType) {
      this.object.addComponent(this.rotateAnimation);
      this.rotateAnimation.rotateTo(angle, duration, easingType, this.callback);
      return this.rotateAnimation;
    };


    /**
    * Lets a game object appear on screen using a masking-effect.
    *
    * @method maskIn
    * @param {gs.Mask} mask The mask used for the animation.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.maskIn = function(mask, duration, easing, callback) {
      this.object.addComponent(this.maskAnimation);
      this.maskAnimation.maskIn(mask, duration, easing, function(object, animation) {
        object.removeComponent(animation);
        return typeof callback === "function" ? callback(object) : void 0;
      });
      return this.maskAnimation;
    };


    /**
    * Description follows...
    *
    * @method maskTo
    * @param {gs.Mask} mask The mask used for the animation.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.maskTo = function(mask, duration, easing, callback) {
      this.object.addComponent(this.maskAnimation);
      this.maskAnimation.maskTo(mask, duration, easing, function(object, animation) {
        object.removeComponent(animation);
        return typeof callback === "function" ? callback(object) : void 0;
      });
      return this.maskAnimation;
    };


    /**
    * Lets a game object disappear from screen using a masking-effect.
    *
    * @method maskOut
    * @param {gs.Mask} mask The mask used for the animation.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.maskOut = function(mask, duration, easing, callback) {
      this.object.addComponent(this.maskAnimation);
      this.maskAnimation.maskOut(mask, duration, easing, function(object, animation) {
        object.removeComponent(animation);
        return typeof callback === "function" ? callback(object) : void 0;
      });
      return this.maskAnimation;
    };


    /**
    * Lets a game object appear on screen from left, top, right or bottom using 
    * a move-animation
    *
    * @method moveIn
    * @param {number} x The x-coordinate of the target-position.
    * @param {number} y The y-coordinate of the target-position.
    * @param {number} type The movement-direction from where the game object should move-in.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.moveIn = function(x, y, type, duration, easing, callback) {
      this.object.addComponent(this.moveAnimation);
      this.moveAnimation.moveIn(x, y, type, duration, easing, function(object, animation) {
        object.removeComponent(animation);
        return typeof callback === "function" ? callback(object) : void 0;
      });
      return this.moveAnimation;
    };


    /**
    * Lets a game object disappear from screen to the left, top, right or bottom using 
    * a move-animation
    *
    * @method moveOut
    * @param {number} type The movement-direction in which the game object should move-out.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.moveOut = function(type, duration, easing, callback) {
      this.object.addComponent(this.moveAnimation);
      this.moveAnimation.moveOut(type, duration, easing, function(object, animation) {
        object.removeComponent(animation);
        return typeof callback === "function" ? callback(object) : void 0;
      });
      return this.moveAnimation;
    };


    /**
    * Lets a game object appear on screen using blending.
    *
    * @method show
    * @param {number} duration The duration in frames.
    * @param {Object} easing The easing-type.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.show = function(duration, easing, callback) {
      var ref;
      this.object.opacity = 0;
      if ((ref = this.object.visual) != null) {
        ref.update();
      }
      return this.blendTo(255, duration, easing, callback);
    };


    /**
    * Lets a game object disappear from screen using blending.
    *
    * @method hide
    * @param {number} duration The duration in frames.
    * @param {Object} easing The easing-type.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.hide = function(duration, easing, callback) {
      return this.blendTo(0, duration, easing, callback);
    };


    /**
    * Changes visible-property to true. This method is deprecated.
    * 
    * @method open
    * @deprecated
     */

    Component_Animator.prototype.open = function() {
      return this.object.visible = true;
    };


    /**
    * Changes visible-property to false. This method is deprecated.
    * 
    * @method close
    * @deprecated
     */

    Component_Animator.prototype.close = function() {
      return this.object.visible = false;
    };


    /**
    * Flashes the game object.
    *
    * @method flash
    * @param {Color} color The flash-color.
    * @param {number} duration The duration in frames.
     */

    Component_Animator.prototype.flash = function(color, duration) {
      this.object.color = color;
      color = new Color(color);
      color.alpha = 0;
      return this.colorTo(color, duration, gs.Easings.EASE_LINEAR[gs.EasingTypes.EASE_IN]);
    };


    /**
    * Lets a game object appear on screen using a specified animation.
    *
    * @method appear
    * @param {number} x The x-coordinate of the target-position.
    * @param {number} y The y-coordinate of the target-position.
    * @param {gs.AppearAnimationInfo} animation The animation info-object.
    * @param {Object} easing The easing-type.
    * @param {number} duration The duration in frames.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.appear = function(x, y, animation, easing, duration, callback) {
      easing = easing || gs.Easings.EASE_LINEAR[gs.EasingTypes.EASE_IN];
      this.object.visible = true;
      if (animation.type === gs.AnimationTypes.MOVEMENT) {
        return this.moveIn(x, y, animation.movement, duration, easing, callback);
      } else if (animation.type === gs.AnimationTypes.MASKING) {
        return this.maskIn(animation.mask, duration, easing, callback);
      } else {
        return this.show(duration, easing, callback);
      }
    };


    /**
    * Lets a game object disappear from screen using a specified animation.
    *
    * @method disappear
    * @param {gs.AppearAnimationInfo} animation The animation info-object.
    * @param {Object} easing The easing-type.
    * @param {number} duration The duration in frames.
    * @param {function} [callback] An optional callback-function called when the animation is finished.
     */

    Component_Animator.prototype.disappear = function(animation, easing, duration, callback) {
      this.object.visible = true;
      if (animation.type === gs.AnimationTypes.MOVEMENT) {
        return this.moveOut(animation.movement, duration, easing, callback);
      } else if (animation.type === gs.AnimationTypes.MASKING) {
        return this.maskOut(animation.mask, duration, easing, callback);
      } else {
        return this.hide(duration, easing, callback);
      }
    };

    return Component_Animator;

  })(gs.Component);

  gs.Animator = Component_Animator;

  gs.Component_Animator = Component_Animator;

}).call(this);
