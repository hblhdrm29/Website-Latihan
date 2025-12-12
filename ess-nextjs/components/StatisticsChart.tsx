"use client";

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatisticsChart() {
  const data = {
    labels: ['Kehadiran', 'TK', 'AB', 'WFH', 'CUTI', 'TM', 'DINAS'],
    datasets: [{
        data: [80, 5, 2, 5, 3, 2, 3],
        backgroundColor: [
            '#23a44e', // Kehadiran
            '#f59e0b', // TK
            '#EF4444', // AB
            '#d85ffae6', // WFH
            '#114dad', // CUTI
            '#b59f0e', // TM
        ],
        borderWidth: 0
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right' as const,
            labels: {
                boxWidth: 10,
                usePointStyle: true,
            }
        }
    },
    cutout: '70%'
  };

  return (
    <div className="custom-card">
        <div className="card-header-custom">
                <span>Statistics</span>
                <small className="text-muted">Show: This Month</small>
        </div>
        <div className="chart-container" style={{ height: '250px' }}>
                <Doughnut data={data} options={options} />
        </div>
    </div>
  );
}
