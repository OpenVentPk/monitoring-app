//config.js
import {
  logger,
  configLoggerType,
  consoleTransport,
  fileAsyncTransport,
} from 'react-native-logs';
import * as RNFS from 'react-native-fs';
import { getTimestampedFilename } from '../utils/FileUtils';
import AppConfig from '../constants/AppConfig';

console.log('starting global logger');

const logDirectory: string = `${AppConfig.internalAppDirectoryPath}/app-logs`;
RNFS.mkdir(logDirectory);

const config: configLoggerType = {
  transport: (props) => {
    consoleTransport(props);
    fileAsyncTransport(props);
  },
  transportOptions: {
    FS: RNFS,
    logDirectory: `${logDirectory}`,
    fileName: getTimestampedFilename(),
  },
  dateFormat: 'utc',
};

var log = logger.createLogger(config);

if (__DEV__) {
  log.setSeverity('debug');
} else {
  log.setSeverity('info');
}

export { log };
