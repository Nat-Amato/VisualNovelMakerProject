// Generated by CoffeeScript 1.12.7
(function() {
  ui.UiFactory.customTypes["ui.SettingsMenuSlider"] = {
    "type": "ui.StackLayout",
    "sizeToFit": true,
    "orientation": "vertical",
    "margin": [10, 10, 0, 0],
    "controls": [
      {
        "type": "ui.Text",
        "text": function() {
          return p.label;
        },
        "styles": ["regularUIText"],
        "frame": [0, 0, 200, gs.UIConstants.OPTION_BUTTON_H - 40],
        "margin": [0, 0, 50, 0]
      }, {
        "type": "ui.Slider",
        "id": function() {
          return p.id;
        },
        "frame": [80, 0, gs.UIConstants.LAYOUT_SETTINGS_WINDOW_W - 110, gs.UIConstants.OPTION_BUTTON_H],
        "params": {
          "actions": [],
          "max": 100,
          "write": (function() {
            return p.write;
          }),
          "read": (function() {
            return p.read;
          })
        }
      }
    ]
  };

}).call(this);
