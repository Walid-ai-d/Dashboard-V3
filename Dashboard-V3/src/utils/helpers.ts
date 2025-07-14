export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
};

export const getProgressColor = (progress: number): string => {
  if (progress >= 80) return 'green';
  if (progress >= 50) return 'blue';
  if (progress >= 20) return 'yellow';
  return 'gray';
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'beginner': return 'green';
    case 'intermediate': return 'yellow';
    case 'advanced': return 'red';
    default: return 'gray';
  }
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};