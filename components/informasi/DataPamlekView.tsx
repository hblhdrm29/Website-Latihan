"use client";

import React from 'react';

export default function DataPamlekView() {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Data Pamlek</h3>
            </div>
            
            {/* Filter Section */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                    <div className="row g-2 align-items-end" style={{ fontSize: '0.85rem' }}>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Nama</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>NP</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tanggal</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Bulan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tahun</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                         <div className="col-md-2">
                            <button suppressHydrationWarning className="btn btn-sm btn-light border-0 border-secondary shadow-sm rounded-pill px-0 w-100 fw-bold text-secondary" style={{ fontSize: '0.8rem' }}>
                                Filter <i className="fas fa-filter ms-1 small"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
             {/* Data Pamlek Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '60px'}}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">Jenis</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tipe</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nomor Mesin Pamlek</th>
                                    <th className="py-3 border-end fw-bold text-bold">Date</th>
                                    <th className="py-3 fw-bold text-bold">Waktu</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, jenis: 'Kehadiran', tipe: 'Masuk', mesin: 'F004', date: '3 November 2025', waktu: '08:38:07' },
                                    { no: 2, jenis: 'Kehadiran', tipe: 'Keluar', mesin: 'F004', date: '3 November 2025', waktu: '17:53:27' },
                                    { no: 3, jenis: 'Kehadiran', tipe: 'Masuk', mesin: 'F004', date: '4 November 2025', waktu: '07:42:49' },
                                    { no: 4, jenis: 'Kehadiran', tipe: 'Keluar', mesin: 'F004', date: '4 November 2025', waktu: '17:37:39' },
                                    { no: 5, jenis: 'Kehadiran', tipe: 'Masuk', mesin: 'F004', date: '6 November 2025', waktu: '07:38:46' },
                                    { no: 6, jenis: 'Kehadiran', tipe: 'Masuk', mesin: 'F004', date: '6 November 2025', waktu: '07:38:47' },
                                    { no: 7, jenis: 'Kehadiran', tipe: 'Keluar', mesin: 'F004', date: '6 November 2025', waktu: '17:11:48' },
                                    { no: 8, jenis: 'Kehadiran', tipe: 'Keluar', mesin: 'F004', date: '7 November 2025', waktu: '18:27:47' },
                                    { no: 9, jenis: 'Kehadiran', tipe: 'Masuk', mesin: 'F004', date: '10 November 2025', waktu: '07:32:33' },
                                    { no: 10, jenis: 'Kehadiran', tipe: 'Keluar', mesin: 'F004', date: '10 November 2025', waktu: '18:04:47' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end">{row.jenis}</td>
                                        <td className="py-3 border-end fw-bold">{row.tipe}</td>
                                        <td className="py-3 border-end">{row.mesin}</td>
                                        <td className="py-3 border-end">{row.date}</td>
                                        <td className="py-3">{row.waktu}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
