"use client"
import React, { useEffect, useState } from "react";
import Butter from "buttercms";
 
const butter = Butter(`${process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY}`);
 
const Goal = () => {
  const [goal, setGoal] = useState({});
 
  useEffect(() => {
    butter.page
      .retrieve("*", "home-page")
      .then(function (resp) {
        console.log(resp.data.data.fields.goal);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  }, []);
 
  return (
    <div className="bg-gray-100/50 rounded-sm my-10 py-0 md:px-6 flex flex-col md:flex-row justify-between">
   // … 
    </div>
  );
};
 
export default Goal;