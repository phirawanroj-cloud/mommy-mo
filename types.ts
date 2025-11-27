export interface UserProfile {
  workStatus: 'full-time' | 'part-time' | 'homemaker';
  childrenAges: string;
  stressLevel: number; // 1-10
}

export interface AdviceResponse {
  category: 'time-management' | 'self-care' | 'relationship';
  title: string;
  content: string;
  actionableSteps: string[];
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  ADVISOR = 'ADVISOR',
  ROUTINE = 'ROUTINE',
  RELATIONSHIP = 'RELATIONSHIP'
}

export interface DailyTask {
  time: string;
  activity: string;
  type: 'work' | 'kids' | 'me-time' | 'couple';
}