'use server';
import instance from '@/app/core/lib/axios';
import { cookies } from 'next/headers';

export const loginAction = async (values: any) => {
  try {
    const { data } = await instance.post('/auth/login', values);
    const cookieStore = cookies();
    cookieStore.set('token', data.access_token, {
      httpOnly: true,
      secure: true,
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
