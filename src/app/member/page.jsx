import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Member = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/member");
  }
  console.log(session);
  return (
    <div>
      <h1>Member Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.userRole}</p>
    </div>
  );
};

export default Member;
