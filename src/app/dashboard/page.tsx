import { CONFIG } from '@/config-global';

import { BlankView } from '@/sections/blank/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <BlankView title="Page one" />;
}
