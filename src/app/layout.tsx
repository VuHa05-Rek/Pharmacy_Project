import '@/global.css';

// ----------------------------------------------------------------------

import type { Viewport } from 'next';

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import { CONFIG } from '@/config-global';
import { primary } from '@/theme/core/palette';
import { schemeConfig } from '@/theme/scheme-config';
import { ThemeProvider } from '@/theme/theme-provider';

import { ProgressBar } from '@/components/progress-bar';
import { MotionLazy } from '@/components/animate/motion-lazy';
import { SettingsDrawer, defaultSettings, SettingsProvider } from '@/components/settings';

import { AuthProvider } from '@/auth/context/jwt';

// ----------------------------------------------------------------------

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

export const metadata = {
  icons: [
    {
      rel: 'icon',
      url: `${CONFIG.assetsDir}/favicon.ico`,
      // title: 'HoangHa Pharmacy',
      // description: 'Your health, our mission',
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

import { inter, publicSans, dmSans, nunitoSans, barlow } from '@/theme/fonts';

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${publicSans.variable} ${dmSans.variable} ${nunitoSans.variable} ${barlow.variable}`}>
      <body>
        <InitColorSchemeScript
          defaultMode={schemeConfig.defaultMode}
          modeStorageKey={schemeConfig.modeStorageKey}
        />

        <AuthProvider>
          <SettingsProvider settings={defaultSettings}>
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                <SettingsDrawer />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
