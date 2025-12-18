"use client";

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import TopHeader from "@/components/dashboard/TopHeader";
import StatisticsChart from "@/components/dashboard/StatisticsChart";
import ApprovalWidget from "@/components/dashboard/ApprovalWidget";
import { AgendaWidget, LemburWidget, CutiWidget, PerizinanWidget } from "@/components/dashboard/Widgets";
import ProfileView from "@/components/profile/ProfileView";
import AgendaView from "@/components/agenda/AgendaView";
import KehadiranView from "@/components/kehadiran/KehadiranView";
import LemburView from "@/components/lembur/LemburView";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get view from URL param, default to 'dashboard'
  const viewParam = searchParams.get('view');
  const currentView = viewParam === 'profile' ? 'profile' : 
                     viewParam === 'agenda' ? 'agenda' : 
                     viewParam === 'kehadiran' ? 'kehadiran' : 
                     viewParam === 'lembur' ? 'lembur' : 'dashboard';

  // Helper to switch views
  const setView = (view: string) => {
      if (view === 'dashboard') {
          router.push('/');
      } else {
          router.push('/?view=' + view);
      }
  };

  return (
    <div>
        {/* Top Header */}
        <TopHeader />
        
        {/* Main Content Area */}
        <div className="container-fluid p-0">
            
            {/* View A: Dashboard */}
            {currentView === 'dashboard' && (
                <div className="animate__animated animate__fadeIn">
                    {/* Filter Section */}
                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center gap-3">
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Dashboard</h2>
                                <p className="text-muted mb-0">Welcome back, Abi</p>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2 text-muted" style={{ opacity: 0.1, margin: 0 }}/>

                    {/* Announcement Banner */}
                    <div className="announcement-bar d-flex align-items-center shadow-sm overflow-hidden p-0 ps-3">
                        <i className="fas fa-bullhorn me-3 fa-lg flex-shrink-0"></i>
                        <div className="marquee-container w-100 py-2">
                            <span className="marquee-content fw-normal text-dark">
                                <span className="fw-bold text-danger me-2">Pengumuman Penting!</span>
                                Semua karyawan harap mengisi survei kepuasan kerja sebelum tanggal 5 Desember 2025.
                            </span>
                        </div>
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

                        {/* Approval Widget */}
                        <div className="col-md-12 col-lg-4">
                            <ApprovalWidget />
                        </div>
                    </div>
                </div>
            )}

            {/* View B: Profile */}
            {currentView === 'profile' && (
                <div className="py-4">
                     <ProfileView onBack={() => setView('dashboard')} />
                </div>
            )}

            {/* View C: Agenda */}
            {currentView === 'agenda' && (
                <div className="py-4">
                     <AgendaView onBack={() => setView('dashboard')} />
                </div>
            )}

            {currentView === 'kehadiran' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <button 
                            onClick={() => setView('dashboard')}
                            className="btn btn-light border rounded-circle shadow-sm"
                            style={{ width: '40px', height: '40px' }}
                        >
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <div>
                            <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Kehadiran</h2>
                        </div>
                    </div>
                     <KehadiranView />
                </div>
            )}

            {currentView === 'lembur' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-4">
                        <button 
                            onClick={() => setView('dashboard')}
                            className="btn btn-light border rounded-circle shadow-sm"
                            style={{ width: '40px', height: '40px' }}
                        >
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <div>
                            <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Lembur</h2>
                        </div>
                    </div>
                     <LemburView />
                </div>
            )}

        </div>
    </div>
  );
}

export default function Home() {
    return (
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <HomeContent />
        </Suspense>
    );
}
