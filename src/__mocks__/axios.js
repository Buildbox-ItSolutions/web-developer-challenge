/* eslint-disable no-undef */

const feed = [
  {
    id: 1,
    name: 'Everton',
    photoUrl: 'http://www.rachegebran.com.br/wp-content/uploads/perfil.jpg',
    message:
      'Bacon ipsum dolor amet doner pancetta boudin, burgdoggen venison tri-tip shank. Jerky chicken chislic, buffalo landjaeger pork belly ball tip pork tail corned beef leberkas bresaola tenderloin pork chop. Pastrami turkey capicola bacon chicken ball tip. Jerky meatloaf biltong andouille. Strip steak t-bone doner pork, swine tail pork loin jowl.',
  },
  {
    id: 2,
    name: 'Alguém',
    photoUrl:
      'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg',
    message:
      'Burgdoggen salami leberkas sirloin kevin cow shank ham tail porchetta jowl tri-tip strip steak turkey. Buffalo pork chop tenderloin, landjaeger cow porchetta venison flank doner salami pig rump tri-tip.',
  },
];

export default {
  create: jest.fn(() => ({
    get: () => Promise.resolve({ data: { feed } }),
  })),
};
