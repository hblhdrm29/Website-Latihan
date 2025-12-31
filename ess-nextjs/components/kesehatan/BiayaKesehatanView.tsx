"use client";

import React from 'react';

export default function BiayaKesehatanView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Biaya Kesehatan</h3>
            </div>
            
            {/* Filter Section */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                    <div className="row g-3 align-items-center mb-3 text-muted" style={{ fontSize: '0.85rem' }}>
                         <div className="col-md-3 d-flex align-items-center">
                            <label className="fw-bold me-2 mb-0 text-nowrap">Karyawan</label>
                            <div className="flex-grow-1">
                                <select suppressHydrationWarning className="form-select form-select-sm border-secondary border-opacity-25 shadow-sm rounded-1" style={{ fontSize: '0.8rem' }}>
                                    <option>K594 - MOHAMAD ALDA</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <label className="fw-bold me-2 mb-0 text-nowrap">Status</label>
                            <div className="flex-grow-1">
                                <select suppressHydrationWarning className="form-select form-select-sm border-secondary border-opacity-25 shadow-sm rounded-1" style={{ fontSize: '0.8rem' }}>
                                    <option>Semua Status</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <label className="fw-bold me-2 mb-0 text-nowrap">Vendor</label>
                            <div className="flex-grow-1">
                                <select suppressHydrationWarning className="form-select form-select-sm border-secondary border-opacity-25 shadow-sm rounded-1" style={{ fontSize: '0.8rem' }}>
                                    <option>Semua Vendor</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <label className="fw-bold me-2 mb-0 text-nowrap">Tahun</label>
                            <div className="flex-grow-1">
                                <select suppressHydrationWarning className="form-select form-select-sm border-secondary border-opacity-25 shadow-sm rounded-1" style={{ fontSize: '0.8rem' }}>
                                    <option>Semua Tahun</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>

             {/* Biaya Kesehatan Table */}
            <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#fff' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-bordered mb-0 text-center align-middle" style={{ fontSize: '0.8rem', borderColor: '#e0e0e0' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 fw-bold text-dark text-nowrap">NO</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Nomor Bill</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Karyawan</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Nama Vendor</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Tanggal Berobat</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Status</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Deskripsi Periksa</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Jumlah Hari</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Total Beban Karyawan</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Total Tanggungan Karyawan</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Total Tanggungan Perusahaan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { no: 1, bill: 'BILL-001/2025', karyawan: 'K594 - MOHAMAD ALDA', vendor: 'RS SANTOSA', tanggal: '20 Mei 2025', status: 'Lunas', deskripsi: 'Pemeriksaan Gigi', hari: 1, beban: 'Rp 500.000', tanggungan_karyawan: 'Rp 0', tanggungan_perusahaan: 'Rp 500.000' },
                                    { no: 2, bill: 'BILL-002/2025', karyawan: 'K594 - MOHAMAD ALDA', vendor: 'KLINIK SEHAT', tanggal: '15 Juni 2025', status: 'Lunas', deskripsi: 'Konsultasi Dokter Umum', hari: 1, beban: 'Rp 150.000', tanggungan_karyawan: 'Rp 0', tanggungan_perusahaan: 'Rp 150.000' },
                                    { no: 3, bill: 'BILL-003/2025', karyawan: 'K594 - MOHAMAD ALDA', vendor: 'APOTEK K-24', tanggal: '20 Juni 2025', status: 'Lunas', deskripsi: 'Pembelian Obat Resep', hari: 0, beban: 'Rp 200.000', tanggungan_karyawan: 'Rp 50.000', tanggungan_perusahaan: 'Rp 150.000' },
                                    { no: 4, bill: 'BILL-004/2025', karyawan: 'K594 - MOHAMAD ALDA', vendor: 'RS HERMINA', tanggal: '10 Agustus 2025', status: 'Pending', deskripsi: 'Rawat Inap', hari: 3, beban: 'Rp 3.500.000', tanggungan_karyawan: 'Rp 500.000', tanggungan_perusahaan: 'Rp 3.000.000' },
                                    { no: 5, bill: 'BILL-005/2025', karyawan: 'K594 - MOHAMAD ALDA', vendor: 'LAB PRAMITA', tanggal: '05 September 2025', status: 'Lunas', deskripsi: 'Cek Darah Lengkap', hari: 1, beban: 'Rp 750.000', tanggungan_karyawan: 'Rp 0', tanggungan_perusahaan: 'Rp 750.000' },
                                    { no: 6, bill: 'BILL-006/2025', karyawan: 'K594 - MOHAMAD ALDA', vendor: 'RS MATA CICENDO', tanggal: '12 Oktober 2025', status: 'Ditolak', deskripsi: 'Operasi Lasik', hari: 1, beban: 'Rp 15.000.000', tanggungan_karyawan: 'Rp 15.000.000', tanggungan_perusahaan: 'Rp 0' },
                                    { no: 7, bill: 'BILL-007/2025', karyawan: 'K594 - MOHAMAD ALDA', vendor: 'DOKTER GIGI BERSAMA', tanggal: '01 November 2025', status: 'Lunas', deskripsi: 'Scalling Gigi', hari: 1, beban: 'Rp 300.000', tanggungan_karyawan: 'Rp 0', tanggungan_perusahaan: 'Rp 300.000' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3">{row.no}</td>
                                        <td className="py-3">{row.bill}</td>
                                        <td className="py-3">{row.karyawan}</td>
                                        <td className="py-3">{row.vendor}</td>
                                        <td className="py-3">{row.tanggal}</td>
                                        <td className="py-3">
                                             <span className={`badge rounded-pill fw-normal px-3 py-2 ${
                                                row.status === 'Lunas' ? 'bg-success bg-opacity-10 text-success' :
                                                row.status === 'Pending' ? 'bg-warning bg-opacity-10 text-warning' :
                                                'bg-danger bg-opacity-10 text-danger'
                                            }`} style={{ fontSize: '0.75rem' }}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="py-3">{row.deskripsi}</td>
                                        <td className="py-3">{row.hari}</td>
                                        <td className="py-3">{row.beban}</td>
                                        <td className="py-3">{row.tanggungan_karyawan}</td>
                                        <td className="py-3">{row.tanggungan_perusahaan}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-end mb-4">
                 <h5 className="fw-bold mb-0 text-end" style={{ color: '#20288E' }}>Total: Rp. 0</h5>
            </div>
        </div>
    );
}
