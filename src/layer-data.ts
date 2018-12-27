export interface LayerData {
  readonly title: string
  readonly text: string
  // readonly scale: {
  //   readonly min: number
  //   readonly max: number
  // }
  // readonly img: string
  // readonly href: string
}

export const micro: ReadonlyArray<LayerData> = [
  {
    title: 'particle/waves',
    text: '(photons, electrons, quarks, etc)',
  },
  {
    title: 'nuclei',
    text: '(nucleons: quark/gluon cloud foam)',
  },
  {
    title: 'atoms',
    text: '(nucleus + electron orbitals)',
  },
  {
    title: 'molecules',
    text: '(reactive matter patterns)',
  },
  {
    title: 'biomolecules',
    text: '(protein machines, dna/rna code)',
  },
  {
    title: 'cells',
    text: '(single-celled organisms, organelles)',
  },
  {
    title: 'organs',
    text: '(flesh body, guts & meat & bone)',
  },
]

export const us: ReadonlyArray<LayerData> = [
  {
    title: 'individual conciousness',
    text: '(personal experience)',
  },
  {
    title: 'collective consciousness',
    text: '(shared experience)',
  },
]

export const macro: ReadonlyArray<LayerData> = [
  {
    title: 'ecosystems',
    text: '(plant world - web of life)',
  },
  {
    title: 'regions',
    text: '(land world - climate, water, terrain)',
  },
  {
    title: 'planets',
    text: '(core, atmosphere, magnetosphere, moons)',
  },
  {
    title: 'stars',
    text: '(fusion body, solar wind, belts, planets, cloud)',
  },
  {
    title: 'galaxies',
    text: '(core, accretion disk, magnetic field)',
  },
  {
    title: 'web',
    text: '(largest scale structure - filaments & voids)',
  },
  {
    title: 'background radiation',
    text: '(initial light, observable limit)',
  },
]
