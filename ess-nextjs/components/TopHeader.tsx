"use client";

import { useState } from 'react';

export default function TopHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showGridMenu, setShowGridMenu] = useState(false);
  const [role, setRole] = useState('Pengguna'); // Default role

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm top-header">
            <div className="container-fluid">
                {/* Apps Grid Trigger */}
                <div 
                    className="grid-menu-btn me-auto" 
                    id="gridMenuBtn"
                    onClick={() => setShowGridMenu(!showGridMenu)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                
                <div className="d-flex align-items-center gap-4">
                    
                    <div className="position-relative">
                        <div 
                            className="notification-badge text-muted" 
                            id="notificationBtn"
                            onClick={() => setShowNotifications(!showNotifications)}
                        >
                            <i className="fas fa-bell fa-lg"></i>
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
                        </div>
                        
                        {/* Custom Notification Popup */}
                        <div className={`notification-popup ${showNotifications ? 'show' : ''}`} id="notificationPopup">
                            <div className="d-flex align-items-center gap-3">
                                <h6 className="mb-0 fw-bold">Anda mendapatkan email. <span className="fw-normal"
                                    style={{ color: 'red' }}>Cek sekarang!</span></h6>
                            </div>
                        </div>
                    </div>

                    <div className="user-info">
                        <img src="/assets/img/fotoorang.jpg" alt="User" />
                        <div className="d-none d-md-block">
                            <h6 className="mb-0 fw-bold">Abi Smith</h6>
                            {/* REPLACED EMAIL WITH ROLE SELECTOR */}
                            <select 
                                className="form-select form-select-sm text-muted border-0 p-0 shadow-none bg-transparent" 
                                style={{ fontSize: '0.85em', cursor: 'pointer' }}
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="Pengguna">Pengguna</option>
                                <option value="Super Admin">Super Admin</option>
                            </select>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <a href="#" className="btn btn-link text-danger p-0 ms-2" title="Logout">
                        <i className="fas fa-sign-out-alt fa-lg"></i>
                    </a>
                </div>
            </div>
      </nav>

      {/* Apps Grid Overlay - Rendered conditionally handled by parent or here? 
          Better here to keep logic self-contained or use a Portal.  
          For simplicity, rendering it here but fixed position handles layout. 
      */}
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
       {/* Overlay Click Handler could be added to close when clicking outside */}
       {(showGridMenu || showNotifications) && (
        <div 
            style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 900}} 
            onClick={() => { setShowGridMenu(false); setShowNotifications(false); }}
        />
       )}
    </>
  );
}
