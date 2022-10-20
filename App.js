import React from 'react'
import { Text } from 'react-native';
import OneSignal from 'react-native-onesignal';

// OneSignal Initialization
OneSignal.setAppId("e3d8aaf2-71c0-44d8-b77b-b7a643c0dbeb");

const App = () => {

  React.useEffect(() => {

    OneSignal.promptForPushNotificationsWithUserResponse();

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
      console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
      let notification = notificationReceivedEvent.getNotification();
      console.log("notification: ", notification);
      const data = notification.additionalData
      console.log("additionalData: ", data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    });

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log("OneSignal: notification opened:", notification);
    });
  }, [])

  return (
    <>
      <Text>App</Text></>
  )
}

export default App