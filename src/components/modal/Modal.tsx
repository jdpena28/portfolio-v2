'use client';

import {
  useCallback,
  useRef,
  useEffect,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed bottom-0 left-0 right-0 top-0 z-50 mx-auto h-screen bg-black/60 backdrop-blur-md"
      aria-hidden
      onClick={onClick}>
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 w-[95%] -translate-x-1/2 -translate-y-1/2 space-y-3 rounded-md bg-white p-6 sm:w-10/12 md:w-8/12 lg:w-1/2">
        {children}
      </div>
    </div>
  );
}
