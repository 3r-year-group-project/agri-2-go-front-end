/* Imports PubNub JavaScript and React SDKs to create and access PubNub instance accross your app. */
/* Imports the required PubNub Chat Components to easily create chat apps with PubNub. */
import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput, MemberList } from "@pubnub/react-chat-components";

/* Creates and configures your PubNub instance. Be sure to replace "myPublishKey" and "mySubscribeKey"
with your own keyset. If you wish, modify the default "myFirstUser" uuid value for the chat user. */
const pubnub = new PubNub({
  publishKey: "pub-c-dd7b2574-8a58-47ef-952f-c34a5a34a295",
  subscribeKey: "sub-c-fa9eff3a-5684-4555-9e33-bc44b4d9c991",
  uuid: "myFirstUser",
});
const currentChannel = "Default";
const theme = "light";

export default function ChatApp() {
  return (
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
        theme="dark"
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
              id: 'user_63ea15931d8541a3bd35e5b1f09087dc',
              name: 'Pushpe',
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
              id: 'user_3c4400761cba4b65b77b6cae55fc21eb',
              name: 'Sumanlatha',
              profileUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
              updated: '2020-09-23T09:23:33.598365Z'
            }
          ]}
          onMemberClicked={function noRefCheck(){}}
        />
        {/* Chat is an obligatory state provider. It allows you to configure some common component
        options, like the current channel and the general theme for the app. */}
        <MessageList />
        <MessageInput
          draftMessage=""
          emojiPicker={{}}
          fileUpload="image"
          onBeforeSend={function noRefCheck(){}}
          onChange={function noRefCheck(){}}
          onSend={function noRefCheck(){}}
          placeholder="Message"
          senderInfo
          typingIndicator
        />
      </Chat>
    </PubNubProvider>
  );
}