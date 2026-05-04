"use client";

import React from 'react';

export default function HasilMCUView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Hasil MCU</h3>
            </div>

            {/* Filter Section */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                    <div className="row g-2 align-items-end" style={{ fontSize: '0.85rem' }}>
                         <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Karyawan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Vendor</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                    <option>Vendor A</option>
                                    <option>Vendor B</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tahun</label>
                             <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                    <option>2025</option>
                                    <option>2024</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tanggal Upload</label>
                             <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                             <button className="btn btn-sm btn-light border-0 border-secondary shadow-sm rounded-pill px-0 w-100 fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
                                Filter <i className="fas fa-filter ms-1 small"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

             {/* Hasil MCU Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold ps-4" style={{ width: '50px' }}>NO</th>
                                    <th className="py-3 border-end fw-bold text-bold">TANGGAL UPLOAD</th>
                                    <th className="py-3 border-end fw-bold text-bold">TANGGAL MCU</th>
                                    <th className="py-3 border-end fw-bold text-bold">VENDOR</th>
                                    <th className="py-3 border-end fw-bold text-bold">KARYAWAN</th>
                                    <th className="py-3 border-end fw-bold text-bold">NO REG</th>
                                    <th className="py-3 fw-bold text-bold text-center" style={{ width: '100px' }}>AKSI</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {[
                                    { no: 1, tglUpload: '10-12-2024', tglMCU: '01-12-2024', vendor: 'Bio Medika', karyawan: '7258 - NURMUHAROM', noReg: 'REG-001' },
                                    { no: 2, tglUpload: '15-11-2024', tglMCU: '05-11-2024', vendor: 'Prodia', karyawan: '7258 - NURMUHAROM', noReg: 'REG-002' },
                                    { no: 3, tglUpload: '20-10-2023', tglMCU: '10-10-2023', vendor: 'Pramita', karyawan: '7258 - NURMUHAROM', noReg: 'REG-003' },
                                    { no: 4, tglUpload: '05-09-2023', tglMCU: '01-09-2023', vendor: 'Bio Medika', karyawan: '7258 - NURMUHAROM', noReg: 'REG-004' },
                                    { no: 5, tglUpload: '12-08-2022', tglMCU: '10-08-2022', vendor: 'Prodia', karyawan: '7258 - NURMUHAROM', noReg: 'REG-005' },
                                    { no: 6, tglUpload: '25-07-2022', tglMCU: '20-07-2022', vendor: 'Pramita', karyawan: '7258 - NURMUHAROM', noReg: 'REG-006' },
                                    { no: 7, tglUpload: '30-06-2021', tglMCU: '15-06-2021', vendor: 'Bio Medika', karyawan: '7258 - NURMUHAROM', noReg: 'REG-007' },
                                    { no: 8, tglUpload: '18-05-2021', tglMCU: '10-05-2021', vendor: 'Prodia', karyawan: '7258 - NURMUHAROM', noReg: 'REG-008' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end ps-4">{row.no}</td>
                                        <td className="py-4 border-end">{row.tglUpload}</td>
                                        <td className="py-4 border-end">{row.tglMCU}</td>
                                        <td className="py-4 border-end">{row.vendor}</td>
                                        <td className="py-4 border-end">{row.karyawan}</td>
                                        <td className="py-4 border-end">{row.noReg}</td>
                                        <td className="py-4 text-center">
                                            <button className="btn btn-sm btn-success shadow-sm px-3 rounded-pill" style={{ fontSize: '0.8rem' }}>
                                                Detail
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {/* Empty State Row Example (Hidden if data exists) */}
                                {/* 
                                <tr>
                                    <td colSpan={7} className="py-4 text-center text-muted">Tidak ditemukan data yang sesuai</td>
                                </tr> 
                                */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
