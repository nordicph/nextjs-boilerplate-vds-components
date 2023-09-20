import { use client } from 'next';
import dynamic from 'next/dynamic';

const Vdspdptemplatebreakdown = dynamic(
  () => import('./Vdspdptemplatebreakdown.client.tsx'),
  {
    ssr: false, // This will load the component only on the client side.
    loading: () => <p>Loading...</p>
  }
);

function VdspdptemplatebreakdownWrapper() {
  return <Vdspdptemplatebreakdown />;
}

export default VdspdptemplatebreakdownWrapper;