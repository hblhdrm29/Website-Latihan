"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function AgendaWidget() {
    const [dateString, setDateString] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    const [items, setItems] = useState([
        { title: 'Meeting Client', time: '09:00 AM', type: 'meeting', checked: false },
        { title: 'Kesalahan Teknis', time: '10:30 AM', type: 'issue', checked: false },
        { title: 'Meeting Tim', time: '12:50 AM', type: 'meeting', checked: false }
    ]);

    const toggleCheck = (index: number) => {
        setItems(prevItems => prevItems.map((item, i) => 
            i === index ? { ...item, checked: !item.checked } : item
        ));
    };

    const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    useEffect(() => {
        setDateString(new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [items.length]);

    const bgImages = [
        '/assets/img/p1.jpg',
        '/assets/img/p2.jpg',
        '/assets/img/p3.jpeg'
    ];

    return (
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ 
            backgroundImage: `url(${bgImages[activeIndex]})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center 25%',
            color: 'white',
            transition: 'background-image 0.5s ease-in-out'
        }}>
            <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
                <div className="d-flex flex-column">
                    <h6 className="fw-bold mb-0" style={{ fontSize: '0.8rem' }}>Agenda</h6>
                </div>
                <i className="fas fa-calendar-alt text-dark"></i>
            </div>
            
            <div className="text-white fw-bold mb-2" style={{ fontSize: '2rem' }}>
                Jadwal Hari Ini <br />
                <span className="fw-bolder text-white" suppressHydrationWarning>
                    {dateString}
                </span>
            </div>
            
            <div className="carousel slide carousel-dark h-100 d-flex flex-column justify-content-center">
                <div className="carousel-inner text-start">
                    <div className="carousel-item active">
                        <div key={activeIndex} className="carousel-slide-content rounded-4 p-2 my-1 d-flex flex-column justify-content-center align-items-start animate__animated animate__fadeInRight" style={{ minHeight: 'auto', width: 'fit-content', backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '0.5px solid rgba(255, 255, 255, 0.3)' }}>
                            <h6 className="text-white opacity-75 mb-1" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>{items[activeIndex].time}</h6>
                            <h4 className="fw-bold text-white mb-1 text-truncate" style={{ fontSize: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>{items[activeIndex].title}</h4>
                            <div className="mt-1">
                                <div 
                                    className="d-flex align-items-center justify-content-center px-2 py-1 rounded-pill" 
                                    style={{ 
                                        backgroundColor: items[activeIndex].checked ? 'rgba(25, 135, 84, 0.8)' : 'rgba(255, 255, 255, 0.2)', 
                                        cursor: 'pointer',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        transition: 'all 0.2s ease',
                                        width: 'fit-content'
                                    }}
                                    onClick={() => toggleCheck(activeIndex)}
                                >
                                    <div className={`rounded-circle d-flex align-items-center justify-content-center bg-white ${items[activeIndex].checked ? 'text-success' : 'text-secondary'}`} style={{ width: '13px', height: '13px' }}>
                                        {items[activeIndex].checked && <i className="fas fa-check" style={{ fontSize: '0.6rem' }}></i>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-2 px-2">
                    <button className="btn btn-sm text-secondary custom-carousel-nav" type="button" onClick={prev} style={{ fontSize: '0.8rem' }}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <div className="d-flex gap-1">
                        {items.map((_, index) => (
                            <div 
                                key={index}
                                className={`rounded-circle ${index === activeIndex ? 'bg-primary' : 'bg-secondary-subtle'}`}
                                style={{ width: '6px', height: '6px', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                onClick={() => setActiveIndex(index)}
                            ></div>
                        ))}
                    </div>

                    <button className="btn btn-sm text-secondary custom-carousel-nav" type="button" onClick={next} style={{ fontSize: '0.8rem' }}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div className="mt-auto pt-2 d-flex justify-content-end">
                <Link href="/?view=agenda" className="text-decoration-none">
                    <div className="tracking-button text-white rounded-3 p-1 px-1 text-center shadow-sm hover-overlay" style={{ transition: 'all 0.2s', backgroundColor: 'rgba(108, 117, 125, 0.8)' }}>
                        <style jsx>{`
                            .tracking-button:hover {
                                background-color: var(--bs-primary) !important;
                            }
                        `}</style>
                        <span className="fw-semibold" style={{ fontSize: '0.75rem' }}>Tracking Details</span>
                        <i className="fas fa-eye ms-2" style={{ fontSize: '0.7rem' }}></i>
                    </div>
                </Link>
            </div>
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