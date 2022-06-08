import { toast } from 'react-toastify';

export const notifyDefault = (str: string) => toast(str, { type: 'default' });
export const notifySuccess = (str: string) => toast(str, { type: 'success' });
export const notifyError = (str: string) => toast(str, { type: 'error' });
