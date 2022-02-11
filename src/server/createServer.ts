import { createServer } from 'miragejs';
import { Feed } from '../types/feed';

const createFeedServer = () => {
  const feed: Feed[] = [
    {
      id: 1,
      name: 'Everton',
      message:
        'Bacon ipsum dolor amet doner pancetta boudin, burgdoggen venison tri-tip shank. Jerky chicken chislic, buffalo landjaeger pork belly ball tip pork tail corned beef leberkas bresaola tenderloin pork chop. Pastrami turkey capicola bacon chicken ball tip. Jerky meatloaf biltong andouille. Strip steak t-bone doner pork, swine tail pork loin jowl.',
    },
    {
      id: 2,
      name: 'Alguém',
      message:
        'Burgdoggen salami leberkas sirloin kevin cow shank ham tail porchetta jowl tri-tip strip steak turkey. Buffalo pork chop tenderloin, landjaeger cow porchetta venison flank doner salami pig rump tri-tip.',
    },
  ];

  return createServer({
    routes() {
      this.namespace = 'api';
      this.get('/feed', () => ({
        feed,
      }));

      let newId = 2;
      this.post('/feed', (_, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;
        feed.push(attrs);

        return { feed };
      });

      this.delete('/feed/:id', (_, request) => {
        const paramId = Number(request.params.id);

        return { feed: feed.filter(({ id }) => id !== paramId) };
      });
    },
  });
};

export default createFeedServer;
