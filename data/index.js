export const listTimer = [
  {
    id: '1',
    title: 'Hủy bỏ',
    value: 0,
  },
  {
    id: '2',
    title: '15 giây',
    value: 15000,
  },
  {
    id: '3',
    title: '1 phút',
    value: 60000,
  },
  {
    id: '4',
    title: '5 phút',
    value: 300000,
  },
  {
    id: '5',
    title: '1 giờ',
    value: 3600000,
  },
  {
    id: '6',
    title: '1 ngày',
    value: 86400000,
  },
];

export const tracks = [
  {
    id: '1',
    title: 'Get Lucky',
    artist: 'Daft Punk ft. Pharrell Williams, Nile Rodgers',
    duration: '04:09',
    source: require('./sounds/getlucky.mp3'),
    artwork: require('./artworks/getlucky.png'),
  },
  {
    id: '2',
    title: 'Counting Stars',
    artist: 'OneRepublic',
    duration: '04:18',
    source: require('./sounds/countingstars.mp3'),
    artwork: require('./artworks/countingstars.jpg'),
  },
  {
    id: '3',
    title: 'Lights',
    artist: 'Ellie Goulding',
    duration: '04:02',
    source: require('./sounds/lights.mp3'),
    artwork: require('./artworks/lights.jpg'),
  },
  {
    id: '4',
    title: 'Grenade',
    artist: 'Bruno Mars',
    duration: '03:50',
    source: require('./sounds/grenade.mp3'),
    artwork: require('./artworks/grenade.jpg'),
  },
  {
    id: '5',
    title: 'Addicted To You',
    artist: 'Avicii',
    duration: '02:26',
    source: require('./sounds/addictedtoyou.mp3'),
    artwork: require('./artworks/addictedtoyou.jpg'),
  },
  {
    id: '6',
    title: 'Renegades',
    artist: 'X Ambassadors',
    duration: '03:20',
    source: require('./sounds/renegades.mp3'),
    artwork: require('./artworks/renegades.jpg'),
  },
  {
    id: '7',
    title: 'Riptide',
    artist: 'Vance Joy',
    duration: '03:18',
    source: require('./sounds/riptide.mp3'),
    artwork: require('./artworks/riptide.jpg'),
  },
  {
    id: '8',
    title: 'Dont Stop Me Now',
    artist: 'Queen',
    duration: '03:32',
    source: require('./sounds/dontstopmenow.mp3'),
    artwork: require('./artworks/dontstopmenow.jpg'),
  },
  {
    id: '9',
    title: 'Another Brick In The Wall',
    artist: 'Pink Floyd',
    duration: '03:56',
    source: require('./sounds/anotherbrickinthewall.mp3'),
    artwork: require('./artworks/anotherbrickinthewall.jpg'),
  },
  {
    id: '10',
    title: 'Piano Sonata No. 1 in F minor',
    artist: 'Ludwig van Beethoven',
    duration: '17:52',
    source: require('./sounds/pianosonata.mp3'),
    artwork: require('./artworks/pianosonata.jpg'),
  },
  {
    id: '11',
    title: 'Symphony No. 40 in G minor K.550',
    artist: 'Wolfgang Amadeus Mozart',
    duration: '26:25',
    source: require('./sounds/symphony.mp3'),
    artwork: require('./artworks/symphony.jpg'),
  },
  {
    id: '12',
    title: 'Violin Sonata No. 2 in A minor BWV.1003',
    artist: 'Johann Sebastian Bach',
    duration: '24:36',
    source: require('./sounds/violinsonata.mp3'),
    artwork: require('./artworks/violinsonata.jpg'),
  },
  {
    id: '13',
    title: 'Cello Sonata No. 3 in A Minor RV.43',
    artist: 'Antonio Vivaldi',
    duration: '14:47',
    source: require('./sounds/cellosonata.mp3'),
    artwork: require('./artworks/cellosonata.jpg'),
  },
];

export const listAllTrack = [
  {
    id: '1',
    title: 'all',
    items: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
    ],
  },
];

export const playlists = [
  {
    id: 1,
    title: 'Pop',
    items: ['1', '2', '3', '4', '5', '6', '7', '8'],
  },
  {
    id: 2,
    title: 'Rock',
    items: ['8', '9'],
  },
  {
    id: 3,
    title: 'Classic',
    items: ['10', '11'],
  },
  {
    id: 4,
    title: 'Baroque',
    items: ['12', '13'],
  },
];

export const listSinger = [
  {
    id: '1',
    title: 'Daft Punk ft. Pharrell Williams, Nile Rodgers',
    items: ['1'],
  },
  {
    id: '2',
    title: 'OneRepublic',
    items: ['2'],
  },
  {
    id: '3',
    title: 'Ellie Goulding',
    items: ['3'],
  },
  {
    id: '4',
    title: 'Bruno Mars',
    items: ['4'],
  },
  {
    id: '5',
    title: 'Avicii',
    items: ['5'],
  },
  {
    id: '6',
    title: 'X Ambassadors',
    items: ['6'],
  },
  {
    id: '7',
    title: 'Vance Joy',
    items: ['7'],
  },
  {
    id: '8',
    title: 'Queen',
    items: ['8'],
  },
  {
    id: '9',
    title: 'Pink Floyd',
    items: ['9'],
  },
  {
    id: '10',
    title: 'Ludwig van Beethoven',
    items: ['10'],
  },
  {
    id: '11',
    title: 'Wolfgang Amadeus Mozart',
    items: ['11'],
  },
  {
    id: '12',
    title: 'Johann Sebastian Bach',
    items: ['12'],
  },
  {
    id: '13',
    title: 'Antonio Vivaldi',
    items: ['13'],
  },
];

export const listAlbum = [
  {
    id: '1',
    title: 'Album 1',
    items: ['1', '2', '3', '4', '5', '6', '7'],
  },
  {
    id: '2',
    title: 'Album 2',
    items: ['8', '9', '10', '11', '12', '13'],
  },
];
