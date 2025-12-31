"use client";

import React from 'react';

export default function PPKView() {

    return (
        <div className="container-fluid p-0">
            <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Persetujuan Pemesanan Kendaraan</h3>
            </div>

            {/* Filter Section */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                     <div className="row g-2 align-items-end justify-content-between" style={{ fontSize: '0.85rem' }}>
                         <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>No. Pemesanan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Nama</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                         <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tujuan</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Status</label>
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

             {/* DPK Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-start align-middle" style={{ fontSize: '0.85rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-center ps-4" style={{ width: '50px' }}>No</th>
                                    <th className="py-3 border-end fw-bold ps-3">No. Pemesanan</th>
                                    <th className="py-3 border-end fw-bold ps-3">Nama</th>
                                    <th className="py-3 border-end fw-bold ps-3">Asal</th>
                                    <th className="py-3 border-end fw-bold ps-3">Tujuan</th>
                                    <th className="py-3 border-end fw-bold ps-3">Berangkat</th>
                                    <th className="py-3 border-end fw-bold ps-3">Penumpang</th>
                                    <th className="py-3 border-end fw-bold ps-3">Status</th>
                                    <th className="py-3 fw-bold text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {[
                                    { 
                                        no: 1, 
                                        noPesanan: '68/GO/07/2025', 
                                        nama: 'DEWI MIJAWANTI PUTRI', 
                                        id: '2011H049', 
                                        dept: 'Departemen Pengembangan Teknologi Informasi', 
                                        asal: 'Ged. SDM Peruri Karawang', 
                                        asalDetail: 'Kab. Karawang, Jawa Barat', 
                                        tujuan: 'IBM Indonesia, The Plaza', 
                                        tujuanDetail: 'Jl. M.H. Thamrin No.28-30 Lantai 16-17, RT.9/RW.5, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350', 
                                        tujuanKota: 'Kota Jakarta Pusat, D.K.I. Jakarta',
                                        berangkatHari: 'Selasa, 22 Juli 2025',
                                        berangkatJam: '10:00:00',
                                        penumpang: 3,
                                        status: 'Disetujui Atasan',
                                        statusColor: 'text-primary'
                                    },
                                    { 
                                        no: 2, 
                                        noPesanan: '63/GO/07/2025', 
                                        nama: 'MOHAMAD ALDA', 
                                        id: '085976219649K594', 
                                        dept: 'Departemen Pengembangan', 
                                        asal: 'Peruri Jakarta', 
                                        asalDetail: 'Kota Jakarta Selatan, D.K.I. Jakarta', 
                                        tujuan: 'Peruri Jakarta', 
                                        tujuanDetail: 'Kota Jakarta Selatan, D.K.I. Jakarta',
                                        tujuanKota: '', 
                                        berangkatHari: 'Senin, 21 Juli 2025',
                                        berangkatJam: '14:44:00',
                                        penumpang: 3,
                                        status: 'Ditolak Atasan',
                                        statusColor: 'text-danger'
                                    },
                                     { 
                                        no: 3, 
                                        noPesanan: '55/GO/06/2025', 
                                        nama: 'BUDI SANTOSO', 
                                        id: '2015H055', 
                                        dept: 'Departemen Keuangan', 
                                        asal: 'Peruri Jakarta', 
                                        asalDetail: 'Kota Jakarta Selatan, D.K.I. Jakarta', 
                                        tujuan: 'Kementerian BUMN', 
                                        tujuanDetail: 'Jl. Medan Merdeka Sel. No.13, RT.11/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110',
                                        tujuanKota: 'Kota Jakarta Pusat', 
                                        berangkatHari: 'Jumat, 15 Juni 2025',
                                        berangkatJam: '09:00:00',
                                        penumpang: 2,
                                        status: 'Disetujui Atasan',
                                        statusColor: 'text-primary'
                                    },
                                    { 
                                        no: 4, 
                                        noPesanan: '42/GO/06/2025', 
                                        nama: 'SITI AMINAH', 
                                        id: '2018H088', 
                                        dept: 'Departemen SDM', 
                                        asal: 'Ged. SDM Peruri Karawang', 
                                        asalDetail: 'Kab. Karawang, Jawa Barat', 
                                        tujuan: 'Hotel Mulia Senayan', 
                                        tujuanDetail: 'Jl. Asia Afrika, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270',
                                        tujuanKota: 'Kota Jakarta Pusat', 
                                        berangkatHari: 'Rabu, 10 Juni 2025',
                                        berangkatJam: '08:00:00',
                                        penumpang: 4,
                                        status: 'Disetujui Atasan',
                                        statusColor: 'text-primary'
                                    },
                                    { 
                                        no: 5, 
                                        noPesanan: '38/GO/05/2025', 
                                        nama: 'SITI AMINAH', 
                                        id: '2018H088', 
                                        dept: 'Departemen SDM', 
                                        asal: 'Peruri Jakarta', 
                                        asalDetail: 'Kota Jakarta Selatan', 
                                        tujuan: 'Bandara Soekarno Hatta', 
                                        tujuanDetail: 'Tangerang, Banten',
                                        tujuanKota: 'Tangerang', 
                                        berangkatHari: 'Senin, 5 Mei 2025',
                                        berangkatJam: '06:00:00',
                                        penumpang: 2,
                                        status: 'Disetujui Atasan',
                                        statusColor: 'text-primary'
                                    },
                                    { 
                                        no: 6, 
                                        noPesanan: '25/GO/04/2025', 
                                        nama: 'NURMUHAROM', 
                                        id: '7258', 
                                        dept: 'Seksi Pengadaan Barang', 
                                        asal: 'Ged. SDM Peruri Karawang', 
                                        asalDetail: 'Kab. Karawang, Jawa Barat', 
                                        tujuan: 'Peruri Jakarta', 
                                        tujuanDetail: 'Kota Jakarta Selatan, D.K.I. Jakarta',
                                        tujuanKota: '', 
                                        berangkatHari: 'Kamis, 10 April 2025',
                                        berangkatJam: '07:30:00',
                                        penumpang: 1,
                                        status: 'Disetujui Atasan',
                                        statusColor: 'text-primary'
                                    },
                                    { 
                                        no: 7, 
                                        noPesanan: '12/GO/03/2025', 
                                        nama: 'BUDI SANTOSO', 
                                        id: '2015H055', 
                                        dept: 'Departemen Keuangan', 
                                        asal: 'Peruri Jakarta', 
                                        asalDetail: 'Kota Jakarta Selatan', 
                                        tujuan: 'Bank Indonesia', 
                                        tujuanDetail: 'Jl. M.H. Thamrin No.2, Jakarta Pusat',
                                        tujuanKota: 'Jakarta Pusat', 
                                        berangkatHari: 'Selasa, 15 Maret 2025',
                                        berangkatJam: '10:00:00',
                                        penumpang: 3,
                                        status: 'Menunggu Persetujuan',
                                        statusColor: 'text-warning'
                                    },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end text-center">{row.no}</td>
                                        <td className="py-4 border-end ps-3">{row.noPesanan}</td>
                                        <td className="py-4 border-end ps-3">
                                            <div className="fw-bold">{row.id} - {row.nama}</div>
                                            <div className="text-muted small">({row.dept})</div>
                                        </td>
                                        <td className="py-4 border-end ps-3">
                                            <div className="fw-bold">{row.asal}</div>
                                            <div className="text-muted small">({row.asalDetail})</div>
                                        </td>
                                        <td className="py-4 border-end ps-3" style={{ maxWidth: '250px' }}>
                                             <div className="fw-bold">{row.tujuan}</div>
                                             <div className="text-muted small">{row.tujuanDetail}</div>
                                             {row.tujuanKota && <div className="text-muted small">({row.tujuanKota})</div>}
                                        </td>
                                        <td className="py-4 border-end ps-3">
                                            <div>{row.berangkatHari}</div>
                                            <div className="text-muted small">@{row.berangkatJam}</div>
                                        </td>
                                        <td className="py-4 border-end ps-3">{row.penumpang}</td>
                                        <td className="py-4 border-end ps-3">
                                            <span className={`badge rounded-pill ${
                                                row.status.includes('Disetujui') ? 'bg-success' : 
                                                row.status.includes('Ditolak') ? 'bg-danger' : 
                                                'bg-warning text-dark'
                                            }`}>
                                                {row.status}
                                            </span>
                                        </td>
                                         <td className="py-4 text-center">
                                            <button className="btn btn-sm btn-outline-secondary rounded-1" style={{ fontSize: '0.75rem' }}>Detail</button>
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
