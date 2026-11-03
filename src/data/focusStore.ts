import { useState, useEffect, useCallback } from 'react';

export interface StudySuggestion {
  id: string;
  title: string;
  currentFrictionSlot: string;
  suggestedSlot: string;
  subject: string;
  rationale: string;
  status: 'pending' | 'accepted' | 'edited' | 'dismissed';
  customTime?: { startTime: string; endTime: string; subject: string };
  statistics: {
    completionRate: string;
    distractionDrop: string;
    quizAccuracy: string;
    sampleSessions: number;
    repeatedApp: string;
    attemptCount: number;
  };
}

export interface ScheduleItem {
  id: string;
  timeSlot: string;
  subject: string;
  status: 'upcoming' | 'active' | 'optimized';
}

export interface ParentRequest {
  id: string;
  studentName: string;
  appName: string;
  appIcon: string;
  requestedMinutes: number;
  reason: string;
  timestamp: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectNote?: string;
}

export interface ActiveGrant {
  id: string;
  appName: string;
  appIcon: string;
  durationMinutes: number;
  remainingSeconds: number;
  grantedAt: string;
  expiresAt: string;
  status: 'active' | 'expired';
}

export interface InAppNotification {
  id: string;
  title: string;
  message: string;
  type: 'parent_request' | 'grant_approved' | 'grant_expired' | 'grant_rejected' | 'schedule_updated';
  targetScreen?: string;
  timestamp: string;
}

const INITIAL_SUGGESTIONS: StudySuggestion[] = [
  {
    id: "sug-1",
    title: "Shift Physics Block to High-Energy Morning Window",
    currentFrictionSlot: "3:00 PM – 4:30 PM (Afternoon Slump)",
    suggestedSlot: "07:00 AM – 08:30 AM (Peak Retention)",
    subject: "Physics (Light: Reflection & Refraction)",
    rationale: "Repeated Instagram and YouTube launches detected during 3:00 PM study period. Historical logs show 94% focus completion in early mornings with 0 distraction attempts.",
    status: "pending",
    statistics: {
      completionRate: "94% vs 42%",
      distractionDrop: "-88% app opens",
      quizAccuracy: "+28% higher score",
      sampleSessions: 14,
      repeatedApp: "Instagram",
      attemptCount: 18,
    },
  },
  {
    id: "sug-2",
    title: "Insert 15-Minute Cognitive Breather",
    currentFrictionSlot: "5:00 PM – 7:00 PM (Unbroken Block)",
    suggestedSlot: "5:00 PM – 5:50 PM + 15m Breather + 6:05 PM – 7:00 PM",
    subject: "Mathematics (Quadratic Equations)",
    rationale: "Friction peaks around 5:45 PM with 12 attempted YouTube Shorts launches. A scheduled 15m breather prevents willpower depletion and maintains 86% quiz accuracy.",
    status: "pending",
    statistics: {
      completionRate: "89% vs 51%",
      distractionDrop: "-75% impulsivity",
      quizAccuracy: "+19% retention",
      sampleSessions: 11,
      repeatedApp: "YouTube Shorts",
      attemptCount: 12,
    },
  },
  {
    id: "sug-3",
    title: "Optimize Chemistry PYQ Session to Early Evening",
    currentFrictionSlot: "9:30 PM – 11:00 PM (Late Night)",
    suggestedSlot: "6:30 PM – 8:00 PM (Optimal Circadian Window)",
    subject: "Chemistry (Chemical Reactions & Equations)",
    rationale: "Late night sessions show 3.4x higher app switching friction. Early evening slot historically yields 32m average uninterrupted focus stretches.",
    status: "pending",
    statistics: {
      completionRate: "91% vs 38%",
      distractionDrop: "-92% late relapse",
      quizAccuracy: "+24% problem solve rate",
      sampleSessions: 9,
      repeatedApp: "Snapchat",
      attemptCount: 15,
    },
  },
];

const INITIAL_SCHEDULE: ScheduleItem[] = [
  { id: "sch-1", timeSlot: "07:00 AM – 08:30 AM", subject: "Mathematics CBSE Prep", status: "upcoming" },
  { id: "sch-2", timeSlot: "03:00 PM – 04:30 PM", subject: "Physics (Friction Window)", status: "active" },
  { id: "sch-3", timeSlot: "06:30 PM – 08:00 PM", subject: "Chemistry PYQ Mastery", status: "upcoming" },
];

const INITIAL_PARENT_REQUESTS: ParentRequest[] = [
  {
    id: "req-101",
    studentName: "Mayank Sharma",
    appName: "Instagram",
    appIcon: "instagram",
    requestedMinutes: 15,
    reason: "Need to check physics class project group notes with classmate",
    timestamp: "12:54 PM",
    status: "pending",
  },
];

interface FocusState {
  currentScene: string;
  setCurrentScene: (scene: string) => void;
  isOtaModalOpen: boolean;
  setOtaModalOpen: (open: boolean) => void;
  otaChannel: 'stable' | 'canary';
  setOtaChannel: (ch: 'stable' | 'canary') => void;
  otaDownloadProgress: number;
  setOtaDownloadProgress: (p: number) => void;
  isOtaDownloading: boolean;
  setIsOtaDownloading: (d: boolean) => void;
  hasOtaNotification: boolean;
  setHasOtaNotification: (has: boolean) => void;
  otaVersion: string;
  dismissOtaNotification: () => void;
  triggerOtaNotification: () => void;
  studySuggestions: StudySuggestion[];
  activeSchedule: ScheduleItem[];
  acceptStudySuggestion: (id: string) => void;
  editStudySuggestion: (id: string, start: string, end: string, subject?: string) => void;
  dismissStudySuggestion: (id: string) => void;
  resetStudySuggestions: () => void;
  parentRequests: ParentRequest[];
  activeGrants: ActiveGrant[];
  inAppNotification: InAppNotification | null;
  requestParentAccess: (appName: string, appIcon: string, minutes: number, reason?: string) => void;
  approveParentRequest: (reqId: string, minutes?: number) => void;
  rejectParentRequest: (reqId: string, note?: string) => void;
  revokeGrant: (grantId: string) => void;
  tickGrants: () => void;
  dismissInAppToast: () => void;
}

// Global state container with listener subscription
type Listener = () => void;
let state: FocusState;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

state = {
  currentScene: "scene01",
  setCurrentScene: (scene: string) => {
    state.currentScene = scene;
    notify();
  },
  isOtaModalOpen: false,
  setOtaModalOpen: (open: boolean) => {
    state.isOtaModalOpen = open;
    notify();
  },
  otaChannel: "stable",
  setOtaChannel: (ch: 'stable' | 'canary') => {
    state.otaChannel = ch;
    notify();
  },
  otaDownloadProgress: 0,
  setOtaDownloadProgress: (p: number) => {
    state.otaDownloadProgress = p;
    notify();
  },
  isOtaDownloading: false,
  setIsOtaDownloading: (d: boolean) => {
    state.isOtaDownloading = d;
    notify();
  },
  hasOtaNotification: true,
  setHasOtaNotification: (has: boolean) => {
    state.hasOtaNotification = has;
    notify();
  },
  otaVersion: "v1.5.2",
  dismissOtaNotification: () => {
    state.hasOtaNotification = false;
    notify();
  },
  triggerOtaNotification: () => {
    state.hasOtaNotification = true;
    notify();
  },
  studySuggestions: INITIAL_SUGGESTIONS,
  activeSchedule: INITIAL_SCHEDULE,
  acceptStudySuggestion: (id: string) => {
    const sug = state.studySuggestions.find((s) => s.id === id);
    if (!sug) return;
    state.studySuggestions = state.studySuggestions.map((s) =>
      s.id === id ? { ...s, status: 'accepted' as const } : s
    );
    state.activeSchedule = state.activeSchedule.map((sch) =>
      sch.subject.toLowerCase().includes(sug.subject.toLowerCase().split(' ')[0])
        ? { ...sch, timeSlot: sug.suggestedSlot, status: 'optimized' as const }
        : sch
    );
    state.inAppNotification = {
      id: `toast-${Date.now()}`,
      title: 'Schedule Optimized & Applied',
      message: `${sug.subject} shifted to ${sug.suggestedSlot}. Enforced via FocusDefend settings.`,
      type: 'schedule_updated',
      targetScreen: 'study',
      timestamp: 'Just now',
    };
    notify();
  },
  editStudySuggestion: (id: string, start: string, end: string, subject?: string) => {
    state.studySuggestions = state.studySuggestions.map((s) =>
      s.id === id
        ? {
            ...s,
            status: 'edited' as const,
            suggestedSlot: `${start} – ${end} (Custom Slot)`,
            subject: subject || s.subject,
            customTime: { startTime: start, endTime: end, subject: subject || s.subject },
          }
        : s
    );
    state.activeSchedule = state.activeSchedule.map((sch) =>
      sch.id === 'sch-2' || sch.subject.toLowerCase().includes('physics')
        ? { ...sch, timeSlot: `${start} – ${end}`, subject: subject || sch.subject, status: 'optimized' as const }
        : sch
    );
    state.inAppNotification = {
      id: `toast-${Date.now()}`,
      title: 'Custom Study Period Saved',
      message: `Restrictions set for ${start} – ${end} via FocusDefend Knotted Guardian.`,
      type: 'schedule_updated',
      targetScreen: 'study',
      timestamp: 'Just now',
    };
    notify();
  },
  dismissStudySuggestion: (id: string) => {
    state.studySuggestions = state.studySuggestions.map((s) =>
      s.id === id ? { ...s, status: 'dismissed' as const } : s
    );
    notify();
  },
  resetStudySuggestions: () => {
    state.studySuggestions = INITIAL_SUGGESTIONS;
    state.activeSchedule = INITIAL_SCHEDULE;
    notify();
  },
  parentRequests: INITIAL_PARENT_REQUESTS,
  activeGrants: [],
  inAppNotification: null,
  requestParentAccess: (appName: string, appIcon: string, minutes: number, reason?: string) => {
    const req: ParentRequest = {
      id: `req-${Date.now()}`,
      studentName: 'Mayank Sharma',
      appName,
      appIcon,
      requestedMinutes: minutes,
      reason: reason || 'Temporary access requested for academic study check',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'pending',
    };
    state.parentRequests = [req, ...state.parentRequests];
    state.inAppNotification = {
      id: `toast-${Date.now()}`,
      title: 'Parent Pass Requested',
      message: `Alert sent to Parent Dashboard for ${minutes}m on ${appName}.`,
      type: 'parent_request',
      targetScreen: 'parent',
      timestamp: 'Just now',
    };
    notify();
  },
  approveParentRequest: (reqId: string, minutes?: number) => {
    const req = state.parentRequests.find((r) => r.id === reqId);
    if (!req) return;
    const mins = minutes || req.requestedMinutes;
    const now = new Date();
    const exp = new Date(now.getTime() + mins * 60 * 1000);
    const grant: ActiveGrant = {
      id: `grant-${Date.now()}`,
      appName: req.appName,
      appIcon: req.appIcon,
      durationMinutes: mins,
      remainingSeconds: mins * 60,
      grantedAt: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      expiresAt: exp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'active',
    };
    state.parentRequests = state.parentRequests.map((r) =>
      r.id === reqId ? { ...r, status: 'approved' as const } : r
    );
    state.activeGrants = [grant, ...state.activeGrants.filter((g) => g.appName !== req.appName)];
    state.inAppNotification = {
      id: `toast-${Date.now()}`,
      title: 'Pass Approved by Parent!',
      message: `${req.appName} is unlocked for ${mins} minutes. Auto-restores upon expiry.`,
      type: 'grant_approved',
      targetScreen: 'intercept',
      timestamp: 'Just now',
    };
    notify();
  },
  rejectParentRequest: (reqId: string, note?: string) => {
    const req = state.parentRequests.find((r) => r.id === reqId);
    if (!req) return;
    state.parentRequests = state.parentRequests.map((r) =>
      r.id === reqId
        ? { ...r, status: 'rejected' as const, rejectNote: note || 'Focus period active. Please complete study block first.' }
        : r
    );
    state.inAppNotification = {
      id: `toast-${Date.now()}`,
      title: 'Request Declined by Parent',
      message: `${req.appName} remains guarded. Finish the active study session.`,
      type: 'grant_rejected',
      targetScreen: 'intercept',
      timestamp: 'Just now',
    };
    notify();
  },
  revokeGrant: (grantId: string) => {
    const grant = state.activeGrants.find((g) => g.id === grantId);
    if (!grant) return;
    state.activeGrants = state.activeGrants.filter((g) => g.id !== grantId);
    state.inAppNotification = {
      id: `toast-${Date.now()}`,
      title: 'Pass Revoked Immediately',
      message: `${grant.appName} restriction has been instantly restored.`,
      type: 'grant_expired',
      targetScreen: 'intercept',
      timestamp: 'Just now',
    };
    notify();
  },
  tickGrants: () => {
    const grants = state.activeGrants;
    if (grants.length === 0) return;
    let expiredApp = '';
    let hasExpired = false;
    state.activeGrants = grants
      .map((g) => {
        if (g.status === 'active') {
          const nextSec = g.remainingSeconds - 1;
          if (nextSec <= 0) {
            hasExpired = true;
            expiredApp = g.appName;
            return { ...g, remainingSeconds: 0, status: 'expired' as const };
          }
          return { ...g, remainingSeconds: nextSec };
        }
        return g;
      })
      .filter((g) => g.status === 'active');

    if (hasExpired) {
      state.inAppNotification = {
        id: `toast-${Date.now()}`,
        title: 'Temporary Pass Expired',
        message: `Time limit reached for ${expiredApp}. FocusDefend has automatically restored the full restriction.`,
        type: 'grant_expired',
        targetScreen: 'intercept',
        timestamp: 'Just now',
      };
    }
    notify();
  },
  dismissInAppToast: () => {
    state.inAppNotification = null;
    notify();
  },
};

export function useFocusStore(): FocusState {
  const [, setTick] = useState(0);
  useEffect(() => {
    const listener = () => setTick((t) => t + 1);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);
  return state;
}

export function useTheme() {
  const [theme, setThemeState] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setThemeState(isDark ? 'dark' : 'light');
  }, []);

  const setTheme = useCallback((newTheme: 'dark' | 'light') => {
    setThemeState(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return { theme, setTheme };
}
