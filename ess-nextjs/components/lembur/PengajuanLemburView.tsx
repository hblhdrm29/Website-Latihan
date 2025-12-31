"use client";

import React from 'react';

export default function PengajuanLemburView() {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Pengajuan Lembur</h3>
                <div className="btn rounded-circle bg-white text-primary shadow-sm d-flex align-items-center justify-content-center border-0 btn-hover-success" style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                    <i className="fas fa-plus small"></i>
                </div>
            </div>
            {/* Filter Section - Reused from KehadiranView/LemburView */}
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

            {/* Pengajuan Lembur Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '60px'}}>No </th>
                                    <th className="py-3 border-end fw-bold text-bold">No Pokok </th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{textAlign: 'left', paddingLeft: '1.5rem'}}>Nama Pegawai </th>
                                    <th className="py-3 border-end fw-bold text-bold">Tertanggal </th>
                                    <th className="py-3 border-end fw-bold text-bold">Input Mulai </th>
                                    <th className="py-3 border-end fw-bold text-bold">Input Selesai </th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '150px'}}>Lembur Diakui </th>
                                    <th className="py-3 border-end fw-bold text-bold">Jenis Alasan </th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{textAlign: 'left', paddingLeft: '1rem'}}>Keterangan </th>
                                    <th className="py-3 border-end fw-bold text-bold">Status </th>
                                    <th className="py-3 fw-bold text-bold">Aksi </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, np: 'K594', nama: 'MOHAMAD ALDA', tanggal: '03 Juli 2025', mulai: '03 Juli 2025 16:30', selesai: '03 Juli 2025 20:30', diakui: '03 Juli 2025 16:30 s/d 03 Juli 2025 20:30', alasan: 'Lembur Proyek', ket: 'Konfigurasi Einvoice', status: 'Disetujui Atasan' },
                                    { no: 2, np: '9921', nama: 'SARAH JENKINS', tanggal: '04 Juli 2025', mulai: '04 Juli 2025 17:00', selesai: '04 Juli 2025 21:00', diakui: '04 Juli 2025 17:00 s/d 04 Juli 2025 21:00', alasan: 'Lembur Urgent', ket: 'Fixing Bug Prod', status: 'Disetujui Atasan' },
                                    { no: 3, np: 'K594', nama: 'MOHAMAD ALDA', tanggal: '05 Juli 2025', mulai: '05 Juli 2025 18:00', selesai: '05 Juli 2025 22:00', diakui: '05 Juli 2025 18:00 s/d 05 Juli 2025 22:00', alasan: 'Lembur Proyek', ket: 'Deployment App', status: 'Menunggu' },
                                    { no: 4, np: '1123', nama: 'JOHN SMITH', tanggal: '06 Juli 2025', mulai: '06 Juli 2025 16:00', selesai: '06 Juli 2025 20:00', diakui: '06 Juli 2025 16:00 s/d 06 Juli 2025 20:00', alasan: 'Dinas Luar', ket: 'Meeting Client', status: 'Disetujui SDM' },
                                    { no: 5, np: 'K594', nama: 'MOHAMAD ALDA', tanggal: '07 Juli 2025', mulai: '07 Juli 2025 17:30', selesai: '07 Juli 2025 21:30', diakui: '07 Juli 2025 17:30 s/d 07 Juli 2025 21:30', alasan: 'Lembur Proyek', ket: 'Testing Fitur Baru', status: 'Ditolak' },
                                    { no: 6, np: '8876', nama: 'EMILY DAVIS', tanggal: '08 Juli 2025', mulai: '08 Juli 2025 16:30', selesai: '08 Juli 2025 19:30', diakui: '08 Juli 2025 16:30 s/d 08 Juli 2025 19:30', alasan: 'Lembur Akhir', ket: 'Stock Opname', status: 'Disetujui Atasan' },
                                    { no: 7, np: 'K594', nama: 'MOHAMAD ALDA', tanggal: '09 Juli 2025', mulai: '09 Juli 2025 16:30', selesai: '09 Juli 2025 20:30', diakui: '09 Juli 2025 16:30 s/d 09 Juli 2025 20:30', alasan: 'Lembur Proyek', ket: 'Setup Server', status: 'Menunggu' },
                                    { no: 8, np: '4452', nama: 'MICHAEL BROWN', tanggal: '10 Juli 2025', mulai: '10 Juli 2025 17:00', selesai: '10 Juli 2025 22:00', diakui: '10 Juli 2025 17:00 s/d 10 Juli 2025 22:00', alasan: 'Overtime', ket: 'Laporan Bulanan', status: 'Disetujui Atasan' },
                                    { no: 9, np: 'K594', nama: 'MOHAMAD ALDA', tanggal: '11 Juli 2025', mulai: '11 Juli 2025 16:30', selesai: '11 Juli 2025 18:30', diakui: '11 Juli 2025 16:30 s/d 11 Juli 2025 18:30', alasan: 'Lembur Proyek', ket: 'Briefing Tim', status: 'Disetujui SDM' },
                                    { no: 10, np: '3321', nama: 'SOPHIA WILSON', tanggal: '12 Juli 2025', mulai: '12 Juli 2025 09:00', selesai: '12 Juli 2025 14:00', diakui: '12 Juli 2025 09:00 s/d 12 Juli 2025 14:00', alasan: 'Lembur Weekend', ket: 'Maintenance', status: 'Disetujui Atasan' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end">{row.np}</td>
                                        <td className="py-3 border-end" style={{textAlign: 'left', paddingLeft: '1.5rem'}}>
                                            <div style={{maxWidth: '150px'}}>{row.nama}</div>
                                        </td>
                                        <td className="py-3 border-end">{row.tanggal}</td>
                                        <td className="py-3 border-end">
                                             <div style={{maxWidth: '100px', margin: '0 auto'}}>{row.mulai.split(' ')[0]} {row.mulai.split(' ')[1]} {row.mulai.split(' ')[2]}<br /><span className="text-primary fw-bold">{row.mulai.split(' ')[3]}</span></div>
                                        </td>
                                        <td className="py-3 border-end">
                                            <div style={{maxWidth: '100px', margin: '0 auto'}}>{row.selesai.split(' ')[0]} {row.selesai.split(' ')[1]} {row.selesai.split(' ')[2]}<br /><span className="text-primary fw-bold">{row.selesai.split(' ')[3]}</span></div>
                                        </td>
                                        <td className="py-3 border-end">
                                            <div className="small text-muted" style={{maxWidth: '150px', margin: '0 auto', whiteSpace: 'pre-wrap'}}>{row.diakui.replace('s/d', '\ns/d\n')}</div>
                                        </td>
                                        <td className="py-3 border-end">{row.alasan}</td>
                                        <td className="py-3 border-end" style={{textAlign: 'left', paddingLeft: '1rem'}}>
                                             <div style={{maxWidth: '150px'}}>{row.ket}</div>
                                        </td>
                                        <td className="py-3 border-end">
                                            <div className="border border-secondary rounded px-2 py-1 bg-light d-inline-block text-secondary small">
                                                {row.status}
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <button className="btn btn-sm btn-danger rounded-1 px-3" style={{ fontSize: '0.75rem' }}>
                                                Hapus
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
