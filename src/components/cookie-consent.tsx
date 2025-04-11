import { Button } from "@heroui/button";
import React from "react";
import { Link } from "@heroui/link";

import { buttonGradient } from "./primitives";
import { Trans, useTranslation } from "react-i18next";
export const CookieConsent: React.FC = () => {
    const { t } = useTranslation();
  return (
    <div data-overlay-container="true">
      <div
        className="relative flex min-h-dvh flex-col bg-background bg-radial"
        id="app-container"
      >
        <div className="flex items-center justify-center">
          <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
            <div className="pointer-events-auto ml-auto max-w-xl rounded-large border border-divider bg-background/15 px-6 py-4 shadow-small backdrop-blur">
              <p className="text-small font-normal text-default-700">
                <Trans t={t} i18nKey="cookie-consent">
                </Trans>&nbsp;
                <Link className="text-small" href="#">
                  {t('cookie-policy')}
                </Link>
              </p>
              <div className="mt-4 flex items-center gap-x-1">
                <Button className={buttonGradient({ bordered: "violet" })}>
                  {t('accept-all')}
                </Button>
                <Button variant="bordered">{t('reject')}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
