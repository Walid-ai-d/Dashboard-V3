// LearnWorlds API Integration Service
export interface LearnWorldsConfig {
  apiKey: string;
  baseURL: string;
  schoolId: string;
}

export interface LearnWorldsUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  created: string;
  last_login: string;
  is_active: boolean;
  avatar?: string;
  tags: string[];
}

export interface LearnWorldsCourse {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  created: string;
  updated: string;
  is_published: boolean;
  thumbnail_url?: string;
  duration_seconds: number;
  enrollment_count: number;
  completion_rate: number;
  average_rating: number;
  category: string;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface LearnWorldsEnrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at?: string;
  progress_percentage: number;
  last_accessed: string;
  time_spent_seconds: number;
  status: 'enrolled' | 'in_progress' | 'completed' | 'dropped';
}

export interface LearnWorldsAnalytics {
  total_users: number;
  active_users: number;
  total_courses: number;
  total_enrollments: number;
  completion_rate: number;
  average_engagement_time: number;
  revenue: number;
  period_start: string;
  period_end: string;
}

export class LearnWorldsAPI {
  private config: LearnWorldsConfig;

  constructor(config: LearnWorldsConfig) {
    this.config = config;
  }

  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.config.baseURL}${endpoint}`;
    
    const defaultHeaders = {
      'Authorization': `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(`LearnWorlds API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('LearnWorlds API Request Failed:', error);
      throw error;
    }
  }

  // User Management
  async getUsers(page: number = 1, per_page: number = 50): Promise<{ data: LearnWorldsUser[], meta: any }> {
    return this.makeRequest(`/users?page=${page}&per_page=${per_page}`);
  }

  async getUser(userId: string): Promise<LearnWorldsUser> {
    return this.makeRequest(`/users/${userId}`);
  }

  async getUserProgress(userId: string): Promise<LearnWorldsEnrollment[]> {
    return this.makeRequest(`/users/${userId}/enrollments`);
  }

  // Course Management
  async getCourses(page: number = 1, per_page: number = 50): Promise<{ data: LearnWorldsCourse[], meta: any }> {
    return this.makeRequest(`/courses?page=${page}&per_page=${per_page}`);
  }

  async getCourse(courseId: string): Promise<LearnWorldsCourse> {
    return this.makeRequest(`/courses/${courseId}`);
  }

  async getCourseEnrollments(courseId: string): Promise<LearnWorldsEnrollment[]> {
    return this.makeRequest(`/courses/${courseId}/enrollments`);
  }

  async getCourseAnalytics(courseId: string, dateRange: string): Promise<any> {
    return this.makeRequest(`/courses/${courseId}/analytics?period=${dateRange}`);
  }

  // Enrollments
  async getEnrollments(page: number = 1, per_page: number = 50): Promise<{ data: LearnWorldsEnrollment[], meta: any }> {
    return this.makeRequest(`/enrollments?page=${page}&per_page=${per_page}`);
  }

  async getEnrollment(enrollmentId: string): Promise<LearnWorldsEnrollment> {
    return this.makeRequest(`/enrollments/${enrollmentId}`);
  }

  // Analytics
  async getSchoolAnalytics(dateRange: string): Promise<LearnWorldsAnalytics> {
    return this.makeRequest(`/analytics/school?period=${dateRange}`);
  }

  async getUserAnalytics(dateRange: string): Promise<any> {
    return this.makeRequest(`/analytics/users?period=${dateRange}`);
  }

  async getCoursePerformance(dateRange: string): Promise<any> {
    return this.makeRequest(`/analytics/courses?period=${dateRange}`);
  }

  async getEngagementMetrics(dateRange: string): Promise<any> {
    return this.makeRequest(`/analytics/engagement?period=${dateRange}`);
  }

  async getRevenueAnalytics(dateRange: string): Promise<any> {
    return this.makeRequest(`/analytics/revenue?period=${dateRange}`);
  }

  // Learning Progress
  async getLearningPaths(): Promise<any> {
    return this.makeRequest('/learning-paths');
  }

  async getAssignments(courseId?: string): Promise<any> {
    const endpoint = courseId ? `/courses/${courseId}/assignments` : '/assignments';
    return this.makeRequest(endpoint);
  }

  async getQuizResults(courseId?: string): Promise<any> {
    const endpoint = courseId ? `/courses/${courseId}/quiz-results` : '/quiz-results';
    return this.makeRequest(endpoint);
  }

  // Certificates
  async getCertificates(userId?: string): Promise<any> {
    const endpoint = userId ? `/users/${userId}/certificates` : '/certificates';
    return this.makeRequest(endpoint);
  }

  // Reports
  async generateReport(reportType: string, filters: any): Promise<any> {
    return this.makeRequest('/reports', {
      method: 'POST',
      body: JSON.stringify({
        type: reportType,
        filters
      })
    });
  }

  async exportData(dataType: string, format: 'csv' | 'xlsx' | 'json', filters: any): Promise<Blob> {
    const response = await fetch(`${this.config.baseURL}/export/${dataType}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        format,
        filters
      })
    });

    if (!response.ok) {
      throw new Error(`Export failed: ${response.status}`);
    }

    return response.blob();
  }
}

// Configuration
export const learnWorldsConfig: LearnWorldsConfig = {
  apiKey: import.meta.env.VITE_LEARNWORLDS_API_KEY || '',
  baseURL: import.meta.env.VITE_LEARNWORLDS_BASE_URL || 'https://api.learnworlds.com/v2',
  schoolId: import.meta.env.VITE_LEARNWORLDS_SCHOOL_ID || ''
};

// Create singleton instance
export const learnWorldsAPI = new LearnWorldsAPI(learnWorldsConfig);

// Error handling
export class LearnWorldsAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'LearnWorldsAPIError';
  }
}

// Utility functions
export const transformLearnWorldsData = {
  courseToLocal: (course: LearnWorldsCourse) => ({
    id: course.id,
    title: course.title,
    subject: course.category,
    level: course.difficulty_level,
    duration: formatDuration(course.duration_seconds),
    students: course.enrollment_count,
    rating: course.average_rating,
    description: course.description,
    progress: 0, // Will be calculated per user
    difficulty: course.difficulty_level
  }),

  userToLocal: (user: LearnWorldsUser) => ({
    id: user.id,
    name: `${user.first_name} ${user.last_name}`,
    email: user.email,
    username: user.username,
    avatar: user.avatar,
    isActive: user.is_active,
    lastLogin: user.last_login,
    joinedAt: user.created
  }),

  enrollmentToLocal: (enrollment: LearnWorldsEnrollment) => ({
    id: enrollment.id,
    userId: enrollment.user_id,
    courseId: enrollment.course_id,
    progress: enrollment.progress_percentage,
    status: enrollment.status,
    enrolledAt: enrollment.enrolled_at,
    completedAt: enrollment.completed_at,
    timeSpent: enrollment.time_spent_seconds,
    lastAccessed: enrollment.last_accessed
  })
};

const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};