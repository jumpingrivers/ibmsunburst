HTMLWidgets.widget({

  name: 'ibmsunburst',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
var instance = {};

    instance.chart = {};
    return {

      renderValue: function(x) {
        instance.x = x;

        // x.data should be a data.frame in R so an Javascript Object of Objects
        //     but buildHierarchy expects an Array of Arrays
        //     so use d3.zip and apply to do this


        // TODO: code to render the widget, e.g.
       chart.setProfile( x.data);

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
