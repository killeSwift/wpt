'use strict';

test(() => {
  // Compute Pressure should support at least "cpu"
  const source = ComputePressureObserver.supportedSources;
  assert_in_array('cpu', source);
}, 'ComputePressureObserver should support at least "cpu"');
