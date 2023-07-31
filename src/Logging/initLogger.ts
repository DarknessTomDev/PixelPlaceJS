import winston from 'winston';
import registerTransports from './registerTransports';

function initLogger() {
    registerTransports();
}

export default initLogger;