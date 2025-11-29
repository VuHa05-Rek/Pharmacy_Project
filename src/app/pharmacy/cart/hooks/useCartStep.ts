import { useState } from 'react';

export const useCartStep = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const next = () => setStep((prev) => Math.min(prev + 1, 4) as 1 | 2 | 3 | 4);

  const back = () => setStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3 | 4);

  const goTo = (n: 1 | 2 | 3 | 4) => setStep(n);

  return { step, next, back, goTo };
};
