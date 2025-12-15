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
    <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
          
            <div>
                <h6 className="fw-bold mb-0" style={{ fontSize: '0.8rem' }}>Statistics</h6>
            </div>
            
            <div className="position-relative">
                <span 
                    className="badge bg-white text-secondary border shadow-sm rounded-pill px-3 py-1 fw-normal cursor-pointer user-select-none d-inline-flex align-items-center gap-2" 
                    style={{ fontSize: '0.75rem', cursor: 'pointer' }}
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    Show: {selectedMonth} <i className={`fas fa-chevron-${showDropdown ? 'up' : 'down'} text-dark ms-1`}></i>
                </span>
                
                {showDropdown && (
                    <div className="position-absolute end-0 mt-2 bg-white shadow-sm rounded-3 border" style={{ zIndex: 1000, minWidth: '150px', maxHeight: '200px', overflowY: 'auto' }}>
                        {months.map((month) => (
                            <div 
                                key={month}
                                className={`px-3 py-2 small cursor-pointer hover-bg-light ${selectedMonth === month ? 'bg-light fw-bold text-primary' : 'text-secondary'}`}
                                style={{ cursor: 'pointer', fontSize: '0.75rem' }}
                                onClick={() => {
                                    setSelectedMonth(month);
                                    setShowDropdown(false);
                                }}
                                onMouseEnter={(e) => e.currentTarget.classList.add('bg-light')}
                                onMouseLeave={(e) => {
                                    if (selectedMonth !== month) e.currentTarget.classList.remove('bg-light');
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
            <div className="position-relative" style={{ height: '200px', width: '200px' }}>
                <Doughnut data={data} options={options} />
            </div>

            {/* Custom Legend Section */}
            <div className="d-flex flex-column gap-2 justify-content-center">
                {data.labels.map((label, index) => (
                    <div key={index} className="d-flex align-items-center">
                        <span 
                            className="d-inline-block rounded-1 me-2" 
                            style={{ 
                                width: '12px', 
                                height: '12px', 
                                backgroundColor: data.datasets[0].backgroundColor[index] 
                            }}
                        ></span>
                        <div className="d-flex text-secondary fw-medium" style={{ fontSize: '0.75rem' }}>
                            <span style={{ width: '60px' }}>{label}</span>
                            <span className="me-2">:</span>
                            <span>{data.datasets[0].data[index]}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Overlay to close dropdown when clicking outside */}
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
