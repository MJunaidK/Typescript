import axios from 'axios';
axios.post('http://localhost:3000/users', {
  name: 'Junaid',
  age: '40',
});

axios.get('http://localhost:3000/users/1');
