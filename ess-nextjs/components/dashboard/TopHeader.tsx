"use client";

import { useState } from 'react';

export default function TopHeader() {
  const [showRoleMenu, setShowRoleMenu] = useState(false);
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
                <a href="#" className="btn btn-link text-danger p-0 ms-2" title="Logout">
                    <i className="fas fa-sign-out-alt"></i>
                </a>
            </div>
      </nav>

        {/* Overlay Click Handler */}
        {showRoleMenu && (
            <div 
                style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 900}} 
                onClick={() => setShowRoleMenu(false)}
            />
        )}
    </>
  );
}
