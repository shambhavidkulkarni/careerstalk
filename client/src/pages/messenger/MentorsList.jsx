import { Streetview } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';
import Conversation from "../../components/conversations/Conversation";
import "./messenger.css";
const MentorsList=({conversations,setCurrentChat,user,setView})=>{
  return (
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <div className='mentorList' style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            {/* <div className='mentorList'> */}

            {conversations.map((c) => (
              <div onClick={() =>{ setCurrentChat(c);setView(1)}}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
            </div>
          </div>
        </div>

  )
}
export default MentorsList;
