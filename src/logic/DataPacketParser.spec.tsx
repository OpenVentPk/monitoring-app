import { BreathingPhase } from '../enums/BreathingPhase';
import { PacketReading } from '../interfaces/PacketReading';
import { parseDataPacket } from './DataPacketParser';

test('verify packet parsing', () => {
  // prettier-ignore
  let testDataPacket: number[] = [36, 79, 86, 80, 136, 85, 9, 0, 50, 144, 143, 98, 250, 127, 198, 93, 55, 166, 0, 0, 88, 2, 60, 12, 33, 0, 30, 0, 50, 115, 111, 166, 132, 150, 0, 71, 42, 0, 209, 0, 195, 0, 0, 0, 0, 0, 0, 201, 13];
  let expectedReading: PacketReading = {
    measuredPressure: 4.65,
    peep: {
      name: 'PEEP',
      unit: 'cmH2O',
      setValue: 0,
      value: 4.65,
      lowerLimit: 4,
      upperLimit: 21,
    },
    pip: {
      name: 'PIP',
      unit: 'cmH2O',
      setValue: 30,
      value: -30,
      lowerLimit: 25,
      upperLimit: 35,
    },
    plateauPressure: {
      name: 'Plateau Pressure',
      unit: 'cmH2O',
      setValue: 30,
      value: 28.44,
      lowerLimit: 28,
      upperLimit: 32,
    },
    respiratoryRate: {
      name: 'Patient Rate',
      unit: 'BPM',
      setValue: 12,
      value: 0,
      lowerLimit: 11,
      upperLimit: 13,
    },
    tidalVolume: {
      name: 'Tidal Volume',
      unit: 'ml',
      setValue: 600,
      value: 253.09,
      lowerLimit: 510,
      upperLimit: 690,
    },
    ieRatio: '1.0 : 2.3',
    vti: 600.56,
    vte: 351.84,
    minuteVentilation: {
      name: 'Minute Vent.',
      unit: 'lpm',
      setValue: 7.2,
      value: 11.09,
      lowerLimit: 6,
      upperLimit: 8,
    },
    fiO2: {
      name: 'FiO2',
      unit: '%',
      setValue: 0,
      setValueText: '0-0',
      value: 0,
      lowerLimit: -2,
      upperLimit: 2,
    },
    flowRate: -0.03,
    mode: 'CPAP',
    breathingPhase: BreathingPhase.Expiratory,
    alarms: [],
  };
  const actualReading: PacketReading = parseDataPacket(testDataPacket);
  expect(actualReading).toStrictEqual(expectedReading);
});
