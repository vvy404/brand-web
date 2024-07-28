"use client"

import { useState, useEffect } from "react"
import ProfileDetail from "@/components/profile/ProfileDetail"
import { UserType } from "@/lib/globalts"
import { getUserInfo } from "@/apis/getUser"

const Profile: React.FC = () => {
  const [userinfo, setUserInfo] = useState<UserType | null>(null);

  const getUser = async () => {
    const res = await getUserInfo();
    if (res && !res.code && res.data) {
      console.log('userinfo', res.data)
      setUserInfo(res.data.info);
    }
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
    <div className="mt-14 w-[26%] ml-28">
      <div>
        {userinfo ? (<ProfileDetail info={userinfo}></ProfileDetail>) : ""}
      </div>
    </div>
  )
}

export default Profile;