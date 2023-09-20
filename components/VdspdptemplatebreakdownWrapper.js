import dynamic from 'next/dynamic';

const Vdspdptemplatebreakdown = dynamic(
  () => import('./Vdspdptemplatebreakdown.client.tsx'),
  { ssr: false }
);

function VdspdptemplatebreakdownWrapper() {
  return <Vdspdptemplatebreakdown />;
}

export default VdspdptemplatebreakdownWrapper;
