"use client";

import React from 'react';

export default function DonorDarahView() {
    return (
        <div className="container-fluid p-0">
             <div className="d-flex align-items-center gap-3 mb-4">
                <h3 className="fw-bold mb-0" style={{ color: '#20288E' }}>Donor Darah</h3>
            </div>
            
            {/* Premium Summary Card */}
            <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #20288E 0%, #4c51bf 100%)' }}>
                <div className="card-body p-4 position-relative text-white">
                    <div className="position-absolute end-0 bottom-0 opacity-10 me-4 mb-n2" style={{ transform: 'rotate(-15deg)' }}>
                    </div>
                    <div className="row align-items-center position-relative z-1">
                        <div className="col-md-8">
                            <h3 className="fw-bold mb-1">Mohammad Alda</h3>
                            <p className="mb-0 opacity-75">No Pokok : k594</p>
                            <p className="mb-2 opacity-75">Unit : Seksi Pengadaan Barang Non Investasi (Lokal)</p>
                            <div className="d-flex align-items-center gap-2">
                                <span className="badge bg-white text-primary rounded-pill px-3 py-2 fw-bold">
                                    <i className="fas fa-check-circle me-1"></i> Aktif
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                             <div className="d-inline-block text-center bg-white bg-opacity-10 rounded-4 p-3 border border-white border-opacity-25 backdrop-blur">
                                <h1 className="display-4 fw-bold mb-0">6</h1>
                                <div className="small text-uppercase fw-bold opacity-75">Kali Donor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Riwayat Pemeriksaan Section */}
            <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ backgroundColor: '#fff' }}>
                <div className="card-body p-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                        <h5 className="fw-bold text-dark mb-0">
                            <i className="fas fa-history me-2 text-primary"></i>
                            Riwayat Pemeriksaan
                        </h5>

                        {/* Search Filter */}
                        <div className="input-group" style={{ maxWidth: '300px' }}>
                             <span className="input-group-text bg-light border-end-0 rounded-start-pill ps-3">
                                <i className="fas fa-search text-muted"></i>
                            </span>
                            <input type="text" className="form-control bg-light border-start-0 rounded-end-pill" placeholder="Cari Riwayat..." style={{ fontSize: '0.9rem' }} />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table className="table table-bordered mb-0 align-middle table-hover" style={{ fontSize: '0.9rem', borderColor: '#e0e0e0' }}>
                            <thead className="bg-light" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr className="text-center">
                                    <th className="py-3 fw-bold text-dark ps-4" style={{ width: '50px' }}>No</th>
                                    <th className="py-3 fw-bold text-dark">Tipe</th>
                                    <th className="py-3 fw-bold text-dark">Diagnosa</th>
                                    <th className="py-3 fw-bold text-dark">Tanggal Pengujian</th>
                                    {/* <th className="py-3 fw-bold text-dark">Status</th> */} 
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { no: 1, tipe: 'Donor Darah', diagnosa: '-', tanggal: '23 September 2015' },
                                    { no: 2, tipe: 'Donor Darah', diagnosa: '-', tanggal: '10 Februari 2016' },
                                    { no: 3, tipe: 'Donor Darah', diagnosa: '-', tanggal: '08 Februari 2017' },
                                    { no: 4, tipe: 'Donor Darah', diagnosa: '-', tanggal: '24 Mei 2017' },
                                    { no: 5, tipe: 'Donor Darah', diagnosa: '-', tanggal: '30 Agustus 2017' },
                                    { no: 6, tipe: 'Donor Darah', diagnosa: '-', tanggal: '10 Desember 2019' },
                                    { no: 7, tipe: 'Donor Darah', diagnosa: '-', tanggal: '15 Maret 2020' },
                                    { no: 8, tipe: 'Donor Darah', diagnosa: '-', tanggal: '20 Juni 2021' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-bottom text-center">
                                        <td className="py-3 ps-4">{row.no}</td>
                                        <td className="py-3">{row.tipe}</td>
                                        <td className="py-3">{row.diagnosa || '-'}</td>
                                        <td className="py-3">{row.tanggal}</td>
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
