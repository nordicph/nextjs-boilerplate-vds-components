import dynamic from 'next/dynamic';

const Vdspdptemplatebreakdown = dynamic(
  () => import('./Vdspdptemplatebreakdown.client.tsx'),
  { ssr: false, loading: () => <p>Loading...</p> }
);

function VdspdptemplatebreakdownWrapper() {
  return <Vdspdptemplatebreakdown />;
}

export default VdspdptemplatebreakdownWrapper;