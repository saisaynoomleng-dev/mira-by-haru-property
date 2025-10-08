import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatName = (name: string) => {
  return `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
};

export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(currency);
};

export const formatDate = (date: string) => {
  const d = new Date(date);
  const hasTime = date.includes('T') || date.match(/\d{2}:\d{2}/);

  const options: Intl.DateTimeFormatOptions = hasTime
    ? {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }
    : {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: '2-digit',
      };
  return d.toLocaleDateString('en-US', options);
};

export const formatSquareFeet = (squareFeet: number) => {
  return new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
  }).format(squareFeet);
};
