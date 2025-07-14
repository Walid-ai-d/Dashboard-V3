import { useState, useEffect, useCallback, useMemo } from 'react';
import { learnWorldsAPI, LearnWorldsCourse, LearnWorldsUser, LearnWorldsEnrollment, LearnWorldsAnalytics } from '../services/learnWorldsAPI';

// Cache for API responses
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCacheKey = (endpoint: string, params?: any) => {
  return `${endpoint}_${JSON.stringify(params || {})}`;
};

const getCachedData = (key: string) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key: string, data: any) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
};

export const useLearnWorldsData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWithErrorHandling = useCallback(async <T>(
    apiCall: () => Promise<T>,
    cacheKey?: string
  ): Promise<T | null> => {
    // Check cache first
    if (cacheKey) {
      const cachedData = getCachedData(cacheKey);
      if (cachedData) {
        return cachedData;
      }
    }

    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      
      // Cache the result
      if (cacheKey) {
        setCachedData(cacheKey, result);
      }
      
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    fetchWithErrorHandling
  };
};

export const useCourses = () => {
  const [courses, setCourses] = useState<LearnWorldsCourse[]>([]);
  const { loading, error, fetchWithErrorHandling } = useLearnWorldsData();

  const fetchCourses = useCallback(async (page: number = 1, perPage: number = 50) => {
    const cacheKey = getCacheKey('courses', { page, perPage });
    const result = await fetchWithErrorHandling(() => 
      learnWorldsAPI.getCourses(page, perPage),
      cacheKey
    );
    
    if (result) {
      setCourses(result.data);
    }
  }, [fetchWithErrorHandling]);

  const fetchCourse = useCallback(async (courseId: string) => {
    const cacheKey = getCacheKey('course', { courseId });
    return fetchWithErrorHandling(() => 
      learnWorldsAPI.getCourse(courseId),
      cacheKey
    );
  }, [fetchWithErrorHandling]);

  const fetchCourseAnalytics = useCallback(async (courseId: string, dateRange: string) => {
    const cacheKey = getCacheKey('courseAnalytics', { courseId, dateRange });
    return fetchWithErrorHandling(() => 
      learnWorldsAPI.getCourseAnalytics(courseId, dateRange),
      cacheKey
    );
  }, [fetchWithErrorHandling]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return useMemo(() => ({
    courses,
    loading,
    error,
    fetchCourses,
    fetchCourse,
    fetchCourseAnalytics
  }), [courses, loading, error, fetchCourses, fetchCourse, fetchCourseAnalytics]);
};

export const useUsers = () => {
  const [users, setUsers] = useState<LearnWorldsUser[]>([]);
  const { loading, error, fetchWithErrorHandling } = useLearnWorldsData();

  const fetchUsers = useCallback(async (page: number = 1, perPage: number = 50) => {
    const cacheKey = getCacheKey('users', { page, perPage });
    const result = await fetchWithErrorHandling(() => 
      learnWorldsAPI.getUsers(page, perPage),
      cacheKey
    );
    
    if (result) {
      setUsers(result.data);
    }
  }, [fetchWithErrorHandling]);

  const fetchUser = useCallback(async (userId: string) => {
    const cacheKey = getCacheKey('user', { userId });
    return fetchWithErrorHandling(() => 
      learnWorldsAPI.getUser(userId),
      cacheKey
    );
  }, [fetchWithErrorHandling]);

  const fetchUserProgress = useCallback(async (userId: string) => {
    const cacheKey = getCacheKey('userProgress', { userId });
    return fetchWithErrorHandling(() => 
      learnWorldsAPI.getUserProgress(userId),
      cacheKey
    );
  }, [fetchWithErrorHandling]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return useMemo(() => ({
    users,
    loading,
    error,
    fetchUsers,
    fetchUser,
    fetchUserProgress
  }), [users, loading, error, fetchUsers, fetchUser, fetchUserProgress]);
};

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<LearnWorldsAnalytics | null>(null);
  const { loading, error, fetchWithErrorHandling } = useLearnWorldsData();

  const fetchSchoolAnalytics = useCallback(async (dateRange: string) => {
    const cacheKey = getCacheKey('schoolAnalytics', { dateRange });
    const result = await fetchWithErrorHandling(() => 
      learnWorldsAPI.getSchoolAnalytics(dateRange),
      cacheKey
    );
    
    if (result) {
      setAnalytics(result);
    }
    
    return result;
  }, [fetchWithErrorHandling]);

  const fetchUserAnalytics = useCallback(async (dateRange: string) => {
    const cacheKey = getCacheKey('userAnalytics', { dateRange });
    return fetchWithErrorHandling(() => 
      learnWorldsAPI.getUserAnalytics(dateRange),
      cacheKey
    );
  }, [fetchWithErrorHandling]);

  const fetchCoursePerformance = useCallback(async (dateRange: string) => {
    const cacheKey = getCacheKey('coursePerformance', { dateRange });
    return fetchWithErrorHandling(() => 
      learnWorldsAPI.getCoursePerformance(dateRange),
      cacheKey
    );
  }, [fetchWithErrorHandling]);

  const fetchEngagementMetrics = useCallback(async (dateRange: string) => {
    const cacheKey = getCacheKey('engagementMetrics', { dateRange });
    return fetchWithErrorHandling(() => 
      learnWorldsAPI.getEngagementMetrics(dateRange),
      cacheKey
    );
  }, [fetchWithErrorHandling]);

  return useMemo(() => ({
    analytics,
    loading,
    error,
    fetchSchoolAnalytics,
    fetchUserAnalytics,
    fetchCoursePerformance,
    fetchEngagementMetrics
  }), [analytics, loading, error, fetchSchoolAnalytics, fetchUserAnalytics, fetchCoursePerformance, fetchEngagementMetrics]);
};

export const useEnrollments = () => {
  const [enrollments, setEnrollments] = useState<LearnWorldsEnrollment[]>([]);
  const { loading, error, fetchWithErrorHandling } = useLearnWorldsData();

  const fetchEnrollments = useCallback(async (page: number = 1, perPage: number = 50) => {
    const cacheKey = getCacheKey('enrollments', { page, perPage });
    const result = await fetchWithErrorHandling(() => 
      learnWorldsAPI.getEnrollments(page, perPage),
      cacheKey
    );
    
    if (result) {
      setEnrollments(result.data);
    }
  }, [fetchWithErrorHandling]);

  const fetchCourseEnrollments = useCallback(async (courseId: string) => {
    const cacheKey = getCacheKey('courseEnrollments', { courseId });
    return fetchWithErrorHandling(() => 
      learnWorldsAPI.getCourseEnrollments(courseId),
      cacheKey
    );
  }, [fetchWithErrorHandling]);

  useEffect(() => {
    fetchEnrollments();
  }, [fetchEnrollments]);

  return useMemo(() => ({
    enrollments,
    loading,
    error,
    fetchEnrollments,
    fetchCourseEnrollments
  }), [enrollments, loading, error, fetchEnrollments, fetchCourseEnrollments]);
};