"use client";

import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatisticsChart() {
  const [selectedMonth, setSelectedMonth] = useState('This Month');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const months = [
      'This Month', 'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const data = {
    labels: ['Kehadiran', 'TK', 'AB', 'WFH', 'CUTI', 'TM', 'DINAS'],
    datasets: [{
        data: [80, 5, 2, 5, 3, 2, 3],
        backgroundColor: [
            '#22c55e', // Kehadiran (Green)
            '#f59e0b', // TK (Orange)
            '#ef4444', // AB (Red)
            '#d946ef', // WFH (Fuchsia/Purple)
            '#1e40af', // CUTI (Dark Blue)
            '#ca8a04', // TM (Dark Yellow/Olive)
            '#38bdf8', // DINAS (Light Blue)
        ],
        borderWidth: 0,
        hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false, 
        },
        tooltip: {
            callbacks: {
                label: function(context: any) {
                    return context.label + ': ' + context.parsed + '%';
                }
            }
        }
    },
    cutout: '70%'
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-3" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
            <h6 className="fw-bold mb-0" style={{ fontSize: '0.9rem' }}>Statistics</h6>
            
            <div className="position-relative">
                <div 
                    className="border shadow-sm rounded-pill px-3 py-1 bg-white cursor-pointer d-flex align-items-center gap-2"
                    style={{ cursor: 'pointer', fontSize: '0.75rem' }}
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <span className="text-secondary fw-normal">Show: {selectedMonth}</span>
                    <i className="fas fa-chevron-down text-secondary" style={{ fontSize: '0.7rem' }}></i>
                </div>
                
                {showDropdown && (
                    <div className="position-absolute end-0 mt-2 bg-white shadow-sm rounded-3 border" style={{ zIndex: 1000, minWidth: '150px', maxHeight: '200px', overflowY: 'auto' }}>
                        {months.map((month) => (
                            <div 
                                key={month}
                                className={`px-3 py-2 small cursor-pointer hover-bg-light ${selectedMonth === month ? 'bg-light text-primary fw-semibold' : 'text-secondary'}`}
                                onClick={() => {
                                    setSelectedMonth(month);
                                    setShowDropdown(false);
                                }}
                            >
                                {month}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        
        <div className="d-flex align-items-center justify-content-around h-100 pb-2">
            {/* Chart Section */}
            <div className="position-relative" style={{ height: '180px', width: '180px' }}>
                <Doughnut data={data} options={options} />
            </div>

            {/* Legend Section */}
            <div className="d-flex flex-column gap-2 justify-content-center">
                {data.labels.map((label, index) => (
                    <div key={index} className="d-flex align-items-center" style={{ fontSize: '0.8rem' }}>
                        <span 
                            className="d-inline-block rounded-1 me-3" 
                            style={{ 
                                width: '12px', 
                                height: '12px', 
                                backgroundColor: data.datasets[0].backgroundColor[index] 
                            }}
                        ></span>
                        <div className="d-flex text-secondary fw-medium" style={{ minWidth: '120px' }}>
                            <span style={{ width: '80px' }}>{label}</span>
                            <span className="me-2">:</span>
                            <span className="fw-semibold text-dark">{data.datasets[0].data[index]}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Overlay */}
        {showDropdown && (
            <div 
                className="position-fixed top-0 start-0 w-100 h-100" 
                style={{ zIndex: 999 }} 
                onClick={() => setShowDropdown(false)}
            />
        )}
    </div>
  );
}
