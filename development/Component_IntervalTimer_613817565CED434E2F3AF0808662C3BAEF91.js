// Generated by CoffeeScript 1.12.7
(function() {
  var Component_IntervalTimer,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_IntervalTimer = (function(superClass) {
    extend(Component_IntervalTimer, superClass);


    /**
    * A component which adds timing-features to a game object. The game object
    * will send an "elapsed" event everytime the time interval has been elapsed.
    *
    * @module gs
    * @class Component_IntervalTimer
    * @extends gs.Component
    * @memberof gs
     */

    function Component_IntervalTimer() {
      Component_IntervalTimer.__super__.constructor.call(this);

      /**
      * Indicates if the timer is running. 
      *
      * @property isRunning
      * @type boolean
      * @readOnly
       */
      this.isRunning = false;

      /**
      * @property frameCount
      * @type number
      * @private
       */
      this.frameCount = 0;

      /**
      * The interval at which the associated action will be executed.
      * @property interval
      * @type number
       */
      this.interval = 0;
    }


    /**
    * Starts the timer. 
    *
    * @method start
     */

    Component_IntervalTimer.prototype.start = function() {
      this.isRunning = true;
      return this.frameCount = 0;
    };


    /**
    * Stops the timer. 
    *
    * @method stop
     */

    Component_IntervalTimer.prototype.stop = function() {
      return this.isRunning = false;
    };


    /**
    * Resumes the timer. 
    *
    * @method resume
     */

    Component_IntervalTimer.prototype.resume = function() {
      return this.isRunning = true;
    };


    /**
    * Pauses the timer. 
    *
    * @method pause
     */

    Component_IntervalTimer.prototype.pause = function() {
      return this.isRunning = false;
    };


    /**
    * Updates the timer.
    *
    * @method update
     */

    Component_IntervalTimer.prototype.update = function() {
      if (this.isRunning) {
        this.frameCount++;
        if (this.frameCount >= this.interval) {
          this.object.events.emit("elapsed", this.object);
          return this.frameCount = 0;
        }
      }
    };

    return Component_IntervalTimer;

  })(gs.Component);

  gs.Component_IntervalTimer = Component_IntervalTimer;

}).call(this);