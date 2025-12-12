const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Choose your class color year:",
        answers: [
            {
                text: "Light Blue",
                image: "https://images.unsplash.com/photo-1606942041262-0f8b25eb7e1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/blue-and-white-polka-dot-textile-5pYEy8orVbc",
                alt: "Light Blue Color",
                credit: "Tamanna Rumee",
                points: 1,
            },
            {
                text: "Green",
                image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/green-textile-in-close-up-image-HEMIBJ8QQuA",
                alt: "Green Color",
                credit: "engin akyurt",
                points: 2,
            },
            {
                text: "Dark Blue",
                image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/blue-and-black-abstract-painting-prMn9KINLtI",
                alt: "Dark Blue Color",
                credit: "Pawel Czerwinski",
                points: 3,
            },
            {
                text: "Red",
                image: "https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/red-textile-in-close-up-photography-YpDkIh137ws",
                alt: "Red Color",
                credit: "James Lee",
                points: 4,
            },
            {
                text: "Purple",
                image: "https://images.unsplash.com/photo-1583339522870-0d9f28cef33f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/purple-textile-on-white-textile-Vey6fioB1eI",
                alt: "Purple Color",
                credit: "Daniele Levis Pelusi",
                points: 5,
            },
            {
                text: "Yellow",
                image: "https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/yellow-liquid-cVJsVGkxCoo",
                alt: "Yellow Color",
                credit: "Luis Quintero",
                points: 6,
            },
        ]
    },
    {
        id: 1,
        text: "Choose your area of study",
        answers: [
            {
                text: "STEM",
                image: "https://images.unsplash.com/photo-1596496181935-7801d2065877?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/person-holding-green-ball-on-white-paper--Cm7hnp4WOg",
                alt: "a person putting jumper wires into a breadboard",
                credit: "Jeswin Thomas",
                points: 6
            },
            {
                text: "Humanities",
                image: "https://images.unsplash.com/photo-1604549944235-3e5579b15cc2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/blue-and-brown-desk-globe-3ULMRQZ5APA",
                alt: "a globe",
                credit: "Greg Rosenke",
                points: 2
            },
            {
                text: "Independent Major",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/two-person-walking-towards-mountain-covered-with-snow-Yizrl9N_eDA",
                alt: "a couple hiking towards a mountain",
                credit: "Toomas Tartes",
                points: 1
            },
            {
                text: "Social Sciences",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/person-in-red-sweater-holding-babys-hand-Zyx1bK9mqmA",
                alt: "A group of people each putting one hand ontop of one another",
                credit: "Hannah Busing",
                points: 4
            },
            {
                text: "Two or more",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/shallow-focus-photography-of-books-lUaaKCUANVI",
                alt: "a stack of books",
                credit: "Kimberly Farmer",
                points: 3
            },
            {
                text: "Unsure",
                image: "https://images.unsplash.com/photo-1724120932030-d8210a77deed?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/a-person-standing-in-front-of-a-group-of-question-marks-XP-YDJetZ4Q",
                alt: "a stick figure man standing next to three question marks",
                credit: "Buddha Elemental 3D",
                points: 5
            },
        ]

    },
    {
        id: 2,
        text: "New Dorm Dining Hall dinner of choice?",
        answers: [
            {
                text: "In the pizza crust we trust",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM",
                alt: "a pizza with tomatoes and rosemary next to it",
                credit: "Ivan Torres",
                points: 3
            },
            {
                text: "I'm Mr/Ms/Mx. Worldwide",
                image: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/variety-of-food-on-mat-2lG4WEzGmG4",
                alt: "a variety of different foods",
                credit: "Sara Dubler",
                points: 2
            },
            {
                text: "I'm rootED in my ways",
                image: "https://images.unsplash.com/photo-1615366105533-5b8f3255ea5d?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/vegetable-salad-on-white-ceramic-plate-4MEL9XS-3JQ",
                alt: "prepared vegan food on plates and bowls",
                credit: "Victoria Shes",
                points: 1
            },
            {
                text: "Find me at the salad bar",
                image: "https://images.unsplash.com/photo-1722032617357-7b09276b1a8d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/a-bowl-of-salad-on-a-wooden-table-xbwMkgORF5U",
                alt: "a salad with tomatoes, cucumbers, and lettuce",
                credit: "KODO Tenco",
                points: 5
            },
            {
                text: "Dessert anyone?",
                image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/six-teal-icing-cupcakes-with-sprinkles-pGM4sjt_BdQ",
                alt: "a line of six blue cupcakes with rainbow sprinkles",
                credit: "Brooke Lark",
                points: 4
            },
            {
                text: "I love ham sandwiches",
                image: "https://images.unsplash.com/photo-1567234669013-216f3a40e02e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/triangle-slice-of-a-ham-sandwich-foHj73zCV3Y",
                alt: "a ham sandwich",
                credit: "Suea Sivilaisith",
                points: 6
            },
        ]

    },
    {
        id: 3,
        text: "Where are you studying for your exams?",
        answers: [
            {
                text: "My carrel",
                image: "https://images.unsplash.com/photo-1742094561255-18506fba7a48?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/person-sleeping-at-a-desk-in-a-library-cubicle-qmBWmRsSifU",
                alt: "Set of carrels with a person sitting at one",
                credit: "Austin",
                points: 6
            },
            {
                text: "Wherever my friends are",
                image: "https://images.unsplash.com/photo-1607748669447-d80c72873e6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/woman-in-white-tank-top-and-orange-jacket-holding-white-printer-paper-nLNN8agALsc",
                alt: "two friends sit together reading a book",
                credit: "Joel Muniz",
                points: 4
            },
            {
                text: "My dorm room",
                image: "https://images.unsplash.com/photo-1622429420441-60dd67f737a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/white-wooden-cabinet-near-bed-xdY1s1I6J8U",
                alt: "a dorm room with twinkle lights and a fur cover",
                credit: "Shashi Chaturvedula",
                points: 5
            },
            {
                text: "Find a place in town to sit",
                image: "https://images.unsplash.com/photo-1652638662002-936c0a882ae7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/a-row-of-buildings-on-a-city-street-yaNDW8U_c24",
                alt: "Lancaster Ave Businesses in Bryn Mawr such as the Grog, Sushiland, and The Shear Touch",
                credit: "E. Vitka",
                points: 3
            },
            {
                text: "The quietest spot in library",
                image: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/brown-wooden-book-shelf-with-books-BEEyeib-am8",
                alt: "a bookshelf shelved with books",
                credit: "Trnava University",
                points: 2
            },
            {
                text: "Wherever caffeine is provided",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2537&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/person-making-latte-art-nzyzAUsbV0M",
                alt: "steamed milk poured into coffee",
                credit: "Fahmi Fakhrudin",
                points: 1
            },
        ]

    },
    {
        id: 4,
        text: "Pick a club activity on campus",
        answers: [
            {
                text: "Girls Who Code",
                image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/captcha-cvBBO4PzWPg",
                alt: "Javascript code on a computer screen",
                credit: "",
                points: 6
            },
            {
                text: "Scottish Country Dance",
                image: "https://images.unsplash.com/photo-1759319135122-cd9df832bef2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/close-up-of-feet-wearing-black-lace-up-shoes-on-grass-3z7Buf3aitc",
                alt: "a close up of black dance shoes typically worn for this style of dance",
                credit: "Pearse O'Halloran",
                points: 3
            },
            {
                text: "Art Club",
                image: "https://images.unsplash.com/photo-1760815011296-0e6af2b06f2f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/clear-containers-filled-with-craft-supplies-VMe9WlhA93o",
                alt: "clear containers filled with art supplies",
                credit: "Tanya Barrow",
                points: 2
            },
            {
                text: "VITA",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/person-holding-paper-near-pen-and-calculator-xoU52jUVUXA",
                alt: "a pile of tax forms on a desk",
                credit: "Kelly Sikkema",
                points: 5
            },
            {
                text: "Acabellas",
                image: "https://images.unsplash.com/photo-1516108759901-daf1a20f9281?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/two-persons-holding-microphones-while-talking-c-WJ1XV2RyE",
                alt: "two musicians sing into a microphone",
                credit: "The Charles Gallery | Photography",
                points: 4
            },
            {
                text: "Feminist Coalition",
                image: "https://images.unsplash.com/photo-1547937084-4d587301a545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/the-future-if-female-sign-hUWINRMPvsc",
                alt: "a person holds a sign saying The Future if Female",
                credit: "Lindsey LaMont",
                points: 1
            },
        ]

    },
    {
        id: 5,
        text: "Pick a class to take for next semester",
        answers: [
            {
                text: "Arts Foundation-Drawing",
                image: "https://images.unsplash.com/photo-1514195037031-83d60ed3b448?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/five-assorted-paintings-on-easels-kJQ6cDyodAM",
                alt: "five assorted easels with paint on them",
                credit: "Raychan",
                points: 2
            },
            {
                text: "Digital Storytelling",
                image: "https://images.unsplash.com/photo-1557831479-fcf18560bb91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/black-video-recorder-KxZyxCrue5E",
                alt: "a black video recorder",
                credit: "Jaël Vallée",
                points: 3
            },
            {
                text: "Data Science with R",
                image: "https://images.unsplash.com/photo-1514070706115-47c142769603?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/a-computer-screen-with-a-program-running-on-it-0nI1DczRQAM",
                alt: "a computer screen with code",
                credit: "Ilija Boshkov",
                points: 5
            },
            {
                text: "Introduction to Computing",
                image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/people-sitting-on-chair-in-front-of-computer-monitor-Fa9b57hffnM",
                alt: "three people working inside a computer lab",
                credit: "Sigmund",
                points: 6
            },
            {
                text: "Public Anthropology",
                image: "https://images.unsplash.com/photo-1732304721505-7777969ce2da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/a-stack-of-books-sitting-on-top-of-a-table-sliRfO-e6Sg",
                alt: "a pile of sociology theory books",
                credit: "Thorium",
                points: 4
            },
            {
                text: "Writing Everyday Life",
                image: "https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/person-holding-pencil-writing-on-notebook-RdmLSJR-tq8",
                alt: "a person writing on a piece of paper with a pencil next to a pile of pencil shavings",
                credit: "Thought Catalog",
                points: 1
            },
        ]

    }
]
const answers = [
    {
        minPoints: 6,
        maxPoints: 10,
        text: "You are drawn to the written word and enjoy getting to explore different stories and perspectives. Because of this, I recommend you check out Writing with Flair: How to Become an Exceptional Writer. This course will help you improve the clarity and creativity of your own personal writing style, making you ready to come back next semester ready to conquer your next paper! ",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints: 11,
        maxPoints: 15,
        text: "You see a lot of beauty in the world and love to find ways to showcase that beauty. You’re always looking to turn ideas into something tangible, something that can connect you to the creative world.  Because every creative eventually needs a boost in motivation, I would recommend checking out Creative Exercises to Spark Original Thinking. This course will help you find strategies to get you out of that art block when you feel drained and uncreative, giving you a fresh approach.",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints: 16,
        maxPoints: 21,
        text: "Jack of all trades and perhaps master of some, you find yourself constantly exploring and trying new things whether it be new courses in different departments, different clubs on campus, or even new foods in the dining hall. You deserve a course that will be continue your exploration and for that I recommend checking out Introduction to Project Management. With all the training courses on LinkedIn partnered with the Project Management Institute, why not have another thing to add to your extensive resume?",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints: 22,
        maxPoints: 26,
        text: "You are a scientific thinker, someone who wants to understand what’s going on around them. You are always looking for information on how to improve your knowledge of the world around you and help with your critical thinking skills, and for that I recommend Python for Students. This course is made for those who are interested in this flexible, popular coding language, taught in a way that takes complex terms and makes them more simplified while you are still learning.",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints: 27,
        maxPoints: 31,
        text: "You are a people person. You enjoy getting to talk with other people, hear their stories and expand your own personal perspective. To learn how to better socialize and network with your peers I would recommend Centered Communication: Get Better Results from Your Conversations. This course will help you to learn how to have successful interactions with your peers, your network, and any new people you meet.",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints: 32,
        maxPoints: 36,
        text: " Its all about the numbers with you - you enjoy getting time to sit down and really focus on a topic that is interesting for you. People would describe you as practical, organized and reliable, and for that I recommend Excel Essentials Training. There is nothing better than having an organized and color coded spreadsheet!",
        image: "https://google.com",
        alt: "find an image for this"
    },

]
// need to have a default answer for lack of combination data


const unansweredQuestions = []
const chosenAnswers = []



const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')

        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text

        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text, answer.points))

            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)



            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.homeURL)
            imageLink.textContent = answer.credit

            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)



            answerBlock.append(answerImage, answerTitle, answerInfo)
            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer, points) => {
    if (unansweredQuestions.includes(questionId))
        chosenAnswers.push({ text: chosenAnswer, points: points })
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }

    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)
    //scroll to top most unanswered question
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        //scroll to answer div
        location.href = '#answer'
        showAnswer()
    }
}


/*const showAnswer = () => {
    let result
    answers.forEach( answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) + 
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2]) +
            chosenAnswers.includes(answer.combination[3]) +
            chosenAnswers.includes(answer.combination[4]) +
            chosenAnswers.includes(answer.combination[5]) 
        ){
            result = answer
            return
        } else if (!result) {
            //first answer object is default
            result = answers[0]
        }
    })

    console.log(result)
*/

const showAnswer = () => {
    let totalPoints = 0;
    chosenAnswers.forEach(answer => {
        totalPoints += answer.points;
    });

    let result;
    answers.forEach(answer => {
        if (totalPoints >= answer.minPoints && totalPoints <= answer.maxPoints) {
            result = answer;
            return;
        }
    });

    if (!result) {
        // Default answer if no match is found
        result = answers[0];
    }

    console.log(result);



    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)



    // Create a URL based on the total points
    let url;
    if (totalPoints >= 0 && totalPoints <= 50) {
        url = 'https://example.com/low-points';
    } else if (totalPoints >= 51 && totalPoints <= 100) {
        url = 'https://example.com/medium-points';
    } else {
        url = 'https://example.com/high-points';
    }

    // Create a link element
    const link1 = document.createElement('a');
    link1.href = url;
    link1.textContent = 'Click here to be taken to the course in LinkedIn Learning';

    // Create a link element for the second URL
    const link2 = document.createElement('a');
    link2.href = 'https://example.com/another-website'; // Replace with your second URL
    link2.textContent = 'Click the link here for our AskAthena documentation to sign up for LinkedIn Learning!';

    answerBlock.append(link2, answerTitle, /*answerImage,*/link1,);

    answerDisplay.append(answerBlock)

    const allAnswerBlock = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlock).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText != chosenAnswer) {
            block.style.opacity = "50%"
        }
    })

}