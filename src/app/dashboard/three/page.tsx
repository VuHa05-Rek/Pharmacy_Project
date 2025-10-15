import { CONFIG } from 'src/config-global';

import { PharmacyView } from 'src/components/pharmacy/pharmacy-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Pharmacy | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <PharmacyView />;
}
