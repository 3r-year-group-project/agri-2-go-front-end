/* Imports PubNub JavaScript and React SDKs to create and access PubNub instance accross your app. */
/* Imports the required PubNub Chat Components to easily create chat apps with PubNub. */
import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";

import "../../assets/styles/Chat/index.css";

/* Creates and configures your PubNub instance. Be sure to replace "myPublishKey" and "mySubscribeKey"
  with your own keyset. If you wish, modify the default "myFirstUser" uuid value for the chat user. */
const pubnub = new PubNub({
    publishKey: "pub-c-57099270-a439-4362-aba2-223195125176",
    subscribeKey: "sub-c-e7b29aef-c24d-4110-a207-026bd587a175",
    uuid: "myFirstUser"
});
const currentChannel = "Default";

export default function ChatPage() {
  return (
    <PubNubProvider client={pubnub}>
      {/* PubNubProvider is a part of the PubNub React SDK and allows you to access PubNub instance
        in components down the tree. */}
        <Chat {...{ currentChannel }}>
        {/* Chat is an obligatory state provider. It allows you to configure some common component
          options, like the current channel and the general theme for the app. */}
            <MessageList />
            <MessageInput />
        </Chat>
    </PubNubProvider>
  );
}