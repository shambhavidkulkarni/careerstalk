import React,{useState}   from 'react';
import '../../pages/messenger/messenger.css';
import Message from '../message/Message';

 const Mentors=({user,currentChat,messages,scrollRef,newMessage,handleSubmit,setNewMessage,setView})=>{
  return ( <div className="chatBox">
  <div className="chatBoxWrapper">
    {currentChat ? (
      <>
        <button style={{position:"fixed",left:"10px",top:"7vh",backgroundColor:"#1877f2",fontSize:22,outline:0}} onClick={()=>{setView(0)}} >Go Back</button>
        <div className="chatBoxTop">
          {messages.map((m) => (
            <div ref={scrollRef}>
              <Message message={m} own={m.sender === user._id} />
            </div>
          ))}
        </div>
        <div className="chatBoxBottom">
          <textarea
            className="chatMessageInput"
            placeholder="write something..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          ></textarea>
          <button className="chatSubmitButton" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </>
    ) : (
      <span className="noConversationText">
        Open a conversation to start a chat.
      </span>
    )}
  </div>
</div>)
}
export default Mentors;