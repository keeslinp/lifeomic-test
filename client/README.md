# Your iOS project goes in this folder

See README.md in root directory for full instructions.

# Run instructions
run `yarn` to install dependencies
`yarn run android` to run on android (Have not tested on iOS, I don't have a mac)
I ran it on a physical device, but in theory it should run just fine on an emulator as well.

# Dependency discussion
## react-navigation
This allowed me to easily handle going in and out of the detailed views.
It honestly is such a small application that I could have just handled it in state.

## react-native-pdf
Given the timeframe it was not feasible to implement a PDF viewer.
It also likely wouldn't be wise to make my own even if the time allowed for it, because that time could be better spent elsewhere.

## rn-fetch-blob
This was needed by react-native-pdf to fetch the pdf files

## react-native-paper
This is the component library that I am used to working with at work.
I didn't really need most of the components it has for this project, but it was nice
to be able to drop in simple things like a consistent appbar and activity indicator.
It also made creating the list of documents easier.

## vector icons
Needed these to show the document icons


# Final thoughts

## Expo
I really should not have trusted expo to solve my problems. I lost about an hour of my 3 hours because expo was unable to display a pdf.
I really love the development workflow of expo, but it does not play well when you try to break out of that workflow.
I saw that there was a pdf viewer that was supposed to work in expo, but it ended up work working. Time spent on that could have been spent on implementing more bonus features
There are probably some weird choices that I made that were originally to satisfy expo. A prime example of this was removing the `https://localhost:3000` from the
data objects. I originally dynamically grabbed the host url because I could not just use adb reverse since I was not connected over usb. This ended up being a waste of time (luckily it only cost me 5 minutes or so) because I had to undo it when I ejected from expo.

## Next steps if more time

Obviously, I would implement the goal features if I had more time.
Beyond those though, I would implement caching to mitigate the slow response time from the server.
From an software architecture standpoint, I would implement either redux or something like redux to allow the app to grow more easily.
The choice to use state and handle all of the network logic in App.js was simply one of efficiency.
Taking the time to build out actions, reducerse, and middleware was not worth it for such a simple application.
