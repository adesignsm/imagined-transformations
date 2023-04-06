import React, { useEffect, useState } from 'react'

export const useOnScreen = (ref) => {

  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver((([entry] )=> {
    //console.log(entry); //provides an array, key info are 'target','isIntersecting', and 'isVisible'
    setIsOnScreen(entry.isIntersecting)
  }), {
    threshold: 0.7
  });

  useEffect(() => {
    observer.observe(ref.current)

    return () => observer.disconnect()
  });

  return isOnScreen;
}

