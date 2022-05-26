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
    albumId: '1',
    singerId: '1',
    typeTracksId: '1',
  },
  {
    id: '2',
    title: 'Counting Stars',
    artist: 'OneRepublic',
    duration: '04:18',
    source: require('./sounds/countingstars.mp3'),
    artwork: require('./artworks/countingstars.jpg'),
    albumId: '1',
    singerId: '2',
    typeTracksId: '1',
  },
  {
    id: '3',
    title: 'Lights',
    artist: 'Ellie Goulding',
    duration: '04:02',
    source: require('./sounds/lights.mp3'),
    artwork: require('./artworks/lights.jpg'),
    albumId: '1',
    singerId: '3',
    typeTracksId: '1',
  },
  {
    id: '4',
    title: 'Grenade',
    artist: 'Bruno Mars',
    duration: '03:50',
    source: require('./sounds/grenade.mp3'),
    artwork: require('./artworks/grenade.jpg'),
    albumId: '1',
    singerId: '4',
    typeTracksId: '1',
  },
  {
    id: '5',
    title: 'Addicted To You',
    artist: 'Avicii',
    duration: '02:26',
    source: require('./sounds/addictedtoyou.mp3'),
    artwork: require('./artworks/addictedtoyou.jpg'),
    albumId: '1',
    singerId: '5',
    typeTracksId: '1',
  },
  {
    id: '6',
    title: 'Renegades',
    artist: 'X Ambassadors',
    duration: '03:20',
    source: require('./sounds/renegades.mp3'),
    artwork: require('./artworks/renegades.jpg'),
    albumId: '1',
    singerId: '6',
    typeTracksId: '1',
  },
  {
    id: '7',
    title: 'Riptide',
    artist: 'Vance Joy',
    duration: '03:18',
    source: require('./sounds/riptide.mp3'),
    artwork: require('./artworks/riptide.jpg'),
    albumId: '2',
    singerId: '7',
    typeTracksId: '1',
  },
  {
    id: '8',
    title: 'Dont Stop Me Now',
    artist: 'Queen',
    duration: '03:32',
    source: require('./sounds/dontstopmenow.mp3'),
    artwork: require('./artworks/dontstopmenow.jpg'),
    albumId: '2',
    singerId: '8',
    typeTracksId: '2',
  },
  {
    id: '9',
    title: 'Another Brick In The Wall',
    artist: 'Pink Floyd',
    duration: '03:56',
    source: require('./sounds/anotherbrickinthewall.mp3'),
    artwork: require('./artworks/anotherbrickinthewall.jpg'),
    albumId: '2',
    singerId: '9',
    typeTracksId: '2',
  },
  {
    id: '10',
    title: 'Piano Sonata No. 1 in F minor',
    artist: 'Ludwig van Beethoven',
    duration: '17:52',
    source: require('./sounds/pianosonata.mp3'),
    artwork: require('./artworks/pianosonata.jpg'),
    albumId: '2',
    singerId: '10',
    typeTracksId: '3',
  },
  {
    id: '11',
    title: 'Symphony No. 40 in G minor K.550',
    artist: 'Wolfgang Amadeus Mozart',
    duration: '26:25',
    source: require('./sounds/symphony.mp3'),
    artwork: require('./artworks/symphony.jpg'),
    albumId: '2',
    singerId: '11',
    typeTracksId: '3',
  },
  {
    id: '12',
    title: 'Violin Sonata No. 2 in A minor BWV.1003',
    artist: 'Johann Sebastian Bach',
    duration: '24:36',
    source: require('./sounds/violinsonata.mp3'),
    artwork: require('./artworks/violinsonata.jpg'),
    albumId: '2',
    singerId: '12',
    typeTracksId: '4',
  },
  {
    id: '13',
    title: 'Cello Sonata No. 3 in A Minor RV.43',
    artist: 'Antonio Vivaldi',
    duration: '14:47',
    source: require('./sounds/cellosonata.mp3'),
    artwork: require('./artworks/cellosonata.jpg'),
    albumId: '2',
    singerId: '13',
    typeTracksId: '4',
  },
];

export const defaultCurrentList = {
  id: '0',
  title: 'Tất cả',
  items: tracks.map((x) => x.id),
};

export const listTypeTracks = [
  {
    id: 1,
    title: 'Pop',
  },
  {
    id: 2,
    title: 'Rock',
  },
  {
    id: 3,
    title: 'Classic',
  },
  {
    id: 4,
    title: 'Baroque',
  },
];

export const listSinger = [
  {
    id: '1',
    title: 'Daft Punk ft. Pharrell Williams, Nile Rodgers',
  },
  {
    id: '2',
    title: 'OneRepublic',
  },
  {
    id: '3',
    title: 'Ellie Goulding',
  },
  {
    id: '4',
    title: 'Bruno Mars',
  },
  {
    id: '5',
    title: 'Avicii',
  },
  {
    id: '6',
    title: 'X Ambassadors',
  },
  {
    id: '7',
    title: 'Vance Joy',
  },
  {
    id: '8',
    title: 'Queen',
  },
  {
    id: '9',
    title: 'Pink Floyd',
  },
  {
    id: '10',
    title: 'Ludwig van Beethoven',
  },
  {
    id: '11',
    title: 'Wolfgang Amadeus Mozart',
  },
  {
    id: '12',
    title: 'Johann Sebastian Bach',
  },
  {
    id: '13',
    title: 'Antonio Vivaldi',
  },
];

export const listAlbum = [
  {
    id: '1',
    title: 'Album 1',
  },
  {
    id: '2',
    title: 'Album 2',
  },
];
