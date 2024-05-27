import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    const options = {
        plugins: {
          legend: {
            labels: {
              color: "#FFFFFF",
            },
          },
        },
      };
      
  return (
    <div className='mt-5 bg-white bg-opacity-20 rounded-lg p-10'>
        <p className='text-3xl text-center text-white'>
            Summary Barkat Market

        </p>
        <Doughnut
        datasetIdKey='id'
        options={options}
        data={{
          labels: ['Pistol', 'Rifle', 'Other'],
          datasets: [
            {
              id: 1,
              data: [100, 150, 400],
              backgroundColor: ["#b0c2cc", "#6283c6", "#564d8d"]
            },
          ],
        }}
      
        />
    </div>
  )
}

export default Chart