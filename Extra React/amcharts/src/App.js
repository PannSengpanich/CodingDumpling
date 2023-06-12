import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const App = () => {
  const root = am5.Root.new("chartdiv");

  const chart = root.container.children.push(am5percent.PieChart.new(root, {}));

  const series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category",
    })
  );

  series.data.setAll([
    {
      category: "Research",
      value: 1000,
    },
    {
      category: "Marketing",
      value: 1200,
    },
    {
      category: "Sales",
      value: 850,
    },
  ]);

  return <div id="chartdiv"></div>;
};

export default App;
