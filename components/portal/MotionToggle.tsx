import { useEffect, useState } from 'react';
import { getFlowRunning, initFlowRunning, setFlowRunning } from '../../lib/portal/bus';

/** The fixed "Pause motion" button, ported from ais-site/index.html. */
export default function MotionToggle() {
  const [running, setRunning] = useState(true);

  useEffect(() => {
    setRunning(initFlowRunning());
  }, []);

  const toggle = () => {
    const next = !getFlowRunning();
    setFlowRunning(next);
    setRunning(next);
  };

  return (
    <button className="flow-toggle glass" style={{ background: 'rgba(20,26,92,.75)' }} onClick={toggle}>
      {running ? 'Pause motion' : 'Play motion'}
    </button>
  );
}
