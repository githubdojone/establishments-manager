import 'jest-preset-angular';

var localStorageMock = [
  {
    id: '5e34937af59dabb9a2c4c05f',
    index: 0,
    guid: '7d35ec3a-1462-49cc-adec-1726f98862e1',
    picture: 'http://placehold.it/32x32',
    name: 'Gink',
    email: 'contato@gink.com',
    phone: '+1 (859) 505-2620',
    address: '808 Ford Street, Westerville, Nevada, 6937',
    registered: 'Sunday, September 18, 2016 10:04 AM',
    latitude: '37.849767',
    longitude: '-58.807759',
  },
  {
    id: '5e34937ab389aaf14cd62d05',
    index: 1,
    guid: '0fd467f7-5af4-4f7a-89f5-273d4032e153',
    picture: 'http://placehold.it/32x32',
    name: 'Geeketron',
    email: 'contato@geeketron.com',
    phone: '+1 (984) 548-3600',
    address: '698 Hendrickson Place, Valle, Missouri, 5695',
    registered: 'Wednesday, November 28, 2018 12:47 PM',
    latitude: '84.233418',
    longitude: '-1.928457',
  },
];
Object.defineProperty(window, 'localStorage', {
  value: JSON.stringify(localStorageMock),
});
