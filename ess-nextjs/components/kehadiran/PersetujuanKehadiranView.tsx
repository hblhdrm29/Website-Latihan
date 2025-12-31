"use client";

import React from 'react';

export default function PersetujuanKehadiranView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Persetujuan Kehadiran</h3>
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

            {/* Persetujuan Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '50px'}}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '80px'}}>NP</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{textAlign: 'left', paddingLeft: '1.5rem'}}>Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tertanggal</th>
                                    <th className="py-3 border-end fw-bold text-bold">Kehadiran Semula</th>
                                    <th className="py-3 border-end fw-bold text-bold">Permohonan Ubah</th>
                                    <th className="py-3 border-end fw-bold text-bold">Status</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, np: '7258', nama: 'ABISMITH', tanggal: '01 Des 2025', semula: 'Terlambat', ubah: 'Hadir Tepat Waktu', status: 'Pending' },
                                    { no: 2, np: '7821', nama: 'SARAH CONNOR', tanggal: '02 Des 2025', semula: 'Alpa', ubah: 'Sakit', status: 'Disetujui' },
                                    { no: 3, np: '6654', nama: 'JOHN DOE', tanggal: '03 Des 2025', semula: 'Terlambat', ubah: 'Dinas Luar', status: 'Ditolak' },
                                    { no: 4, np: '5543', nama: 'JANE DOE', tanggal: '04 Des 2025', semula: 'Hadir', ubah: 'Izin Pulang Cepat', status: 'Pending' },
                                    { no: 5, np: '7258', nama: 'ABISMITH', tanggal: '05 Des 2025', semula: 'Terlambat', ubah: 'Lupa Absen', status: 'Pending' },
                                    { no: 6, np: '7821', nama: 'SARAH CONNOR', tanggal: '06 Des 2025', semula: 'Alpa', ubah: 'Sakit', status: 'Pending' },
                                    { no: 7, np: '6654', nama: 'JOHN DOE', tanggal: '07 Des 2025', semula: 'Terlambat', ubah: 'Dinas Luar', status: 'Pending' },
                                    { no: 8, np: '5543', nama: 'JANE DOE', tanggal: '08 Des 2025', semula: 'Hadir', ubah: 'Izin Pulang Cepat', status: 'Pending' },
                                    { no: 9, np: '7258', nama: 'ABISMITH', tanggal: '09 Des 2025', semula: 'Terlambat', ubah: 'Lupa Absen', status: 'Pending' },
                                    { no: 10, np: '7821', nama: 'SARAH CONNOR', tanggal: '10 Des 2025', semula: 'Alpa', ubah: 'Sakit', status: 'Pending' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end">{row.np}</td>
                                        <td className="py-3 border-end" style={{textAlign: 'left', paddingLeft: '1.5rem'}}>{row.nama}</td>
                                        <td className="py-3 border-end">{row.tanggal}</td>
                                        <td className="py-3 border-end">{row.semula}</td>
                                        <td className="py-3 border-end">{row.ubah}</td>
                                        <td className="py-3 border-end">
                                            <span className={`badge rounded-pill ${
                                                row.status === 'Disetujui' ? 'bg-success-subtle text-success' : 
                                                row.status === 'Ditolak' ? 'bg-danger-subtle text-danger' : 
                                                'bg-warning-subtle text-warning'
                                            }`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <button className="btn btn-sm btn-icon btn-light rounded-circle text-primary hover-bg-primary-subtle" title="Setujui">
                                                <i className="fas fa-check"></i>
                                            </button>
                                            <button className="btn btn-sm btn-icon btn-light rounded-circle text-danger hover-bg-danger-subtle ms-1" title="Tolak">
                                                <i className="fas fa-times"></i>
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
