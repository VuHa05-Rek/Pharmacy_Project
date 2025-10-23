import { CONFIG } from '@/config-global';

import { PharmacyView } from '@/components/pharmacy/pharmacy-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Pharmacy | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <PharmacyView />;
}
