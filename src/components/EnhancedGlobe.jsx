import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const cities = [
  { lat: 28.6124, lng: 77.3566, label: 'Noida, India', isHome: true },
  { lat: 37.7749, lng: -122.4194, label: 'San Francisco' },
  { lat: 51.5074, lng: -0.1278, label: 'London' },
  { lat: 1.3521, lng: 103.8198, label: 'Singapore' },
  { lat: 52.5200, lng: 13.4050, label: 'Berlin' },
];

const rings = [
  { lat: 28.6124, lng: 77.3566, maxR: 3, propagationSpeed: 1.5, repeatPeriod: 1200, color: () => 'rgba(0, 212, 255, 0.8)' },
];

const GlobeInstance = ({ size, enableZoom, autoRotate, isVisible }) => {
  const globeEl = useRef();

  useEffect(() => {
    if (!globeEl.current) return;
    const controls = globeEl.current.controls();
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = enableZoom;
    globeEl.current.pointOfView({ lat: 20, lng: 77, altitude: 2 }, 0);
  }, [isVisible, enableZoom, autoRotate]);

  return (
    <Globe
      ref={globeEl}
      height={size}
      width={size}
      backgroundColor="rgba(0,0,0,0)"
      backgroundImageOpacity={0}
      showAtmosphere
      atmosphereColor="#00d4ff"
      atmosphereAltitude={0.18}
      showGraticules
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      ringsData={rings}
      ringColor="color"
      ringMaxRadius="maxR"
      ringPropagationSpeed="propagationSpeed"
      ringRepeatPeriod="repeatPeriod"
      labelsData={cities}
      labelLat="lat"
      labelLng="lng"
      labelText="label"
      labelSize={(d) => (d.isHome ? 0.6 : 0.4)}
      labelDotRadius={(d) => (d.isHome ? 0.5 : 0.3)}
      labelColor={(d) => (d.isHome ? '#00d4ff' : 'rgba(255,255,255,0.6)')}
      labelResolution={2}
    />
  );
};

const EnhancedGlobe = ({ size = 280, autoRotate = true, isVisible = true }) => {
  const [expanded, setExpanded] = useState(false);

  // close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setExpanded(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // get responsive modal size
  const modalSize = Math.min(window.innerWidth, window.innerHeight) * 0.85;

  return (
    <>
      {/* normal globe with expand hint */}
      <div
        className="relative cursor-pointer group"
        onClick={() => setExpanded(true)}
        title="Click to expand">
        <GlobeInstance size={size} enableZoom={false} autoRotate={autoRotate} isVisible={isVisible} />
        {/* expand hint */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
          <span className="text-cyan-400 text-xs">Expand</span>
        </div>
      </div>

      {/* fullscreen modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setExpanded(false)}>
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}>
            {/* close button */}
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 border border-white/20 hover:bg-black/80 transition-colors">
              <img src="/assets/close.svg" alt="close" className="w-4 h-4 invert" />
            </button>
            <GlobeInstance size={modalSize} enableZoom={true} autoRotate={true} isVisible={expanded} />
            <p className="text-center text-white-600 text-xs mt-2">Scroll to zoom · Drag to rotate · Press Esc to close</p>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedGlobe;
