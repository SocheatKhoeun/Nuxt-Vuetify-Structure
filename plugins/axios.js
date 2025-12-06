import axios from 'axios';
import Cookies from 'js-cookie';
export default defineNuxtPlugin(nuxtApp => {
  const UserPublicAPI = useRuntimeConfig().public.USER_PUBLIC_API;
  const UserPrivateAPI = useRuntimeConfig().public.USER_PRIVATE_API;
  const AdminPublicAPI = useRuntimeConfig().public.ADMIN_PUBLIC_API;
  const AdminPrivateAPI = useRuntimeConfig().public.ADMIN_PRIVATE_API;

  // Public Axios instance (no token required), with credentials enabled for CORS
  const UserPublicAPIAxiosInstance = axios.create({
    baseURL: UserPublicAPI,
    withCredentials: true,
  });
  const AdminPublicAPIAxiosInstance = axios.create({
    baseURL: AdminPublicAPI,
  });

  // Private Axios instance (with token)
  const UserPrivateAPIAxiosInstance = axios.create({
    baseURL: UserPrivateAPI,
  });
  const AdminPrivateAPIAxiosInstance = axios.create({
    baseURL: AdminPrivateAPI,
  });
  
  // Attach token to the private Axios instance (if needed)
  UserPrivateAPIAxiosInstance.interceptors.request.use(config => {
    const token = Cookies.get('token'); // Example: Getting token from cookies or any store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Attach token to the private Axios instance (if needed)
  AdminPrivateAPIAxiosInstance.interceptors.request.use(config => {
    const token = Cookies.get('token'); // Fixed token retrieval
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Fixed string interpolation
    }
    return config;
  });

  // Provide all instances globally
  nuxtApp.provide('UserPublicAxios', UserPublicAPIAxiosInstance);
  nuxtApp.provide('AdminPublicAxios', AdminPublicAPIAxiosInstance);
  nuxtApp.provide('UserPrivateAxios', UserPrivateAPIAxiosInstance);
  nuxtApp.provide('AdminPrivateAxios', AdminPrivateAPIAxiosInstance);
});
