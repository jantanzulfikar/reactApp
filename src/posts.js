import React from 'react';
import { List, Datagrid, TextField, ReferenceField , EditButton , Create , SimpleForm ,ReferenceInput
, LongTextInput , TextInput ,SelectInput , Filter} from 'react-admin';

export const PostList = props => (
<List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            {/* buat link ke users , by user name nya  */}
            <ReferenceField source="userId" reference="users">
                {/* <TextField source="id" /> */}
                <TextField source="name" />
            </ReferenceField>


            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);


const PostTitle = ({ record }) => {
        return <span>Success Post Id :  {record ?  `"${record.title}"` : ''}</span>;
};


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);


