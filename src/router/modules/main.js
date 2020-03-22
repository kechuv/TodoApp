import Default from '@/layouts/default.vue';

import Todos from '@/views/Todos.vue';

const routes = [
  {
    path: '/',
    name: 'default',
    component: Default,
    children: [
      {
        path: '',
        component: Todos
      }
    ]
  },
];

export default routes;