# ZappyTpk
## The Pain Killer

The Angular App used to view tweets fetched from Twitter by the [Node Server](https://github.com/EhabGamal/ZappyServer) using [Slack Outgoing WebHooks](https://api.slack.com/custom-integrations/outgoing-webhooks).

## How it works
1. Login to [Slack](https://zappytpk.slack.com/)
2. Send message contains the trigger word `go` followed by Twitter user handel
3. Slack will send request to the server with the message
4. Server will fetch latest 20 tweets from the user and respond with confirmation to Slack
5. Login to the [Angular App](zappy-tpk.firebaseapp.com) to see all tweets stored in the server
## Production Server

Check the deployed [Demo](zappy-tpk.firebaseapp.com) to see the app in action.

## Development server
1. Clone the repo on your machine
2. Run `npm install` to install required dependencies
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.