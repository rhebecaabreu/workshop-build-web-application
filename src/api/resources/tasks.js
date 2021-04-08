import ApiService from '../api.service';

const Tasks = {
  lists: () => ApiService.get('tasks/v1/users/@me/lists?key=AIzaSyC2IE_3IHFiIFKQdL-z5enbIsnxVSTuV60'),
};

export default Tasks;