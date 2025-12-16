"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function TopHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [role, setRole] = useState('Pengguna'); 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light top-header">
            <div className="container-fluid">
                {/* Apps Grid Trigger */}
                <div className="d-flex align-items-center gap-3 me-auto">
                    <div className="search-bar d-none d-lg-flex" style={{ height: '30px', width: '250px' }}>
                        <i className="fas fa-search text-muted ps-0"></i>
                        <input type="text" placeholder="Search..." className="form-control border-0 bg-transparent shadow-none small" style={{ fontSize: '0.9rem' }} suppressHydrationWarning />
                    </div>
                </div>
                
                <div className="d-flex align-items-center gap-4">
                    
                    <div className="position-relative">
                        <div 
                            className="notification-badge text-muted" 
                            id="notificationBtn"
                            onClick={() => setShowNotifications(!showNotifications)}
                        >
                            <i className="fas fa-bell"></i>
                            <span className="position-absolute start-100 translate-middle p-1 bg-danger border border-light rounded-circle" style={{ padding: '0.15rem !important', top: '7px' }}></span>
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
                        <Link href="/profile" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/img/fotoorang.jpg`} alt="User" />
                            <div className="d-none d-md-block">
                                <h6 className="mb-0 fw-bold" style={{ fontSize: '0.85rem' }}>Abi Smith</h6>
                            </div>
                        </Link>
                        
                        <div className="position-relative">
                            <div 
                                className="d-flex align-items-center justify-content-between gap-1 cursor-pointer border rounded px-2" 
                                style={{ cursor: 'pointer', minWidth: '120px' }}
                                onClick={() => setShowRoleMenu(!showRoleMenu)}
                            >
                                <span className="text-muted small text-truncate" style={{ fontSize: '0.85em' }}>{role}</span>
                                <i className="fas fa-chevron-down text-muted" style={{ fontSize: '0.7em' }}></i>
                            </div>

                            {/* Custom Role Menu */}
                            {showRoleMenu && (
                                <div className="position-absolute bg-white shadow-sm rounded py-1" style={{ top: '100%', left: 0, minWidth: '120px', zIndex: 1001 }}>
                                    <div 
                                        className="dropdown-item" 
                                        style={{ fontSize: '0.85em', cursor: 'pointer' }}
                                        onClick={() => { setRole('Pengguna'); setShowRoleMenu(false); }}
                                    >
                                        Pengguna
                                    </div>
                                    <div 
                                        className="dropdown-item"
                                        style={{ fontSize: '0.85em', cursor: 'pointer' }}
                                        onClick={() => { setRole('Super Admin'); setShowRoleMenu(false); }}
                                    >
                                        Super Admin
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Logout Button */}
                <a href="#" className="btn btn-link text-danger p-0 ms-2" title="Logout">
                    <i className="fas fa-sign-out-alt"></i>
                </a>
            </div>
      </nav>

        {/* Overlay Click Handler */}
        {(showNotifications || showRoleMenu) && (
            <div 
                style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 900}} 
                onClick={() => { setShowNotifications(false); setShowRoleMenu(false); }}
            />
        )}
    </>
  );
}
