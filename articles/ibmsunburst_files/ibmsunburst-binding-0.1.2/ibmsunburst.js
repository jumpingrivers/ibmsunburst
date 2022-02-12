HTMLWidgets.widget({

  name: 'ibmsunburst',

  type: 'output',

  factory: function(el, width, height) {

    // set up instance at top level for access in all functions
    // also we will attach instance with chart to our return object
    // so that users can access from outside of this factory
    var instance = {chart: null};

    return {

      renderValue: function(x) {
        // add x to our instance for outside access
        instance.x = x;

        var chart = new PersonalitySunburstChart({
          'element': el,
          'version': x.version
        });

        chart.show(x.data);

        instance.chart = chart;
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      },

      // attach to return object for outside access
      instance: instance

    };
  }
});
