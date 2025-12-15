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
            '#4cc7fcff', // DINAS
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
    <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="fw-bold mb-0">Statistics</h6>
            <span className="badge bg-white text-secondary border shadow-sm rounded-pill px-2 py-1 fw-normal" style={{ fontSize: '0.75rem' }}>
                Show: This Month <i className="bi bi-chevron-down ms-1"></i>
            </span>
        </div>
        <div className="position-relative d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                <Doughnut data={data} options={options} />
        </div>
    </div>
  );
}
