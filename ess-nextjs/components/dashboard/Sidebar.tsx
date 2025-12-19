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
            const views = ['profile', 'agenda', 'kehadiran', 'lembur', 'cuti', 'izin', 'dinas'];
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

            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/img/Logo_Peruri2.png`} alt="PERURI Logo" style={{ maxWidth: '100px', marginBottom: 0 }} />
        </div>
        
        {/* Apps Grid Overlay */}
        <div className={`apps-grid-overlay ${showGridMenu ? 'show' : ''}`} id="appsGridOverlay">    
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
                <Link href="/?view=profile" className="app-item" onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-user-circle"></i></div><span className="app-label">Profil</span></Link>
                <Link href="/?view=agenda" className="app-item" onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-clipboard-list"></i></div><span className="app-label">Agenda</span></Link>
                <Link href="/?view=kehadiran" className="app-item" onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-user-clock"></i></div><span className="app-label">Kehadiran</span></Link>
                <Link href="/?view=lembur" className="app-item" onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-clock"></i></div><span className="app-label">Lembur</span></Link>
                <Link href="/?view=cuti" className="app-item" onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-plane"></i></div><span className="app-label">Cuti</span></Link>
                
                <Link href="/?view=izin" className="app-item" onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-envelope"></i></div><span className="app-label">Izin</span></Link>
                <Link href="/?view=dinas" className="app-item" onClick={() => setShowGridMenu(false)}><div className="app-icon"><i className="fas fa-car"></i></div><span className="app-label">Dinas</span></Link>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-info-circle"></i></div><span className="app-label">Informasi</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-briefcase"></i></div><span className="app-label">Pelatihan</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-file-alt"></i></div><span className="app-label">SPBE</span></a>

                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-file"></i></div><span className="app-label">SPBI</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-plus-square"></i></div><span className="app-label">Kesehatan</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-bus"></i></div><span className="app-label">Transport</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-tasks"></i></div><span className="app-label">Tasklist</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-heartbeat"></i></div><span className="app-label">Health</span></a>
            </div>
        </div>

        {/* Overlay Click Grid Menu */}
       {showGridMenu && (
        <div 
            style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 900}} 
            onClick={() => setShowGridMenu(false)}
        />
       )}
        
        <nav className="nav flex-column">
            {/* Dashboard: Active only if NO 'view' param is present */}
            <Link href="/" className={`nav-link ${isActive('/')}`}>
                <i className="fas fa-home"></i> Dashboard
            </Link>
            
            {/* Profile: Active only if 'view=profile' */}
            <Link href="/?view=profile" className={`nav-link ${isActive('/', { key: 'view', value: 'profile' })}`}>
                <i className="fas fa-user"></i> Profile
            </Link>
            
            <Link href="/?view=agenda" className={`nav-link ${isActive('/', { key: 'view', value: 'agenda' })}`}>
                <i className="fas fa-calendar-alt"></i> Agenda
            </Link>
            <Link href="/?view=kehadiran" className={`nav-link ${isActive('/', { key: 'view', value: 'kehadiran' })}`}>
                <i className="fas fa-user-clock"></i> Kehadiran
            </Link>
            <Link href="/?view=lembur" className={`nav-link ${isActive('/', { key: 'view', value: 'lembur' })}`}>
                <i className="fas fa-clock"></i> Lembur
            </Link>
            <Link href="/?view=cuti" className={`nav-link ${isActive('/', { key: 'view', value: 'cuti' })}`}>
                <i className="fas fa-plane-departure"></i> Cuti
            </Link>
            <Link href="/?view=izin" className={`nav-link ${isActive('/', { key: 'view', value: 'izin' })}`}>
                <i className="fas fa-envelope-open-text"></i> Izin
            </Link>
        </nav>
    </div>
  );
}
