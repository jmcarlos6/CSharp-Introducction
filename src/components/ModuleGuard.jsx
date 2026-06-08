import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourse } from '../context/CourseContext';

export default function ModuleGuard({ moduleNum, children }) {
  const { canAccessModule } = useCourse();
  const navigate = useNavigate();

  useEffect(() => {
    if (!canAccessModule(moduleNum)) {
      const prev = moduleNum === 1 ? '/' : `/modulo-0${moduleNum - 1}`;
      navigate(prev, { replace: true });
    }
  }, [moduleNum, canAccessModule, navigate]);

  if (!canAccessModule(moduleNum)) return null;
  return children;
}
