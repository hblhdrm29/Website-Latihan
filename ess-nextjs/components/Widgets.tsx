import { useState, useEffect } from 'react';

export function AgendaWidget() {
    return (
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="d-flex justify-content-between align-items-center mb-3 bg-white text-dark p-2 rounded shadow-sm border">
                <div className="d-flex flex-column">
                    <h6 className="fw-bold mb-0" style={{ fontSize: '0.8rem' }}>Agenda</h6>
                </div>
                <i className="fas fa-calendar-alt text-dark"></i>
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
                <a href="#" className="text-secondary text-decoration-none fw-semibold tracking-details-link" style={{ fontSize: '0.75rem' }}>
                    Tracking Details <i className="fas fa-eye ms-1" style={{ fontSize: '0.7rem' }}></i>
                </a>
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
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
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
                        <div key={activeIndex} className="py-2 carousel-slide-content border rounded-3 p-3 bg-white mx-2 my-2 d-flex flex-column justify-content-center" style={{ boxShadow: '0 0 15px rgba(0, 141, 207, 0.2)', minHeight: '110px' }}>
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
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
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
                        <div key={activeIndex} className="py-2 carousel-slide-content border rounded-3 p-3 bg-white mx-2 my-2 d-flex flex-column justify-content-center" style={{ boxShadow: '0 0 15px rgba(0, 141, 207, 0.2)', minHeight: '110px' }}>
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
        <div className="card border-0 shadow-sm rounded-4 p-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
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
                        <div key={activeIndex} className="py-2 carousel-slide-content border rounded-3 p-3 bg-white mx-2 my-2 d-flex flex-column justify-content-center" style={{ boxShadow: '0 0 15px rgba(0, 141, 207, 0.2)', minHeight: '110px' }}>
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
