import { Financial } from './financial';

export interface Establishment {
  id: String;
  index: Number;
  guid: String;
  picture: String;
  name: String;
  email: String;
  phone: String;
  address: String;
  registered: String;
  latitude: String;
  longitude: String;
  city: String;
  financial: Financial;
}
