"use client";

import { useState } from 'react';
import TopHeader from "@/components/TopHeader";
import StatisticsChart from "@/components/StatisticsChart";
import ApprovalWidget from "@/components/ApprovalWidget";
import { AgendaWidget, LemburWidget, CutiWidget, PerizinanWidget } from "@/components/Widgets";

export default function Home() {


  return (
    <div>
        {/* Top Header */}
        <TopHeader />
        
        {/* Dashboard Content */}
        <div className="container-fluid p-0">
            {/* Filter Section */}
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div>
                    <h2 className="fw-bold text-primary mb-0">Dashboard</h2>
                    <p className="text-muted mb-0">Welcome back, Abi</p>
                    <hr className="mt-2" style={{ width: '1100px', opacity: 0.2, margin: 0 }}/>
                </div>
            </div>


            {/* Announcement Banner */}
            <div className="announcement-bar d-flex align-items-center shadow-sm overflow-hidden p-0 ps-3">
                <i className="fas fa-bullhorn me-3 fa-lg flex-shrink-0"></i>
                <div className="marquee-container w-100 py-2">
                    <span className="marquee-content fw-normal text-dark">
                        <span className="fw-bold text-danger me-2">Pengumuman Penting!</span>
                        Semua karyawan harap mengisi survei kepuasan kerja sebelum tanggal 5 Desember 2025.
                    </span>
                </div>
            </div>

            {/* Widgets Row 1 */}
            <div className="row g-4 mb-4">
                {/* Agenda Widget */}
                <div className="col-md-3 col-lg-3">
                   <AgendaWidget />
                </div>

                {/* Lembur Single Card Slider */}
                <div className="col-md-3 col-lg-3">
                    <LemburWidget />
                </div>

                {/* Cuti Single Card Slider */}
                <div className="col-md-3 col-lg-3">
                    <CutiWidget />
                </div>

                {/* Perizinan Single Card Slider */}
                <div className="col-md-3 col-lg-3">
                    <PerizinanWidget />
                </div>

                {/* Statistics Card */}
                <div className="col-md-12 col-lg-8">
                   <StatisticsChart />
                </div>

                {/* Approval Widget */}
                <div className="col-md-12 col-lg-4">
                    <ApprovalWidget />
                </div>

            </div>

        </div>
    </div>
  );
}
