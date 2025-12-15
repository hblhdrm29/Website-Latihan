"use client";

import { useState } from 'react';

export function AgendaWidget() {
    return (
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Agenda</h6>
                <i className="bi bi-clipboard-data text-secondary fs-6"></i>
            </div>
            
            <div className="text-muted small mb-2" style={{ fontSize: '0.8rem' }}>
                Jadwal Hari Ini <br />
                <span className="fw-semibold text-dark">
                    {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
            </div>
            
            <div className="d-flex flex-column gap-2 overflow-auto" style={{ maxHeight: '150px' }}>
                {[
                    { title: 'Meeting Client', time: '09:00 AM' },
                    { title: 'Kesalahan Teknis', time: '10:30 AM' },
                    { title: 'Meeting Tim', time: '12:50 AM' }
                ].map((item, index) => (
                    <div key={index} className="d-flex align-items-center bg-white p-2 rounded-3 shadow-sm border border-light">
                        <div className="flex-grow-1">
                            <h6 className="mb-0 fw-semibold text-dark" style={{ fontSize: '0.85rem' }}>{item.title}</h6>
                        </div>
                        <div className="text-secondary small d-flex align-items-center gap-1" style={{ fontSize: '0.75rem' }}>
                            <i className="bi bi-clock" style={{ fontSize: '0.7rem' }}></i> {item.time}
                        </div>
                        <i className="bi bi-chevron-right ms-1 text-muted" style={{ fontSize: '0.7rem' }}></i>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-2 text-end">
                <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="bi bi-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                </a>
            </div>
        </div>
    );
}


export function LemburWidget() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: 'Jumlah Pengajuan Lembur', value: '1' },
        { title: 'Pengajuan Lembur Disetujui', value: '2' }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">Lembur</h6>
                <i className="bi bi-clock-history text-secondary fs-6"></i>
            </div>
            
            <div className="mb-2">
                <a href="#" className="text-primary text-decoration-none fw-bold small" style={{ fontSize: '0.8rem' }}>
                    Ajukan Lembur <i className="bi bi-plus-circle-fill ms-1"></i>
                </a>
            </div>

            <div className="carousel slide carousel-dark h-100 d-flex flex-column justify-content-center">
                <div className="carousel-inner text-center">
                     <div className="carousel-item active">
                        <div className="py-2">
                            <h6 className="text-secondary mb-1" style={{ fontSize: '0.85rem' }}>{items[activeIndex].title}</h6>
                            <h3 className="fw-bold text-primary mb-0">{items[activeIndex].value}</h3>
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" onClick={prev} style={{ width: '10%', opacity: 0.5 }}>
                    <span className="carousel-control-prev-icon" style={{ width: '1rem', height: '1rem' }} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={next} style={{ width: '10%', opacity: 0.5 }}>
                    <span className="carousel-control-next-icon" style={{ width: '1rem', height: '1rem' }} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="mt-auto pt-2 text-end">
                <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="bi bi-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                </a>
            </div>
        </div>
    );
}

export function CutiWidget() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: 'Jumlah Pengajuan Cuti', value: '1', type: 'number' },
        { title: 'Daftar Pengajuan Cuti', value: '1', type: 'number' },
        { title: 'Pengajuan Cuti', value: 'Disetujui', type: 'status' }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
             <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">Cuti</h6>
                <i className="bi bi-umbrella text-secondary fs-6"></i>
            </div>
            <div className="mb-2">
                <a href="#" className="text-primary text-decoration-none fw-bold small" style={{ fontSize: '0.8rem' }}>
                    Ajukan Cuti <i className="bi bi-plus-circle-fill ms-1"></i>
                </a>
            </div>
            
            <div className="carousel slide carousel-dark h-100 d-flex flex-column justify-content-center">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <div className="py-2">
                            <h6 className="text-secondary mb-1" style={{ fontSize: '0.85rem' }}>{items[activeIndex].title}</h6>
                            {items[activeIndex].type === 'number' ? 
                                <h3 className="fw-bold text-primary mb-0">{items[activeIndex].value}</h3> :
                                <span className="badge bg-success-subtle text-success fs-6 px-3 py-2 rounded-pill mt-1">
                                    {items[activeIndex].value}
                                </span>
                            }
                        </div>
                    </div>
                </div>
                
                 <button className="carousel-control-prev" type="button" onClick={prev} style={{ width: '10%', opacity: 0.5 }}>
                    <span className="carousel-control-prev-icon" style={{ width: '1rem', height: '1rem' }} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={next} style={{ width: '10%', opacity: 0.5 }}>
                    <span className="carousel-control-next-icon" style={{ width: '1rem', height: '1rem' }} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="mt-auto pt-2 text-end">
                <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="bi bi-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                </a>
            </div>
         </div>
    );
}

export function PerizinanWidget() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: 'Permohonan Izin', value: '1', type: 'number' },
        { title: 'Permohonan Izin', value: 'Disetujui', type: 'status' }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
             <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">Perizinan</h6>
                <i className="bi bi-envelope text-secondary fs-6"></i>
            </div>
            <div className="mb-2">
                <a href="#" className="text-primary text-decoration-none fw-bold small" style={{ fontSize: '0.8rem' }}>
                    Ajukan Izin <i className="bi bi-plus-circle-fill ms-1"></i>
                </a>
            </div>
            
            <div className="carousel slide carousel-dark h-100 d-flex flex-column justify-content-center">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <div className="py-2">
                            <h6 className="text-secondary mb-1" style={{ fontSize: '0.85rem' }}>{items[activeIndex].title}</h6>
                            {items[activeIndex].type === 'number' ? (
                                <h3 className="fw-bold text-primary mb-0">{items[activeIndex].value}</h3>
                            ) : (
                                <span className="badge bg-success-subtle text-success fs-6 px-3 py-2 rounded-pill mt-1">
                                    {items[activeIndex].value}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" onClick={prev} style={{ width: '10%', opacity: 0.5 }}>
                    <span className="carousel-control-prev-icon" style={{ width: '1rem', height: '1rem' }} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={next} style={{ width: '10%', opacity: 0.5 }}>
                    <span className="carousel-control-next-icon" style={{ width: '1rem', height: '1rem' }} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="mt-auto pt-2 text-end">
                <a href="#" className="text-primary text-decoration-none fw-semibold" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="bi bi-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                </a>
            </div>
         </div>
    );
}
