export interface VideoDescriptor {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const VIDEOS = [
  {
    id: 1,
    title: "Sintel",
    url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    thumbnail:
      "https://images.mubicdn.net/images/film/124144/cache-108407-1745492245/image-w1280.jpg",
  },
  {
    id: 2,
    title: "Big Buck",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    thumbnail:
      "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
  },
  {
    id: 3,
    title: "Parkour",
    url: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    thumbnail:
      "https://media1.popsugar-assets.com/files/thumbor/rLUEUyKulYkRwN-BkAEmSaL0l-k=/0x0:5760x3999/fit-in/792x550/top/filters:format_auto():upscale()/2019/09/05/734/n/1922729/c1edb5d45d7139b0875c86.31159139_.jpg",
  },
  {
    id: 4,
    title: "Tears of Steel",
    url: "https://mozaicstreamz-a.akamaihd.net/i/tears_of_steel_,640x360,960x540,1280x720,1920x1080,.mp4.csmil/master.m3u8",
    thumbnail:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffilm-book.com%2Fwp-content%2Fuploads%2F2012%2F10%2Ftears-of-steel-02-1920x800.jpeg&f=1&nofb=1&ipt=08f41422b8b7115ec2c060f9689fcfe1fc2fca1606c98cb76311976cee44c2be",
  },
  {
    id: 5,
    title: "Apple Stream",
    url: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
    thumbnail:
      "https://www.apple.com/v/apple-tv-plus/al/images/meta/apple-tv__e7aqjl2rqzau_og.png",
  },
];

export function getVideos(): Promise<VideoDescriptor[]> {
  return Promise.resolve(VIDEOS);
}

// @ts-expect-error: Not implemented yet.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getVideo(id: string | number): Promise<VideoDescriptor[]> {
  // TODO: Implement fetching a single video by ID
  throw new Error("Not implemented");
}
