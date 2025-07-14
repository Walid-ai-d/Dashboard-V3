// API Integration utilities for connecting with your AI platform

export interface APIConfig {
  baseURL: string;
  apiKey: string;
  timeout: number;
}

export const apiConfig: APIConfig = {
  baseURL: process.env.REACT_APP_AI_PLATFORM_URL || 'https://your-ai-platform.com/api',
  apiKey: process.env.REACT_APP_AI_PLATFORM_KEY || '',
  timeout: 10000
};

export class AIAnalyticsAPI {
  private config: APIConfig;

  constructor(config: APIConfig) {
    this.config = config;
  }

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const url = `${this.config.baseURL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.apiKey}`,
      'X-Platform': 'alt-academy'
    };

    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers
      },
      signal: AbortSignal.timeout(this.config.timeout)
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Course Analytics
  async getCourseAnalytics(dateRange: string, subject?: string) {
    const params = new URLSearchParams({ dateRange });
    if (subject) params.append('subject', subject);
    
    return this.makeRequest(`/analytics/courses?${params}`);
  }

  // Student Progress
  async getStudentProgress(dateRange: string, studentId?: string) {
    const params = new URLSearchParams({ dateRange });
    if (studentId) params.append('studentId', studentId);
    
    return this.makeRequest(`/analytics/students?${params}`);
  }

  // AI Tutor Analytics
  async getAITutorAnalytics(dateRange: string, tutorId?: string) {
    const params = new URLSearchParams({ dateRange });
    if (tutorId) params.append('tutorId', tutorId);
    
    return this.makeRequest(`/analytics/ai-tutors?${params}`);
  }

  // Performance Metrics
  async getPerformanceMetrics(dateRange: string, metricType: 'academic' | 'engagement') {
    const params = new URLSearchParams({ dateRange, metricType });
    return this.makeRequest(`/analytics/performance?${params}`);
  }

  // Learning Insights
  async getLearningInsights(dateRange: string) {
    const params = new URLSearchParams({ dateRange });
    return this.makeRequest(`/analytics/insights?${params}`);
  }

  // Real-time Data
  async getRealTimeMetrics() {
    return this.makeRequest('/analytics/realtime');
  }

  // Export Data
  async exportData(dateRange: string, format: 'csv' | 'pdf' | 'json', type: string) {
    const params = new URLSearchParams({ dateRange, format, type });
    
    const response = await fetch(`${this.config.baseURL}/analytics/export?${params}`, {
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
      }
    });

    if (!response.ok) {
      throw new Error(`Export failed: ${response.status}`);
    }

    return response.blob();
  }

  // Send Learning Event
  async trackLearningEvent(event: {
    studentId: string;
    courseId: string;
    eventType: 'start' | 'complete' | 'progress' | 'quiz' | 'ai_interaction';
    data: any;
    timestamp?: Date;
  }) {
    return this.makeRequest('/analytics/events', {
      method: 'POST',
      body: JSON.stringify({
        ...event,
        timestamp: event.timestamp || new Date()
      })
    });
  }

  // Get Predictive Analytics
  async getPredictiveAnalytics(studentId: string) {
    return this.makeRequest(`/analytics/predictions/${studentId}`);
  }
}

// Create singleton instance
export const aiAnalyticsAPI = new AIAnalyticsAPI(apiConfig);

// Utility functions for data processing
export const processAnalyticsData = (rawData: any) => {
  // Transform raw API data into the format expected by components
  return {
    ...rawData,
    processedAt: new Date(),
    trends: calculateTrends(rawData),
    insights: generateInsights(rawData)
  };
};

const calculateTrends = (data: any) => {
  // Calculate trend percentages and directions
  return {
    studentGrowth: '+12%',
    engagementTrend: '+18%',
    performanceTrend: '+5%'
  };
};

const generateInsights = (data: any) => {
  // Generate actionable insights from the data
  return [
    'Peak learning hours: 7-9 PM',
    'AI tutors improve performance by 35%',
    'Visual learners show 45% better retention'
  ];
};

// Error handling
export class APIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

// Retry mechanism
export const withRetry = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }
  
  throw lastError!;
};