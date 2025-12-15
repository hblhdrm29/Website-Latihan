"use client";

import { useState } from 'react';

export default function ApprovalWidget() {
    const [activeTab, setActiveTab] = useState<'waiting' | 'rejected' | null>(null);
    const [filter, setFilter] = useState<'current' | 'all'>('current');

    const toggleTab = (tab: 'waiting' | 'rejected') => {
        if (activeTab === tab) {
            setActiveTab(null);
        } else {
            setActiveTab(tab);
        }
    };

    return (
        <div className="card border-0 shadow-sm rounded-4 p-2 h-40" style={{ backgroundColor: '#f8f9fa' }}>
            {/* Main Tabs */}
            <div className="d-flex flex-column gap-2 mb-2">
                <button 
                    className={`btn border-0 text-start d-flex align-items-center justify-content-between p-2 rounded-3 transition-all hover-card-blue ${activeTab === 'waiting' ? 'bg-primary text-white shadow-sm' : 'bg-white text-secondary shadow-sm'}`}
                    onClick={() => toggleTab('waiting')}
                    style={{ transition: 'all 0.3s ease' }}
                >
                    <div className="d-flex align-items-center gap-2">
                        <i className={`fas fa-bell ${activeTab === 'waiting' ? '' : 'text-primary'}`}></i>
                        <span className="fw-semibold">Menunggu Persetujuan Anda</span>
                    </div>
                </button>
                
                <button 
                    className={`btn border-0 text-start d-flex align-items-center justify-content-between p-2 rounded-3 transition-all hover-card-red ${activeTab === 'rejected' ? 'bg-danger text-white shadow-sm' : 'bg-white text-secondary shadow-sm'}`}
                    onClick={() => toggleTab('rejected')}
                    style={{ transition: 'all 0.3s ease' }}
                >
                    <div className="d-flex align-items-center gap-2">
                        <i className={`fas fa-bell-slash ${activeTab === 'rejected' ? '' : 'text-danger'}`}></i>
                        <span className="fw-semibold">Persetujuan Ditolak</span>
                    </div>
                </button>
            </div>

            {/* Content Area - Only shown when a tab is active */}
            {activeTab && (
                <div className="bg-white rounded-4 p-2 shadow-sm border h-100 animate__animated animate__fadeIn">
                    
                    {/* Sub-Filters for 'waiting' tab */}
                    {activeTab === 'waiting' && (
                        <div className="d-flex gap-2 mb-4">
                            <button 
                                className={`btn btn-sm flex-fill rounded-pill fw-semibold ${filter === 'current' ? 'btn-primary' : 'btn-outline-secondary border-0 bg-light text-secondary'}`}
                                onClick={() => setFilter('current')}
                            >
                                Bulan Aktif
                            </button>
                            <button 
                                className={`btn btn-sm flex-fill rounded-pill fw-semibold ${filter === 'all' ? 'btn-primary' : 'btn-outline-secondary border-0 bg-light text-secondary'}`}
                                onClick={() => setFilter('all')}
                            >
                                Semuanya
                            </button>
                        </div>
                    )}

                     {/* Sub-Filters for 'rejected' tab */}
                     {activeTab === 'rejected' && (
                         <div className="mb-4">
                             <h6 className="fw-bold text-danger mb-0">Daftar Penolakan</h6>
                         </div>
                     )}

                    {/* Empty State / List */}
                    <div className="d-flex flex-column align-items-center justify-content-center text-center py-5 h-100">
                        <div className="bg-light rounded-circle p-3 mb-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                            <i className={`fas ${activeTab === 'waiting' ? 'fa-clipboard-check text-primary' : 'fa-times-circle text-danger'}`} style={{ fontSize: '1.5rem' }}></i>
                        </div>
                        <h6 className="text-dark fw-bold mb-1">Tidak Ada Notifikasi</h6>
                        <p className="text-secondary small mb-0">
                            {activeTab === 'waiting' ? 'Semua pengajuan telah disetujui.' : 'Tidak ada pengajuan yang ditolak.'}
                        </p>
                    </div>

                </div>
            )}
        </div>
    );
}
