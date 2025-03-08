// Icons
import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";

// Album Thumbnails
import aadukalam from "./img/song-thumb/aadukalam.webp";
import david from "./img/song-thumb/david.png";
import dhaamdhoom from "./img/song-thumb/dhaam_dhoom.png";
import enpt from "./img/song-thumb/enpt.jpeg";
import guru from "./img/song-thumb/guru.png";
import kodi from "./img/song-thumb/kodi.png";
import manithan from "./img/song-thumb/manithan.png";
import oh_manapenne from "./img/song-thumb/oh-manapennae.png";

// Songs
import aaruyire from "./songs/Aaruyire.mp3";
import naanpilaipeno from "./songs/Naan-Pizhaippeno.mp3";
import kanavekanavae from "./songs/Kanave Kanave.mp3";
import othasollala from "./songs/Otha-Sollaala.mp3";
import anbeenanbe from "./songs/Anbe-En-Anbe.mp3";
import poivalva from "./songs/Poi-Vazhva.mp3";
import sirukkivaasasm from "./songs/Sirukki-Vaasam.mp3";
import bodhaikaname from "./songs/Bodhai-Kaname.mp3";

// Playlist Thumbnails
import tensromance from "./img/10s-romance-tamil.jpg";
import arrmix from "./img/arr-mix.jpg";
import hiphopradio from "./img/hip-hop-radio.jpg";
import kollychill from "./img/kolly-chill-out.jpg";
import munpanikaadhal from "./img/munpani-kaadhal.jpg";
import purelykaadhal from "./img/purely-kaadhal.jpg";
import romanticanirudh from "./img/romantic-anirudh.jpg";
import yuvan from "./img/yuvan.jpg";

// Artist Images
import justinBieberImage from "./img/Justin-Bieber.webp";
import zaynImage from "./img/zayn.jpg";
import btsImage from "./img/bts.avif";
import ilaiyaraajaImage from "./img/Ilaiyaraja.jpg";
import arRahmanImage from "./img/A-R-Rahman.jpg";
import anirudhImage from "./img/Rockstar-Anirudh.jpg";

// Exporting Assets
export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  pause_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  queue_icon,
  volume_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

// Playlists
export const albumsData = [
  {
    id: 1,
    name: "10s Romance Tamil",
    image: tensromance,
    desc: "Best Love Songs of 2010s from Kollywood",
    bgColor: "#bcc45e",
  },
  {
    id: 2,
    name: "A.R. Rahman",
    image: arrmix,
    desc: "Hits of A.R. Rahman that will mesmerize you",
    bgColor: "#029ed6",
  },
  {
    id: 3,
    name: "Kollywood Chill",
    image: kollychill,
    desc: "Cool tracks from the Kollywood music industry",
    bgColor: "#44337a",
  },
  {
    id: 4,
    name: "Purely Kadhal",
    image: purelykaadhal,
    desc: "All the mushy feels from top romantic hits",
    bgColor: "#D10000",
  },
  {
    id: 5,
    name: "Romantic Anirudh",
    image: romanticanirudh,
    desc: "Enjoy the Romantic side of Anirudh",
    bgColor: "#744210",
  },
  {
    id: 6,
    name: "Hip Hop Tamizha",
    image: hiphopradio,
    desc: "Love and more love from Aadhi",
    bgColor: "#F7567C",
  },
  {
    id: 7,
    name: "Yuvan Hits",
    image: yuvan,
    desc: "Top romantic songs from Yuvan",
    bgColor: "#4E3822",
  },
];

// Songs Data
export const songsData = [
  {
    id: 0,
    name: "Otha Solala",
    image: aadukalam,
    file: othasollala,
    desc: "Happy tunes from Dhanush!",
    duration: "3:59",
    artist: "Dhanush",
  },
  {
    id: 1,
    name: "Kanave Kanave",
    image: david,
    file: kanavekanavae,
    desc: "Dive into Anirudh’s sad zone",
    duration: "4:44",
    artist: "Anirudh",
  },
  {
    id: 2,
    name: "Naan Pizhaipeno",
    image: enpt,
    file: naanpilaipeno,
    desc: "Crazy Love from Dhanush",
    duration: "6:12",
    artist: "Dhanush",
  },
  {
    id: 3,
    name: "Aaruyire",
    image: guru,
    file: aaruyire,
    desc: "Mesmerizing hits, A.R.R > everything",
    duration: "5:10",
    artist: "A.R. Rahman",
  },
  {
    id: 4,
    name: "Anbe En Anbe",
    image: dhaamdhoom,
    file: anbeenanbe,
    desc: "Put a smile on your face with these happy tunes",
    duration: "5:40",
    artist: "Anirudh",
  },
  {
    id: 5,
    name: "Poi Vazhva",
    image: manithan,
    file: poivalva,
    desc: "Don’t ever feel down, listen to this",
    duration: "3:59",
    artist: "Anirudh",
  },
  {
    id: 6,
    name: "Sirukki Vaasam",
    image: kodi,
    file: sirukkivaasasm,
    desc: "Put a smile on your face with these happy tunes",
    duration: "4:35",
    artist: "Anirudh",
  },
  {
    id: 7,
    name: "Bodhai Kaname",
    image: oh_manapenne,
    file: bodhaikaname,
    desc: "Let go of stress with these chill vibes",
    duration: "4:22",
    artist: "Anirudh",
  },
];

// Artist Albums
export const artistAlbums = [
  {
    id: 1,
    name: "Justin Bieber",
    desc: "A collection of Justin Bieber's top hits.",
    image: justinBieberImage,
  },
  {
    id: 2,
    name: "Zayn",
    desc: "Top tracks from Zayn Malik.",
    image: zaynImage,
  },
  {
    id: 3,
    name: "BTS",
    desc: "Best songs by BTS.",
    image: btsImage,
  },
  {
    id: 4,
    name: "Ilaiyaraaja",
    desc: "Golden hits by Ilaiyaraaja.",
    image: ilaiyaraajaImage,
  },
  {
    id: 5,
    name: "A R Rahman",
    desc: "Top compositions of A R Rahman.",
    image: arRahmanImage,
  },
  {
    id: 6,
    name: "Rockstar Anirudh",
    desc: "Best works of Anirudh Ravichander.",
    image: anirudhImage,
  },
];
