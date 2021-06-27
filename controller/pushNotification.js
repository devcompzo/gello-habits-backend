const webpush = require('web-push');

const vapidKeys = {
  publicKey: process.env.NOTIFICATIONS_PUBLIC_KEY,
  privateKey: process.env.NOTIFICATIONS_PRIVATE_KEY
};

webpush.setVapidDetails(
  'mailto:myuserid@email.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

function saveSubscriptionToDb(subscription) {
  // Squelize save...
}

function saveSubscription(req, res) {
  const subscription = req.body;
  // Save sub to db
  // saveSubscriptionToDb(subscription);
  res.json({message: 'Subscription saved succesfully'});
}

const _sendNotification = (subscription, dataToSend) => {
  webpush.sendNotification(subscription, dataToSend);
}

function sendNotification(req, res) {
  const subscription = {};
  const message = 'Test content';
  _sendNotification(subscription, message);
  res.json({ message: 'Notification sent successfully' });
}

exports.saveSubscription = saveSubscription;
exports.sendNotification = sendNotification;
