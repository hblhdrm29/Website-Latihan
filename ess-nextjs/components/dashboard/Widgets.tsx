"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function AgendaWidget() {
    const [dateString, setDateString] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    const [items, setItems] = useState([
        { title: 'Meeting Client', time: '09:00 AM', type: 'meeting', status: 'pending' },
        { title: 'Kesalahan Teknis', time: '10:30 AM', type: 'issue', status: 'pending' },
        { title: 'Meeting Tim', time: '12:50 AM', type: 'meeting', status: 'pending' }
    ]);

    const setStatus = (index: number, newStatus: string) => {
        setItems(prevItems => prevItems.map((item, i) => 
            i === index ? { ...item, status: newStatus } : item
        ));
    };

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    useEffect(() => {
        setDateString(new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [items.length]);

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const bgImages = [
        `${basePath}/assets/img/p1_wide.png`,
        `${basePath}/assets/img/p2.jpg`,
        `${basePath}/assets/img/p3.jpeg`
    ];

    return (
        <div className="h-100 position-relative agenda-widget-container" style={{ minHeight: '320px' }}>
            <style jsx>{`
                .agenda-btn-hadir:hover {
                    background-color: #198754 !important;
                    color: white !important;
                    transform: scale(1.1);
                }
                .agenda-btn-tidak:hover {
                    background-color: #dc3545 !important;
                    color: white !important;
                    transform: scale(1.1);
                }
                .agenda-tracking-pill {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .agenda-tracking-pill:hover {
                    background-color: #0d6efd !important; /* primary blue */
                    opacity: 1 !important;
                }
                
                .nav-arrow-btn {
                    width: 24px;
                    height: 24px;
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(0,0,0,0.1);
                    color: #555;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    transition: all 0.2s ease;
                    z-index: 20;
                    padding: 0;
                }
                .nav-arrow-btn:hover {
                    background: #fff;
                    color: #0d6efd; /* Primary blue on hover */
                    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
                    transform: scale(1.1);
                }
                .nav-arrow-left {
                    transform: translate(-50%, -50%);
                }
                .nav-arrow-left:hover {
                    transform: translate(-50%, -50%) scale(1.1);
                }
                .nav-arrow-right {
                    transform: translate(50%, -50%);
                }
                .nav-arrow-right:hover {
                    transform: translate(50%, -50%) scale(1.1);
                }
            `}</style>
            
            {/* Main Visual Card (Rounded & Overflow Hidden) */}
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100 position-relative">
                {/* Background Image Layer */}
                <div 
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ 
                        backgroundImage: `url(${bgImages[activeIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'background-image 1s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                />
                
                {/* Dark Gradient Overlay for Contrast */}
                <div className="position-absolute top-0 start-0 w-100 h-100" 
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))' }}>
                </div>

                {/* Content Container (Vertical Layout) */}
                <div className="position-relative h-100 d-flex flex-column justify-content-between p-4 text-white">
                    
                    {/* Header: Date Structure */}
                    <div className="animate__animated animate__fadeInDown">
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="badge bg-white bg-opacity-25 border border-white border-opacity-25 rounded-pill px-3 py-1 fw-bold d-flex align-items-center gap-2" style={{ backdropFilter: 'blur(4px)' }}>
                                <span className="text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '2px' }} suppressHydrationWarning>
                                    {new Date().toLocaleDateString('id-ID', { weekday: 'long' })}
                                </span>
                            </span>
                        </div>
                        
                        <div className="d-flex align-items-end" suppressHydrationWarning>
                            <h1 className="fw-bold mb-0 display-3 lh-1" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                                {new Date().getDate()}
                            </h1>
                            <div className="ms-3 mb-1" style={{ lineHeight: '1.2' }}>
                                <div className="fs-5 fw-bold text-uppercase" style={{ letterSpacing: '0.5px' }}>{new Date().toLocaleDateString('id-ID', { month: 'long' })}</div>
                                <div className="fs-6 opacity-75 font-monospace">{new Date().getFullYear()}</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Glass Panel - Slider */}
                    <div className="glass-panel p-3 rounded-4 mt-auto position-relative overflow-hidden" 
                        style={{ 
                            background: 'rgba(255, 255, 255, 0.15)', 
                            backdropFilter: 'blur(25px)', 
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)'
                        }}>
                        
                        {/* Active Item Content */}
                        <div key={activeIndex} className="animate__animated animate__fadeInUp faster">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="badge bg-white text-dark rounded-pill px-3 py-1 fw-bold shadow-sm" style={{ fontSize: '0.75rem' }}>
                                    {items[activeIndex].time}
                                </span>
                                {/* Check Buttons (Hadir/Tidak) */}
                                <div className="d-flex gap-2">
                                    <button 
                                        suppressHydrationWarning
                                        onClick={() => setStatus(activeIndex, 'hadir')} 
                                        className={`btn btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center transition-all agenda-btn-hadir ${items[activeIndex].status === 'hadir' ? 'bg-success text-white' : 'bg-white bg-opacity-25 text-white'}`} 
                                        style={{ width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.3)' }}
                                        title="Hadir"
                                    >
                                        <i className="fas fa-check" style={{ fontSize: '0.8rem' }}></i>
                                    </button>
                                    <button 
                                        suppressHydrationWarning
                                        onClick={() => setStatus(activeIndex, 'tidak_hadir')} 
                                        className={`btn btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center transition-all agenda-btn-tidak ${items[activeIndex].status === 'tidak_hadir' ? 'bg-danger text-white' : 'bg-white bg-opacity-25 text-white'}`} 
                                        style={{ width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.3)' }}
                                        title="Tidak Hadir"
                                    >
                                        <i className="fas fa-times" style={{ fontSize: '0.8rem' }}></i>
                                    </button>
                                </div>
                            </div>
                            <h4 className="fw-bold mb-1 text-truncate" title={items[activeIndex].title} style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>{items[activeIndex].title}</h4>
                            
                            <div className="d-flex justify-content-between align-items-end mt-2">
                                <div className="d-flex gap-1">
                                    {items.map((_, idx) => (
                                        <div 
                                            key={idx}
                                            className={`rounded-pill transition-all cursor-pointer ${idx === activeIndex ? 'bg-white' : 'bg-white opacity-25'}`}
                                            style={{ height: '4px', width: idx === activeIndex ? '20px' : '6px' }}
                                            onClick={() => setActiveIndex(idx)}
                                        />
                                    ))}
                                </div>
                                
                                <Link href="/?view=agenda" className="text-decoration-none">
                                    <div className="text-white opacity-75 hover-opacity-100 transition-all small d-flex align-items-center gap-1 bg-dark bg-opacity-25 px-2 py-1 rounded-pill agenda-tracking-pill">
                                        <span>Tracking Details</span>
                                        <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Navigation Arrows - Placed Outside Overflow Hidden */}
            <button 
                onClick={prev} 
                className="btn rounded-circle position-absolute top-50 start-0 nav-arrow-btn nav-arrow-left d-flex align-items-center justify-content-center"
            >
                <i className="fas fa-chevron-left" style={{ fontSize: '0.6rem' }}></i>
            </button>
            <button 
                onClick={next} 
                className="btn rounded-circle position-absolute top-50 end-0 nav-arrow-btn nav-arrow-right d-flex align-items-center justify-content-center"
            >
                <i className="fas fa-chevron-right" style={{ fontSize: '0.6rem' }}></i>
            </button>
        </div>
    );
}

export function LemburWidget() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: 'Jumlah Pengajuan Lembur', value: '1', type: 'number' },
        { title: 'Daftar Pengajuan Lembur', value: '1', type: 'number' },
        { title: 'Pengajuan Lembur', value: 'Disetujui', type: 'status' }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="card border-0 shadow-sm rounded-4 p-2 h-100" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
                <div className="d-flex flex-column">
                    <h6 className="fw-bold mb-0" style={{ fontSize: '0.8rem' }}>Lembur</h6>
                </div>
                <i className="fas fa-clock text-dark"></i>
            </div>
            
            <div className="mb-2 d-flex flex-column align-items-center gap-1">
                <a href="#" className="text-primary text-decoration-none fw-bold border rounded bg-white shadow-sm px-3 py-1" style={{ fontSize: '0.65rem' }}>
                    Ajukan Lembur
                </a>
                <a href="#" className="text-primary text-decoration-none border rounded bg-white shadow-sm d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '0.65rem' }}>
                    <i className="fas fa-plus"></i>
                </a>
            </div>

            <div className="carousel slide carousel-dark h-100 d-flex flex-column justify-content-center">
                <div className="carousel-inner text-center">
                     <div className="carousel-item active">
                        <div key={activeIndex} className="py-2 carousel-slide-content border rounded-3 p-2 bg-white mx-2 my-2 d-flex flex-column justify-content-center" style={{ boxShadow: '0 0 15px rgba(0, 141, 207, 0.2)', minHeight: '90px' }}>
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
                

                <button className="carousel-control-prev custom-carousel-nav" type="button" onClick={prev} style={{ width: '10%' }} suppressHydrationWarning>
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-carousel-nav" type="button" onClick={next} style={{ width: '10%' }} suppressHydrationWarning>
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    <span className="visually-hidden">Next</span>
                </button>

                <div className="d-flex justify-content-center gap-2 mt-3 pb-2">
                    {items.map((_, index) => (
                        <div 
                            key={index}
                            className={`rounded-circle ${index === activeIndex ? 'bg-primary' : 'bg-secondary-subtle'}`}
                            style={{ width: '8px', height: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                            onClick={() => setActiveIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-2 text-end">
                <Link href="/?view=lembur" className="text-secondary text-decoration-none fw-semibold tracking-details-link" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="fas fa-eye ms-1" style={{ fontSize: '0.7rem' }}></i>
                </Link>
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

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="card border-0 shadow-sm rounded-4 p-2 h-100" style={{ backgroundColor: '#f8f9fa' }}>
             <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
                <div className="d-flex flex-column">
                    <h6 className="fw-bold mb-0" style={{ fontSize: '0.8rem' }}>Cuti</h6>
                </div>
                <i className="fas fa-plane-departure text-dark"></i>
            </div>
            <div className="mb-2 d-flex flex-column align-items-center gap-1">
                <a href="#" className="text-primary text-decoration-none fw-bold border rounded bg-white shadow-sm px-3 py-1" style={{ fontSize: '0.65rem' }}>
                    Ajukan Cuti
                </a>
                <a href="#" className="text-primary text-decoration-none border rounded bg-white shadow-sm d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '0.65rem' }}>
                    <i className="fas fa-plus"></i>
                </a>
            </div>
            
            <div className="carousel slide carousel-dark h-100 d-flex flex-column justify-content-center">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <div key={activeIndex} className="py-2 carousel-slide-content border rounded-3 p-2 bg-white mx-2 my-2 d-flex flex-column justify-content-center" style={{ boxShadow: '0 0 15px rgba(0, 141, 207, 0.2)', minHeight: '90px' }}>
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
                

                <button className="carousel-control-prev custom-carousel-nav" type="button" onClick={prev} style={{ width: '10%' }} suppressHydrationWarning>
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-carousel-nav" type="button" onClick={next} style={{ width: '10%' }} suppressHydrationWarning>
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    <span className="visually-hidden">Next</span>
                </button>

                <div className="d-flex justify-content-center gap-2 mt-3 pb-2">
                    {items.map((_, index) => (
                        <div 
                            key={index}
                            className={`rounded-circle ${index === activeIndex ? 'bg-primary' : 'bg-secondary-subtle'}`}
                            style={{ width: '8px', height: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                            onClick={() => setActiveIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-2 text-end">
                <Link href="/?view=cuti" className="text-secondary text-decoration-none fw-semibold tracking-details-link" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="fas fa-eye ms-1" style={{ fontSize: '0.7rem' }}></i>
                </Link>
            </div>
         </div>
    );
}

export function PerizinanWidget() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: 'Permohonan Izin', value: '1', type: 'number' },
        { title: 'Daftar Pengajuan Izin', value: '1', type: 'number' },
        { title: 'Permohonan Izin', value: 'Disetujui', type: 'status' }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="card border-0 shadow-sm rounded-4 p-2 h-100" style={{ backgroundColor: '#f8f9fa' }}>
             <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
                <div className="d-flex flex-column">
                    <h6 className="fw-bold mb-0" style={{ fontSize: '0.8rem' }}>Perizinan</h6>
                </div>
                <i className="fas fa-envelope-open-text text-dark"></i>
            </div>
            <div className="mb-2 d-flex flex-column align-items-center gap-1">
                <a href="#" className="text-primary text-decoration-none fw-bold border rounded bg-white shadow-sm px-3 py-1" style={{ fontSize: '0.65rem' }}>
                    Ajukan Izin
                </a>
                <a href="#" className="text-primary text-decoration-none border rounded bg-white shadow-sm d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '0.65rem' }}>
                    <i className="fas fa-plus"></i>
                </a>
            </div>
            
            <div className="carousel slide carousel-dark h-100 d-flex flex-column justify-content-center">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <div key={activeIndex} className="py-2 carousel-slide-content border rounded-3 p-2 bg-white mx-2 my-2 d-flex flex-column justify-content-center" style={{ boxShadow: '0 0 15px rgba(0, 141, 207, 0.2)', minHeight: '90px' }}>
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
                

                <button className="carousel-control-prev custom-carousel-nav" type="button" onClick={prev} style={{ width: '10%' }} suppressHydrationWarning>
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-carousel-nav" type="button" onClick={next} style={{ width: '10%' }} suppressHydrationWarning>
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    <span className="visually-hidden">Next</span>
                </button>

                <div className="d-flex justify-content-center gap-2 mt-3 pb-2">
                    {items.map((_, index) => (
                        <div 
                            key={index}
                            className={`rounded-circle ${index === activeIndex ? 'bg-primary' : 'bg-secondary-subtle'}`}
                            style={{ width: '8px', height: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                            onClick={() => setActiveIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-2 text-end">
                <Link href="/?view=izin" className="text-secondary text-decoration-none fw-semibold tracking-details-link" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="fas fa-eye ms-1" style={{ fontSize: '0.7rem' }}></i>
                </Link>
            </div>
         </div>
    );
}

export function DinasWidget() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { title: 'SPPD Aktif', value: '1', type: 'number' },
        { title: 'Uang Saku & Akomodasi', value: 'Proses', type: 'status' },
        { title: 'Laporan Kegiatan', value: 'Pending', type: 'status' }
    ];

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="card border-0 shadow-sm rounded-4 p-2 h-100" style={{ backgroundColor: '#f8f9fa' }}>
             <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
                <div className="d-flex flex-column">
                    <h6 className="fw-bold mb-0" style={{ fontSize: '0.8rem' }}>Dinas</h6>
                </div>
                <i className="fas fa-briefcase text-dark"></i>
            </div>
            <div className="mb-2 d-flex flex-column align-items-center gap-1">
                <a href="#" className="text-primary text-decoration-none fw-bold border rounded bg-white shadow-sm px-3 py-1" style={{ fontSize: '0.65rem' }}>
                    Ajukan Dinas
                </a>
                <a href="#" className="text-primary text-decoration-none border rounded bg-white shadow-sm d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '0.65rem' }}>
                    <i className="fas fa-plus"></i>
                </a>
            </div>
            
            <div className="carousel slide carousel-dark h-100 d-flex flex-column justify-content-center">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <div key={activeIndex} className="py-2 carousel-slide-content border rounded-3 p-2 bg-white mx-2 my-2 d-flex flex-column justify-content-center" style={{ boxShadow: '0 0 15px rgba(0, 141, 207, 0.2)', minHeight: '90px' }}>
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
                

                <button className="carousel-control-prev custom-carousel-nav" type="button" onClick={prev} style={{ width: '10%' }} suppressHydrationWarning>
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next custom-carousel-nav" type="button" onClick={next} style={{ width: '10%' }} suppressHydrationWarning>
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    <span className="visually-hidden">Next</span>
                </button>

                <div className="d-flex justify-content-center gap-2 mt-3 pb-2">
                    {items.map((_, index) => (
                        <div 
                            key={index}
                            className={`rounded-circle ${index === activeIndex ? 'bg-primary' : 'bg-secondary-subtle'}`}
                            style={{ width: '8px', height: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                            onClick={() => setActiveIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-2 text-end">
                <a href="#" className="text-secondary text-decoration-none fw-semibold tracking-details-link" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="fas fa-eye ms-1" style={{ fontSize: '0.7rem' }}></i>
                </a>
            </div>
         </div>
    );
}