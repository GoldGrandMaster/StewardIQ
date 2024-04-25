import React from 'react';

interface QuarterChartProps {
  data: { [key: string]: number[] };
  resources: string[];
}

const QuarterChart: React.FC<QuarterChartProps> = ({ data, resources }) => {
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

  return (
    <div className="quarter-chart">
      <div className="labels">
        {resources.map((resource, index) => (
          <div key={index} className="resource-label">
            {resource}
          </div>
        ))}
      </div>
      <div className="chart">
        {quarters.map((quarter, quarterIndex) => (
          <div key={quarterIndex} className="quarter">
            {data[quarter].map((value, index) => (
              <div key={index} className="bar" style={{ height: `${value}px` }}>
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuarterChart;
