

import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser , EditGuesser   } from 'react-admin';
import { UserList } from './users';
import { PostList , PostCreate} from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import simpleRestProvider from 'ra-data-simple-rest';
// ini dataProvider contoh yang udah di sediain balikan json untuk testing
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}


const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} >
      <Resource name="users" list={UserList} icon={UserIcon}/>      
      
      {/* hanya nampilin list */}
      {/* <Resource name="posts" list={PostList} /> */}

      {/* nampilin list plus edit */}
      <Resource name="posts" list={PostList} edit={EditGuesser}  create={PostCreate} icon={PostIcon}/>
  </Admin>

    
);


  
export default App;