'use client';

import UserAdd from "./components/useradd";
import UserDelete from "./components/userdelete";
import UsersTable from "./components/usertable";


 function UsersApp(){
  return (
    <main>
      <UsersTable />
      <UserAdd/>
      <UserDelete/>
    </main>
  );
}
export default UsersApp;