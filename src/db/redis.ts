
import { createClient } from 'redis';
import { REDIS_CONF } from '../conf/db';

const _client = createClient({
  url: `redis://${REDIS_CONF.host}:${REDIS_CONF.port}`
});

_client.connect();

class Redis {
  set(key: string, value: any) {
    if (typeof value === 'object') _client.set(key, JSON.stringify(value))
    _client.set(key, value)
  }
  get(key: string) {
    if (!key) return '';
    return _client.get(key)
  }
}
const redis = new Redis()

export default redis;