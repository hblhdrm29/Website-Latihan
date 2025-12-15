"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [showGridMenu, setShowGridMenu] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <div className="sidebar d-flex flex-column">
        <div className="logo-section d-flex align-items-center gap-3 px-3 mb-4">
            {/* Grid Menu Trigger */}
            <div 
                className="grid-menu-btn" 
                id="gridMenuBtn"
                onClick={() => setShowGridMenu(!showGridMenu)}
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

            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/img/logo.png`} alt="PERURI Logo" style={{ maxWidth: '100px', marginBottom: 0 }} />
        </div>
        
        {/* Apps Grid Overlay */}
        <div className={`apps-grid-overlay ${showGridMenu ? 'show' : ''}`} id="appsGridOverlay">    
            <div className="apps-grid-header">
                <input type="text" className="apps-grid-search" placeholder="Find ESS Apps" />
            </div>
            <div className="apps-grid">
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-user-circle"></i></div><span className="app-label">Profil</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-clipboard-list"></i></div><span className="app-label">Agenda</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-user-clock"></i></div><span className="app-label">Kehadiran</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-clock"></i></div><span className="app-label">Lembur</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-plane"></i></div><span className="app-label">Cuti</span></a>
                
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-envelope"></i></div><span className="app-label">Izin</span></a>
                <a href="#" className="app-item"><div className="app-icon"><i className="fas fa-car"></i></div><span className="app-label">Dinas</span></a>
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

        {/* Overlay Click Handler for Grid Menu */}
       {showGridMenu && (
        <div 
            style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 900}} 
            onClick={() => setShowGridMenu(false)}
        />
       )}
        
        <nav className="nav flex-column">
            <Link href="/" className={`nav-link ${isActive('/')}`}>
                <i className="fas fa-home"></i> Dashboard
            </Link>
            <Link href="/profil" className={`nav-link ${isActive('/profil')}`}>
                <i className="fas fa-user"></i> Profil
            </Link>
            <Link href="/agenda" className={`nav-link ${isActive('/agenda')}`}>
                <i className="fas fa-calendar-alt"></i> Agenda
            </Link>
            <Link href="/kehadiran" className={`nav-link ${isActive('/kehadiran')}`}>
                <i className="fas fa-user-clock"></i> Kehadiran
            </Link>
            <Link href="/lembur" className={`nav-link ${isActive('/lembur')}`}>
                <i className="fas fa-clock"></i> Lembur
            </Link>
            <Link href="/cuti" className={`nav-link ${isActive('/cuti')}`}>
                <i className="fas fa-plane-departure"></i> Cuti
            </Link>
            <Link href="/izin" className={`nav-link ${isActive('/izin')}`}>
                <i className="fas fa-envelope-open-text"></i> Izin
            </Link>
        </nav>
    </div>
  );
}
