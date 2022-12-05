import React, { useEffect } from 'react';
import s from './ResultChart.module.css';
import { Line } from 'react-chartjs-2';
import { COLORS } from '../../../../assets/colors'
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

export const ResultChart = React.memo(props => {
  const data = {
    datasets: [             
       {borderColor: COLORS.chartBlue,
        data: [1.9, 3.7, 5.4, 7.1, 8.6, 10.1, 11.5, 12.9, 14.2, 15.5],
        label: "Reach",
        type: "line",
        y2axis: true,
        yAxisID: "R"},       
       {borderColor: COLORS.chartSkyBlue,
        data: ["null", 94.8, 46.2, 30.0, 22.0, 17.1, 14.0, 11.7, 10.0, 8.7],
        label: "Reach incr",
        type: "line",
        y2axis: true,
        yAxisID: "RIncr"},       
       {borderColor: COLORS.chartGrey,
        data: ["null", 2.6, 2.5, 2.5, 2.4, 2.3, 2.3, 2.2, 2.2, 2.1],
        label: "CPRP incr",
        type: "line"},
           ],
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  }
 

   const options = {
    onClick: function(evt, element) {
      if(element.length > 0) {
          const ind = element[0].index
          const value = data.datasets[0].data[ind]
          alert(value)
      }},
    interaction: {
      mode: 'index',
      intersect: false,
    },

    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
        position: 'bottom',
        align: 'centre',
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        titleColor: 'black',
        bodyColor: 'black',
        boxHeight: 1,
        // callbacks: {
        //   label: function (TooltipItem) {
        //     return TooltipItem.dataset.label + ': ' + round(TooltipItem.parsed.y, 1) + ` %`;
        //   },
        //   title: function (TooltipItem) {
        //     return TooltipItem[0].label + ' млн';
        //   },
        // },
      },
    },
    scales: {
      RIncr: {
        // min: minValueCprpIncr_RIncr,
        // max: 20,
        position: 'left',
        title: {
          display: true,
          align: 'center',
          text: `REACH/ INCREMENT OF COST PER REACH`,
          color: 'black',
          font: {
            size: 13,
          },
          padding: { top: 5, left: 0, right: 0, bottom: 0 },
        },
        ticks: {
          callback: function (val, index) {
            return this.getLabelForValue(val) ;
          },
        },
      },
      R: {
        // min: 0,
        // max: maxValueR,
        position: 'right',
        title: {
          display: true,
          align: 'center',
          text: 'REACH INCREMENT',
          color: 'black',
          font: {
            size: 13,
          },
          padding: { top: 5, left: 0, right: 0, bottom: 0 },
        },
        ticks: {
          callback: function (val, index) {
            return this.getLabelForValue(val);
          },
        },
      },
      x: {
        title: {
          display: true,
          align: 'center',
          text: 'Budget level',
          color: 'black',
          font: {
            size: 20,
          },
          padding: 0,
        },
      },
    },
  };
  return (
    <div className={s.wrapper}>
      <Line height={350} data={data} options={options} />
    </div>
  );
});