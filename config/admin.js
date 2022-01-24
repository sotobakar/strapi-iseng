module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '51f36214e368df292a03349b3ed70ad2'),
  },
});
