const nodemailer = require('nodemailer');

const DEFAULT_RECIPIENT = 'karlo.pavlovic47@gmail.com';

function normalizeAppPassword(value) {
  return String(value || '').replace(/\s+/g, '').trim();
}

function getMailerConfig() {
  return {
    user: String(process.env.GMAIL_USER || '').trim(),
    appPassword: normalizeAppPassword(process.env.GMAIL_APP_PASSWORD),
    recipient: String(process.env.MAIL_TO || DEFAULT_RECIPIENT).trim() || DEFAULT_RECIPIENT,
  };
}

function canSendMail() {
  const config = getMailerConfig();
  return Boolean(config.user && config.appPassword);
}

let transporter;

function getTransporter() {
  if (!canSendMail()) {
    throw new Error('Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.');
  }

  if (!transporter) {
    const config = getMailerConfig();
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.user,
        pass: config.appPassword,
      },
    });
  }

  return transporter;
}

async function sendMail({ subject, text, html, replyTo, to }) {
  const config = getMailerConfig();
  const target = String(to || config.recipient || DEFAULT_RECIPIENT).trim() || DEFAULT_RECIPIENT;

  return getTransporter().sendMail({
    from: config.user,
    to: target,
    subject,
    text,
    html,
    replyTo,
  });
}

module.exports = {
  DEFAULT_RECIPIENT,
  getMailerConfig,
  canSendMail,
  sendMail,
};