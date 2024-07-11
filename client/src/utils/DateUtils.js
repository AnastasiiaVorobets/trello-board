import { formatDistanceToNow, parseISO } from 'date-fns';

export const parseDate = (dateString) => dateString ? parseISO(dateString) : new Date();

export const formatDistance = (date) => formatDistanceToNow(date, { addSuffix: true });
