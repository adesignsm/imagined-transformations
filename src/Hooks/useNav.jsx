import React, { useContext, useEffect, useRef } from 'react';
import { useOnScreen } from "./useOnScreen";
import { NavContext } from "../Context/NavContext";

export const useNav = (navLinkId) => {
  
  const ref = useRef(null);
  const { setActiveLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if(isOnScreen) {
      setActiveLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveLinkId, navLinkId]);

  return ref;
}

