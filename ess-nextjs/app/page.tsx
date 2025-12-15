"use client";

import { useState } from 'react';
import TopHeader from "@/components/TopHeader";
import StatisticsChart from "@/components/StatisticsChart";
import { AgendaWidget, LemburWidget, CutiWidget, PerizinanWidget } from "@/components/Widgets";

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState('Desember');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
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

  return (
    <div>
        {/* Top Header */}
        <TopHeader />
        
        {/* Dashboard Content */}
        <div className="container-fluid p-0">
            {/* Filter Section */}
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div>
                    <h2 className="fw-bold text-primary mb-0">Dashboard</h2>
                    <p className="text-muted mb-0">Welcome back, Abi</p>
                </div>
                
                <div className="d-flex gap-2 position-relative">
                    {/* User Dropdown (Static for now) */}
                    <div className="position-relative">
                        <div 
                             className="bg-white border shadow-sm rounded px-3 py-1 text-dark d-flex align-items-center justify-content-between gap-2 cursor-pointer"
                             style={{ fontSize: '0.875rem', cursor: 'pointer', minWidth: '140px' }}
                             onClick={() => toggleDropdown('user')}
                        >
                             <span className="text-dark fw-bold">Employee :</span> 
                             <span className="fw-normal">7825 Abi Smith</span>
                             <i className="fas fa-chevron-down small text-muted"></i>
                        </div>
                        {openDropdown === 'user' && (
                             <div className="position-absolute mt-1 bg-white border shadow-sm rounded-3 w-100 p-1" style={{ zIndex: 1000 }}>
                                <div className="px-2 py-1 hover-bg-light rounded cursor-pointer small">7825 Abi Smith</div>
                             </div>
                        )}
                    </div>

                    {/* Month Dropdown */}
                    <div className="position-relative">
                        <div 
                             className="bg-white border shadow-sm rounded px-3 py-1 text-dark d-flex align-items-center justify-content-between gap-2 cursor-pointer"
                             style={{ fontSize: '0.875rem', cursor: 'pointer', minWidth: '120px' }}
                             onClick={() => toggleDropdown('month')}
                        >
                            {selectedMonth} <i className="fas fa-chevron-down small text-muted"></i>
                        </div>
                        {openDropdown === 'month' && (
                            <div className="position-absolute mt-1 bg-white border shadow-sm rounded-3 p-1" style={{ zIndex: 1000, minWidth: '100%', maxHeight: '200px', overflowY: 'auto' }}>
                                {months.map(m => (
                                    <div 
                                        key={m} 
                                        className={`px-2 py-1 rounded cursor-pointer small ${selectedMonth === m ? 'bg-primary text-white' : 'text-dark hover-bg-light'}`}
                                        onClick={() => { setSelectedMonth(m); setOpenDropdown(null); }}
                                        onMouseEnter={(e) => { if(selectedMonth !== m) e.currentTarget.classList.add('bg-light'); }}
                                        onMouseLeave={(e) => { if(selectedMonth !== m) e.currentTarget.classList.remove('bg-light'); }}
                                    >
                                        {m}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Year Dropdown */}
                    <div className="position-relative">
                        <div 
                             className="bg-white border shadow-sm rounded px-3 py-1 text-dark d-flex align-items-center justify-content-between gap-2 cursor-pointer"
                             style={{ fontSize: '0.875rem', cursor: 'pointer', minWidth: '100px' }}
                             onClick={() => toggleDropdown('year')}
                        >
                            {selectedYear} <i className="fas fa-chevron-down small text-muted"></i>
                        </div>
                        {openDropdown === 'year' && (
                            <div className="position-absolute mt-1 bg-white border shadow-sm rounded-3 p-1" style={{ zIndex: 1000, minWidth: '100%', maxHeight: '200px', overflowY: 'auto' }}>
                                {years.map(y => (
                                    <div 
                                        key={y} 
                                        className={`px-2 py-1 rounded cursor-pointer small ${selectedYear === y ? 'bg-primary text-white' : 'text-dark hover-bg-light'}`}
                                        onClick={() => { setSelectedYear(y); setOpenDropdown(null); }}
                                        onMouseEnter={(e) => { if(selectedYear !== y) e.currentTarget.classList.add('bg-light'); }}
                                        onMouseLeave={(e) => { if(selectedYear !== y) e.currentTarget.classList.remove('bg-light'); }}
                                    >
                                        {y}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Click outside listener overlay */}
            {openDropdown && (
                <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 999 }} onClick={() => setOpenDropdown(null)}></div>
            )}

            {/* Announcement Banner */}
            <div className="announcement-bar d-flex align-items-center shadow-sm">
                <i className="fas fa-bullhorn me-2 fa-lg"></i>
                <span>Pengumuman Penting!</span> 
                <span className="text-dark ms-2 fw-normal">Semua karyawan harap mengisi survei kepuasan kerja sebelum tanggal 5 Desember 2025.</span>
            </div>

            {/* Widgets Row 1 */}
            <div className="row g-4 mb-4">
                {/* Agenda Widget */}
                <div className="col-md-3 col-lg-3">
                   <AgendaWidget />
                </div>

                {/* Lembur Single Card Slider */}
                <div className="col-md-3 col-lg-3">
                    <LemburWidget />
                </div>

                {/* Cuti Single Card Slider */}
                <div className="col-md-3 col-lg-3">
                    <CutiWidget />
                </div>

                {/* Perizinan Single Card Slider */}
                <div className="col-md-3 col-lg-3">
                    <PerizinanWidget />
                </div>

                {/* Statistics Card */}
                <div className="col-md-12 col-lg-8">
                   <StatisticsChart />
                </div>

            </div>

        </div>
    </div>
  );
}
