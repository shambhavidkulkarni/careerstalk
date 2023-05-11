import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Card";
import Row from "react-bootstrap/Card";
import Container from "react-bootstrap/Card";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    // <div classNameName="conversation">
    //   <img
    //     classNameName="conversationImg"
    // src={
    //   user?.profilePicture
    //     ? PF + user.profilePicture
    //     : PF + "person/noAvatar.png"
    // }
    //     alt=""
    //   />
    //   <span classNameName="conversationName">{user?.username}</span>
    // </div>

    <div className="card mb-3" style={{ width: "350px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              user?.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="Trendy Pants and Shoes"
            style={{
              borderRadius: "80%",
              width: "100px",
              height: "100px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{user?.username}</h5>
            <p className="card-text">
              {user?.desc}
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <button type="button" className="btn btn-primary float-end m-3">Button</button>
        </div>
      </div>
    </div>
  );
}
