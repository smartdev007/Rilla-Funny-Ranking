const data = [
  {
    user: "Jim Halpert",
    conversations: [
      {
        id: "0123",
        sentences: [
          {
            sentence:
              "Hello, I have some jokes for you before I sell you this paper.",
            speaker_type: "sales_rep",
            start: 0,
            end: 4.3,
            funny: false,
          },
          {
            sentence: "Alright, let's see what you got.",
            speaker_type: "customer",
            start: 5.3,
            end: 9.6,
            funny: false,
          },
          {
            sentence: "Don’t spell part backward. It’s a trap.",
            speaker_type: "sales_rep",
            start: 11,
            end: 14.2,
            funny: true,
          },
          {
            sentence: "That was a good one!",
            speaker_type: "customer",
            start: 16.2,
            end: 18.1,
            funny: true,
          },
        ],
      },
      {
        id: "1234",
        sentences: [
          {
            sentence: "Hello, how are you liking the paper so far?",
            speaker_type: "sales_rep",
            start: 0,
            end: 6,
            funny: false,
          },
          {
            sentence: "It works great!",
            speaker_type: "customer",
            start: 8.1,
            end: 10,
            funny: false,
          },
          {
            sentence: "Not too great I hope, so I can sell you more!",
            speaker_type: "sales_rep",
            start: 12.2,
            end: 17,
            funny: true,
          },
          {
            sentence:
              "Let's make sure they all break so I can keep selling more!",
            speaker_type: "sales_rep",
            start: 21,
            end: 23.4,
            funny: true,
          },
          {
            sentence:
              "I actually need to buy another one so let's do that right now.",
            speaker_type: "customer",
            start: 25.2,
            end: 28.4,
            funny: false,
          },
        ],
      },
      {
        id: "2345",
        sentences: [
          {
            sentence: "Just checking up to see if you're still interested",
            speaker_type: "sales_rep",
            start: 0,
            end: 3.2,
            funny: false,
          },
          {
            sentence: "No, I'm good",
            speaker_type: "customer",
            start: 4.1,
            end: 6.7,
            funny: false,
          },
          {
            sentence: "Can I offer you a nice egg in this trying time?",
            speaker_type: "sales_rep",
            start: 8.2,
            end: 11.3,
            funny: false,
          },
          {
            sentence: "I hate eggs, no thanks.",
            speaker_type: "sales_rep",
            start: 12.8,
            end: 15.4,
            funny: false,
          },
        ],
      },
      {
        id: "3456",
        sentences: [
          {
            sentence: "Can I include some ink with that paper purchase?",
            speaker_type: "sales_rep",
            start: 0,
            end: 5.4,
            funny: false,
          },
          {
            sentence: "Oh yes I love to bathe in ink.",
            speaker_type: "customer",
            start: 6.1,
            end: 8.4,
            funny: true,
          },
          {
            sentence: "Alright, that's a first for me.",
            speaker_type: "sales_rep",
            start: 9.3,
            end: 11.3,
            funny: false,
          },
        ],
      },
    ],
  },
  {
    user: "Dwight Schrute",
    conversations: [
      {
        id: "4567",
        sentences: [
          {
            sentence:
              "At Dunder Mifflin, we can sell the paper for 20% less than your current paper supplier.",
            speaker_type: "sales_rep",
            start: 0,
            end: 11.2,
            funny: true,
          },
          {
            sentence: "Why are you laughing? I didn't say anything funny.",
            speaker_type: "sales_rep",
            start: 13.4,
            end: 16.7,
            funny: true,
          },
          {
            sentence: "Stop laughing I'm not being funny!",
            speaker_type: "sales_rep",
            start: 18,
            end: 21.4,
            funny: true,
          },
          {
            sentence: "Did Jim put you up to this? Jim!",
            speaker_type: "sales_rep",
            start: 22.2,
            end: 25,
            funny: true,
          },
        ],
      },
      {
        id: "5678",
        sentences: [
          {
            sentence:
              "I work with Dunder Mifflin and I'm going around selling paper.",
            speaker_type: "sales_rep",
            start: 0,
            end: 6,
            funny: false,
          },
        ],
      },
      {
        id: "6789",
        sentences: [
          {
            sentence: "Would you like to buy paper?",
            speaker_type: "sales_rep",
            start: 0,
            end: 3.2,
            funny: false,
          },
          {
            sentence: "Maybe, I'm considering going paperless.",
            speaker_type: "customer",
            start: 4.1,
            end: 6.7,
            funny: false,
          },
          {
            sentence:
              "I can also sell you some beets at a discount if you buy this paper?",
            speaker_type: "sales_rep",
            start: 8.2,
            end: 13.4,
            funny: true,
          },
          {
            sentence: "You sell beets with paper, I can't. That's too funny.",
            speaker_type: "customer",
            start: 14.9,
            end: 18.1,
            funny: false,
          },
          {
            sentence: "I don't understand why that's funny",
            speaker_type: "sales_rep",
            start: 20.2,
            end: 24.3,
            funny: false,
          },
        ],
      },
      {
        id: "7890",
        sentences: [
          {
            sentence: "Can I include some ink with that paper purchase?",
            speaker_type: "sales_rep",
            start: 0,
            end: 5.4,
            funny: false,
          },
          {
            sentence: "Oh yes, definitely need ink to print",
            speaker_type: "customer",
            start: 6.1,
            end: 8.4,
            funny: false,
          },
        ],
      },
    ],
  },
  {
    user: "Stanley Hudson",
    conversations: [
      {
        id: "8901",
        sentences: [
          {
            sentence:
              "At Dunder Mifflin, we can sell the paper for 20% less than your current paper supplier.",
            speaker_type: "sales_rep",
            start: 0,
            end: 11.2,
            funny: false,
          },
          {
            sentence: "Take the damn deal and shove it up your butt!",
            speaker_type: "sales_rep",
            start: 13.4,
            end: 16.7,
            funny: true,
          },
          {
            sentence: "That joke never gets old",
            speaker_type: "customer",
            start: 18,
            end: 21.4,
            funny: true,
          },
        ],
      },
      {
        id: "9012",
        sentences: [
          {
            sentence: "Buy this paper and let me go to pretzel day.",
            speaker_type: "sales_rep",
            start: 0,
            end: 4.8,
            funny: false,
          },
          {
            sentence: "Can I come get a pretzel with you?",
            speaker_type: "customer",
            start: 5.3,
            end: 8.7,
            funny: true,
          },
          {
            sentence: "Haha you're funny, absolutely not.",
            speaker_type: "sales_rep",
            start: 9.9,
            end: 12,
            funny: false,
          },
        ],
      },
    ],
  },
  {
    user: "Phyllis Vance",
    conversations: [
      {
        id: "4321",
        sentences: [
          {
            sentence: "Hello, are you Phyllis?",
            speaker_type: "customer",
            start: 0,
            end: 4.3,
            funny: true,
          },
          {
            sentence:
              "Why are you standing outside my office just laughing at me? Are you ok?",
            speaker_type: "customer",
            start: 6.1,
            end: 10.4,
            funny: true,
          },
          {
            sentence: "I don't think you're Phyllis, I'm calling security",
            speaker_type: "customer",
            start: 11.7,
            end: 15.4,
            funny: true,
          },
        ],
      },
    ],
  },
  {
    user: "Pam Beasley",
    conversations: [
      {
        id: "5432",
        sentences: [
          {
            sentence:
              "Hello, I have some jokes for you before I sell you this paper.",
            speaker_type: "sales_rep",
            start: 0,
            end: 4.3,
            funny: false,
          },
          {
            sentence: "Alright, let's see what you got.",
            speaker_type: "customer",
            start: 5.3,
            end: 9.6,
            funny: false,
          },
          {
            sentence: "Don’t spell part backward. It’s a trap.",
            speaker_type: "sales_rep",
            start: 11,
            end: 14.2,
            funny: true,
          },
          {
            sentence: "That was a good one!",
            speaker_type: "customer",
            start: 16.2,
            end: 18.1,
            funny: true,
          },
        ],
      },
      {
        id: "6543",
        sentences: [
          {
            sentence: "Wanna hear a joke about paper?",
            speaker_type: "sales_rep",
            start: 0,
            end: 3,
            funny: false,
          },
          {
            sentence: "Never mind, it's terrible.",
            speaker_type: "sales_rep",
            start: 4.2,
            end: 7.3,
            funny: true,
          },
          {
            sentence: "That's a good one! I need to buy more paper from you.",
            speaker_type: "customer",
            start: 9.4,
            end: 12.1,
            funny: false,
          },
        ],
      },
      {
        id: "7654",
        sentences: [
          {
            sentence:
              "Hello, are you interested in buying one of our Sabre printers?",
            speaker_type: "sales_rep",
            start: 0,
            end: 6.3,
            funny: false,
          },
          {
            sentence: "No, I'm good",
            speaker_type: "customer",
            start: 7.1,
            end: 9.4,
            funny: false,
          },
        ],
      },
      {
        id: "8765",
        sentences: [
          {
            sentence: "Would you like some ink as well?",
            speaker_type: "sales_rep",
            start: 0,
            end: 4.2,
            funny: false,
          },
          {
            sentence: "I'm here for the ink alone.",
            speaker_type: "customer",
            start: 5.4,
            end: 7.8,
            funny: true,
          },
          {
            sentence: "Why are you laughing?",
            speaker_type: "customer",
            start: 9.3,
            end: 11.3,
            funny: true,
          },
          {
            sentence:
              "You're that guy who bathes in ink right? Jim told me about you but I didn't believe it",
            speaker_type: "sales_rep",
            start: 12.4,
            end: 19.6,
            funny: false,
          },
          {
            sentence: "It's a great moisturizer!",
            speaker_type: "customer",
            start: 20.1,
            end: 22.4,
            funny: true,
          },
        ],
      },
    ],
  },
];

module.exports = data;
