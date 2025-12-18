"use client";

import React from 'react';

interface ScheduleEvent {
    day: number;
    title: string;
    time: string;
    color?: string;
}

interface ScheduleRow {
    time: string;
    events?: ScheduleEvent[];
    rowSpan?: boolean;
    isHalf?: boolean;
}

export default function AgendaView({ onBack }: { onBack?: () => void }) {
    const [activeDay, setActiveDay] = React.useState(1);

    return (
        <div className="container-fluid px-3">
             {/* Header */}
            <div className="d-flex align-items-center gap-3 mb-1">
                <button 
                    onClick={onBack}
                    className="btn btn-light border rounded-circle shadow-sm"
                    style={{ width: '40px', height: '40px' }}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>
                <div>
                    <h2 className="fw-bold mb-0" style={{ color: '#20288E' }}>Agenda</h2>
                </div>
            </div>
            
            <div className="row g-4">
                {/* Left Sidebar */}
                <div className="col-12 col-lg-4">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-3">
                            {/* View Toggle (Segmented Control Style) */}
                            <div className="bg-light rounded-3 p-1 d-flex mb-4">
                                <button className="btn btn-sm flex-fill rounded-3 bg-white text-dark shadow-sm fw-bold border-0" style={{ fontSize: '0.75rem' }}>Day</button>
                                <button className="btn btn-sm flex-fill rounded-3 text-secondary fw-medium hover-bg-light border-0" style={{ fontSize: '0.75rem' }}>Week</button>
                                <button className="btn btn-sm flex-fill rounded-3 text-secondary fw-medium hover-bg-light border-0" style={{ fontSize: '0.75rem' }}>Month</button>
                            </div>

                            {/* Mini Calendar (Gray Box Style) */}
                            <div className="mb-4 bg-light rounded-4 p-3 border-0">
                                <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                                    <h6 className="fw-bold mb-0 text-dark small">December 2025</h6>
                                    <div className="d-flex gap-2">
                                        <i className="fas fa-chevron-left small text-secondary cursor-pointer"></i>
                                        <i className="fas fa-chevron-right small text-secondary cursor-pointer"></i>
                                    </div>
                                </div>
                                <div className="d-grid gap-1 justify-content-center" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
                                    {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, i) => (
                                        <div key={day} className={`small fw-bold py-1 text-center ${i === 0 || i === 6 ? 'text-danger' : 'text-secondary'}`} style={{ fontSize: '0.7rem' }}>{day}</div>
                                    ))}
                                    {/* Previous Month */}
                                    {[30].map(d => <div key={`prev-${d}`} className="text-muted opacity-25 p-1 small text-center">{d}</div>)}
                                    {/* Current Month */}
                                    {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                                        <div 
                                            key={day} 
                                            onClick={() => setActiveDay(day)}
                                            className={`
                                                p-1 rounded-circle cursor-pointer transition-all d-flex align-items-center justify-content-center mx-auto
                                                ${activeDay === day ? 'bg-primary text-white shadow-sm' : `hover-bg-blue ${(day % 7 === 6 || day % 7 === 0) ? 'text-danger' : 'text-dark'}`}
                                            `}  
                                            style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}
                                        >
                                            {day}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Upcoming Schedule List */}
                            <h6 className="fw-bold mb-3 px-1">Upcoming Schedule</h6>
                            <div className="d-flex flex-column gap-2 px-1 custom-scrollbar" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                {[
                                    { title: 'Kesalahan Teknis', time: '10:30-11:30' },
                                    { title: 'Meeting Tim', time: '12:00-13:00' },
                                    { title: 'Kesalahan Teknis', time: '08:00-09:00' },
                                    { title: 'Kesalahan Teknis', time: '11:30-12:30' },
                                    { title: 'Project Review', time: '09:00-10:00' },
                                    { title: 'Meeting Tim', time: '12:00-13:00' },
                                    { title: 'Kesalahan Teknis', time: '11:30-12:30' },
                                    
                                ].map((item, idx) => (
                                    <div key={idx} className="p-1 rounded-4 bg-light shadow-sm d-flex justify-content-between align-items-center mb-1 border-0">
                                        <div className="text-truncate" style={{ maxWidth: '160px' }}>
                                            <h6 className="fw-bold mb-1 text-dark text-truncate" style={{ fontSize: '0.8rem' }}>{item.title}</h6>
                                            <span className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>{item.time}</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fas fa-ellipsis-v text-secondary small cursor-pointer p-2"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content (Calendar Grid) */}
                <div className="col-12 col-lg-8 h-100">
                    <div className="h-100 d-flex flex-column">
                        
                        {/* Toolbar (Outside Grid) */}
                        <div className="mb-3 d-flex flex-wrap gap-2 align-items-end justify-content-between">
                            <div className="position-relative mb-1" style={{ width: '200px' }}>
                                <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" style={{ fontSize: '0.75rem' }}></i>
                                <input type="text" className="form-control form-control-sm rounded-pill bg-white border-0 ps-5 text-secondary shadow-sm" placeholder="Search.." style={{ fontSize: '0.8rem' }} />
                            </div>
                            
                            <div className="d-flex flex-column align-items-end gap-2">
                                <div className="d-flex align-items-center bg-white rounded-pill px-2 py-0 shadow-sm border-0">
                                    <button className="btn btn-sm btn-white rounded-circle shadow-none text-secondary p-1"><i className="fas fa-chevron-left" style={{ fontSize: '0.7rem' }}></i></button>
                                    <span className="fw-bold text-dark mx-2" style={{ fontSize: '0.8rem' }}>December, 2025</span>
                                    <button className="btn btn-sm btn-white rounded-circle shadow-none text-secondary p-1"><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i></button>
                                </div>

                                <div className="d-flex gap-2">
                                    <button className="btn btn-sm btn-white rounded-pill px-3 d-flex align-items-center gap-1 shadow-sm text-secondary border-0" style={{ fontSize: '0.75rem' }}>
                                        Filter <i className="fas fa-filter" style={{ fontSize: '0.7rem' }}></i>
                                    </button>
                                    <button className="btn btn-sm btn-success rounded-pill px-3 fw-bold shadow-sm d-flex align-items-center gap-1 text-white border-0" style={{ background: '#4cd964', fontSize: '0.75rem' }}>
                                        <i className="fas fa-plus" style={{ fontSize: '0.7rem' }}></i> Add Schedule
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Calendar Container */}
                        <div className="card border-0 shadow-sm rounded-4 flex-grow-1 overflow-hidden">
                            <div className="card-body p-3 h-100 d-flex flex-column">
                                <div className="flex-grow-1 overflow-auto custom-scrollbar position-relative rounded-3 border" style={{ maxHeight: '500px' }}>
                                    <table className="table mb-0 text-center align-middle bg-white w-100" style={{ tableLayout: 'fixed' }}>
                                        <thead className="sticky-top z-3">
                                            <tr>
                                                <th className="py-3 border-end border-bottom bg-secondary-subtle text-secondary fw-bold small" style={{ width: '90px', fontSize: '0.8rem' }}>GMT + 7</th>
                                                {['MON 1', 'TUE 2', 'WED 3', 'THU 4', 'FRI 5'].map((h, i) => (
                                                    <th key={i} className="py-3 border-end border-bottom bg-light text-secondary fw-bold" style={{ fontSize: '0.85rem' }}>{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {([
                                                { time: '08:00 AM' },
                                                { time: '09:00 AM', events: [{ day: 2, title: 'Kesalahan Teknis', time: '08:00-09:00' }] },
                                                { time: '10:00 AM', events: [{ day: 1, title: 'Meeting Klien', time: '09:00-10:00' }, { day: 3, title: 'Kesalahan Teknis', time: '09:00-10:00' }, { day: 5, title: 'Kesalahan Teknis', time: '09:00-10:00' }] },
                                                { time: '11:00 AM', rowSpan: true, isHalf: true, events: [{ day: 1, title: 'Kesalahan Teknis', time: '10:30-11:30', color: 'bg-info' }, { day: 4, title: 'Kesalahan Teknis', time: '09:00-10:00' }] }, 
                                                { time: '12:00 PM', events: [{ day: 2, title: 'Kesalahan Teknis', time: '11:30-12:30' }] },
                                                { time: '13:00 PM', events: [{ day: 1, title: 'Meeting Tim', time: '12:00-13:00' }] },
                                                { time: '14:00 PM' },
                                                { time: '15:00 PM' },
                                                { time: '16:00 PM' },
                                                { time: '17:00 PM' },
                                                { time: '18:00 PM' },
                                                { time: '19:00 PM' },
                                                { time: '20:00 PM' },
                                                { time: '21:00 PM' },
                                                { time: '22:00 PM' },
                                                { time: '23:00 PM' },
                                                { time: '00:00 AM' },
                                            ] as ScheduleRow[]).map((row, rIdx) => (
                                                <React.Fragment key={rIdx}>
                                                    <tr style={{ height: '60px' }}>
                                                        <td 
                                                            className={`text-secondary small border-end border-bottom fw-bold position-relative ${row.isHalf ? 'text-success' : ''}`} 
                                                            style={{ 
                                                                fontSize: '0.75rem', 
                                                                backgroundColor: '#f8f9fa'
                                                            }}
                                                        >
                                                            {row.time}
                                                        </td>
                                                        {[1, 2, 3, 4, 5].map(colDay => {
                                                             const event = row.events?.find(e => e.day === colDay);
                                                             return (
                                                                <td 
                                                                    key={colDay} 
                                                                    className="p-1 position-relative border-end border-bottom"
                                                                    style={{ 
                                                                        backgroundColor: '#f8f9fa'
                                                                    }}
                                                                >

                                                                    {event && (
                                                                        <div className={`p-2 rounded-3 text-white text-start shadow-sm position-absolute top-50 start-50 translate-middle w-90 overflow-hidden ${event.color || 'bg-primary'}`} style={{ zIndex: 1, height: '85%', fontSize: '0.75rem', opacity: 0.9, width: '95%' }}>
                                                                            <div className="fw-bold text-truncate">{event.title}</div>
                                                                            <div className="small opacity-75 text-truncate" style={{ fontSize: '0.65rem' }}>{event.time}</div>
                                                                        </div>
                                                                    )}
                                                                </td>
                                                             )
                                                        })}
                                                    </tr>
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
