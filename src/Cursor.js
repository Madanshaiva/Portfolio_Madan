import { useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      document.body.style.cursor = "default"; // Ensure default cursor on mobile
      return; // Stop execution here (no need to create cursor elements)
    }

    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const follower = document.createElement('div');
    follower.classList.add('cursor', 'cursor__follower');
    document.body.appendChild(follower);

    const setPosition = (element, e) => {
      element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseMove = (e) => {
      setPosition(cursor, e);
      setPosition(follower, e);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (document.body.contains(cursor)) document.body.removeChild(cursor);
      if (document.body.contains(follower)) document.body.removeChild(follower);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default Cursor;
