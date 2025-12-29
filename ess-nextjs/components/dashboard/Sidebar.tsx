"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [showGridMenu, setShowGridMenu] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Helper to check active state including query params
  const isActive = (path: string, queryParam?: { key: string, value: string }) => {
    if (path === '/') {
        // Special case for root: only active if NO query param 'view' exists (unless looking for specific view)
        if (pathname !== '/') return '';
        const currentView = searchParams.get('view');
        
        if (queryParam) {
            return currentView === queryParam.value ? 'active' : '';
        } else {
            // Dashboard case: no view param should be present or view is not profile/agenda/kehadiran/etc
            const views = ['profile', 'agenda', 'kehadiran', 'lembur', 'cuti', 'izin', 'dinas', 'organization', 'payslips'];
            return !currentView || !views.includes(currentView) ? 'active' : '';
        }
    }
    // Standard path check for other pages
    return pathname === path ? 'active' : '';
  };

  const clearSearch = () => setSearchText('');

  return (
    <div className="sidebar d-flex flex-column">
        <div className="logo-section d-flex align-items-center gap-3 px-3 mb-4">
            {/* Grid Menu Trigger */}
            <div 
                className="grid-menu-btn" 
                id="gridMenuBtn"
                onClick={() => setShowGridMenu(!showGridMenu)}
                style={{ marginTop: '20px' }}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="19" cy="5" r="1"></circle>
                    <circle cx="5" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                    <circle cx="19" cy="19" r="1"></circle>
                    <circle cx="5" cy="19" r="1"></circle>
                </svg>
            </div>

            <Link href="/" className="text-decoration-none" style={{ cursor: 'pointer' }}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/img/Logo_Peruri2.png`} alt="PERURI Logo" style={{ maxWidth: '100px', marginBottom: 0 }} />
            </Link>
        </div>
        
        {/* Apps Grid Overlay */}
        <div className={`apps-grid-overlay ${showGridMenu ? 'show' : ''}`} id="appsGridOverlay">
            <style jsx>{`
                .apps-grid-overlay .app-item.active .app-icon {
                    background-color: #e7f1ff !important;
                    color: #0d6efd !important;
                    border: 1px solid rgba(13, 110, 253, 0.2) !important;
                }
                .apps-grid-overlay .app-item.active .app-label {
                    color: #0d6efd !important;
                    font-weight: 600 !important;
                }
            `}</style>    
            <div className="apps-grid-header position-relative">
                <input 
                    type="text" 
                    className="apps-grid-search" 
                    placeholder="Find ESS Apps" 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ paddingRight: '40px' }}
                />
                {searchText && (
                    <i 
                        className="fas fa-times position-absolute top-50 end-0 translate-middle-y me-3 text-muted cursor-pointer hover-text-danger"
                        onClick={clearSearch}
                        style={{ cursor: 'pointer' }}
                    ></i>
                )}
            </div>
            <div className="apps-grid">
                <Link href="/?view=kehadiran" className={`app-item ${isActive('/', { key: 'view', value: 'kehadiran' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-user-clock"></i></div><span className="app-label">Kehadiran</span></Link>
                <Link href="/?view=lembur" className={`app-item ${isActive('/', { key: 'view', value: 'lembur' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-clock"></i></div><span className="app-label">Lembur</span></Link>
                <Link href="/?view=cuti" className={`app-item ${isActive('/', { key: 'view', value: 'cuti' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-plane"></i></div><span className="app-label">Cuti</span></Link>
                
                <Link href="/?view=izin" className={`app-item ${isActive('/', { key: 'view', value: 'izin' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-envelope"></i></div><span className="app-label">Izin</span></Link>
                <Link href="/?view=dinas" className={`app-item ${isActive('/', { key: 'view', value: 'dinas' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-car"></i></div><span className="app-label">Dinas</span></Link>
                
                <Link href="/?view=payslips" className={`app-item ${isActive('/', { key: 'view', value: 'payslips' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-file-invoice-dollar"></i></div><span className="app-label">Payslips</span></Link>
                <Link href="/?view=payroll" className={`app-item ${isActive('/', { key: 'view', value: 'payroll' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-money-check-alt"></i></div><span className="app-label">Payroll</span></Link>

                <Link href="/?view=informasi" className={`app-item ${isActive('/', { key: 'view', value: 'informasi' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-info-circle"></i></div><span className="app-label">Informasi</span></Link>
                <Link href="/?view=pelatihan" className={`app-item ${isActive('/', { key: 'view', value: 'pelatihan' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-briefcase"></i></div><span className="app-label">Pelatihan</span></Link>
                <Link href="/?view=spbe" className={`app-item ${isActive('/', { key: 'view', value: 'spbe' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas text-danger fa-file-alt"></i></div><span className="app-label">SPBE</span></Link>
                <Link href="/?view=spbi" className={`app-item ${isActive('/', { key: 'view', value: 'spbi' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas text-danger fa-file"></i></div><span className="app-label">SPBI</span></Link>
                
                {/* Disabled items */}
                
                <Link href="/?view=kesehatan" className={`app-item ${isActive('/', { key: 'view', value: 'kesehatan' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas text-danger fa-plus-square"></i></div><span className="app-label">Kesehatan</span></Link>
                <Link href="/?view=transport" className={`app-item ${isActive('/', { key: 'view', value: 'transport' })}`} onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-bus"></i></div><span className="app-label">Transport</span></Link>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas text-danger fa-tasks"></i></div><span className="app-label">Tasklist</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas text-danger fa-heartbeat"></i></div><span className="app-label">Health</span></a>
            </div>
        </div>

       {showGridMenu && (
        <div 
            style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 900}} 
            onClick={() => setShowGridMenu(false)}
        />
       )}
        
        <nav className="nav flex-column">
            {searchParams.get('view') === 'dinas' ? (
                // DINAS SPECIFIC SIDEBAR
                <>
                    <div className="nav-item px-3 mb-2 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Dinas</span>
                    </div>
                    <Link href="/?view=dinas" className="nav-link active">
                        <i className="fas fa-home"></i> Home Dinas
                    </Link>
                    <a href="#" className="nav-link">
                        <i className="fas fa-file-signature"></i> Pengajuan
                    </a>
                    
                    <a href="#" className="nav-link">
                        <i className="fas fa-history"></i> Riwayat
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-file-alt"></i> Laporan
                    </a>
                    <div className="nav-item px-3 mb-2 mt-4">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                     <Link href="/" className="nav-link">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'kehadiran' ? (
                // KEHADIRAN SPECIFIC SIDEBAR
                <>
                    <div className="nav-item px-3 mb-2 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Kehadiran</span>
                    </div>
                    <Link href="/?view=kehadiran" className="nav-link active">
                        <i className="fas fa-user-clock"></i> Data Kehadiran
                    </Link>
                    <a href="#" className="nav-link">
                        <i className="fas fa-calendar-alt"></i> Perencanaan Jadwal Kerja
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-check-circle"></i> Persetujuan Kehadiran
                    </a>
                    <div className="nav-item px-3 mb-2 mt-4">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                     <Link href="/" className="nav-link">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'lembur' ? (
                 // LEMBUR SPECIFIC SIDEBAR
                 <>
                    <div className="nav-item px-3 mb-2 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Lembur</span>
                    </div>
                    <Link href="/?view=lembur" className="nav-link active">
                        <i className="fas fa-home"></i> Home Lembur
                    </Link>
                    <a href="#" className="nav-link">
                        <i className="fas fa-file-signature"></i> Pengajuan
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-history"></i> Riwayat
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-file-alt"></i> Laporan
                    </a>
                    <div className="nav-item px-3 mb-2 mt-4">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                     <Link href="/" className="nav-link">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'cuti' ? (
                // CUTI SPECIFIC SIDEBAR
                <>
                   <div className="nav-item px-3 mb-2 mt-2">
                       <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Cuti</span>
                   </div>
                   <Link href="/?view=cuti" className="nav-link active">
                       <i className="fas fa-home"></i> Home Cuti
                   </Link>
                   <a href="#" className="nav-link">
                       <i className="fas fa-file-signature"></i> Pengajuan
                   </a>
                   <a href="#" className="nav-link">
                       <i className="fas fa-history"></i> Riwayat
                   </a>
                   <a href="#" className="nav-link">
                       <i className="fas fa-file-alt"></i> Laporan
                   </a>
                   <div className="nav-item px-3 mb-2 mt-4">
                       <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                   </div>
                    <Link href="/" className="nav-link">
                       <i className="fas fa-arrow-left"></i> Main Dashboard
                   </Link>
               </>
           ) : searchParams.get('view') === 'izin' ? (
                // IZIN SPECIFIC SIDEBAR
                <>
                   <div className="nav-item px-3 mb-2 mt-2">
                       <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Izin</span>
                   </div>
                   <Link href="/?view=izin" className="nav-link active">
                       <i className="fas fa-home"></i> Home Izin
                   </Link>
                   <a href="#" className="nav-link">
                       <i className="fas fa-file-signature"></i> Pengajuan
                   </a>
                   <a href="#" className="nav-link">
                       <i className="fas fa-history"></i> Riwayat
                   </a>
                   <a href="#" className="nav-link">
                       <i className="fas fa-file-alt"></i> Laporan
                   </a>
                   <div className="nav-item px-3 mb-2 mt-4">
                       <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                   </div>
                    <Link href="/" className="nav-link">
                       <i className="fas fa-arrow-left"></i> Main Dashboard
                   </Link>
               </>
            ) : searchParams.get('view') === 'payroll' ? (
                 // PAYROLL SPECIFIC SIDEBAR
                 <>
                    <div className="nav-item px-3 mb-2 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Payroll</span>
                    </div>
                    <Link href="/?view=payroll" className="nav-link active">
                        <i className="fas fa-money-check-alt"></i> Dashboard Payroll
                    </Link>
                    <a href="#" className="nav-link">
                        <i className="fas fa-cogs"></i> Proses Gaji
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-chart-bar"></i> Laporan
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-percent"></i> Pengaturan Pajak
                    </a>
                    <div className="nav-item px-3 mb-2 mt-4">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                     <Link href="/" className="nav-link">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'payslips' ? (
                // PAYSLIPS SPECIFIC SIDEBAR
                <>
                   <div className="nav-item px-3 mb-2 mt-2">
                       <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu Payslips</span>
                   </div>
                   <Link href="/?view=payslips" className="nav-link active">
                       <i className="fas fa-file-invoice-dollar"></i> My Payslips
                   </Link>
                   <a href="#" className="nav-link">
                       <i className="fas fa-chart-line"></i> Salary History
                   </a>
                   <a href="#" className="nav-link">
                       <i className="fas fa-cog"></i> Tax Settings
                   </a>
                   <div className="nav-item px-3 mb-2 mt-4">
                       <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                   </div>
                    <Link href="/" className="nav-link">
                       <i className="fas fa-arrow-left"></i> Main Dashboard
                   </Link>
               </>
            ) : ['informasi', 'rekapitulasi'].includes(searchParams.get('view') || '') ? (
                // INFORMASI SPECIFIC SIDEBAR
                <>
                    <div className="nav-item px-3 mb-2 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Informasi</span>
                    </div>
                    
                    <Link href="/?view=informasi" className={`nav-link ${searchParams.get('view') === 'informasi' ? 'active' : ''}`}>
                        <i className="fas fa-chart-line"></i> Gaji
                    </Link>
                    <Link href="/?view=rekapitulasi" className={`nav-link ${searchParams.get('view') === 'rekapitulasi' ? 'active' : ''}`}>
                        <i className="fas fa-list-alt"></i> Rekapitulasi Bulanan
                    </Link>
                    <a href="#" className="nav-link">
                        <i className="fas fa-building"></i> Data Pamlek
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-bed"></i> Data Keterlambatan
                    </a>

                    <div className="nav-item px-3 mb-2 mt-4">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                    <Link href="/" className="nav-link">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'pelatihan' ? (
                // PELATIHAN SPECIFIC SIDEBAR
                <>
                    <div className="nav-item px-3 mb-2 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Pelatihan</span>
                    </div>
                    
                    <a href="#" className="nav-link active">
                        <i className="fas fa-pen"></i> Input Pelatihan
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-history"></i> History Pelatihan
                    </a>
                    <a href="#" className="nav-link">
                        <i className="fas fa-check-circle"></i> Persetujuan Pelatihan
                    </a>

                    <div className="nav-item px-3 mb-2 mt-4">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                    <Link href="/" className="nav-link">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'spbe' ? (
                // SPBE SPECIFIC SIDEBAR
                <>
                    <div className="nav-item px-3 mb-2 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu SPBE</span>
                    </div>
                    
                    <Link href="/?view=spbe" className="nav-link active">
                         <i className="fas fa-file-alt"></i> Permohonan SPBE
                    </Link>
                    <a href="#" className="nav-link">
                         <i className="fas fa-check-square"></i> Persetujuan SPBE
                    </a>
                    <a href="#" className="nav-link" style={{ lineHeight: '1.2', height: 'auto' }}>
                         <div className="d-flex align-items-center">
                             <i className="fas fa-file-alt mt-1 me-2 flex-shrink-0"></i>
                             <span style={{ whiteSpace: 'normal', maxWidth: '190px', wordBreak: 'break-word' }}>Konfirmasi SPBE Keluar oleh Pengawas/Pengawal/Penyegel</span>
                         </div>
                    </a>
                    <a href="#" className="nav-link" style={{ lineHeight: '1.2', height: 'auto' }}>
                         <div className="d-flex align-items-center">
                             <i className="fas fa-file-alt mt-1 me-2 flex-shrink-0"></i>
                             <span style={{ whiteSpace: 'normal', maxWidth: '190px', wordBreak: 'break-word' }}>Konfirmasi SPBE Masuk oleh Pengguna</span>
                         </div>
                    </a>

                    <div className="nav-item px-3 mb-2 mt-4">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                    <Link href="/" className="nav-link">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'spbi' ? (
                // SPBI SPECIFIC SIDEBAR
                <>
                    <div className="nav-item px-3 mb-2 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Menu SPBI</span>
                    </div>
                    
                    <Link href="/?view=spbi" className="nav-link active">
                         <i className="fas fa-file-alt"></i> Permohonan SPBI
                    </Link>
                    <a href="#" className="nav-link">
                         <i className="fas fa-check-square"></i> Persetujuan SPBI
                    </a>
                    <a href="#" className="nav-link" style={{ lineHeight: '1.2', height: 'auto' }}>
                         <div className="d-flex align-items-center">
                             <i className="fas fa-file-alt mt-1 me-2 flex-shrink-0"></i>
                             <span style={{ whiteSpace: 'normal', maxWidth: '190px', wordBreak: 'break-word' }}>Konfirmasi SPBI Keluar oleh Pengawas/Pengawal/Penyegel</span>
                         </div>
                    </a>
                    <a href="#" className="nav-link" style={{ lineHeight: '1.2', height: 'auto' }}>
                         <div className="d-flex align-items-center">
                             <i className="fas fa-file-alt mt-1 me-2 flex-shrink-0"></i>
                             <span style={{ whiteSpace: 'normal', maxWidth: '190px', wordBreak: 'break-word' }}>Konfirmasi SPBI Masuk oleh Pengguna</span>
                         </div>
                    </a>

                    <div className="nav-item px-3 mb-2 mt-4">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                    <Link href="/" className="nav-link">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'kesehatan' ? (
                // KESEHATAN SPECIFIC SIDEBAR
                <>
                    <div className="nav-item px-3 mb-1 mt-1">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Kesehatan</span>
                    </div>
                    
                    <Link href="/?view=kesehatan" className="nav-link active py-2">
                         <i className="fas fa-male me-2"></i> Biodata
                    </Link>
                    <a href="#" className="nav-link py-2">
                         <i className="fas fa-money-bill-wave me-2"></i> Biaya Kesehatan
                    </a>
                    <a href="#" className="nav-link py-2">
                         <i className="fas fa-pills me-2"></i> Daftar Obat
                    </a>
                    <a href="#" className="nav-link py-2">
                         <i className="fas fa-tint me-2"></i> Donor Darah
                    </a>
                    <a href="#" className="nav-link py-2">
                         <i className="fas fa-heartbeat me-2"></i> Hasil MCU
                    </a>
                    <a href="#" className="nav-link py-2" style={{ lineHeight: '1.2' }}>
                         <div className="d-flex align-items-center">
                             <i className="fas fa-hospital me-2 flex-shrink-0"></i>
                             <span className="text-wrap">Info RS dan Klinik Provider</span>
                         </div>
                    </a>
                    <a href="#" className="nav-link py-2">
                         <i className="fas fa-glasses me-2"></i> Riwayat Kacamata
                    </a>

                    <div className="nav-item px-3 mb-1 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                    <Link href="/" className="nav-link py-2">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : searchParams.get('view') === 'transport' ? (
                // TRANSPORT SPECIFIC SIDEBAR
                <>
                    <div className="nav-item px-3 mb-1 mt-1">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Go Transport</span>
                    </div>
                    
                    <Link href="/?view=transport" className="nav-link active py-2">
                         <i className="fas fa-calendar-alt me-2"></i> Data Pemesanan Kendaraan
                    </Link>
                    <a href="#" className="nav-link py-2">
                         <i className="fas fa-check-square me-2"></i> Persetujuan Pemesanan Kendaraan
                    </a>

                    <div className="nav-item px-3 mb-1 mt-2">
                        <span className="text-uppercase small fw-bold text-muted" style={{ fontSize: '0.7rem' }}>Other</span>
                    </div>
                    <Link href="/" className="nav-link py-2">
                        <i className="fas fa-arrow-left"></i> Main Dashboard
                    </Link>
                </>
            ) : (
                // STANDARD SIDEBAR
                <>
                    <Link href="/" className={`nav-link ${isActive('/')}`}>
                        <i className="fas fa-home"></i> Dashboard
                    </Link>
                    
                    <Link href="/?view=profile" className={`nav-link ${isActive('/', { key: 'view', value: 'profile' })}`}>
                        <i className="fas fa-user"></i> Profile
                    </Link>
                    
                    <Link href="/?view=agenda" className={`nav-link ${isActive('/', { key: 'view', value: 'agenda' })}`}>
                        <i className="fas fa-calendar-alt"></i> Agenda
                    </Link>
                    <Link href="/?view=organization" className={`nav-link ${isActive('/', { key: 'view', value: 'organization' })}`}>
                        <i className="fas fa-sitemap"></i> Organization
                    </Link>
                </>
            )}
        </nav>
    </div>
  );
}
