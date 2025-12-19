"use client";

import { useState } from 'react';

export default function TopHeader() {
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [role, setRole] = useState('Pengguna');
  const [searchText, setSearchText] = useState('');

  const clearSearch = () => setSearchText('');

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light top-header">
            <div className="container-fluid">
                {/* Apps Grid Trigger */}
                <div className="d-flex align-items-center gap-3 me-auto">
                    <div className="search-bar d-none d-lg-flex position-relative align-items-center" style={{ height: '35px', width: '280px' }}>
                        <i className="fas fa-search text-muted ps-0 opacity-50"></i>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="form-control border-0 bg-transparent shadow-none small text-muted" 
                            style={{ fontSize: '0.85rem' }} 
                            suppressHydrationWarning 
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        {searchText && (
                            <i 
                                className="fas fa-times text-muted cursor-pointer hover-text-danger opacity-75"
                                onClick={clearSearch}
                                style={{ cursor: 'pointer', fontSize: '0.9rem' }}
                            ></i>
                        )}
                    </div>
                </div>
                
                <div className="d-flex align-items-center gap-4">
                    
                    {/* User Info & Role */}
                    <div className="user-info">
                        <div className="d-flex align-items-center gap-2">
                            <div className="d-none d-md-flex flex-column align-items-center">
                                <h6 className="mb-1 fw-bold text-dark" style={{ fontSize: '0.65rem', lineHeight: '1.2' }}>7825 - ABI SMITH</h6>
                                <div className="text-center border rounded-pill px-2 py-1 bg-white shadow-sm" style={{ width: '140px' }}>
                                    {/* @ts-ignore */}
                                    <marquee scrollamount="3" style={{ width: '100%', fontSize: '0.6rem', lineHeight: '1.2', color: '#6c757d', display: 'block' }}>
                                        45B00 - Departemen Pengembangan Teknologi Informasi
                                    </marquee>
                                </div>
                            </div>
                            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/img/fotoorang.jpg`} alt="User" style={{ width: '38px', height: '38px' }} className="rounded-circle" />
                        </div>
                        
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
                <a 
                    href="#" 
                    className="btn btn-link text-danger p-0 ms-2" 
                    title="Logout"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowLogoutModal(true);
                    }}
                >
                    <i className="fas fa-sign-out-alt"></i>
                </a>
            </div>
      </nav>

        {/* Overlay Click Handler for Role Menu */}
        {showRoleMenu && (
            <div 
                style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 900}} 
                onClick={() => setShowRoleMenu(false)}
            />
        )}

        {/* Logout Modal */}
        {showLogoutModal && (
            <>
                <div 
                    className="modal-backdrop show" 
                    style={{ backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', zIndex: 1050, opacity: 1 }}
                    onClick={() => setShowLogoutModal(false)}
                ></div>
                <div className="modal d-block" tabIndex={-1} style={{ zIndex: 1055 }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 rounded-4 p-4 text-center" style={{ maxWidth: '500px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
                            <div className="modal-body p-2">
                                <h3 className="fw-bold mb-4" style={{ color: '#000' }}>
                                    Are you sure you<br />want to log out?
                                </h3>
                                <p className="text-secondary mb-1 fs-5">
                                    Log out of Employee Self Service as
                                </p>
                                <p className="text-secondary fw-bold fs-5 mb-5">
                                    Abismith19@gmail.com
                                </p>
                                
                                <div className="d-flex justify-content-center gap-4">
                                    <button 
                                        type="button" 
                                        className="btn btn-dark rounded-3 px-4 py-2 fs-5 fw-bold"
                                        style={{ minWidth: '140px' }}
                                        onClick={() => setShowLogoutModal(false)}
                                    >
                                        Log out
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-light border border-secondary rounded-3 px-4 py-2 fs-5 fw-bold"
                                        style={{ minWidth: '140px', backgroundColor: '#fff' }}
                                        onClick={() => setShowLogoutModal(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
    </>
  );
}
