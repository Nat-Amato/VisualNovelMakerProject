// Generated by CoffeeScript 1.12.7
(function() {
  ui.UiFactory.layouts.loadMenuLayout = {
    "type": "ui.FreeLayout",
    "frame": [0, 0, Graphics.width, Graphics.height],
    "preload": {
      graphics: [
        {
          name: $(function() {
            return $dataFields.database.system.menuBackground.name || 'bg-generic';
          })
        }
      ]
    },
    "controls": [
      {
        "type": "ui.Image",
        "image": function() {
          return $dataFields.database.system.menuBackground.name || 'bg-generic';
        },
        "frame": [0, 0, Graphics.width, Graphics.height],
        "action": {
          "event": "onCancel",
          "name": "previousLayout",
          "params": {}
        }
      }, {
        "type": "ui.BackButton",
        "frame": [Graphics.width - 170, Graphics.height - 65, 150, 45]
      }, {
        "type": "ui.TitledWindow",
        "frame": [20, 0, Math.floor((Graphics.width - 200) / 420) * 420, Graphics.height],
        "params": {
          "title": {
            "lcId": "B215F6EB2576884547399CC0CF2F38E855FD",
            "defaultText": "Load Game"
          }
        }
      }, {
        "type": "ui.DataScrollView",
        "id": "list",
        "frame": [20, 45, Math.floor((Graphics.width - 200) / 420) * 420, Graphics.height - 45],
        "params": {
          "columns": Math.floor((Graphics.width - 200) / 420),
          "spacing": [10, 10],
          "dataSource": $(function() {
            return $dataFields.saveGameSlots;
          }),
          "template": {
            "descriptor": {
              "type": "ui.SaveGameSlot",
              "params": {
                "actions": [
                  {
                    "name": "executeFormulas",
                    "params": [
                      $(function() {
                        return $tempFields.slot = o.parent.index;
                      })
                    ]
                  }, {
                    "name": "createControl",
                    "conditions": [
                      {
                        "field": $(function() {
                          var ref;
                          return (ref = $dataFields.saveGameSlots[$tempFields.slot]) != null ? ref.date : void 0;
                        }),
                        "notEqualTo": $(function() {
                          return '';
                        })
                      }, {
                        "field": $(function() {
                          return $dataFields.settings.confirmation;
                        }),
                        "equalTo": true
                      }, {
                        "field": $(function() {
                          return $dataFields.tempSettings.loadMenuAccess;
                        }),
                        "equalTo": true
                      }
                    ],
                    "params": {
                      "descriptor": {
                        "id": "confirmationDialog",
                        "type": "ui.ConfirmationDialog",
                        "zIndex": 90000,
                        "params": {
                          "message": {
                            "lcId": "2BD08CC65B9A2248C749B9C4DEEAADE8E20A",
                            "defaultText": "Do you really want to load?"
                          },
                          "acceptActions": [
                            {
                              "name": "loadGame",
                              "params": {
                                "slot": $(function() {
                                  return $tempFields.slot;
                                })
                              }
                            }
                          ],
                          "rejectActions": [
                            {
                              "name": "disposeControl",
                              "params": $(function() {
                                return 'confirmationDialog';
                              })
                            }
                          ]
                        }
                      }
                    }
                  }, {
                    "conditions": [
                      {
                        "field": $(function() {
                          var ref;
                          return (ref = $dataFields.saveGameSlots[$tempFields.slot]) != null ? ref.date : void 0;
                        }),
                        "notEqualTo": $(function() {
                          return '';
                        })
                      }, {
                        "field": $(function() {
                          return !$dataFields.settings.confirmation || !$dataFields.tempSettings.loadMenuAccess;
                        }),
                        "equalTo": true
                      }
                    ],
                    "name": "loadGame",
                    "params": {
                      "slot": $(function() {
                        return $tempFields.slot;
                      })
                    }
                  }
                ]
              }
            }
          }
        }
      }
    ]
  };

}).call(this);
