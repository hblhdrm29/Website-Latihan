"use client";

import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatisticsChart() {
  const [selectedMonth, setSelectedMonth] = useState('Month');
  const [selectedYear, setSelectedYear] = useState('Year');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 8}, (_, i) => (currentYear - 2 + i).toString());

  const toggleDropdown = (name: string) => {
      if (openDropdown === name) {
          setOpenDropdown(null);
      } else {
          setOpenDropdown(name);
      }
  };

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
        {/* Header with Filters */}
        <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
            <h6 className="fw-bold mb-0" style={{ fontSize: '0.9rem' }}>Statistics</h6>
            
            <div className="d-flex gap-2">
                {/* Employee Dropdown */}
                <div className="position-relative">
                    <div 
                        className="bg-white border rounded ps-2 pe-1 py-1 d-flex align-items-center gap-1 cursor-pointer hover-bg-light transition-all"
                        style={{ fontSize: '0.7rem' }}
                        onClick={() => toggleDropdown('employee')}
                    >
                        <span className="fw-bold text-dark">Employee:</span>
                        <span className="text-secondary text-truncate" style={{ maxWidth: '80px' }}>7825 Abi Smith</span>
                        <i className="fas fa-chevron-down text-secondary ms-1" style={{ fontSize: '0.65rem' }}></i>
                    </div>
                    {openDropdown === 'employee' && (
                        <div className="position-absolute end-0 mt-1 bg-white border shadow-sm rounded-2 p-1 animate__animated animate__fadeIn" style={{ zIndex: 1000, width: '180px' }}>
                            <div className="px-2 py-1 hover-bg-light rounded cursor-pointer small text-dark" onClick={() => setOpenDropdown(null)}>7825 Abi Smith</div>
                        </div>
                    )}
                </div>

                {/* Month Dropdown */}
                <div className="position-relative">
                    <div 
                        className="bg-white border rounded px-2 py-1 d-flex align-items-center gap-2 cursor-pointer hover-bg-light transition-all"
                        style={{ fontSize: '0.7rem' }}
                        onClick={() => toggleDropdown('month')}
                    >
                        <span className="text-secondary">{selectedMonth}</span>
                        <i className="fas fa-chevron-down text-secondary" style={{ fontSize: '0.65rem' }}></i>
                    </div>
                    {openDropdown === 'month' && (
                        <div className="position-absolute end-0 mt-1 bg-white border shadow-sm rounded-2 p-1 custom-scrollbar animate__animated animate__fadeIn" style={{ zIndex: 1000, minWidth: '120px', maxHeight: '150px', overflowY: 'auto' }}>
                            {months.map((month) => (
                                <div 
                                    key={month}
                                    className={`px-2 py-1 small cursor-pointer rounded ${selectedMonth === month ? 'bg-primary text-white' : 'text-dark hover-bg-light'}`}
                                    onClick={() => {
                                        setSelectedMonth(month);
                                        setOpenDropdown(null);
                                    }}
                                >
                                    {month}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Year Dropdown */}
                <div className="position-relative">
                   <div 
                        className="bg-white border rounded px-2 py-1 d-flex align-items-center gap-2 cursor-pointer hover-bg-light transition-all"
                        style={{ fontSize: '0.7rem' }}
                        onClick={() => toggleDropdown('year')}
                    >
                        <span className="text-secondary">{selectedYear}</span>
                        <i className="fas fa-chevron-down text-secondary" style={{ fontSize: '0.65rem' }}></i>
                    </div>
                    {openDropdown === 'year' && (
                        <div className="position-absolute end-0 mt-1 bg-white border shadow-sm rounded-2 p-1 custom-scrollbar animate__animated animate__fadeIn" style={{ zIndex: 1000, minWidth: '80px', maxHeight: '150px', overflowY: 'auto' }}>
                            {years.map((year) => (
                                <div 
                                    key={year}
                                    className={`px-2 py-1 small cursor-pointer rounded ${selectedYear === year ? 'bg-primary text-white' : 'text-dark hover-bg-light'}`}
                                    onClick={() => {
                                        setSelectedYear(year);
                                        setOpenDropdown(null);
                                    }}
                                >
                                    {year}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
        
        <div className="d-flex align-items-center justify-content-start h-100 pb-2">
            {/* Chart Section */}
            <div className="position-relative d-flex justify-content-center align-items-center" style={{ width: '200px', flexShrink: 0 }}>
                <div style={{ height: '180px', width: '180px' }}>
                     <Doughnut data={data} options={options} />
                </div>
            </div>

            {/* Vertical Line Separator */}
            <div className="vr mx-2" style={{ height: '170px', opacity: 0.2 }}></div>

            {/* Legend Section */}
            <div className="d-flex flex-column gap-3 flex-grow-1 ps-2">
                {/* Row 1: Kehadiran, TK, AB */}
                <div className="row g-0">
                    {data.labels.slice(0, 3).map((label, index) => (
                        <div key={index} className="col-4 d-flex justify-content-start align-items-center">
                            <div className="d-flex align-items-center" style={{ fontSize: '0.75rem' }}>
                                <span 
                                    className="d-inline-block rounded-circle me-1" 
                                    style={{ 
                                        width: '8px', 
                                        height: '8px', 
                                        backgroundColor: data.datasets[0].backgroundColor[index] 
                                    }}
                                ></span>
                                <div className="d-flex text-secondary fw-medium align-items-center gap-1">
                                    <span>{label}</span>
                                    <span className="fw-bold text-dark">({data.datasets[0].data[index]}%)</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2: WFH, CUTI, TM */}
                <div className="row g-0">
                    {data.labels.slice(3, 6).map((label, index) => {
                         const actualIndex = index + 3;
                         return (
                            <div key={actualIndex} className="col-4 d-flex justify-content-start align-items-center">
                                <div className="d-flex align-items-center" style={{ fontSize: '0.75rem' }}>
                                    <span 
                                        className="d-inline-block rounded-circle me-1" 
                                        style={{ 
                                            width: '8px', 
                                            height: '8px', 
                                            backgroundColor: data.datasets[0].backgroundColor[actualIndex] 
                                        }}
                                    ></span>
                                    <div className="d-flex text-secondary fw-medium align-items-center gap-1">
                                        <span>{label}</span>
                                        <span className="fw-bold text-dark">({data.datasets[0].data[actualIndex]}%)</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Row 3: DINAS */}
                <div className="row g-0 justify-content-center">
                    {data.labels.slice(6, 7).map((label, index) => {
                        const actualIndex = index + 6;
                        return (
                            <div key={actualIndex} className="col-4 d-flex justify-content-start align-items-center">
                                <div className="d-flex align-items-center" style={{ fontSize: '0.75rem' }}>
                                    <span 
                                        className="d-inline-block rounded-circle me-1" 
                                        style={{ 
                                            width: '8px', 
                                            height: '8px', 
                                            backgroundColor: data.datasets[0].backgroundColor[actualIndex] 
                                        }}
                                    ></span>
                                    <div className="d-flex text-secondary fw-medium align-items-center gap-1">
                                        <span>{label}</span>
                                        <span className="fw-bold text-dark">({data.datasets[0].data[actualIndex]}%)</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        
        {/* Overlay for closing dropdowns */}
        {openDropdown && (
            <div 
                className="position-fixed top-0 start-0 w-100 h-100" 
                style={{ zIndex: 999 }} 
                onClick={() => setOpenDropdown(null)}
            />
        )}
    </div>
  );
}