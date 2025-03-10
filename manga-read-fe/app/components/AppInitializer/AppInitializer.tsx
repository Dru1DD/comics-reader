import { SessionProvider } from '../../providers/SessionProvider';
import useDelayedState from '../../hooks/useDelayState';
import useCurrentUserQuery from '../../hooks/queries/useCurrentUserQuery';
import useSignInMutation from '../../hooks/mutations/useSignInMutation';
import { mockTelegramEnv, parseInitData, useLaunchParams } from '@telegram-apps/sdk-react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { ReactNode, useEffect } from 'react';

const LOADING_STATE_DELAY = 1000;

if (typeof window !== 'undefined' && import.meta.env.MODE === 'development') {
  const initDataRaw = new URLSearchParams([
    [
      'user',
      JSON.stringify({
        id: -10000,
        first_name: 'Andrew',
        last_name: 'Rogue',
        username: 'rogue',
        language_code: 'ru',
        is_premium: true,
        allows_write_to_pm: true,
      }),
    ],
    ['hash', '934710745036d59235978ddef6273fa64c78e154485f1f235fa8a99f84f1b833'],
    ['auth_date', '1716922846'],
    ['start_param', 'debug'],
    ['chat_type', 'sender'],
    ['chat_instance', '8428209589180549439'],
  ]).toString();

  mockTelegramEnv({
    themeParams: {},
    initData: parseInitData(initDataRaw),
    initDataRaw,
    startParam: '66c9d81214a3fd58f9624969',
    version: '7.7',
    platform: 'tdesktop',
  });
}

export interface AppInitializerProps {
    children: ReactNode;
  } 

const AppInitializer = ({ children }: AppInitializerProps) => {
  const [, setLoading] = useDelayedState(true, LOADING_STATE_DELAY);

  const { data: currentUser, refetch: refetchCurrentUser } = useCurrentUserQuery();
  const { mutateAsync: signIn } = useSignInMutation();

  const isCriticalDataLoaded = !!currentUser;

  const launchParams = useLaunchParams(true);

  useAsyncEffect(async () => {
    if (launchParams?.initDataRaw && currentUser === null) {
      await signIn({
        signInMessage: launchParams.initDataRaw,
        referralId: launchParams.startParam || undefined,
      });
    }
  }, [launchParams, currentUser]);

  useEffect(() => {
    setLoading(!isCriticalDataLoaded);
  }, [isCriticalDataLoaded, setLoading]);

  const renderApplication = () => {
    return children;
  };

  return (
    <SessionProvider currentUser={currentUser} refetch={refetchCurrentUser}>
      {renderApplication()}
    </SessionProvider>
  );
};

export default AppInitializer;
