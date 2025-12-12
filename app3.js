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
                points: 10,
            },
            {
                text: "Green",
                image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/green-textile-in-close-up-image-HEMIBJ8QQuA",
                alt: "Green Color",
                credit: "engin akyurt",
                points: 20,
            },
            {
                text: "Dark Blue",
                image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/blue-and-black-abstract-painting-prMn9KINLtI",
                alt: "Dark Blue Color",
                credit: "Pawel Czerwinski",
                points: 30,
            },
            {
                text: "Red",
                image: "https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/red-textile-in-close-up-photography-YpDkIh137ws",
                alt: "Red Color",
                credit: "James Lee",
                points: 40,
            },
            {
                text: "Purple",
                image: "https://images.unsplash.com/photo-1583339522870-0d9f28cef33f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/purple-textile-on-white-textile-Vey6fioB1eI",
                alt: "Purple Color",
                credit: "Daniele Levis Pelusi",
                points: 50,
            },
            {
                text: "Yellow",
                image: "https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/yellow-liquid-cVJsVGkxCoo",
                alt: "Yellow Color",
                credit: "Luis Quintero",
                points: 60,
            },
        ]
    },
    {
        id: 1,
        text: "Choose your area of study",
        answers:  [
            {
                text: "STEM",
                image: "https://images.unsplash.com/photo-1596496181935-7801d2065877?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL: "https://unsplash.com/photos/person-holding-green-ball-on-white-paper--Cm7hnp4WOg",
                alt: "a person putting jumper wires into a breadboard",
                credit: "Jeswin Thomas",
                points: 10
            },
            {
                text: "Humanities",
                image: "https://images.unsplash.com/photo-1604549944235-3e5579b15cc2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/blue-and-brown-desk-globe-3ULMRQZ5APA",
                alt: "a globe",
                credit: "Greg Rosenke",
                points: 20
            },
            {
                text: "Independent Major",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/two-person-walking-towards-mountain-covered-with-snow-Yizrl9N_eDA",
                alt: "a couple hiking towards a mountain",
                credit: "Toomas Tartes",
                points: 30
            },
            {
                text: "Social Sciences",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/person-in-red-sweater-holding-babys-hand-Zyx1bK9mqmA",
                alt: "A group of people each putting one hand ontop of one another",
                credit: "Hannah Busing",
                points: 40
            },
            {
                text: "Two or more",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/shallow-focus-photography-of-books-lUaaKCUANVI",
                alt: "a stack of books",
                credit: "Kimberly Farmer",
                points: 50
            },
            {
                text: "Unsure",
                image: "https://images.unsplash.com/photo-1724120932030-d8210a77deed?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/a-person-standing-in-front-of-a-group-of-question-marks-XP-YDJetZ4Q",
                alt: "a stick figure man standing next to three question marks",
                credit: "Buddha Elemental 3D",
                points: 60
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
                homeURL:"https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM",
                alt: "a pizza with tomatoes and rosemary next to it",
                credit: "Ivan Torres",
                points: 10
            },
            {
                text: "I'm Mr/Ms/Mx. Worldwide",
                image: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/variety-of-food-on-mat-2lG4WEzGmG4",
                alt: "a variety of different foods",
                credit: "Sara Dubler",
                points: 10
            },
            {
                text: "I'm rootED in my ways",
                image: "https://images.unsplash.com/photo-1615366105533-5b8f3255ea5d?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/vegetable-salad-on-white-ceramic-plate-4MEL9XS-3JQ",
                alt: "prepared vegan food on plates and bowls",
                credit: "Victoria Shes",
                points: 10
            },
            {
                text: "Find me at the salad bar",
                image: "https://images.unsplash.com/photo-1722032617357-7b09276b1a8d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/a-bowl-of-salad-on-a-wooden-table-xbwMkgORF5U",
                alt: "a salad with tomatoes, cucumbers, and lettuce",
                credit: "KODO Tenco",
                points: 10
            },
            {
                text: "Dessert anyone?",
                image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/six-teal-icing-cupcakes-with-sprinkles-pGM4sjt_BdQ",
                alt: "a line of six blue cupcakes with rainbow sprinkles",
                credit: "Brooke Lark",
                points: 10
            },
            {
                text: "I love ham sandwiches",
                image: "https://images.unsplash.com/photo-1567234669013-216f3a40e02e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/triangle-slice-of-a-ham-sandwich-foHj73zCV3Y",
                alt: "a ham sandwich",
                credit: "Suea Sivilaisith",
                points: 10
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
                homeURL:"https://unsplash.com/photos/person-sleeping-at-a-desk-in-a-library-cubicle-qmBWmRsSifU",
                alt: "Set of carrels with a person sitting at one",
                credit: "Austin",
                points: 10
            },
            {
                text: "Wherever my friends are",
                image: "https://images.unsplash.com/photo-1607748669447-d80c72873e6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/woman-in-white-tank-top-and-orange-jacket-holding-white-printer-paper-nLNN8agALsc",
                alt: "two friends sit together reading a book",
                credit: "Joel Muniz",
                points: 10
            },
            {
                text: "My dorm room",
                image: "https://images.unsplash.com/photo-1622429420441-60dd67f737a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/white-wooden-cabinet-near-bed-xdY1s1I6J8U",
                alt: "a dorm room with twinkle lights and a fur cover",
                credit: "Shashi Chaturvedula",
                points: 10
            },
            {
                text: "Find a place in town to sit",
                image: "https://images.unsplash.com/photo-1652638662002-936c0a882ae7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/a-row-of-buildings-on-a-city-street-yaNDW8U_c24",
                alt: "Lancaster Ave Businesses in Bryn Mawr such as the Grog, Sushiland, and The Shear Touch",
                credit: "E. Vitka",
                points: 10
            },
            {
                text: "The quietest spot in library",
                image: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/brown-wooden-book-shelf-with-books-BEEyeib-am8",
                alt: "a bookshelf shelved with books",
                credit: "Trnava University",
                points: 10
            },
            {
                text: "Wherever caffeine is provided",
                image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2537&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/person-making-latte-art-nzyzAUsbV0M",
                alt: "steamed milk poured into coffee",
                credit: "Fahmi Fakhrudin",
                points: 10
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
                homeURL:"https://unsplash.com/photos/captcha-cvBBO4PzWPg",
                alt: "Javascript code on a computer screen",
                credit: "",
                points: 10
            },
            {
                text: "Scottish Country Dance",
                image: "https://images.unsplash.com/photo-1759319135122-cd9df832bef2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/close-up-of-feet-wearing-black-lace-up-shoes-on-grass-3z7Buf3aitc",
                alt: "a close up of black dance shoes typically worn for this style of dance",
                credit: "Pearse O'Halloran",
                points: 10
            },
            {
                text: "Art Club",
                image: "https://images.unsplash.com/photo-1760815011296-0e6af2b06f2f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/clear-containers-filled-with-craft-supplies-VMe9WlhA93o",
                alt: "clear containers filled with art supplies",
                credit: "Tanya Barrow",
                points: 10
            },
            {
                text: "VITA",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/person-holding-paper-near-pen-and-calculator-xoU52jUVUXA",
                alt: "a pile of tax forms on a desk",
                credit: "Kelly Sikkema",
                points: 10
            },
            {
                text: "Acabellas",
                image: "https://images.unsplash.com/photo-1516108759901-daf1a20f9281?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/two-persons-holding-microphones-while-talking-c-WJ1XV2RyE",
                alt: "two musicians sing into a microphone",
                credit: "The Charles Gallery | Photography",
                points: 10
            },
            {
                text: "Feminist Coalition",
                image: "https://images.unsplash.com/photo-1547937084-4d587301a545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/the-future-if-female-sign-hUWINRMPvsc",
                alt: "a person holds a sign saying The Future if Female",
                credit: "Lindsey LaMont",
                points: 10
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
                homeURL:"https://unsplash.com/photos/five-assorted-paintings-on-easels-kJQ6cDyodAM",
                alt: "five assorted easels with paint on them",
                credit: "Raychan",
                points: 10
            },
            {
                text: "Digital Storytelling",
                image: "https://images.unsplash.com/photo-1557831479-fcf18560bb91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/black-video-recorder-KxZyxCrue5E",
                alt: "a black video recorder",
                credit: "Jaël Vallée",
                points: 10
            },
            {
                text: "Data Science with R",
                image: "https://images.unsplash.com/photo-1514070706115-47c142769603?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/a-computer-screen-with-a-program-running-on-it-0nI1DczRQAM",
                alt: "a computer screen with code",
                credit: "Ilija Boshkov",
                points: 10
            },
            {
                text: "Introduction to Computing",
                image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/people-sitting-on-chair-in-front-of-computer-monitor-Fa9b57hffnM",
                alt: "three people working inside a computer lab",
                credit: "Sigmund",
                points: 10
            },
            {
                text: "Public Anthropology",
                image: "https://images.unsplash.com/photo-1732304721505-7777969ce2da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/a-stack-of-books-sitting-on-top-of-a-table-sliRfO-e6Sg",
                alt: "a pile of sociology theory books",
                credit: "Thorium",
                points: 10
            },
            {
                text: "Writing Everyday Life",
                image: "https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                homeURL:"https://unsplash.com/photos/person-holding-pencil-writing-on-notebook-RdmLSJR-tq8",
                alt: "a person writing on a piece of paper with a pencil next to a pile of pencil shavings",
                credit: "Thought Catalog",
                points: 10
            },
        ]
        
    }
]
const answers = [
    {
       minPoints:0,
       maxPoints: 50,
        text: "You find yourself often drawn to the written word. Because you have a lot to say, taking a course in",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints:51,
        maxPoints: 100,
        text: "You have a good amount of creativity in your heart. Because of that, I would recommend the course Creative Exercises to Spark Original Thinking. Follow the link here https://www.linkedin.com/learning-login/share?account=76958498&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fcreative-exercises-to-spark-original-thinking%3Ftrk%3Dshare_ent_url%26shareId%3D5aNIMpDcRrWonDBFMDRZKQ%253D%253D",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints:101,
        maxPoints: 150,
        text: "THIS IS CHOICE 3 ",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints:151,
        maxPoints: 200,
        text: "THIS IS CHOICE 4",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints:151,
        maxPoints: 200,
        text: "THIS IS CHOICE 4",
        image: "https://google.com",
        alt: "find an image for this"
    },
    {
        minPoints:151,
        maxPoints: 200,
        text: "THIS IS CHOICE 4",
        image: "https://google.com",
        alt: "find an image for this"
    },

]
// need to have a default answer for lack of combination data


const unansweredQuestions = []
const chosenAnswers = []



const populateQuestions = () => {
    questions.forEach(question => { 
       const titleBlock =  document.createElement('div')
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

       question.answers.forEach (answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text, answer.points))
            
            const answerImage = document.createElement('img')
            answerImage.setAttribute( 'src', answer.image)
            answerImage.setAttribute ('alt', answer.alt)

            

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href' , answer.homeURL)
            imageLink.textContent = answer.credit
            
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute ('src', 'https://www.unsplash.com')
            answerInfo.append (imageLink, ' to ' , sourceLink)
            


            answerBlock.append(answerImage , answerTitle , answerInfo)
            answersBlock.append(answerBlock)
       })

questionDisplay.append(answersBlock)

    })
}

populateQuestions ()

const handleClick = (questionId, chosenAnswer, points) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push({text: chosenAnswer, points: points})
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId,chosenAnswer)
    //scroll to top most unanswered question
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length){
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
    answerImage.setAttribute('alt', result.alt )

    answerBlock.append(answerTitle, answerImage)
    
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