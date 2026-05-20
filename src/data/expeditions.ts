export interface Expedition {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  details?: { label: string; value: string; highlight?: boolean }[];
  included: string[];
  whatsappMsg: string;
  ctaLabel: string;
  includedExtras?: string[];
}

export const WHATSAPP_BASE = 'https://wa.me/5548900000000';

export const expeditions: Expedition[] = [
  {
    tag: 'Expedição 01',
    title: 'Arquipélago Moleques do Sul',
    subtitle: 'A joia remota do sul',
    description: 'Aves oceânicas, leões-marinhos, vida marinha abundante e formações rochosas imponentes. Uma das experiências mais selvagens e raras de Florianópolis.',
    image: '/assets/8d619090-ce13-4c06-89c4-166714ef54bc.jpg',
    imageAlt: 'Leão-marinho nas rochas de Moleques do Sul',
    details: [
      { label: 'Duração', value: '6 horas' },
      { label: 'Embarque', value: '6:30' },
      { label: 'Desembarque', value: '12:30' },
      { label: 'Valor', value: 'R$ 300 / pessoa', highlight: true },
    ],
    included: ['Frutas', 'Água', 'Café', 'Máscaras de mergulho', 'Boias', 'Binóculo para observação de vida selvagem'],
    whatsappMsg: 'Olá! Gostaria de consultar datas para Moleques do Sul.',
    ctaLabel: 'Consultar próximas datas',
  },
  {
    tag: 'Expedição 02',
    title: 'Mares do Sul — Ilhas Três Irmãs + Naufragados',
    subtitle: 'Cultura açoriana e mar tranquilo',
    description: 'Uma navegação tranquila e cheia de histórias. Cultura açoriana, paisagens preservadas e gastronomia local servida a bordo.',
    image: '/assets/d63b8453-5e05-4986-a58a-ffe2eb2c59be.jpg',
    imageAlt: 'Costão rochoso visto do barco',
    details: [
      { label: 'Duração', value: '6 horas' },
      { label: 'Embarque', value: '8:30' },
      { label: 'Retorno', value: '15:00' },
      { label: 'Valor', value: 'R$ 280 / pessoa', highlight: true },
    ],
    included: ['Frutas', 'Água', 'Café', 'Máscaras de mergulho', 'Boias', 'Binóculo para observação de vida selvagem'],
    whatsappMsg: 'Olá! Gostaria de consultar datas para Mares do Sul.',
    ctaLabel: 'Consultar próximas datas',
  },
  {
    tag: 'Sob medida',
    title: 'Passeios Fechados',
    subtitle: 'Sua experiência, do seu jeito',
    description: 'O Travessia está disponível para eventos privados, confraternizações, jantares a bordo, expedições gastronômicas com chefs e experiências corporativas. Roteiro e experiência personalizados.',
    image: '/assets/a8a2b4b5-78fa-4d31-b8a8-c4ec2233e79f.jpg',
    imageAlt: 'Grupo pulando do barco Travessia',
    included: [],
    includedExtras: [
      'Gastronomia a bordo com chefs convidados',
      'Roteiros culturais pelo sul da ilha',
      'Saídas de surf em grupo',
      'Celebrações e eventos privados',
    ],
    whatsappMsg: 'Olá! Gostaria de planejar uma expedição privada.',
    ctaLabel: 'Planejar minha expedição',
  },
];
