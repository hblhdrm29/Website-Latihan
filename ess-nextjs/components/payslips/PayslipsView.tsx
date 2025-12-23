"use client";

import React from 'react';

export default function PayslipsView() {
    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                    <h2 className="fw-bold mb-1" style={{ color: '#20288E' }}>Slip Gaji Saya</h2>
                    <p className="text-muted mb-0">Lihat rincian pendapatan dan pajak Anda.</p>
                </div>
                <div className="d-flex gap-2">
                    <select className="form-select border-0 shadow-sm" style={{ width: '130px' }} defaultValue="Oktober">
                        <option>Oktober</option>
                        <option>Oktober</option>
                        <option>September</option>
                        <option>Agustus</option>
                    </select>
                    <select className="form-select border-0 shadow-sm" style={{ width: '100px' }} defaultValue="2025">
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                    </select>
                    <button className="btn btn-primary d-flex align-items-center gap-2 shadow-sm" style={{ backgroundColor: '#20288E' }}>
                        <i className="fas fa-download"></i>
                    </button>
                    <button className="btn btn-light shadow-sm text-muted">
                        <i className="fas fa-print"></i>
                    </button>
                </div>
            </div>

            <div className="row g-4">
                {/* Main Content */}
                <div className="col-lg-8">
                    {/* Net Pay Card */}
                    <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden position-relative">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="text-secondary fw-bold text-uppercase mb-2" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Gaji Bersih</div>
                                    <div className="d-flex align-items-center gap-3">
                                        <h1 className="fw-bold mb-0 display-3" style={{ color: '#20288E', letterSpacing: '-1px' }}>Rp 12.500.000</h1>
                                    </div>
                                    <p className="text-secondary mt-3 mb-0" style={{ fontSize: '0.85rem' }}>
                                        Dibayarkan pada <span className="fw-bold" style={{ color: '#1a1f36' }}>28 Okt 2025</span> via Bank MANDIRI **** 1234
                                    </p>
                                </div>
                                <div className="bg-success bg-opacity-10 text-success px-4 py-2 rounded-pill d-flex align-items-center gap-2 fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                                    <i className="fas fa-check-circle"></i> LUNAS
                                </div>
                            </div>
                            
                            <div className="row mt-4 pt-4 border-top">
                                <div className="col-4">
                                    <div className="text-muted small">Total Penghasilan</div>
                                    <div className="fw-bold fs-5 text-dark">Rp 15.800.000</div>
                                </div>
                                <div className="col-4">
                                    <div className="text-muted small">Total Potongan</div>
                                    <div className="fw-bold fs-5 text-danger">-Rp 3.300.000</div>
                                </div>
                                <div className="col-4">
                                    <div className="text-muted small">Total Hari Kerja</div>
                                    <div className="fw-bold fs-5 text-dark">22 Hari</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="row g-4">
                        {/* Earnings */}
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 h-100">
                                <div className="card-header bg-transparent border-0 pt-3 px-3 pb-0 d-flex justify-content-between align-items-center">
                                    <h5 className="fw-bold mb-0">Pendapatan</h5>
                                    <i className="fas fa-arrow-up text-success bg-success bg-opacity-10 p-2 rounded-circle"></i>
                                </div>
                                <div className="card-body p-3">
                                    <div className="d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">Gaji Pokok</span>
                                            <span className="fw-bold text-success">Rp 8.000.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">Tunjangan Jabatan</span>
                                            <span className="fw-bold text-success">Rp 4.500.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">Uang Transportasi</span>
                                            <span className="fw-bold text-success">Rp 2.000.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">Tunjangan Paket Data</span>
                                            <span className="fw-bold text-success">Rp 300.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <span className="fw-bold text-dark">Total Pendapatan</span>
                                            <span className="fw-bold text-success">Rp 15.800.000</span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <small className="text-muted fst-italic" style={{ fontSize: '0.65rem' }}>Keterangan : (*) Merupakan tunjangan tidak tetap</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Deductions */}
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 h-100">
                                <div className="card-header bg-transparent border-0 pt-3 px-3 pb-0 d-flex justify-content-between align-items-center">
                                    <h5 className="fw-bold mb-0">Potongan</h5>
                                    <i className="fas fa-arrow-down text-danger bg-danger bg-opacity-10 p-2 rounded-circle"></i>
                                </div>
                                <div className="card-body p-3">
                                     <div className="d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">BPJS Kesehatan</span>
                                            <span className="fw-bold text-danger">-Rp 150.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">BPJS Ketenagakerjaan</span>
                                            <span className="fw-bold text-danger">-Rp 250.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">DPLK BNI Simphony</span>
                                            <span className="fw-bold text-danger">-Rp 500.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">Kesehatan Purnabakti</span>
                                            <span className="fw-bold text-danger">-Rp 100.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">Tunj Transport WFH</span>
                                            <span className="fw-bold text-danger">-Rp 2.300.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <span className="fw-bold text-dark">Total Potongan</span>
                                            <span className="fw-bold text-danger">-Rp 3.300.000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Contributions (Bantuan Perusahaan) */}
                        <div className="col-8">
                            <div className="card border-0 shadow-sm rounded-4 h-100">
                                <div className="card-header bg-transparent border-0 pt-3 px-3 pb-0 d-flex justify-content-between align-items-center">
                                    <h5 className="fw-bold mb-0">Bantuan Perusahaan</h5>
                                    <i className="fas fa-hands-helping text-info bg-info bg-opacity-10 p-2 rounded-circle"></i>
                                </div>
                                <div className="card-body p-3">
                                    <div className="d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">BPJS Kesehatan</span>
                                            <span className="fw-bold text-info">Rp 320.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">BPJS Ketenagakerjaan</span>
                                            <span className="fw-bold text-info">Rp 190.200</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">Bantuan DPLK</span>
                                            <span className="fw-bold text-info">Rp 240.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 border-dashed">
                                            <span className="text-muted">Bantuan Pajak</span>
                                            <span className="fw-bold text-info">Rp 296.000</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <span className="fw-bold text-dark">Total Bantuan</span>
                                            <span className="fw-bold text-info">Rp 819.200</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Right */}
                <div className="col-lg-4">
                    {/* Total Tahunan Card */}
                    <div className="card border-0 shadow-sm rounded-4 mb-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #20288E 0%, #4a56e2 100%)' }}>
                        <div className="card-body p-4">
                            <h5 className="fw-bold mb-1">Total Tahunan</h5>
                            <p className="opacity-75 mb-4 small">Jan 2024 - Des 2025</p>
                            
                            <div className="mb-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="small opacity-75">Pendapatan Bersih</span>
                                    <span className="fw-bold">Rp 125.500.000</span>
                                </div>
                                <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                                    <div className="progress-bar bg-white" role="progressbar" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="small opacity-75">Pajak Terbayar</span>
                                    <span className="fw-bold">Rp 12.300.000</span>
                                </div>
                                <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* History List */}
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-header bg-transparent border-0 pt-3 px-3 pb-0">
                            <h5 className="fw-bold mb-0">Riwayat</h5>
                        </div>
                        <div className="card-body p-3">
                            <div className="d-flex flex-column gap-3">
                                {[
                                    { month: 'September 2025', date: 'Dibayar 28 Sep' },
                                    { month: 'Agustus 2025', date: 'Dibayar 28 Agu' },
                                    { month: 'Juli 2025', date: 'Dibayar 28 Jul' },
                                    { month: 'Juni 2025', date: 'Dibayar 28 Jun' }
                                ].map((item, idx) => (
                                    <div key={idx} className="d-flex align-items-center gap-3 p-2 rounded-3 hover-bg-light transition-all cursor-pointer">
                                        <div className="bg-light text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '38px', height: '38px' }}>
                                            <i className="fas fa-file-invoice-dollar" style={{ fontSize: '1rem' }}></i>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>{item.month}</div>
                                            <div className="text-muted" style={{ fontSize: '0.75rem' }}>{item.date}</div>
                                        </div>
                                        <div className="text-end">
                                            <i className="fas fa-chevron-right text-muted" style={{ fontSize: '0.75rem' }}></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-link w-100 text-decoration-none fw-bold mt-3">Lihat Semua Riwayat</button>
                        </div>
                    </div>
                </div>
            </div>
            
             <style jsx>{`
                .border-dashed {
                    border-bottom-style: dashed !important;
                }
                .hover-bg-light:hover {
                    background-color: #f8f9fa;
                }
            `}</style>
        </div>
    );
}