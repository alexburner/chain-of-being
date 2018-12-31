export interface LayerData {
  readonly title: string
  readonly text: string
  readonly img: string
  // readonly href: string
  // readonly scale: {
  //   readonly min: number
  //   readonly max: number
  // }
}

export const micro: ReadonlyArray<LayerData> = [
  {
    title: 'particle/waves',
    text: 'photons, electrons, quarks, etc',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'nuclei',
    text: 'nucleons: quark/gluon cloud foam',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'atoms',
    text: 'nucleus + electron orbitals',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'molecules',
    text: 'reactive matter patterns',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'biomolecules',
    text: 'protein machines, dna/rna code',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'cells',
    text: 'single-celled organisms, organelles',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'organs',
    text: 'flesh body, guts & meat & bone',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
]

export const us: ReadonlyArray<LayerData> = [
  {
    title: 'individual conciousness',
    text: 'personal experience',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'collective consciousness',
    text: 'shared experience',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
]

export const macro: ReadonlyArray<LayerData> = [
  {
    title: 'ecosystems',
    text: 'plant world - web of life',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'regions',
    text: 'land world - climate, water, terrain',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'planets',
    text: 'core, atmosphere, magnetosphere, moons',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'stars',
    text: 'fusion body, solar wind, belts, planets, cloud',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'galaxies',
    text: 'core, accretion disk, magnetic field',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'web',
    text: 'largest scale structure - filaments & voids',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
  {
    title: 'background radiation',
    text: 'initial light, observable limit',
    img: 'https://i.imgur.com/V5TzcKkb.jpg',
  },
]
