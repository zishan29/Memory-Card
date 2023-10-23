import luffy from '../assets/images/luffy.jpeg';
import zoro from '../assets/images/zoro.jpeg';
import sanji from '../assets/images/sanji.jpeg';
import brook from '../assets/images/brook.jpeg';
import chopper from '../assets/images/chopper.jpeg';
import ussop from '../assets/images/ussop.jpeg';
import shanks from '../assets/images/shanks.jpeg';
import blackbeard from '../assets/images/blackbeard.jpeg';
import dragon from '../assets/images/dragon.jpeg';
import garp from '../assets/images/garp.jpeg';
import robin from '../assets/images/robin.jpeg';
import sabo from '../assets/images/sabo.jpeg';
import { v4 as uuidv4 } from 'uuid';

let characters = [
  {
    id: uuidv4(),
    name: 'MONKEY D. LUFFY',
    src: luffy,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'RORONOA ZORO',
    src: zoro,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'VINSMOKE SANJI',
    src: sanji,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'SK BROOK',
    src: brook,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'TONY TONY CHOPPER',
    src: chopper,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'GOD USSOP',
    src: ussop,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'RED HAIRED SHANKS',
    src: shanks,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'MARSHALL D. TEACH',
    src: blackbeard,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'SABO',
    src: sabo,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'MONKEY D. GARP',
    src: garp,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'MONKEY D. DRAGON',
    src: dragon,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'NICO ROBIN',
    src: robin,
    clicked: false,
  },
];

export default characters;
