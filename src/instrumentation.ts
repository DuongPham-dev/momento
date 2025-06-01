// Handlers
import { connectMongoose } from '@/app/api/_handlers/db/connection';

export const register = () => {
  // Connect Mongoose DB
  connectMongoose().then(console.log).catch(console.error);
};
