import { connect } from 'mongoose';

const uri = process.env.MONGOOSE_URI ?? '';

export const connectMongoose = async () => {
  try {
    await connect(uri);

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
  } finally {
  }
};
