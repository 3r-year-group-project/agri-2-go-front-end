import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

/* Imports PubNub JavaScript and React SDKs to create and access PubNub instance accross your app. */
/* Imports the required PubNub Chat Components to easily create chat apps with PubNub. */
import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput, MemberList } from "@pubnub/react-chat-components";
import {useNavigate} from "react-router-dom";


/* Creates and configures your PubNub instance. Be sure to replace "myPublishKey" and "mySubscribeKey"
with your own keyset. If you wish, modify the default "myFirstUser" uuid value for the chat user. */
const pubnub = new PubNub({
  publishKey: "pub-c-304f3462-f896-482f-82a8-a039dd7d88ad",
  subscribeKey: "sub-c-723667ff-95ff-48ac-9702-76288989cc0a",
  uuid: "myFirstUser"
});
const currentChannel = "Default";
const theme = "light";

export default function ChatMemberList() {
  
  const navigate = useNavigate();

  return (
    <div>
    <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                <center><FormLabel id="title"><font size="18"><b>Chats</b></font></FormLabel></center>
            </Box>
    <PubNubProvider client={pubnub}>
      {/* PubNubProvider is a part of the PubNub React SDK and allows you to access PubNub instance
      in components down the tree. */}
      <Chat
        channels={{}}
        currentChannel=""
        onChannel={function noRefCheck(){}}
        onError={function noRefCheck(){}}
        onFile={function noRefCheck(){}}
        onMembership={function noRefCheck(){}}
        onMessage={function noRefCheck(){}}
        onMessageAction={function noRefCheck(){}}
        onPresence={function noRefCheck(){}}
        onSignal={function noRefCheck(){}}
        onStatus={function noRefCheck(){}}
        onUser={function noRefCheck(){}}
        theme="light"
      >
        <MemberList
          members={[
            {
              custom: {
                title: 'Farmer'
              },
              eTag: 'AYGyoY3gre71eA',
              email: null,
              externalId: null,
              id: 'user_63ea15931d8541a3bd35e5b1f0987dc',
              name: 'Sunil',
              profileUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
              updated: '2020-09-23T09:23:34.598494Z'
            },
            {
              custom: {
                title: 'Customer'
              },
              eTag: 'AZDyqJ7andTHlAE',
              email: null,
              externalId: null,
              id: 'user_3c440071cba4b65b77b6cae55fc21eb',
              name: 'Nimala',
              profileUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
              updated: '2020-09-23T09:23:33.598365Z'
            },
            {
              custom: {
                title: 'Farmer'
              },
              eTag: 'AYGyoY3gre71eA',
              email: null,
              externalId: null,
              id: 'user_63ea1591d8541a3bd35e5b1f09087dc',
              name: 'Yasas',
              profileUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
              updated: '2020-09-23T09:23:34.598494Z'
            },
            {
              custom: {
                title: 'Customer'
              },
              eTag: 'AZDyqJ7andTHlAE',
              email: null,
              externalId: null,
              id: 'user_3c4400761cba4b65b77b6cae55c21eb',
              name: 'Sumanlatha',
              profileUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
              updated: '2020-09-23T09:23:33.598365Z'
            },
            {
              custom: {
                title: 'Farmer'
              },
              eTag: 'AYGyoY3gre71eA',
              email: null,
              externalId: null,
              id: 'user_63ea15931d8541a3bd3e5b1f09087dc',
              name: 'Ravindu',
              profileUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
              updated: '2020-09-23T09:23:34.598494Z'
            },
            {
              custom: {
                title: 'Customer'
              },
              eTag: 'AZDyqJ7andTHlAE',
              email: null,
              externalId: null,
              id: 'user_3c4400761cba4b65b77b6cae55fc21e',
              name: 'Kamala',
              profileUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
              updated: '2020-09-23T09:23:33.598365Z'
            }
          ]}
          onMemberClicked={()=>navigate("/gardener/dash/chatpage")}
        />
        {/* Chat is an obligatory state provider. It allows you to configure some common component
        options, like the current channel and the general theme for the app. */}
        {/* <MessageList /> */}
        {/* <MessageInput
          draftMessage=""
          emojiPicker={{}}
          fileUpload="image"
          onBeforeSend={function noRefCheck(){}}
          onSend={function noRefCheck(){}}
          placeholder="Message"
          senderInfo
          typingIndicator
        /> */}
      </Chat>
    </PubNubProvider>
    </div>
  );
}