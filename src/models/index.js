// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PresetCardSet, CardSet, Card } = initSchema(schema);

export {
  PresetCardSet,
  CardSet,
  Card
};