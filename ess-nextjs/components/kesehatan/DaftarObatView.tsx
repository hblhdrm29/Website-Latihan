"use client";

import React from 'react';

export default function DaftarObatView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Daftar Obat</h3>
            </div>
            
            {/* Filter Section */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                    <div className="row g-3 align-items-end justify-content-between text-muted" style={{ fontSize: '0.85rem' }}>
                         <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block text-dark">Jenis Obat</label>
                            <div className="input-group">
                                <select suppressHydrationWarning className="form-select form-select-sm border-secondary border-opacity-25 shadow-sm rounded-1" style={{ fontSize: '0.8rem' }}>
                                    <option>Semua</option>
                                    <option>Obat Khusus</option>
                                    <option>Obat Kondisi Khusus</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block text-dark">Kategori Obat</label>
                            <div className="input-group">
                                <select suppressHydrationWarning className="form-select form-select-sm border-secondary border-opacity-25 shadow-sm rounded-1" style={{ fontSize: '0.8rem' }}>
                                    <option>Semua</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block text-dark">Keterangan</label>
                             <div className="input-group">
                                <input type="text" className="form-control form-control-sm border-secondary border-opacity-25 shadow-sm rounded-1" placeholder="Cari Keterangan..." style={{ fontSize: '0.8rem' }} />
                            </div>
                        </div>
                        <div className="col-md-auto">
                             <button className="btn btn-sm btn-light shadow-sm rounded-pill px-3 py-2 border d-flex align-items-center gap-2" style={{ backgroundColor: '#f8f9fa' }}>
                                <span className="fw-bold text-secondary" style={{ fontSize: '0.85rem' }}>Filter</span> 
                                <i className="fas fa-filter text-secondary" style={{ fontSize: '0.75rem' }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

             {/* Daftar Obat Table */}
            <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#fff' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-bordered mb-0 align-middle" style={{ fontSize: '0.8rem', borderColor: '#e0e0e0' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr className="text-center">
                                    <th className="py-3 fw-bold text-dark">No</th>
                                    <th className="py-3 fw-bold text-dark text-nowrap">Kode Obat</th>
                                    <th className="py-3 fw-bold text-dark">Jenis dan Kategori</th>
                                    <th className="py-3 fw-bold text-dark">Zat Aktif</th>
                                    <th className="py-3 fw-bold text-dark">Merek Obat</th>
                                    <th className="py-3 fw-bold text-dark">Lainnya</th>
                                    <th className="py-3 fw-bold text-dark" style={{ width: '200px' }}>Keterangan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { no: 1, kode: 'OK-66-1', jenis: 'Obat Khusus', kategori: 'Preparat Affecting Metabolisme Tulang', zat: 'Raloxifene Hcl', merek: 'Evista', sediaan: 'Tablet', dosis: '60 mg', farmasi: 'Eililly', ket: '' },
                                    { no: 2, kode: 'KK-70-1', jenis: 'Obat Kondisi Khusus', kategori: 'Suplemen', zat: 'Essential Ketoacids', merek: 'Tonar', sediaan: 'Caplet', dosis: '630 mg', farmasi: 'Sandoz', ket: 'Kasus CKD dengan nilai kreatinin ? dan atau proteinuri (++)' },
                                    { no: 3, kode: 'KK-68-1', jenis: 'Obat Kondisi Khusus', kategori: 'Cerebral Aktivator', zat: 'Citicoline', merek: 'Inceline', sediaan: 'Tablet', dosis: '500 mg', farmasi: 'Interbat', ket: 'Kasus CVD Akut, diberikan selama 3 bulan' },
                                    { no: 4, kode: 'OK-66-2', jenis: 'Obat Khusus', kategori: 'Preparat Affecting Metabolisme Tulang', zat: 'Zelodronic acid', merek: 'Zometa', sediaan: 'Injeksi', dosis: '4 mg', farmasi: 'Novartis', ket: '' },
                                    { no: 5, kode: 'OK-55-3', jenis: 'Obat Khusus', kategori: 'Anti Kanker', zat: 'Tamoxifen', merek: 'Nolvadex', sediaan: 'Tablet', dosis: '10 mg', farmasi: 'AstraZeneca', ket: 'Pengobatan penunjang kanker payudara' },
                                    { no: 6, kode: 'KK-71-2', jenis: 'Obat Kondisi Khusus', kategori: 'Immunosupresan', zat: 'Mycophenolate Mofetil', merek: 'Cellcept', sediaan: 'Tablet', dosis: '500 mg', farmasi: 'Roche', ket: 'Profilaksis penolakan organ' },
                                    { no: 7, kode: 'OK-88-4', jenis: 'Obat Khusus', kategori: 'Hormon', zat: 'Somatropin', merek: 'Genotropin', sediaan: 'Injeksi', dosis: '16 IU', farmasi: 'Pfizer', ket: 'Defisiensi hormon pertumbuhan' },
                                    { no: 8, kode: 'KK-90-5', jenis: 'Obat Kondisi Khusus', kategori: 'Anti Viral', zat: 'Entecavir', merek: 'Baraclude', sediaan: 'Tablet', dosis: '0.5 mg', farmasi: 'Bristol-Myers Squibb', ket: 'Hepatitis B kronis' },
                                    { no: 9, kode: 'OK-44-6', jenis: 'Obat Khusus', kategori: 'Jantung', zat: 'Ivabradine', merek: 'Coralan', sediaan: 'Tablet', dosis: '5 mg', farmasi: 'Servier', ket: 'Gagal jantung kronis' },
                                    { no: 10, kode: 'KK-33-7', jenis: 'Obat Kondisi Khusus', kategori: 'Psikotropika', zat: 'Alprazolam', merek: 'Xanax', sediaan: 'Tablet', dosis: '1 mg', farmasi: 'Pfizer', ket: 'Gangguan kecemasan berat' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-3 text-center">{row.no}</td>
                                        <td className="py-3 fw-bold text-dark px-3 text-nowrap">{row.kode}</td>
                                        <td className="py-3 px-3">
                                            <div className="fw-bold text-dark">{row.jenis}</div>
                                            <div className="text-muted small">{row.kategori}</div>
                                        </td>
                                        <td className="py-3 px-3">{row.zat}</td>
                                        <td className="py-3 px-3">{row.merek}</td>
                                        <td className="py-3 px-3">
                                            <div className="mb-1"><span className="fw-bold text-dark">Sediaan: </span>{row.sediaan}</div>
                                            <div className="mb-1"><span className="fw-bold text-dark">Dosis: </span>{row.dosis}</div>
                                            <div className="mb-0"><span className="fw-bold text-dark">Farmasi: </span>{row.farmasi}</div>
                                        </td>
                                        <td className="py-3 px-3 text-muted small">{row.ket}</td>
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
