import React, { useContext } from 'react';
import { useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Videocall = () => {

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { roomId } = useParams();
    const myMeeting = async (element) => {
        try {
            const appId = Number(process.env.REACT_APP_APPID)
            const serverSecret = process.env.REACT_APP_SERVER_SECRET
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), currentUser.displayName)
            console.log({ appId, serverSecret })
            const zp = ZegoUIKitPrebuilt.create(kitToken)
            zp.joinRoom({
                container: element,
                // showPreJoinView: false ,
                maxUsers: 2,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `https://swifttalk.vercel.app/room/${roomId}`
                    }
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference
                }
            })

            if (zp.leaveRoom()) {
                zp.mutePublishStreamVideo();
                zp.mutePublishStreamAudio();
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div ref={myMeeting} />
            <button onClick={() => navigate("/")}>Return to Home</button>

        </div>
    );
};

export default Videocall;
