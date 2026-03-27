export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
  status: 'Critical' | 'Stable' | 'Recovering';
  lastVisit: string;
  avatar: string;
  room?: string;
}

export const MOCK_PATIENTS: Patient[] = [
  { id: '1', name: 'Emma Thompson', age: 45, gender: 'F', diagnosis: 'Hypertension', status: 'Stable', lastVisit: '2023-10-12', avatar: 'https://i.pravatar.cc/150?u=1', room: 'A-201' },
  { id: '2', name: 'James Wilson', age: 62, gender: 'M', diagnosis: 'Type 2 Diabetes', status: 'Critical', lastVisit: '2023-10-10', avatar: 'https://i.pravatar.cc/150?u=2', room: 'ICU-3' },
  { id: '3', name: 'Sarah Connor', age: 34, gender: 'F', diagnosis: 'Post-op Recovery', status: 'Recovering', lastVisit: '2023-10-15', avatar: 'https://i.pravatar.cc/150?u=3', room: 'B-105' },
  { id: '4', name: 'Michael Chang', age: 71, gender: 'M', diagnosis: 'Arthritis', status: 'Stable', lastVisit: '2023-09-28', avatar: 'https://i.pravatar.cc/150?u=4', room: 'C-412' },
  { id: '5', name: 'Olivia Martinez', age: 29, gender: 'F', diagnosis: 'Asthma', status: 'Stable', lastVisit: '2023-10-05', avatar: 'https://i.pravatar.cc/150?u=5', room: 'A-108' },
  { id: '6', name: 'David Smith', age: 55, gender: 'M', diagnosis: 'Coronary Artery Disease', status: 'Critical', lastVisit: '2023-10-14', avatar: 'https://i.pravatar.cc/150?u=6', room: 'ICU-1' },
  { id: '7', name: 'Robert Johnson', age: 48, gender: 'M', diagnosis: 'Pneumonia', status: 'Recovering', lastVisit: '2023-10-16', avatar: 'https://i.pravatar.cc/150?u=7', room: 'B-210' },
  { id: '8', name: 'Linda Davis', age: 39, gender: 'F', diagnosis: 'Migraine', status: 'Stable', lastVisit: '2023-10-11', avatar: 'https://i.pravatar.cc/150?u=8', room: 'Outpatient' },
];

export const MOCK_ANALYTICS = [
  { name: 'Jan', patients: 400, recovered: 240, active: 160 },
  { name: 'Feb', patients: 300, recovered: 139, active: 161 },
  { name: 'Mar', patients: 200, recovered: 98, active: 102 },
  { name: 'Apr', patients: 278, recovered: 190, active: 88 },
  { name: 'May', patients: 189, recovered: 48, active: 141 },
  { name: 'Jun', patients: 239, recovered: 180, active: 59 },
  { name: 'Jul', patients: 349, recovered: 230, active: 119 },
];
