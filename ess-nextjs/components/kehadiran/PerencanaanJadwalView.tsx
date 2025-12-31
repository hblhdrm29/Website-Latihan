"use client";

import React from 'react';

export default function PerencanaanJadwalView() {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Perencanaan Jadwal Kerja</h3>
                <div className="btn rounded-circle bg-white text-primary shadow-sm d-flex align-items-center justify-content-center border-0 btn-hover-success" style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                    <i className="fas fa-plus small"></i>
                </div>
            </div>
            {/* Filter Section - Reused from KehadiranView */}
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
                        <div className="col-md-1">
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
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Bulan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tahun</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Keterangan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
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

            {/* Perencanaan Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '60px'}}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{textAlign: 'left', paddingLeft: '2rem'}}>NAMA</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{textAlign: 'left', paddingLeft: '2rem'}}>Tertanggal</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{textAlign: 'left', paddingLeft: '2rem'}}>Jadwal Kerja</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, np: '7258', nama: 'NURMUHAROM', tanggal: '01 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 2, np: '7258', nama: 'NURMUHAROM', tanggal: '02 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 3, np: '7258', nama: 'NURMUHAROM', tanggal: '03 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 4, np: '7258', nama: 'NURMUHAROM', tanggal: '04 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 5, np: '7258', nama: 'NURMUHAROM', tanggal: '05 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 6, np: '7258', nama: 'NURMUHAROM', tanggal: '06 Desember 2025', jadwal: 'OFF' },
                                    { no: 7, np: '7258', nama: 'NURMUHAROM', tanggal: '07 Desember 2025', jadwal: 'OFF' },
                                    { no: 8, np: '7258', nama: 'NURMUHAROM', tanggal: '08 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 9, np: '7258', nama: 'NURMUHAROM', tanggal: '09 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 10, np: '7258', nama: 'NURMUHAROM', tanggal: '10 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 11, np: '7258', nama: 'NURMUHAROM', tanggal: '11 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                    { no: 12, np: '7258', nama: 'NURMUHAROM', tanggal: '12 Desember 2025', jadwal: 'Gilir III PAM&Utilitas 2024' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end">{row.np}</td>
                                        <td className="py-3 border-end" style={{textAlign: 'left', paddingLeft: '2rem'}}>{row.nama}</td>
                                        <td className="py-3 border-end" style={{textAlign: 'left', paddingLeft: '2rem'}}>{row.tanggal}</td>
                                        <td className="py-3 border-end" style={{textAlign: 'left', paddingLeft: '2rem'}}>{row.jadwal}</td>
                                        <td className="py-3">
                                            <button className="btn btn-sm btn-primary rounded-1 px-3" style={{ fontSize: '0.75rem' }}>
                                                Batal
                                            </button>
                                        </td>
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
