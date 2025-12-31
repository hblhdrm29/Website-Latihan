"use client";

import React from 'react';

export default function InfoRSView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Info RS dan Klinik Provider</h3>
            </div>
            
            {/* Filter Section */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4">
                <div className="card-body p-3">
                    <div className="row g-2 align-items-end" style={{ fontSize: '0.85rem' }}>
                         <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Nama</label>
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control form-control-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" placeholder="Filter" style={{ fontSize: '0.8rem' }} />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Tipe</label>
                            <div className="input-group input-group-sm">
                                <select suppressHydrationWarning className="form-select form-select-sm border-0 shadow-sm bg-light rounded-pill px-2 text-secondary" style={{ fontSize: '0.8rem' }}>
                                    <option>Filter</option>
                                    <option>Rumah Sakit</option>
                                    <option>Klinik</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>No Telepon</label>
                             <div className="input-group input-group-sm">
                                <input type="text" className="form-control form-control-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" placeholder="Filter" style={{ fontSize: '0.8rem' }} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>Alamat</label>
                             <div className="input-group input-group-sm">
                                <input type="text" className="form-control form-control-sm border-0 shadow-sm bg-light rounded-pill px-3 text-secondary" placeholder="Filter" style={{ fontSize: '0.8rem' }} />
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

             {/* Info RS Table */}
            <div className="card border border-secondary border-opacity-10 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card-body p-0">
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-hover mb-0 text-center align-middle" style={{ fontSize: '0.8rem' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th className="py-3 border-end fw-bold text-bold ps-4" style={{ width: '50px' }}>No</th>
                                    <th className="py-3 border-end fw-bold text-bold">Nama</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{ width: '150px' }}>Tipe</th>
                                    <th className="py-3 border-end fw-bold text-bold" style={{ width: '180px' }}>No Telepon</th>
                                    <th className="py-3 border-end fw-bold text-bold">Alamat</th>
                                    <th className="py-3 fw-bold text-bold text-center" style={{ width: '100px' }}>Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-transparent">
                                {[
                                    { no: 1, nama: 'Siloam Hospitals Kebon Jeruk', tipe: 'Rumah Sakit', telp: '(021) 25677888', alamat: 'Jl. Raya Pejuangan Kav.08, Kebon Jeruk, Jakarta 11530' },
                                    { no: 2, nama: 'Siloam Hospitals Cinere (RS Jantung Diagram Depok)', tipe: 'Rumah Sakit', telp: '(021) 50900100', alamat: 'Jl. Puri Cinere no.19, Depok 16514' },
                                    { no: 3, nama: 'MRCCC Siloam Hospitals Semanggi', tipe: 'Rumah Sakit', telp: '(021) 29962888', alamat: 'Jl. Garnisun Kav. 2-3, Karet Semanggi-Setiabudi, Jakarta Selatan 12930' },
                                    { no: 4, nama: 'Siloam Hospitals TB Simatupang', tipe: 'Rumah Sakit', telp: '(021) 29531900', alamat: 'Jl. RA Kartini No. 8 Cilandak, Jakarta Selatan 12430' },
                                    { no: 5, nama: 'Siloam Hospitals Asri', tipe: 'Rumah Sakit', telp: '(021) 27837900', alamat: 'Jalan Duren Tiga No. 20 Jakarta Selatan 12760' },
                                     { no: 6, nama: 'RS Mayapada', tipe: 'Rumah Sakit', telp: '(021) 29217777', alamat: 'Jl. Lebak Bulus I Kav. 29 Cilandak' },
                                     { no: 7, nama: 'RS Pondok Indah', tipe: 'Rumah Sakit', telp: '(021) 7657525', alamat: 'Jl. Metro Duta Kav. UE Pondok Indah' },
                                     { no: 8, nama: 'Klinik Mata Nusantara', tipe: 'Klinik', telp: '(021) 72798669', alamat: 'Jl. R.A. Kartini No. 99, Lebak Bulus' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom">
                                        <td className="py-4 border-end ps-4">{row.no}</td>
                                        <td className="py-4 border-end fw-bold text-dark text-start ps-3">{row.nama}</td>
                                        <td className="py-4 border-end">{row.tipe}</td>
                                        <td className="py-4 border-end">{row.telp}</td>
                                        <td className="py-4 border-end text-start ps-3">{row.alamat}</td>
                                        <td className="py-4 text-center">
                                            <button className="btn btn-sm btn-success shadow-sm px-3 rounded-pill" style={{ fontSize: '0.8rem' }}>
                                                Detail
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
