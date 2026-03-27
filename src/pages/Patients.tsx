import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Toggle } from '../components/ui/Toggle';
import { Input } from '../components/ui/Input';
import { LayoutGrid, List } from 'lucide-react';
import { MOCK_PATIENTS } from '../services/mockData';
import { useAppStore } from '../store/useAppStore';
import './Patients.css';

export const Patients: React.FC = () => {
  const { patientViewMode, setPatientViewMode } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = MOCK_PATIENTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patients-page">
      <header className="page-header">
        <div className="header-content">
          <div>
            <h1 className="page-title">Patient Management</h1>
            <p className="page-subtitle">View and manage all active patients.</p>
          </div>
          
          <div className="header-actions">
            <Toggle 
              value={patientViewMode}
              onChange={(v) => setPatientViewMode(v as 'grid' | 'list')}
              options={[
                { label: <LayoutGrid size={18} />, value: 'grid' },
                { label: <List size={18} />, value: 'list' }
              ]}
            />
          </div>
        </div>
        
        <div className="search-bar">
          <Input 
            placeholder="Search by name or diagnosis..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
        </div>
      </header>

      {patientViewMode === 'grid' ? (
        <div className="patients-grid">
          {filteredPatients.map(patient => (
            <Card key={patient.id} className="patient-card" glass>
              <div className="patient-card-header">
                <img src={patient.avatar} alt={patient.name} className="patient-avatar" />
                <div className={`status-dot ${patient.status.toLowerCase()}`}></div>
              </div>
              <div className="patient-card-body">
                <h3>{patient.name}</h3>
                <p className="diagnosis">{patient.diagnosis}</p>
                <div className="patient-details">
                  <div className="detail-item">
                    <span>Age/Gender</span>
                    <strong>{patient.age} • {patient.gender}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Room</span>
                    <strong>{patient.room || 'N/A'}</strong>
                  </div>
                </div>
              </div>
              <div className="patient-card-footer">
                <span className="last-visit">Last visit: {patient.lastVisit}</span>
                <button className="view-btn">View Profile</button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="patients-list-card" glass>
          <div className="table-responsive">
            <table className="patients-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Diagnosis</th>
                  <th>Status</th>
                  <th>Room</th>
                  <th>Last Visit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map(patient => (
                  <tr key={patient.id}>
                    <td>
                      <div className="table-patient-info">
                        <img src={patient.avatar} alt={patient.name} className="table-avatar" />
                        <div>
                          <strong>{patient.name}</strong>
                          <span className="table-subtext">{patient.age} yrs • {patient.gender}</span>
                        </div>
                      </div>
                    </td>
                    <td>{patient.diagnosis}</td>
                    <td>
                      <span className={`patient-status-badge ${patient.status.toLowerCase()}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td>{patient.room || 'N/A'}</td>
                    <td>{patient.lastVisit}</td>
                    <td>
                      <button className="text-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {filteredPatients.length === 0 && (
        <div className="empty-state">
          No patients found matching your search.
        </div>
      )}
    </div>
  );
};
