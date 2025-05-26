import UserContainer from "@/components/userComponents/UserContainer"
import React from 'react'
import { UserMeta } from "@/src/meta/UserMeta";

export const metadata=UserMeta;
const UserAppRouter = () => {
  return (
    <section>
      <UserContainer />
    </section>
  )
}

export default UserAppRouter