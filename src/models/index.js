// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CardSet, Card } = initSchema(schema);

export {
  CardSet,
  Card
};