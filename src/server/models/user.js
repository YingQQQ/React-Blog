import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    unique: true,
    type: String
  },
  password: String,
  meta: {
    creatAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }

  }
});

UserSchema.pre('save', function userSave(next) {
  const user = this;
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  const SALT_WORK_FACTOR = 10;
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods = {
  comparePassword: (_password, password) => {
    return bcrypt.compareSync(_password, password);
  }
};

const User = mongoose.model('users', UserSchema);

export default User;
