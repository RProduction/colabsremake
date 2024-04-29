import React, {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

export function useAppear() {
  const [check, setCheck] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
    delay: 200, 
    onChange(inView, entry) {
      console.log(inView);
    },
  });

  useEffect(() => {
    if(!check && inView) {
      setCheck(true);
    }
  }, [inView]);

  return {
    ref, check
  }
}