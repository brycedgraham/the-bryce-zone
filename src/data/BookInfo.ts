interface BookInfo {
  title: string
  path: string
  quote: string
  goodreads?: string
}

// ... existing code ...
const bookInfo: BookInfo[] = [
  {
    title: "Braiding Sweetgrass",
    path: "/images/BookCovers/BraidingSweetgrass.jpg",
    quote:
      "In some Native languages the term for plants translates to 'those who take care of us.'",
      goodreads: "https://www.goodreads.com/book/show/17465709-braiding-sweetgrass"
  },
  {
    title: "Debt: The First 5,000 Years",
    path: "/images/BookCovers/Debt5000Years.jpg",
    quote:
      "If history shows anything, it is that there's no better way to justify relations founded on violence, to make such relations seem moral, than by reframing them in the language of debt—above all, because it immediately makes it seem that it's the victim who's doing something wrong.",
      goodreads: "https://www.goodreads.com/book/show/6617037-debt"
  },
  {
    title: "1984",
    path: "/images/BookCovers/1984.jpg",
    quote:
      "Doublethink means the power of holding two contradictory beliefs in one's mind simultaneously, and accepting both of them.",
      goodreads: "https://www.goodreads.com/book/show/40961427-1984"
  },
  {
    title: "The Monkey Wrench Gang",
    path: "/images/BookCovers/MonkeyWrenchGang.jpg",
    quote:
      "\"The wilderness once offered men a plausible way of life,\" the doctor said. \"Now it functions as a psychiatric refuge. Soon there will be no wilderness.\" He sipped at his bourbon and ice. \"Soon there will be no place to go. Then the madness becomes universal.\" Another thought. \"And the universe goes mad.\"",
      goodreads: "https://www.goodreads.com/book/show/99208.The_Monkey_Wrench_Gang"
  },
  {
    title: "Desert Solitaire",
    path: "/images/BookCovers/DesertSolitaire.jpg",
    quote:
      "Wilderness is not a luxury but a necessity of the human spirit, and as vital to our lives as water and good bread. A civilization which destroys what little remains of the wild, the spare, the original, is cutting itself off from its origins and betraying the principle of civilization itself.",
      goodreads: "https://www.goodreads.com/book/show/214614.Desert_Solitaire"
  },
  {
    title: "Where the Crawdads Sing",
    path: "/images/BookCovers/CrawdadsSing.jpg",
    quote:
      "There are some who can live without wild things, and some who cannot.",
      goodreads: "https://www.goodreads.com/book/show/36809135-where-the-crawdads-sing"
  },
  {
    title: "Sapiens",
    path: "/images/BookCovers/Sapiens.jpg",
    quote:
      "One of history’s few iron laws is that luxuries tend to become necessities and to spawn new obligations.",
      goodreads: "https://www.goodreads.com/book/show/23692271-sapiens"
  },
  {
    title: "The Pragmatic Programmer",
    path: "/images/BookCovers/ThePragmaticProgrammer.jpg",
    quote:
      "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them. You sketch out an overall shape, paint the underlying environment, then fill in the details. You constantly step back with a critical eye to view what you've done. Every now and then you'll throw a canvas away and start again. But artists will tell you that all the hard work is ruined if you don't know when to stop. If you add layer upon layer, detail over detail, the painting becomes lost in the paint.",
      goodreads: "https://www.goodreads.com/book/show/14430458-the-pragmatic-programmer"
  },
  {
    title: "Something Deeply Hidden",
    path: "/images/BookCovers/SomethingDeeplyHidden.jpg",
    quote:
      "Every time a quantum event happens, the universe splits. All of the versions of you are real.",
      goodreads: "https://www.goodreads.com/book/show/44065062-something-deeply-hidden"
  },
  {
    title: "The Big Picture",
    path: "/images/BookCovers/TheBigPicture.jpg",
    quote:
      "Poetic naturalism is a philosophy of freedom and responsibility. The raw materials of life are given to us by the natural world, and we must work to understand them and accept the consequences. The move from description to prescription, from saying what happens to passing judgment on what should happen, is a creative one, a fundamentally human act. The world is just the world, unfolding according to the patterns of nature, free of any judgmental attributes. The world exists; beauty and goodness are things that we bring to it.",
      goodreads: "https://www.goodreads.com/book/show/35492237-the-big-picture"
  },
  {
    title: "Why Buddhism is True",
    path: "/images/BookCovers/WhyBuddhismIsTrue.jpg",
    quote:
      "Ultimately, happiness comes down to choosing between the discomfort of becoming aware of your mental afflictions and the discomfort of being ruled by them.",
      goodreads: "https://www.goodreads.com/book/show/32895535-why-buddhism-is-true"
  },
  {
    title: "The Order of Time",
    path: "/images/BookCovers/OrderOfTime.jpg",
    quote:
      "We understand the world in its becoming, not in its being.",
      goodreads: "https://www.goodreads.com/book/show/36442813-the-order-of-time"
  },
  {
    title: "Dune",
    path: "/images/BookCovers/DuneCover.jpg",
    quote:
      "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
      goodreads: "https://www.goodreads.com/book/show/44767458-dune"
  },
  {
    title: "Foundation",
    path: "/images/BookCovers/FoundationCover.jpg",
    quote:
      "To succeed, planning alone is insufficient. One must improvise as well.",
      goodreads: "https://www.goodreads.com/book/show/29579.Foundation"
  },
  {
    title: "Hitchhiker's Guide to the Galaxy",
    path: "/images/BookCovers/HitchhikersGuideCover.jpg",
    quote: "Ford... you're turning into a penguin. Stop it.",
    goodreads: "https://www.goodreads.com/book/show/11.The_Hitchhiker_s_Guide_to_the_Galaxy"
  },
  {
    title: "Eragon",
    path: "/images/BookCovers/EragonCover.jpg",
    quote:
      'Eragon looked back at him, confused. "I don\'t understand.""Of course you don\'t," said Brom impatiently. "That\'s why I\'m teaching you and not the other way around.',
    goodreads: "https://www.goodreads.com/book/show/7747009-eragon"
  },
  {
    title: "A Brief History of Time",
    path: "/images/BookCovers/ABriefHistoryOfTimeCover.jpg",
    quote:
      "IF you remember every word in this book, your memory will have recorded about two million pieces of information: the order in your brain will have increased by about two million units. However, while you have been reading the book, you will have converted at least a thousand calories of ordered energy, in the form of food, into disordered energy, in the form of heat that you lose to the air around you by convection and sweat. This will increase the disorder of the universe by about twenty million million million million units - or about ten million million million times the increase in order in your brain - and that's if you remember everything in this book.",
    goodreads: "https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time"
  },
  {
    title: "The Amulet of Samarkand",
    path: "/images/BookCovers/AmuletOfSamarkandCover.jpg",
    quote:
      "A word of friendly advice could have saved him, but dear me, I was too busy watching him unravel to think of it until it was far too late.",
    goodreads: "https://www.goodreads.com/book/show/334123.The_Amulet_of_Samarkand"
  },
  {
    title: "Artemis Fowl",
    path: "/images/BookCovers/ArtemisFowlCover.jpg",
    quote:
      "Confidence is ignorance. If you're feeling cocky, it's because there's something you don't know.",
    goodreads: "https://www.goodreads.com/book/show/38506719-artemis-fowl"
  },
  {
    title: "Howl's Moving Castle",
    path: "/images/BookCovers/HowlsMovingCastleCover.jpg",
    quote: "I hope your bacon burns.",
    goodreads: "https://www.goodreads.com/book/show/1017797.Howl_s_Moving_Castle"
  },
  {
    title: "Inferno",
    path: "/images/BookCovers/InfernoCover.jpg",
    quote:
      "Nothing is more creative... nor destructive... than a brilliant mind with a purpose.",
    goodreads: "https://www.goodreads.com/book/show/17212231-inferno"
  },
  {
    title: "Mistborn",
    path: "/images/BookCovers/MistbornCover.jpg",
    quote: "I've always been very confident in my immaturity.",
    goodreads: "https://www.goodreads.com/book/show/68428.Mistborn"
  },
  // {
  //   title: "Semper Mars",
  //   path: "/images/BookCovers/SemperMarsCover.jpg",
  //   quote: "Ooh-rah!",
  // }
  {
    title: "Ringworld",
    path: "/images/BookCovers/RingworldCover.jpg",
    quote:
      "On a world built to ordered specification, there was no logical reason for such a mountain to exist. Yet every world should have at least one unclimbable mountain.",
    goodreads: "https://www.goodreads.com/book/show/61179.Ringworld"
  },
  {
    title: "Steelheart",
    path: "/images/BookCovers/SteelheartCover.jpg",
    quote:
      "...the sensation felt like an unbalanced washing machine filled with a hundred epileptic chimpanzees.",
    goodreads: "https://www.goodreads.com/book/show/17182126-steelheart"
  },
  {
    title: "Poison Study",
    path: "/images/BookCovers/PoisonStudyCover.jpg",
    quote:
      "But you’ve slipped under my skin, invaded my blood and seized my heart.",
    goodreads: "https://www.goodreads.com/book/show/60510.Poison_Study"
  },
  {
    title: "A Game of Thrones",
    path: "/images/BookCovers/GameOfThronesCover.jpg",
    quote:
      "... a mind needs books as a sword needs a whetstone, if it is to keep its edge.",
    goodreads: "https://www.goodreads.com/book/show/13496.A_Game_of_Thrones"
  },
  {
    title: "Star Wars: Heir to the Empire",
    path: "/images/BookCovers/StarWarsHeirToTheEmpireCover.jpg",
    quote:
      "Anyone can make an error, Ensign. But that error doesn’t become a mistake until you refuse to correct it.",
    goodreads: "https://www.goodreads.com/book/show/9540602-heir-to-the-empire"
  },
  // {
  //   title: "Twilight/Life and Death",
  //   path: "/images/BookCovers/TwilightCover.jpg",
  //   quote:
  //     "Seriously, though, this wasn’t a life and death situation—it was just high school. It’s not like anyone was going to bite me.",
  // }
  {
    title: "Clockwork Angels",
    path: "/images/BookCovers/ClockworkAngelsCover.jpg",
    quote:
      "The best place to start an adventure is with a quiet, perfect life... And someone who realizes that it can't possibly be enough.",
    goodreads: "https://www.goodreads.com/book/show/15983768-clockwork-angels"
  },
  {
    title: "The Lord of the Rings",
    path: "/images/BookCovers/LordOfTheRings.jpg",
    quote:
      "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
    goodreads: "https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings"
  },
  {
    title: "Ender's Game",
    path: "/images/BookCovers/EndersGame.jpg",
    quote:
      "If you try and lose then it isn't your fault. But if you don't try and we lose, then it's all your fault.",
    goodreads: "https://www.goodreads.com/book/show/375802.Ender_s_Game"
  },
  {
    title: "Terrier",
    path: "/images/BookCovers/Terrier.jpg",
    quote:
      "Cats must always be cats, even when they are gods, or constellations.",
    goodreads: "https://www.goodreads.com/book/show/13829.Terrier"
  },
  {
    title: "Halo: First Strike",
    path: "/images/BookCovers/HaloFirstStrike.jpg",
    quote: "Maybe our luck will change.",
    goodreads: "https://www.goodreads.com/book/show/615921.Halo"
  },
  {
    title: "Halo: Glasslands",
    path: "/images/BookCovers/HaloGlasslands.jpg",
    quote:
      "Revenge might give you a warm feeling, but unless it delivers some lasting results you might as well have a nice cup of mocha instead.",
    goodreads: "https://www.goodreads.com/book/show/11915781-halo"
  },
  {
    title: "The Lost Years of Merlin",
    path: "/images/BookCovers/TheLostYearsOfMerlin.jpg",
    quote:
      "My constellations are not made from the stars, but from the spaces between the stars. The dark places. The open places, where your mind can travel forever and ever.",
    goodreads: "https://www.goodreads.com/book/show/1190507.The_Lost_Years_of_Merlin"
  },
]

export default bookInfo