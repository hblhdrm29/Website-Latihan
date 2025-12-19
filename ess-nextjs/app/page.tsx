"use client";

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import TopHeader from "@/components/dashboard/TopHeader";
import StatisticsChart from "@/components/dashboard/StatisticsChart";
import ApprovalWidget from "@/components/dashboard/ApprovalWidget";
import AnnouncementBanner from "@/components/dashboard/AnnouncementBanner";
import { AgendaWidget, LemburWidget, CutiWidget, PerizinanWidget, DinasWidget } from "@/components/dashboard/Widgets";
import ProfileView from "@/components/profile/ProfileView";
import AgendaView from "@/components/agenda/AgendaView";
import KehadiranView from "@/components/kehadiran/KehadiranView";
import LemburView from "@/components/lembur/LemburView";
import CutiView from "@/components/cuti/CutiView";
import IzinView from "@/components/izin/IzinView";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get view from URL param, default to 'dashboard'
  const viewParam = searchParams.get('view');
  const currentView = viewParam === 'profile' ? 'profile' : 
                     viewParam === 'agenda' ? 'agenda' : 
                     viewParam === 'kehadiran' ? 'kehadiran' : 
                     viewParam === 'agenda' ? 'agenda' : 
                     viewParam === 'kehadiran' ? 'kehadiran' : 
                     viewParam === 'lembur' ? 'lembur' : 
                     viewParam === 'lembur' ? 'lembur' : 
                     viewParam === 'cuti' ? 'cuti' : 
                     viewParam === 'izin' ? 'izin' : 'dashboard';

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
                    {/* Filter Section & Announcement */}
                    <div className="d-flex align-items-center mb-2 gap-3 px-3">
                        <div className="d-flex align-items-center gap-1 flex-shrink-0">
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Dashboard</h2>
                                <p className="text-muted mb-0">Welcome back, Abi</p>
                            </div>
                        </div>

                        {/* Announcement Banner */}
                        <AnnouncementBanner />
                    </div>
                    {/* Widgets Structure */}
                    
                    {/* Row 1: Agenda */}
                    <div className="row g-4 mb-4">
                        <div className="col-12">
                            <AgendaWidget />
                        </div>
                    </div>

                    {/* Row 2: Lembur, Cuti, Perizinan, Dinas */}
                    <div className="row g-3 mb-3">
                         <div className="col-md-3 col-lg-3">
                            <LemburWidget />
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <CutiWidget />
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <PerizinanWidget />
                        </div>
                        <div className="col-md-3 col-lg-3">
                            <DinasWidget />
                        </div>
                    </div>

                    {/* Row 3: Statistics */}
                    <div className="row g-4 mb-4">
                    <div className="row g-4 mb-4">
                        <div className="col-lg-8">
                            <StatisticsChart />
                        </div>
                        <div className="col-lg-4">
                            <ApprovalWidget />
                        </div>
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
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
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
                        <AnnouncementBanner />
                    </div>
                     <KehadiranView />
                </div>
            )}

            {currentView === 'lembur' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
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
                         <AnnouncementBanner />
                    </div>
                     <LemburView />
                </div>
            )}

            {currentView === 'cuti' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
                            <button 
                                onClick={() => setView('dashboard')}
                                className="btn btn-light border rounded-circle shadow-sm"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Cuti</h2>
                            </div>
                        </div>
                         <AnnouncementBanner />
                    </div>
                     <CutiView />
                </div>
            )}

            {currentView === 'izin' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
                            <button 
                                onClick={() => setView('dashboard')}
                                className="btn btn-light border rounded-circle shadow-sm"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Izin</h2>
                            </div>
                        </div>
                         <AnnouncementBanner />
                    </div>
                     <IzinView />
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
