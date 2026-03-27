import { Card } from '../components/ui/Card';
import { Users, Activity, HeartPulse, Clock } from 'lucide-react';
import { MOCK_PATIENTS } from '../services/mockData';
import { useAuthStore } from '../store/useAuthStore';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const criticalPatients = MOCK_PATIENTS.filter(p => p.status === 'Critical');

  const stats = [
    { label: 'Total Patients', value: MOCK_PATIENTS.length, icon: <Users size={24} />, color: 'var(--primary)' },
    { label: 'Critical Condition', value: criticalPatients.length, icon: <Activity size={24} />, color: 'var(--danger)' },
    { label: 'Recovering', value: MOCK_PATIENTS.filter(p => p.status === 'Recovering').length, icon: <HeartPulse size={24} />, color: 'var(--success)' },
    { label: 'Avg Wait Time', value: '14 mins', icon: <Clock size={24} />, color: 'var(--warning)' },
  ];

  return (
    <div className="dashboard">
      <header className="page-header">
        <div>
          <h1 className="page-title">Overview</h1>
          <p className="page-subtitle">Welcome back, {user?.displayName || 'Doctor'}. Here's what's happening today.</p>
        </div>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card" glass>
            <div className="stat-icon-wrapper" style={{ color: stat.color, backgroundColor: `${stat.color}15` }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="dashboard-content">
        <Card className="critical-patients-card">
          <div className="card-header">
            <h2>Critical Patients</h2>
            <button className="text-btn">View All</button>
          </div>
          <div className="patient-list-mini">
            {criticalPatients.map(patient => (
              <div key={patient.id} className="patient-item-mini">
                <img src={patient.avatar} alt={patient.name} className="patient-avatar-mini" />
                <div className="patient-info-mini">
                  <h4>{patient.name}</h4>
                  <p>{patient.diagnosis}</p>
                </div>
                <div className="patient-status-badge critical">
                  {patient.status}
                </div>
              </div>
            ))}
            {criticalPatients.length === 0 && <p className="empty-state">No critical patients right now.</p>}
          </div>
        </Card>
        
        <Card className="recent-activity-card glass-panel" glass>
          <div className="card-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="activity-timeline">
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p><strong>Dr. Smith</strong> updated {MOCK_PATIENTS[0].name}'s chart.</p>
                <span className="activity-time">10 mins ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot warning"></div>
              <div className="activity-content">
                <p>New lab results for <strong>{MOCK_PATIENTS[1].name}</strong>.</p>
                <span className="activity-time">1 hour ago</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
