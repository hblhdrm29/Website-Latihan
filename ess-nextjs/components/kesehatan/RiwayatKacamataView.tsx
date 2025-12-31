"use client";

import React from 'react';

export default function RiwayatKacamataView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Riwayat Kacamata</h3>
            </div>

            {/* Filter Section */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                     <div className="row g-2 align-items-end justify-content-between" style={{ fontSize: '0.85rem' }}>
                         <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Karyawan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                    <option>7258 - NURMUHAROM</option>
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
                                    <option>2023</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tipe</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                    <option>Kacamata</option>
                                    <option>Lensa</option>
                                    <option>Frame</option>
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

             {/* Riwayat Kacamata Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold ps-4" style={{ width: '50px' }}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP Karyawan</th>
                                    <th className="py-3 border-end fw-bold text-bold">Task Type</th>
                                    <th className="py-3 border-end fw-bold text-bold">Task On</th>
                                    <th className="py-3 border-end fw-bold text-bold">Claim Selanjutnya</th>
                                    <th className="py-3 fw-bold text-bold">Nama Keluarga</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {[
                                    { no: 1, np: '7258', taskType: 'Kacamata', taskOn: '12-12-2023', nextClaim: '12-12-2025', family: 'Nurmuharom' },
                                    { no: 2, np: '7258', taskType: 'Kacamata', taskOn: '15-06-2021', nextClaim: '15-06-2023', family: 'Astuti' },
                                    { no: 3, np: '7258', taskType: 'Lensa', taskOn: '01-01-2020', nextClaim: '01-01-2022', family: 'Agus' },
                                    { no: 4, np: '7258', taskType: 'Frame', taskOn: '20-05-2018', nextClaim: '20-05-2020', family: 'Nurmuharom' },
                                    { no: 5, np: '7258', taskType: 'Kacamata', taskOn: '10-10-2016', nextClaim: '10-10-2018', family: 'Astuti' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end ps-4">{row.no}</td>
                                        <td className="py-4 border-end">{row.np}</td>
                                        <td className="py-4 border-end">{row.taskType}</td>
                                        <td className="py-4 border-end">{row.taskOn}</td>
                                        <td className="py-4 border-end">{row.nextClaim}</td>
                                        <td className="py-4">{row.family}</td>
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
