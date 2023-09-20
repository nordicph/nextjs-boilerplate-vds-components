import dynamic from 'next/dynamic';

const Vdspdptemplatebreakdown = dynamic(
  () => import('./Vdspdptemplatebreakdown.client.tsx'),
  { ssr: false }
);

function VdspdptemplatebreakdownWrapper(props) {
  return <Vdspdptemplatebreakdown {...props} />;
}

export default VdspdptemplatebreakdownWrapper;