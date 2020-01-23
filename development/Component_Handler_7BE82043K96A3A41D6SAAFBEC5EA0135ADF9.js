// Generated by CoffeeScript 1.12.7
(function() {
  var Component_Handler,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_Handler = (function(superClass) {
    extend(Component_Handler, superClass);


    /**
    * The base class for all handler-components. A handler-component is
    * used to handle condition- or event-based processes of a In-Game UI
    * object like executing bindings or triggering actions.
    *
    * A handler is only executed if all assigned conditions and events are
    * true.
    *
    * @module ui
    * @class Component_Handler
    * @extends gs.Component
    * @memberof ui
    * @constructor
     */

    function Component_Handler() {

      /**
      * @property mouseEntered
      * @type boolean
      * @protected
       */
      this.mouseEntered = false;

      /**
      * @property mouseLeaved
      * @type boolean
      * @protected
       */
      this.mouseLeaved = true;
    }


    /**
    * Checks if the condition is <b>true</b> for the specified game object.
    *
    * @method checkCondition
    * @param {gs.Object_Base} object The game object.
    * @param {Object} condition The condition-object.
    * @return {boolean} If <b>true</b> the condition is true. Otherwise <b>false</b>.
    * @static
     */

    Component_Handler.checkCondition = function(object, condition) {
      var result;
      result = false;
      if (condition.equalTo != null) {
        result = ui.Component_FormulaHandler.fieldValue(object, condition.field) === ui.Component_FormulaHandler.fieldValue(object, condition.equalTo);
      } else if (condition.greaterThan != null) {
        result = ui.Component_FormulaHandler.fieldValue(object, condition.field) > ui.Component_FormulaHandler.fieldValue(object, condition.greaterThan);
      } else if (condition.lessThan != null) {
        result = ui.Component_FormulaHandler.fieldValue(object, condition.field) < ui.Component_FormulaHandler.fieldValue(object, condition.lessThan);
      } else if (condition.notEqualTo != null) {
        result = ui.Component_FormulaHandler.fieldValue(object, condition.field) !== ui.Component_FormulaHandler.fieldValue(object, condition.notEqualTo);
      }
      return result;
    };


    /**
    * Checks if the specified condition is <b>true</b>.
    *
    * @method checkCondition
    * @param {Object} condition The condition-object.
    * @return {boolean} If <b>true</b> the condition is true. Otherwise <b>false</b>.
     */

    Component_Handler.prototype.checkCondition = function(condition) {
      return ui.Component_Handler.checkCondition(this.object, condition);
    };


    /**
    * Checks if the specified conditions are <b>true</b>.
    *
    * @method checkConditions
    * @param {Object[]} conditions An array of condition-objects.
    * @return {boolean} If <b>true</b> all conditions are true. Otherwise <b>false</b>.
     */

    Component_Handler.prototype.checkConditions = function(conditions) {
      var condition, i, len, result;
      result = true;
      for (i = 0, len = conditions.length; i < len; i++) {
        condition = conditions[i];
        if (!this.checkCondition(condition)) {
          result = false;
          break;
        }
      }
      return result;
    };


    /**
    * Checks if the specified event is true.
    *
    * @method checkEvent
    * @param {Object} event The event to check for.
    * @param {Object} [binding=null] binding An optional binding-object necessary for some event-types.
    * @return {boolean} If <b>true</b> the event is true. Otherwise <b>false</b>.
     */

    Component_Handler.prototype.checkEvent = function(event, binding) {
      var entered, leaved, ref, ref1, result, value;
      result = false;
      if (event === "onAlways") {
        result = true;
      } else if (event === "onAction") {
        result = Input.Mouse.buttons[Input.Mouse.LEFT] === 2 && this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y);
      } else if (event === "onCancel") {
        result = Input.Mouse.buttons[Input.Mouse.RIGHT] === 2 && this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y);
      } else if (event === "onAccept") {
        result = Input.release(Input.KEY_RETURN) || (Input.Mouse.buttons[Input.Mouse.LEFT] === 2 && this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y));
      } else if (event === "onDragEnter") {
        entered = ((ref = this.object.dragDrop) != null ? ref.isDragging : void 0) && this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y);
        result = !this.mouseEntered && entered;
        this.mouseEntered = entered;
      } else if (event === "onDragLeave") {
        leaved = ((ref1 = this.object.dragDrop) != null ? ref1.isDragging : void 0) && !this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y);
        result = !this.mouseLeaved && leaved;
        this.mouseLeaved = leaved;
      } else if (event === "onMouseEnter") {
        entered = this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y);
        result = !this.mouseEntered && entered;
        this.mouseEntered = entered;
      } else if (event === "onMouseLeave") {
        leaved = !this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y);
        result = !this.mouseLeaved && leaved;
        this.mouseLeaved = leaved;
      } else if (event === "onMouseHover") {
        result = this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y);
      } else if (event === "onMouseClick") {
        result = Input.Mouse.buttons[Input.Mouse.LEFT] === 2 && this.object.dstRect.contains(Input.Mouse.x - this.object.origin.x, Input.Mouse.y - this.object.origin.y);
      } else if (event.onChange != null) {
        value = this.resolveFieldPath(event.onChange);
        if (value != null) {
          value = value.get(this.object);
          if (binding[event.onChange] !== value) {
            binding[event.onChange] = value;
            result = true;
          }
        } else {
          result = true;
        }
      }
      return result;
    };


    /**
    * Checks if all events and conditions defined for the handler
    * are true. If that check returns <b>true</b> the handler must be
    * executed.
    *
    * @method checkObject
    * @param {Object} object The game object to check.
    * @return {boolean} If <b>true</b> the handler must be executed. Otherwise <b>false</b>.
     */

    Component_Handler.prototype.checkObject = function(object) {
      var event, execute, i, len, ref;
      execute = true;
      if (object.event != null) {
        object.events = [object.event];
        delete object.event;
      }
      if (object.condition != null) {
        object.conditions = [object.condition];
        delete object.condition;
      }
      if (object.events != null) {
        ref = object.events;
        for (i = 0, len = ref.length; i < len; i++) {
          event = ref[i];
          execute = this.checkEvent(event, object);
          if (execute) {
            break;
          }
        }
      }
      if ((object.conditions != null) && execute) {
        execute = this.checkConditions(object.conditions);
      }
      return execute;
    };

    return Component_Handler;

  })(gs.Component);

  ui.Component_Handler = Component_Handler;

}).call(this);
