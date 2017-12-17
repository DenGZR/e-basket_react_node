// import EventModel from '../../models/EventModel';

const eventHandler = (req, res, next) => {
  // const user_id = getSessionId(req.cookies);
  // const session_id = getUserId(req.cookies);
  // const referrer_url = req.get('Referrer');
  // const { ip } = req;
  // const { protocol, hostname, path, query } = parse(req.body.url);


  // before create event we need find in db user_id and session_id
  // EventModel.create({
  //   user_id,
  //   session_id,
  //   type: req.body.type,
  //   ip,
  //   protocol,
  //   hostname,
  //   path,
  //   query,
  //   referrer_url,
  //   utm: utm(query),
  //   parameters: req.body
  // }, (err, event) => {
  //   if (err) {
  //
  //     res.status(200).json({ data: err });
  //     return next();
  //   }
  //   console.log('eventHandler create event', event);
  //   res.status(200).json({ data: event });
  // });
};

export default eventHandler;
