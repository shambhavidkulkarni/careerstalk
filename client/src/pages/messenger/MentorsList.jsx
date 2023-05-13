import { Streetview } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';
import Conversation from "../../components/conversations/Conversation";
import "./messenger.css";
import { Row, Col } from "react-bootstrap";

const MentorsList=({conversations,setCurrentChat,user,setView})=>{
  return (
    <div className="chatMenu">
    <div className="chatMenuWrapper">
      <input
        placeholder="Search for friends"
        className="chatMenuInput"
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>

      <div
        className="mentorList mt-5"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "90%",
          marginLeft: "80px",
        }}
      >
        <Row xs={1} sm={2} md={3}>
          {conversations.map((c) => (
            <Col
              className="mt-5"
              key={c._id}
              // onClick={() => {
              //   setCurrentChat(c);
              //   setView(1);
              // }}
            >
              <div
                onClick={() => {
                  setCurrentChat(c);
                  setView(1);
                  // navigate(`/mentorDetails/${c._id}`)
                }}
                // onClick={handleConversationClick(c)}
              >
                <Conversation conversation={c} currentUser={user} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </div>

  )
}
export default MentorsList;
