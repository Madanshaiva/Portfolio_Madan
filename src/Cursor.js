import { useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
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

    document.addEventListener('mousemove', handleMouseMove); // Attach to the entire document for full-screen coverage

    return () => {
      document.body.removeChild(cursor);
      document.body.removeChild(follower);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // No visible output for this component
};

export default Cursor;
