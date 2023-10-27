import React from 'react';
import {useRef, useEffect} from 'react';
import Chart from 'chart.js/auto';


                                                        /*==========================
                                                                Chart.js - Pie
                                                        ===========================*/


export default function  PieChart  ()  {

  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const ctx = chartRef.current.getContext('2d');

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: 'doughnut', // hoặc 'pie' tùy thuộc vào loại biểu đồ bạn muốn hiển thị
      data: {
        labels: ['Camera', 'Sự cố', 'Giao thông'],
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        }],
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <div className="container">
      <div className="pie-chart" ><h3>Biểu đồ thể hiện dữ liệu sự kiện</h3><br/><canvas ref={chartRef} />
      </div>
    
    </div>;
}


