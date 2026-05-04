"use client";

import React from 'react';

export default function PersetujuanCutiView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Persetujuan Cuti</h3>
            </div>
            {/* Filter Section - Reused */}
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

            {/* Persetujuan Cuti Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '60px'}}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">NP</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{textAlign: 'left', paddingLeft: '1.5rem'}}>Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tipe</th>
                                    <th className="py-3 border-end fw-bold text-bold">Start Date</th>
                                    <th className="py-3 border-end fw-bold text-bold">End Date</th>
                                    <th className="py-3 border-end fw-bold text-bold">Lama</th>
                                    <th className="py-3 border-end fw-bold text-bold">Alasan</th>
                                    <th className="py-3 border-end fw-bold text-bold">Status</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, np: '7258', nama: 'ABISMITH', tipe: 'Cuti Tahunan', start: '01 Jan 2026', end: '03 Jan 2026', lama: '3 Hari', alasan: 'Liburan Keluarga', status: 'Pending' },
                                    { no: 2, np: '7821', nama: 'SARAH CONNOR', tipe: 'Cuti Sakit', start: '05 Jan 2026', end: '05 Jan 2026', lama: '1 Hari', alasan: 'Demam Tinggi', status: 'Disetujui' },
                                    { no: 3, np: '6654', nama: 'JOHN DOE', tipe: 'Cuti Penting', start: '10 Jan 2026', end: '12 Jan 2026', lama: '3 Hari', alasan: 'Pernikahan Saudara', status: 'Ditolak' },
                                    { no: 4, np: '5543', nama: 'JANE DOE', tipe: 'Cuti Tahunan', start: '15 Jan 2026', end: '16 Jan 2026', lama: '2 Hari', alasan: 'Pulang Kampung', status: 'Pending' },
                                    { no: 5, np: '7258', nama: 'ABISMITH', tipe: 'Cuti Besar', start: '20 Jan 2026', end: '25 Jan 2026', lama: '6 Hari', alasan: 'Ibadah Umroh', status: 'Disetujui' },
                                    { no: 6, np: '7821', nama: 'SARAH CONNOR', tipe: 'Cuti Melahirkan', start: '01 Feb 2026', end: '30 Apr 2026', lama: '90 Hari', alasan: 'Melahirkan', status: 'Pending' },
                                    { no: 7, np: '6654', nama: 'JOHN DOE', tipe: 'Cuti Tahunan', start: '10 Feb 2026', end: '11 Feb 2026', lama: '2 Hari', alasan: 'Istirahat', status: 'Disetujui' },
                                    { no: 8, np: '5543', nama: 'JANE DOE', tipe: 'Cuti Sakit', start: '12 Feb 2026', end: '14 Feb 2026', lama: '3 Hari', alasan: 'Rawat Inap', status: 'Pending' },
                                    { no: 9, np: '3321', nama: 'MICHAEL TURNER', tipe: 'Cuti Tahunan', start: '15 Feb 2026', end: '18 Feb 2026', lama: '4 Hari', alasan: 'Liburan', status: 'Ditolak' },
                                    { no: 10, np: '1122', nama: 'EMILY BLUNT', tipe: 'Cuti Penting', start: '20 Feb 2026', end: '20 Feb 2026', lama: '1 Hari', alasan: 'Urus Dokumen', status: 'Pending' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end">{row.np}</td>
                                        <td className="py-3 border-end" style={{textAlign: 'left', paddingLeft: '1.5rem'}}>{row.nama}</td>
                                        <td className="py-3 border-end">{row.tipe}</td>
                                        <td className="py-3 border-end">{row.start}</td>
                                        <td className="py-3 border-end">{row.end}</td>
                                        <td className="py-3 border-end">{row.lama}</td>
                                        <td className="py-3 border-end">{row.alasan}</td>
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
