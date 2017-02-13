import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const PostsSchema = new Schema({
  title: {
    unique: true,
    type: String
  },
  post: String,
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

PostsSchema.pre('save', function postSave(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }

  next();
});

const Posts = mongoose.model('post', PostsSchema);

export default Posts;
