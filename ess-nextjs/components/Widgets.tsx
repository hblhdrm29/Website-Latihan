"use client";

import { useState } from 'react';

export function AgendaWidget() {
    return (
        <div className="custom-card">
            <div className="card-header-custom">
                <span>Agenda</span>
                <i className="fas fa-clipboard-list text-muted"></i>
            </div>
            
            <div className="agenda-date-header">
                Jadwal Hari Ini <br />
                <strong>{new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
            </div>
            
            <div className="agenda-item">
                <div className="ms-2">
                    <h6 className="mb-0">Meeting Client</h6>
                </div>
                <div className="agenda-time ms-auto"><i className="far fa-clock"></i> 09:00 AM <i className="fas fa-chevron-right ms-2"></i></div>
            </div>

            <div className="agenda-item">
                <div className="ms-2">
                    <h6 className="mb-0">Kesalahan Teknis</h6>
                </div>
                <div className="agenda-time ms-auto"><i className="far fa-clock"></i> 10:30 AM <i className="fas fa-chevron-right ms-2"></i></div>
            </div>

            <div className="agenda-item">
                <div className="ms-2">
                    <h6 className="mb-0">Meeting Tim</h6>
                </div>
                <div className="agenda-time ms-auto"><i className="far fa-clock"></i> 12:50 AM <i className="fas fa-chevron-right ms-2"></i></div>
            </div>

            <div className="text-end mt-auto">
                <a href="#" className="text-decoration-none small">Tracking Details &gt;</a>
            </div>
        </div>
    );
}

// Reusable Carousel Widget Logic could be extracted but keeping explicit for now
export function LemburWidget() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: 'Jumlah Pengajuan Lembur', value: '1', status: null },
        { title: 'Pengajuan Lembur Disetujui', value: '2', status: null }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="custom-card">
            <div className="card-header-custom">
                <span>Lembur</span>
                <i className="fas fa-clock text-muted"></i>
            </div>
            <div className="mb-2 fw-bold text-primary">Ajukan Lembur <i className="fas fa-plus-circle"></i></div>

            <div className="carousel slide text-center">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cuti-content border">
                            <h5 className="text-muted">{items[activeIndex].title}</h5>
                            <h3 className="text-primary">{items[activeIndex].value}</h3>
                        </div>
                    </div>
                </div>
                {/* Controls */}
                <button className="carousel-control-prev" type="button" onClick={prev}>
                    <span className="carousel-control-prev-icon bg-secondary rounded-circle p-2" aria-hidden="true" style={{ backgroundSize: '50%' }}></span>
                </button>
                <button className="carousel-control-next" type="button" onClick={next}>
                    <span className="carousel-control-next-icon bg-secondary rounded-circle p-2" aria-hidden="true" style={{ backgroundSize: '50%' }}></span>
                </button>

                 <div className="carousel-indicators position-relative mt-2">
                    {items.map((_, idx) => (
                        <button 
                            key={idx}
                            type="button" 
                            className={idx === activeIndex ? "active bg-primary" : "bg-primary"}
                            onClick={() => setActiveIndex(idx)}
                        ></button>
                    ))}
                </div>
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
        <div className="custom-card">
             <div className="card-header-custom">
                    <span>Cuti</span>
                    <i className="fas fa-umbrella-beach text-muted"></i>
                </div>
             <div className="mb-2 fw-bold text-primary">Ajukan Cuti <i className="fas fa-plus-circle"></i></div>
            
            <div className="carousel slide text-center">
                 <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cuti-content border">
                            <h5 className="text-muted">{items[activeIndex].title}</h5>
                            {items[activeIndex].type === 'number' ? 
                                <h3 className="text-primary">{items[activeIndex].value}</h3> :
                                <span className="status-badge status-approved">"{items[activeIndex].value}"</span>
                            }
                        </div>
                    </div>
                 </div>
                 
                <button className="carousel-control-prev" type="button" onClick={prev}>
                    <span className="carousel-control-prev-icon bg-secondary rounded-circle p-2" aria-hidden="true" style={{ backgroundSize: '50%' }}></span>
                </button>
                <button className="carousel-control-next" type="button" onClick={next}>
                    <span className="carousel-control-next-icon bg-secondary rounded-circle p-2" aria-hidden="true" style={{ backgroundSize: '50%' }}></span>
                </button>
                 
                 <div className="carousel-indicators position-relative mt-2">
                    {items.map((_, idx) => (
                        <button 
                            key={idx}
                            type="button" 
                            className={idx === activeIndex ? "active bg-primary" : "bg-primary"}
                            onClick={() => setActiveIndex(idx)}
                        ></button>
                    ))}
                </div>
            </div>
         </div>
    );
}

export function PerizinanWidget() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: 'Permohonan Izin', value: null, type: 'text' },
        { title: 'Permohonan Izin', value: 'Disetujui', type: 'status' }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="custom-card">
             <div className="card-header-custom">
                    <span>Perizinan</span>
                    <i className="fas fa-envelope text-muted"></i>
                </div>
             <div className="mb-2 fw-bold text-primary" style={{ cursor: 'pointer' }}>Ajukan Izin <i className="fas fa-plus-circle"></i></div>
            
            <div className="carousel slide text-center">
                 <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cuti-content border">
                            <h5 className="text-muted">{items[activeIndex].title}</h5>
                            {items[activeIndex].value && (
                                <span className="status-badge status-approved">"{items[activeIndex].value}"</span>
                            )}
                        </div>
                    </div>
                 </div>
                 
                 <button className="carousel-control-prev" type="button" onClick={prev}>
                    <span className="carousel-control-prev-icon bg-secondary rounded-circle p-2" aria-hidden="true" style={{ backgroundSize: '50%' }}></span>
                </button>
                <button className="carousel-control-next" type="button" onClick={next}>
                    <span className="carousel-control-next-icon bg-secondary rounded-circle p-2" aria-hidden="true" style={{ backgroundSize: '50%' }}></span>
                </button>

                 <div className="carousel-indicators position-relative mt-2">
                    {items.map((_, idx) => (
                        <button 
                            key={idx}
                            type="button" 
                            className={idx === activeIndex ? "active bg-primary" : "bg-primary"}
                            onClick={() => setActiveIndex(idx)}
                        ></button>
                    ))}
                </div>
            </div>
         </div>
    );
}
