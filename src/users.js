import React from 'react';
import { List, Datagrid, TextField, EmailField, Filter, TextInput, SelectInput, ReferenceInput  } from 'react-admin';

export const UserList = props => (
    <List filters={<UserFilter />}  {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />            
            <TextField source="phone" />            
            {/* <TextField source="website"/ */}
        </Datagrid>
    </List>
);


const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="name" source="name" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);