import { useEffect } from 'react';
import { useMiniApp, initSwipeBehavior, useInitData } from '@telegram-apps/sdk-react';
import { useTranslation } from 'react-i18next';
import useAsyncEffect from '../../hooks/useAsyncEffect';


const DEFAULT_LANGUAGE_CODE = 'en';
const EXPAND_WEB_APP_EVENT = 'web_app_expand';
const BACKGROUND_COLOR = '#0E1630';
const HEADER_COLOR = '#0E1630';

const TelegramInit = () => {
  const { i18n } = useTranslation();

  const miniApp = useMiniApp(true);
  const initData = useInitData(true);

  const [swipeBehavior] = initSwipeBehavior();

  useEffect(() => {
    swipeBehavior.disableVerticalSwipe();
  }, [swipeBehavior]);

  useAsyncEffect(async () => {
    await i18n.changeLanguage(initData?.user?.languageCode || DEFAULT_LANGUAGE_CODE);
  }, [initData]);

  useEffect(() => {
    if (miniApp) {
      (miniApp as unknown as { postEvent: (event: string) => void }).postEvent(EXPAND_WEB_APP_EVENT);
      miniApp.setBgColor(BACKGROUND_COLOR);
      miniApp.setHeaderColor(HEADER_COLOR);
    }
  }, [miniApp]);

  return null;
};

export default TelegramInit;
