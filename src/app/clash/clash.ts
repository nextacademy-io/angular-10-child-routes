export interface Peer {
  id: string;
  name: string;
  gender: string;
  city: string;
  country: string;
  pictureUrl: string;
}

export interface Clash {
  id: string;
  createdByPeer: Peer;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  address: string;
  participants: Peer[];
  pictureUrl: string;
}
