import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"

const Videocall = () => {
  const {roomId} = useParams();
  const myMeeting = async(element) => {
    try {
    const appId = Number(process.env.REACT_APP_APPID)
    const serverSecret = process.env.REACT_APP_SERVER_SECRET
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Swift Talk")
    console.log({appId, serverSecret})
    const zp =  ZegoUIKitPrebuilt.create(kitToken)
     zp.joinRoom({
        container: element,
        sharedLinks:[
            {
                name :'Copy Link',
                url : `https://swifttalk.vercel.app/room/${roomId}`
            }
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference
        }
    })
    } catch (error) {
        console.log(error)
    }
  }
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
};

export default Videocall;