import { parse } from 'url';

export default function accessControlAllow(req, res, next) {
  const url = req.get('origin') || req.get('Referrer');
  if(!url) {
    return next();
  }
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  return next();
};
