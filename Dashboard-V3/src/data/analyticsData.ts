export interface AnalyticsData {
  overview: {
    totalStudents: number;
    activeCourses: number;
    learningHours: number;
    completionRate: number;
    aiInteractions: number;
    avgScore: number;
  };
  courseMetrics: {
    totalEnrollments: number;
    avgCompletionRate: number;
    totalLearningHours: number;
    avgRating: number;
  };
  studentProgress: {
    activeStudents: number;
    avgProgress: number;
    studyTimePerStudent: number;
    retentionRate: number;
  };
  aiTutorMetrics: {
    totalSessions: number;
    avgSessionTime: number;
    activeUsers: number;
    resolutionRate: number;
  };
}

export const analyticsData: AnalyticsData = {
  overview: {
    totalStudents: 2847,
    activeCourses: 45,
    learningHours: 15432,
    completionRate: 87,
    aiInteractions: 8921,
    avgScore: 84.2
  },
  courseMetrics: {
    totalEnrollments: 12847,
    avgCompletionRate: 78,
    totalLearningHours: 45231,
    avgRating: 4.7
  },
  studentProgress: {
    activeStudents: 2847,
    avgProgress: 68,
    studyTimePerStudent: 5.4,
    retentionRate: 89
  },
  aiTutorMetrics: {
    totalSessions: 8921,
    avgSessionTime: 12.5,
    activeUsers: 1847,
    resolutionRate: 94
  }
};

// API Integration Functions for your AI platform
export const fetchAnalyticsData = async (dateRange: string): Promise<AnalyticsData> => {
  // This would connect to your AI platform's API
  try {
    const response = await fetch(`/api/analytics?range=${dateRange}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AI_PLATFORM_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch analytics data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching analytics:', error);
    // Return mock data as fallback
    return analyticsData;
  }
};

export const exportAnalyticsData = async (dateRange: string, format: 'csv' | 'pdf' | 'json' = 'csv') => {
  try {
    const response = await fetch(`/api/analytics/export?range=${dateRange}&format=${format}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AI_PLATFORM_TOKEN}`,
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to export analytics data');
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${dateRange}.${format}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error('Error exporting analytics:', error);
  }
};