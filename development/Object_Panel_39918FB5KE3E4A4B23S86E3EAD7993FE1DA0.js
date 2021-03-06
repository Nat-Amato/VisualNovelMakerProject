// Generated by CoffeeScript 1.12.7
(function() {
  var Object_Panel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Object_Panel = (function(superClass) {
    extend(Object_Panel, superClass);


    /**
    * An UI panel object display a colored rectangle area on screen or can also
    * be completely transparent. A panel can be modal to block all user-input
    * for UI object placed behind it. 
    * 
    * So for example: To make a confirmation dialog
    * like "Do you really want to exit?" a panel is useful to avoid that the user
    * can click on other UI elements behind the confirmation dialog.
    *
    * @module ui
    * @class Object_Panel
    * @extends ui.Object_UIElement
    * @memberof ui
    * @constructor
     */

    function Object_Panel(x, y, width, height) {
      Object_Panel.__super__.constructor.call(this);
      this.dstRect.set(x || 0, y || 0, width || 100, height || 100);

      /**
      * The UI object's visual-component to display the game object on screen.
      * @property visual
      * @type gs.Component_Quad
       */
      this.visual = new gs.Component_Quad();

      /**
      * Indicates if the panel is modal. A modal panel blocks all user-input for UI objects
      * behind the panel.
      * @property modal
      * @type boolean
       */
      this.modal = false;
      this.addComponent(this.visual);
      this.addComponent(new gs.Component_PanelBehavior());
    }

    return Object_Panel;

  })(ui.Object_UIElement);

  ui.Object_Panel = Object_Panel;

}).call(this);
