import 'babel-polyfill';
import test from 'ava';
import { buildReqUrl } from './../app/httpReq';

test('buildReqUrl', t => {
  const urlToCall = buildReqUrl('http://test.com', { user: 'x', data: 'y' });
  t.is(urlToCall, 'http://test.com?user=x&data=y');
});
