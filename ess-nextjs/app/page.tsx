"use client";

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import TopHeader from "@/components/dashboard/TopHeader";
import StatisticsChart from "@/components/dashboard/StatisticsChart";
import ApprovalWidget from "@/components/dashboard/ApprovalWidget";
import { AgendaWidget, LemburWidget, CutiWidget, PerizinanWidget, DinasWidget } from "@/components/dashboard/Widgets";
import ProfileView from "@/components/profile/ProfileView";
import AgendaView from '@/components/agenda/AgendaView';
import OrganizationView from '@/components/organization/OrganizationView';
import KehadiranView from '@/components/kehadiran/KehadiranView';
import LemburView from "@/components/lembur/LemburView";
import CutiView from "@/components/cuti/CutiView";
import IzinView from "@/components/izin/IzinView";
import DinasView from '@/components/dinas/DinasView';
import PayslipsView from '@/components/payslips/PayslipsView';
import PayrollView from '@/components/payroll/PayrollView';
import GajiView from '@/components/informasi/GajiView';
import PelatihanView from '@/components/pelatihan/PelatihanView';


function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get view from URL param, default to 'dashboard'
  const viewParam = searchParams.get('view');
  const currentView = viewParam === 'profile' ? 'profile' : 
                     viewParam === 'agenda' ? 'agenda' : 
                     viewParam === 'organization' ? 'organization' :
                     viewParam === 'kehadiran' ? 'kehadiran' : 
                     viewParam === 'lembur' ? 'lembur' : 
                     viewParam === 'cuti' ? 'cuti' : 
                     viewParam === 'izin' ? 'izin' : 
                     viewParam === 'dinas' ? 'dinas' : 
                     viewParam === 'payslips' ? 'payslips' : 
                     viewParam === 'payroll' ? 'payroll' : 
                     viewParam === 'informasi' ? 'informasi' : 
                     viewParam === 'pelatihan' ? 'pelatihan' : 'dashboard';

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
                    <div className="row g-4">
                        <div className="col-12">
                            {/* Filter Section & Announcement */}
                            <div className="d-flex align-items-center mb-2 gap-3 px-3">
                                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                                    <div>
                                        <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Dashboard</h2>
                                        <p className="text-muted mb-0">Welcome back, Abi</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Announcement Banner */}
                            <div className="px-3 mb-4">
                                <div className="announcement-bar d-flex align-items-center shadow-sm overflow-hidden p-0 ps-3 flex-grow-1" style={{ height: 'fit-content' }}>
                                    <i className="fas fa-bullhorn me-3 fa-lg flex-shrink-0"></i>
                                    <div className="marquee-container w-100 py-2">
                                        <span className="marquee-content fw-normal text-dark">
                                            <span className="fw-bold text-danger me-2">Pengumuman Penting!</span>
                                            Semua karyawan harap mengisi survei kepuasan kerja sebelum tanggal 5 Desember 2025.
                                        </span>
                                    </div>
                                </div>
                            </div>

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
                                <div className="col-12">
                                    <StatisticsChart />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Overlay Approval Widget */}
                    <ApprovalWidget />
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

            {/* View D: Organization */}
            {currentView === 'organization' && (
                <div className="py-4">
                     <OrganizationView />
                </div>
            )}

            {currentView === 'kehadiran' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Kehadiran</h2>
                            </div>
                        </div>
                    </div>
                     <KehadiranView />
                </div>
            )}

            {currentView === 'lembur' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Lembur</h2>
                            </div>
                        </div>
                    </div>
                     <LemburView />
                </div>
            )}

            {currentView === 'cuti' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Cuti</h2>
                            </div>
                        </div>
                    </div>
                     <CutiView />
                </div>
            )}

            {currentView === 'izin' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Izin</h2>
                            </div>
                        </div>
                    </div>
                     <IzinView />
                </div>
            )}

            {currentView === 'dinas' && (
                <div className="py-4 px-3">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="d-flex align-items-center gap-3 flex-shrink-0">
                            <div>
                                <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}> Dinas</h2>
                            </div>
                        </div>
                    </div>
                     <DinasView />
                </div>
            )}

            {currentView === 'payslips' && (
                <div className="py-4 px-3">
                     <PayslipsView />
                </div>
            )}

            {currentView === 'payroll' && (
                <div className="py-4 px-3">
                     <PayrollView />
                </div>
            )}

            {currentView === 'informasi' && (
                <div className="py-4 px-3">
                     <GajiView />
                </div>
            )}

            {currentView === 'pelatihan' && (
                <div className="py-4 px-3">
                     <PelatihanView />
                </div>
            )}

            {/* Footer */}
            <footer className="d-flex justify-content-between py-4 mt-5 pt-5 text-muted small px-4">
                <p className="mb-0">
                    &copy; 2025 ESS. All rights reserved.
                </p>
                <p className="mb-0">
                    <a href="#" className="text-decoration-none text-muted hover-text-primary">Privacy</a> 
                    <span className="mx-2">&bull;</span> 
                    <a href="#" className="text-decoration-none text-muted hover-text-primary">Terms of Service</a> 
                    <span className="mx-2">&bull;</span> 
                    <a href="#" className="text-decoration-none text-muted hover-text-primary">Cookies Settings</a>
                </p>
            </footer>
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
