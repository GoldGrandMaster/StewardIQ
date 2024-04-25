import React, { PureComponent } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data01 = [
  { hour: "Mon", index: 1, value: 8 },
  { hour: "Tue", index: 1, value: 5 },
  { hour: "Wed", index: 1, value: 7 },
  { hour: "Thu", index: 1, value: 10 },
  { hour: "Fri", index: 1, value: 6 },
  { hour: "Sat", index: 1, value: 4 },
  { hour: "Sun", index: 1, value: 2 },
];

const data02 = [
  { hour: "Mon", index: 1, value: 8 },
  { hour: "Tue", index: 1, value: 10 },
  { hour: "Wed", index: 1, value: 9 },
  { hour: "Thu", index: 1, value: 7 },
  { hour: "Fri", index: 1, value: 8 },
  { hour: "Sat", index: 1, value: 6 },
  { hour: "Sun", index: 1, value: 10 },
];

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data01.map((entry) => entry.value)
    ),
    Math.max.apply(
      null,
      data02.map((entry) => entry.value)
    )
  ),
];

const LegendChartComp = () => {
  const renderTooltip = (props: any) => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            margin: 0,
            padding: 10,
          }}
        >
          <p>{data.hour}</p>
          <p>
            <span>value: </span>
            {data.value}
          </p>
        </div>
      );
    }

    return null;
  };

  const domain = parseDomain();
  const range = [16, 225];

  return (
    <div className="w-full xl:max-w-[400px]">
      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            interval={0}
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            name="sunday"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Terri", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
          <Scatter data={data01} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            interval={0}
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            name="sunday"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Dan", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
          <Scatter data={data01} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={60}>
        <ScatterChart
          width={800}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis type="category" dataKey="hour" name="hour" interval={0} tickLine={{ transform: "translate(0, -6)" }} />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Mariah", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
          <Scatter data={data01} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LegendChartComp;
