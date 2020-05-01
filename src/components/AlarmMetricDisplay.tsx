import * as React from 'react';
import MetricDisplay from './MetricDisplay';

export default function AlarmMetricDisplay(props: any) {
  const state = getStateFromValue(props.value);

  function getStateFromValue(value: number) {
    if (value < props.lowerLimit || value > props.upperLimit) {
      return 'alarm';
    }
    return 'normal';
  }

  return (
    <MetricDisplay
      title={props.title}
      value={props.value}
      unit={props.unit}
      state={state}
    />
  );
}
