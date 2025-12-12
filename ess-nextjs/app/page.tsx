import TopHeader from "@/components/TopHeader";
import StatisticsChart from "@/components/StatisticsChart";
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
                </div>
                
                <div className="d-flex gap-2">
                    <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                        <option>7825 Abi Smith</option>
                    </select>
                    <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                        <option>Desember</option>
                    </select>
                    <select className="form-select form-select-sm" style={{ width: 'auto' }}>
                        <option>2025</option>
                    </select>
                </div>
            </div>

            {/* Announcement Banner */}
            <div className="announcement-bar d-flex align-items-center shadow-sm">
                <i className="fas fa-bullhorn me-2 fa-lg"></i>
                <span>Pengumuman Penting!</span> 
                <span className="text-dark ms-2 fw-normal">Semua karyawan harap mengisi survei kepuasan kerja sebelum tanggal 5 Desember 2025.</span>
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

            </div>

        </div>
    </div>
  );
}
