import { createContext, useContext, useState, useEffect } from 'react';

const CourseContext = createContext(null);

export function CourseProvider({ children }) {
  const [courseUnlocked, setCourseUnlocked] = useState(
    () => sessionStorage.getItem('courseUnlocked') === 'true'
  );
  const [moduleDone, setModuleDone] = useState(() => {
    const done = {};
    for (let i = 1; i <= 8; i++) {
      done[i] = sessionStorage.getItem(`module${i}Done`) === 'true';
    }
    return done;
  });

  const unlockCourse = (code) => {
    if (code === 'ACCESO2026') {
      sessionStorage.setItem('courseUnlocked', 'true');
      setCourseUnlocked(true);
      return true;
    }
    return false;
  };

  const completeModule = (num) => {
    sessionStorage.setItem(`module${num}Done`, 'true');
    setModuleDone((prev) => ({ ...prev, [num]: true }));
  };

  const canAccessModule = (num) => {
    if (num === 1) return courseUnlocked;
    return moduleDone[num - 1] === true;
  };

  return (
    <CourseContext.Provider value={{ courseUnlocked, moduleDone, unlockCourse, completeModule, canAccessModule }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}
