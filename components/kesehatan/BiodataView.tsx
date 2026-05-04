"use client";

import React from 'react';

export default function BiodataView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Biodata Kesehatan</h3>
            </div>
            
            {/* Filter Section - Based on DataKeterlambatanView */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                    <div className="row g-2 align-items-end justify-content-between" style={{ fontSize: '0.85rem' }}>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Unit Kerja</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 border-secondary shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                </select>
                            </div>
                        </div>
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
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Periode</label>
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

             {/* Biodata Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold" style={{width: '50px'}}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">Karyawan</th>
                                    <th className="py-3 border-end fw-bold text-bold">Tempat Tanggal Lahir</th>
                                    <th className="py-3 border-end fw-bold text-bold">Usia</th>
                                    <th className="py-3 border-end fw-bold text-bold">Jenis Kelamin</th>
                                    <th className="py-3 border-end fw-bold text-bold">ID BPJS</th>
                                    <th className="py-3 border-end fw-bold text-bold">Kelas BPJS</th>
                                    <th className="py-3 fw-bold text-bold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {[
                                    { no: 1, karyawan: 'K594 - MOHAMAD ALDA', dept: '(Dep Pengembangan Teknologi Informasi)', ttl: 'Karawang', tgl: '20 Mei 2000', usia: 25, jk: 'Laki-laki', bpjs: '0003379692611', kelas: 'I', perawatan: '', keluarga: 0 },
                                    { no: 2, karyawan: 'K595 - BUDI SANTOSO', dept: '(Dep Pengembangan Teknologi Informasi)', ttl: 'Bandung', tgl: '15 Agustus 1995', usia: 30, jk: 'Laki-laki', bpjs: '0003379692612', kelas: 'I', perawatan: '', keluarga: 1 },
                                    { no: 3, karyawan: 'K596 - SITI AMINAH', dept: '(Dep Keuangan)', ttl: 'Jakarta', tgl: '01 Januari 1990', usia: 35, jk: 'Perempuan', bpjs: '0003379692613', kelas: 'II', perawatan: '', keluarga: 2 },
                                    { no: 4, karyawan: 'K597 - ANDI WIJAYA', dept: '(Dep HRD)', ttl: 'Surabaya', tgl: '10 Februari 1988', usia: 37, jk: 'Laki-laki', bpjs: '0003379692614', kelas: 'I', perawatan: '', keluarga: 1 },
                                    { no: 5, karyawan: 'K598 - RINA SARI', dept: '(Dep Pemasaran)', ttl: 'Yogyakarta', tgl: '25 Maret 1992', usia: 33, jk: 'Perempuan', bpjs: '0003379692615', kelas: 'II', perawatan: '', keluarga: 0 },
                                    { no: 6, karyawan: 'K599 - DEWI LESTARI', dept: '(Dep Operasional)', ttl: 'Semarang', tgl: '12 April 1998', usia: 27, jk: 'Perempuan', bpjs: '0003379692616', kelas: 'I', perawatan: '', keluarga: 2 },
                                    { no: 7, karyawan: 'K600 - AGUS PRATAMA', dept: '(Dep IT)', ttl: 'Medan', tgl: '05 Mei 1985', usia: 40, jk: 'Laki-laki', bpjs: '0003379692617', kelas: 'I', perawatan: '', keluarga: 1 },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 border-end">{row.no}</td>
                                        <td className="py-3 border-end text-start px-3">
                                            <div className="fw-bold text-dark">{row.karyawan}</div>
                                            <div className="text-muted small">{row.dept}</div>
                                        </td>
                                        <td className="py-3 border-end text-start px-3">
                                            <div className="fw-bold text-dark">{row.ttl}</div>
                                            <div className="text-muted small">{row.tgl}</div>
                                        </td>
                                        <td className="py-3 border-end">{row.usia}</td>
                                        <td className="py-3 border-end">{row.jk}</td>
                                        <td className="py-3 border-end">{row.bpjs}</td>
                                        <td className="py-3 border-end">{row.kelas}</td>
                                        <td className="py-3">
                                            <button className="btn btn-success btn-sm rounded-1 px-2 py-0" style={{ fontSize: '0.75rem' }}>
                                                {row.keluarga} Keluarga
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
