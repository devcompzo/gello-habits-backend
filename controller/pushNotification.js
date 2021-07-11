const webpush = require('web-push');

const vapidKeys = {
  publicKey: process.env.NOTIFICATIONS_PUBLIC_KEY,
  privateKey: process.env.NOTIFICATIONS_PRIVATE_KEY,
};

webpush.setVapidDetails(
  'mailto:myuserid@email.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

function saveSubscription(req, res) {
  // Save sub to db
  res.json({ message: 'Subscription saved succesfully' });
}

function sendNotification(req, res) {
  const subscription = {};
  const message = 'Test content';
  webpush.sendNotification(subscription, message);
  res.json({ message: 'Notification sent successfully' });
}

exports.saveSubscription = saveSubscription;
exports.sendNotification = sendNotification;
