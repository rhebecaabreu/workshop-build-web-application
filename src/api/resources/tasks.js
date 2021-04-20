import ApiService from '../api.service';

const Tasks = {
  lists: () => ApiService.get('tasks/v1/users/@me/lists?key=AIzaSyC2IE_3IHFiIFKQdL-z5enbIsnxVSTuV60'),
  listItems: (tasklistId) => ApiService.get(`tasks/v1/lists/${tasklistId}/tasks?key=AIzaSyC2IE_3IHFiIFKQdL-z5enbIsnxVSTuV60`),
  insertItem: (params) => ApiService.post(`tasks/v1/lists/${params.tasklistId}/tasks?key=AIzaSyC2IE_3IHFiIFKQdL-z5enbIsnxVSTuV60`, params)
};

export default Tasks;