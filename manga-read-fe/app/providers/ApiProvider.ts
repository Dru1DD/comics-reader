import { createContext, useContext } from 'react';
import { AuthApi } from '../api/auth-api';
import { UserApi } from '../api/user-api';

export interface ApiProviderValue {
  authApi: AuthApi;
  userApi: UserApi;
}

export type Services = AuthApi | UserApi;

const ApiContext = createContext<ApiProviderValue>({} as ApiProviderValue);

const createServiceHook = <ServiceType extends Services>(serviceName: keyof ApiProviderValue) => {
  return () => {
    const services = useContext(ApiContext);

    return services[serviceName] as ServiceType;
  };
};

export const useAuthApi = createServiceHook<AuthApi>('authApi');
export const useUserApi = createServiceHook<UserApi>('userApi');

export const ApiProvider = ApiContext.Provider;
