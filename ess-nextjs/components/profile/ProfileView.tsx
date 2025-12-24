"use client";

import React, { useState } from 'react';

export default function ProfileView({ onBack }: { onBack: () => void }) {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="container-fluid p-0">
            {/* Header */}
            <div className="px-3 mb-2 d-flex align-items-center gap-3">
                <div className="d-flex align-items-center gap-3 flex-shrink-0">
                    <div>
                        <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Profile</h2>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="px-3 mb-4">
                <ul className="nav nav-tabs border-bottom mb-3" style={{ fontSize: '0.85rem' }}>
                    <li className="nav-item">
                        <button 
                            className={`nav-link py-2 px-3 ${activeTab === 'profile' ? 'active fw-bold border-bottom-primary' : 'text-muted'}`}
                            onClick={() => setActiveTab('profile')}
                            style={activeTab === 'profile' ? { color: '#20288E', borderBottom: '2px solid #20288E' } : {}}
                        >
                            <i className="fas fa-user me-2"></i> Profile
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className={`nav-link py-2 px-3 ${activeTab === 'skep' ? 'active fw-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('skep')}
                            style={activeTab === 'skep' ? { color: '#20288E', borderBottom: '2px solid #20288E' } : {}}
                        >
                            <i className="far fa-newspaper me-2"></i> SKEP
                        </button>
                    </li>
                    <li className="nav-item">
                        <button 
                            className={`nav-link py-2 px-3 ${activeTab === 'pajak' ? 'active fw-bold' : 'text-muted'}`}
                            onClick={() => setActiveTab('pajak')}
                            style={activeTab === 'pajak' ? { color: '#20288E', borderBottom: '2px solid #20288E' } : {}}
                        >
                            <i className="fas fa-tags me-2"></i> Pajak
                        </button>
                    </li>
                </ul>
            </div>

            <div className="px-3 pb-5">
                {/* PROFILE TAB CONTENT */}
                {activeTab === 'profile' && (
                    <div className="row g-4 animate__animated animate__fadeIn">
                        {/* Profile Summary Card */}
                        <div className="col-12">
                            <div className="card shadow-sm border border-secondary border-opacity-10 rounded-4" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-body p-4">
                                    <div className="row align-items-center g-4">
                                        <div className="col-auto">
                                            <div className="rounded-circle bg-white shadow-sm d-flex align-items-center justify-content-center border border-secondary border-opacity-10" 
                                                 style={{ width: '80px', height: '80px' }}>
                                                <i className="fas fa-user fa-2x text-secondary opacity-75"></i>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h4 className="fw-bold mb-1 text-dark">Abi John Smith</h4>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <span className="text-muted small">7825</span>
                                                <span className="text-secondary small">•</span>
                                                <span className="text-muted small">Junior Programmer</span>
                                            </div>
                                            <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-10 px-3 rounded-pill">Aktif</span>
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-primary rounded-pill px-4 shadow-sm fw-medium" style={{ backgroundColor: '#20288E', fontSize: '0.9rem' }}>
                                                Edit Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Information Cards */}
                        <div className="col-md-6">
                            <div className="card shadow-sm border border-secondary border-opacity-10 rounded-4 h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-body p-4">
                                    <h5 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.1rem' }}>Data Pribadi</h5>
                                    
                                    <div className="d-flex flex-column gap-3">
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Nama Lengkap</div>
                                            <div className="col-sm-7 fw-medium text-dark">Abi John Smith</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">NIK</div>
                                            <div className="col-sm-7 fw-medium text-dark">7825</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Tempat Lahir</div>
                                            <div className="col-sm-7 fw-medium text-dark">Sidoarjo</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Tanggal Lahir</div>
                                            <div className="col-sm-7 fw-medium text-dark">16 Agustus 2002</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">No. Telepon</div>
                                            <div className="col-sm-7 fw-medium text-dark">+62 883 550 487</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Masa Pra Pensiun (MPP)</div>
                                            <div className="col-sm-7 fw-medium text-dark">1 Agustus 2030</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Tanggal Rencana Pensiun</div>
                                            <div className="col-sm-7 fw-medium text-dark">1 September 2030</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card shadow-sm border border-secondary border-opacity-10 rounded-4 h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="card-body p-4">
                                    <h5 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.1rem' }}>Data Kepegawaian</h5>
                                    
                                    <div className="d-flex flex-column gap-3">
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Unit Kerja</div>
                                            <div className="col-sm-7 fw-medium text-dark">Seksi Pengembangan Aplikasi Internal</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Departemen</div>
                                            <div className="col-sm-7 fw-medium text-dark">Departemen Pengembangan Teknologi Informasi</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Divisi</div>
                                            <div className="col-sm-7 fw-medium text-dark">Teknlogi Informasi</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Direktorat</div>
                                            <div className="col-sm-7 fw-medium text-dark">SDM & Teknologi Informasi</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Kode Unit</div>
                                            <div className="col-sm-7 fw-medium text-dark">45610</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Jabatan</div>
                                            <div className="col-sm-7 fw-medium text-dark">Junior Programmer</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Grade</div>
                                            <div className="col-sm-7 fw-medium text-dark">9</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Pangkat</div>
                                            <div className="col-sm-7 fw-medium text-dark">Staff - 3</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Tanggal Bergabung</div>
                                            <div className="col-sm-7 fw-medium text-dark">1 Juni 2025</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-5 text-muted small">Masa Kerja</div>
                                            <div className="col-sm-7 fw-medium text-dark">5 Tahun 2 Bulan</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SKEP TAB CONTENT */}
                {activeTab === 'skep' && (
                    <div className="card shadow-sm border-0 animate__animated animate__fadeIn">
                        <div className="card-body p-5 text-center">
                            <div className="mb-3 text-muted opacity-50">
                                <i className="far fa-newspaper fa-4x"></i>
                            </div>
                            <h5 className="fw-bold text-dark">Data SKEP</h5>
                            <p className="text-muted">Belum ada data Surat Keputusan (SKEP) yang tersedia.</p>
                            <button className="btn btn-outline-primary rounded-pill px-4">Refresh Data</button>
                        </div>
                    </div>
                )}

                {/* PAJAK TAB CONTENT */}
                {activeTab === 'pajak' && (
                    <div className="card shadow-sm border-0 animate__animated animate__fadeIn">
                        <div className="card-body p-5 text-center">
                             <div className="mb-3 text-muted opacity-50">
                                <i className="fas fa-tags fa-4x"></i>
                            </div>
                            <h5 className="fw-bold text-dark">Data Pajak</h5>
                             <p className="text-muted">Informasi perpajakan tidak tersedia saat ini.</p>
                             <button className="btn btn-outline-primary rounded-pill px-4">Lihat SPT</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
