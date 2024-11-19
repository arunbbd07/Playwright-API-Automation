import { createLogger, format, transports } from 'winston';
import * as fs from 'fs'

// Clear the log file at the start of each run
const logFilePath = 'combined.log';
fs.writeFileSync(logFilePath, '');

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
  ],
});

//export default logger;
