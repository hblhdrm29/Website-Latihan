"use client";

import React from 'react';

export default function ProfileView({ onBack }: { onBack: () => void }) {
    return (
        <div className="container-fluid p-0">
            {/* Header */}
            <div className="px-4 pt-1 pb-3 d-flex align-items-center gap-3">
                <button 
                    onClick={onBack}
                    className="btn btn-light border rounded-circle"
                    style={{ width: '40px', height: '40px' }}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>
                <div>
                    <h3 className="fw-bold mb-0">Profil Karyawan</h3>
                </div>
            </div>

            <div className="px-4 pb-5">
                <div className="row g-4">
                    
                    {/* Profile Summary Card */}
                    <div className="col-12">
                        <div className="card shadow-sm border-0 rounded-4" style={{ backgroundColor: '#f8f9fa' }}>
                            <div className="card-body p-4">
                                <div className="row align-items-center g-4">
                                    <div className="col-auto">
                                        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" 
                                             style={{ width: '90px', height: '90px' }}>
                                            <i className="fas fa-user fa-2x text-muted opacity-50"></i>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h4 className="fw-bold mb-1">Abi John Smith</h4>
                                        <p className="text-muted mb-2">7825 • Junior Programmer</p>
                                        <span className="badge bg-success px-3 py-1">Aktif</span>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary">Edit Profil</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Information Cards */}
                    <div className="col-md-6">
                        <div className="card shadow-sm border-0 rounded-4 h-100" style={{ backgroundColor: '#f8f9fa' }}>
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-4">Data Pribadi</h5>
                                
                                <table className="table table-borderless mb-0" style={{ backgroundColor: 'transparent', '--bs-table-bg': 'transparent' } as React.CSSProperties}>
                                    <tbody className="bg-transparent">
                                        <tr>
                                            <td className="text-muted ps-0" style={{ width: '40%' }}>Nama Lengkap</td>
                                            <td className="fw-semibold">Abi John Smith</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">NIK</td>
                                            <td className="fw-semibold">7825</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Tempat Lahir</td>
                                            <td className="fw-semibold">Sidoarjo</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Tanggal Lahir</td>
                                            <td className="fw-semibold">16 Agustus 2002</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">No. Telepon</td>
                                            <td className="fw-semibold">+62 883 550 487</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Masa Pra Pensiun (MPP)</td>
                                            <td className="fw-semibold">1 Agustus 2030</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Tanggal Rencana Pensiun</td>
                                            <td className="fw-semibold">1 September 2030</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card shadow-sm border-0 rounded-4 h-100" style={{ backgroundColor: '#f8f9fa' }}>
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-4">Data Kepegawaian</h5>
                                
                                <table className="table table-borderless mb-0" style={{ backgroundColor: 'transparent', '--bs-table-bg': 'transparent' } as React.CSSProperties}>
                                    <tbody className="bg-transparent">
                                        <tr>
                                            <td className="text-muted ps-0" style={{ width: '40%' }}>Unit Kerja</td>
                                            <td className="fw-semibold">Seksi Pengembangan Aplikasi Internal</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Kode Unit</td>
                                            <td className="fw-semibold">45610</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Jabatan</td>
                                            <td className="fw-semibold">Junior Programmer</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Grade</td>
                                            <td className="fw-semibold">9</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Pangkat</td>
                                            <td className="fw-semibold">Staff - 3</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Tanggal Bergabung</td>
                                            <td className="fw-semibold">1 Juni 2025</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted ps-0">Masa Kerja</td>
                                            <td className="fw-semibold">5 Tahun 2 Bulan</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
