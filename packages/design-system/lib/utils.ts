import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const handleError = (error: unknown): void => {
  let message = 'An unknown error occurred.';
  let stack = '';
  if (error instanceof Error) {
    message = error.message;
    stack = error.stack || '';
  } else if (typeof error === 'string') {
    message = error;
  }
  // Log error message and stack trace
  // eslint-disable-next-line no-console
  console.error('Error:', message);
  if (stack) {
    // eslint-disable-next-line no-console
    console.error('Stack trace:', stack);
  }
  toast.error(message);
};
