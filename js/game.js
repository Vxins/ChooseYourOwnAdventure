// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "hallway.jpg",
    levels: {

        start: {
            message: "You bump into a girl at school and she drops her books.",
            choices: [
                {
                    text: "Help her!",
                    nextLevel: "conversation",
                },

                {
                    text: "Keep on moving.",
                    nextLevel: "chivalry",
                },
            ]
        },

        conversation: {
            message: "You both apologize at the same time; she tells you she's new to the school",
            choices: [
                {
                    text: "Show her around the school",
                    nextLevel: "bond",
                },

                {
                    text: "Make an excuse to escape the conversation",
                    nextLevel: "wuss",
                },  
            ]
        },

        chivalry: {
            message: "I guess chivalry is dead...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        bond: {
            message: "A bond is formed and she asked for you to do something with her sometime.",
            choices: [
                {
                    text: "Decline",
                    nextLevel: "wuss"
                },

                {
                    text: "Agree",
                    nextLevel:"date"
                }
            ]
        },
        
        wuss: {
            message: "Way to go buddy...",
            choices: [
                {
                    text:  "Start over",
                    nextLevel: "start"
                },
            ]
        },
        
        date: {
            message: "Great! You've scored yourself a date!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start"
                }
            ]
        }
    }     
};
