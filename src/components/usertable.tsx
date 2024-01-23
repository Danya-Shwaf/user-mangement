import 'antd/dist/reset.css';
import { Table } from 'antd';

const Data=[
    {
      Name:'Danya',
      Phone:'0987654321',
      Email:'dania123@.com',
      Role:'Admin',
    },
    {
      Name:'Safa',
      Phone:'0987654321',
      Email:'safa123@.com',
      Role:'normal',
    },
    {
      Name:'Nour',
      Phone:'0987654321',
      Email:'nour123@.com',
      Role:'normal',
    },
    ];
    const columns=[
        {
            title:'Name',
            dataIndex:'Name',
            key:'Name'
        },
        {
            title:'Phone',
            dataIndex:'Phone',
            key:'Phone'
        },
        {
            title:'Email',
            dataIndex:'Email',
            key:'Email'
        },
        {
            title:'Role',
            dataIndex:'Role',
            key:'Role'
        },
    ]
function UsersTable(){
return(
    <div className='App'>
        <header className='App-header'>
        <Table dataSource={Data}
        columns={columns}>
        </Table>
        </header>
    </div>
);
}

export default UsersTable;