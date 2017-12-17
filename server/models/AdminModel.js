import mongoose, { Schema } from 'mongoose';
import { waterfall } from 'async';

/**
 * Schama admin
 */
export const adminSchema = new Schema({
  isSuper: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  createdData: {
    type: Date,
    default: Date.now
  },
  hashedPassword: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  }
});
/**
 * encryptPassword metod in adminSchema
 * @param {String} Password admin
 */
adminSchema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

adminSchema.virtual('password')
  .set(function(password) {
    this._plainPassword = password;
    this.salt = Date.now().toString();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._plainPassword;
  });

/**
 * checkPassword metod in adminSchema
 * @param {String} Password admin
 */
adminSchema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};
/**
 * updatePassword metod in adminSchema
 * @param {String} currentPassword admin
 * @param {String} newPassword admin
 * @param {function} callback Callback
 */
adminSchema.methods.updatePassword = function(currentPassword, newPassword, callback) {
  const Admin = this;
  if(Admin.checkPassword(currentPassword) && newPassword) {
    log.info('update password');
    Admin.password = newPassword;
    callback(null, Admin);
  } else {
    if(!newPassword) {
      log.error('Wrong new password');
      callback(new Error('Wrong new password'));
    } else {
      log.error('Wrong current password');
      callback(new Error('Wrong current password'));
    }
  }
};
/**
 * authorize statics metod in adminSchema
 * @param {String} email admin
 * @param {String} password admin
 * @param {function} callback Callback
 */
adminSchema.statics.authorize = function(email, password, callback) {
  const Admin = this;
  /**
   * Try find admin in db
   * @param {function} callback Callback
   */
  const findUserAdmin = callback => {
    Admin.findOne({ email: email }, callback);
  };
  /**
   * Check admin password
   * @param {object} userAdmin Contains data about admin
   * @param {function} callback Callback
   */
  const userCheckPassword = (userAdmin, callback) => {
    if (userAdmin) {
      log.info('admin is finded', userAdmin);
      if (userAdmin.checkPassword(password)) {
        callback(null, userAdmin);
      } else {
        callback(new Error('Wrong email are password'));
      }
    } else {
      log.info('userAdmin dont finded');
      callback(new Error('Wrong email or user not found' ));
    }
  };

  waterfall([
    findUserAdmin,
    userCheckPassword
  ], callback);
};

export default mongoose.model('Admin', adminSchema, 'admins');
