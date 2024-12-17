// import { useTranslation } from "react-i18next";

import gap from "../assets/LogoPartnersBRANDS/adoreME.png";
import cerebral from "../assets/LogoPartnersBRANDS/cerebral.png";
import champs from "../assets/LogoPartnersBRANDS/Champs.png";
import foria from "../assets/LogoPartnersBRANDS/Foria.png";
import fruitByTheFoot from "../assets/LogoPartnersBRANDS/fruitbythefoot.png";
import lelo from "../assets/LogoPartnersBRANDS/Lelo.png";
import pantene from "../assets/LogoPartnersBRANDS/Pantene.png";
import summers from "../assets/LogoPartnersBRANDS/summers.jpg";
import tula from "../assets/LogoPartnersBRANDS/Tula.png";
import walmart from "../assets/LogoPartnersBRANDS/walmart.png";
import WomenBest from "../assets/photosAlexis1/womensbest.png";
import Skylar from "../assets/photosAlexis1/SkylarLogo.jpg";
import foxy from "../assets/photosAlexis2/foxy.jpg";
import meetFoxy from "../assets/photosAlexis1/meetFoxxy.jpg";
import SensualDanceWorkshop from "../assets/photosAlexis1/Sensual-dance.jpg";
import coffeeBeans from "../assets/photosAlexis1/coffee.jpeg";
import cacoaHealer from "../assets/photosAlexis1/cacaoHealer.png";
import cacaoCircle from "../assets/photosAlexis1/cacaoCircle.png";
import cocaoBrew from "../assets/photosAlexis1/cacaoBrew.png";
import grlTrip from "../assets/photosAlexis2/retreat_girls_trips.jpg";
import healing from "../assets/photosAlexis2/retreat_healing.jpg";
import foxie from "../assets/photosAlexis2/foxie1.png";
import pastRetreat from "../assets/photosAlexis1/pastRetreat.jpg";
import pin from "../assets/accessories/tape.png";
import pointer from "../assets/photosAlexis1/clickPointer.png";
import videoFoxy from "../assets/photosAlexis1/retreatVideo.mp4";
import shopImage1 from "../assets/foxxyIMGSHOP/podcastIMG.png";
import shopImage5 from "../assets/photosAlexis2/appeal.jpg";
import snowyFox from "../assets/photosAlexis1/fox.png";
import yourHosts from "../assets/photosAlexis2/yourHosts.png";
import arrow from "../assets/accessories/arrowDirection.png";
import lipPrint from "../assets/accessories/Untitled design.png";
import InstaIcon from "../assets/accessories/instLogo.png";
import facebook from "../assets/accessories/facebook.svg";
import instagram from "../assets/accessories/instagram.svg";
import snapchat from "../assets/accessories/snapchat.svg";
import threads from "../assets/accessories/threads.svg";
import tiktok from "../assets/accessories/tiktok-square.svg";
import youtube from "../assets/accessories/youtube.svg";
import soldOut from "../assets/accessories/soldout.png";
import foxyClubLogo from "../assets/accessories/foxyClub.webp";
import vines from "../assets/accessories/vines.png";
import glitter from "../assets/accessories/glitter.png";
import foxyLogo from "../assets/accessories/logo.webp";
import soundBathIMG from "../assets/accessories/soundBathImage.png";
import soundBathIMG1 from "../assets/accessories/soundBathIMG1.png";
import soundBathIMG2 from "../assets/accessories/soundBathIMG2.png";
import soundBathIMG3 from "../assets/accessories/soundBathIMG3.png";
import womenHoldingHandsBK from "../assets/accessories/womenHoldingHandsBK.png";
import motherDaughter from "../assets/accessories/motherDaughter.png";
import foxxyNbooEL from "../assets/accessories/foxxyNbooEL.png";
import jamaicaFlyer25 from "../assets/accessories/jamaicaFlyer25.png";
import baliFlyer25 from "../assets/accessories/baliFlyer25.png";
import cancunFlyer25 from "../assets/accessories/cancunFlyer25.png";
import jTree26 from "../assets/accessories/jTree26.png";
import sAflyer25 from "../assets/accessories/sAflyer25.png";
import liveEvent from "../assets/accessories/liveEvent.png";
import threeGirls from "../assets/accessories/threeGirls.png";
import girlsDrink from "../assets/accessories/girlsDrink.png";
import kayak from "../assets/accessories/paddlePic.png";
import holdingHands from "../assets/accessories/womenChat.png";
import foxxyYoutube from "../assets/accessories/foxxyYoutube.png";
import comingSoon from "../assets/accessories/comingSoon.png";
import onAir from "../assets/accessories/onAir.png";
import stampIcon from "../assets/accessories/submit_Stamp.png";
import envelop from "../assets/accessories/envelop.png";
import brownPaper from "../assets/accessories/brownPaper.png";
import noFlyer from "../assets/accessories/noFlyer25.png";
import alexisYellow from "../assets/accessories/alexisYellow.png";

export const useDataCustomHook = () => {
  const data = {
    name: "AlexisThatFox",
    media: {
      platforms: [
        {
          name: "instagram",
          icons: instagram,
          link: "https://www.instagram.com/alexisthatfox/",
        },
        {
          name: "tiktok",
          icons: tiktok,
          link: "https://www.tiktok.com/@alexisthatfox",
        },
        {
          name: "youtube",
          icons: youtube,
          link: "https://www.youtube.com/channel/UCAABQ1cbiVoPHxE-vHk_KKA",
        },
        {
          name: "snapchat",
          icons: snapchat,
          link: "https://www.snapchat.com/add/alexisthatfox?invite_id=D-u16PF3&locale=en_US&share_id=I82lfK3LTzyp6Nyw_l7Pfg&sid=ed16522cdd704ab7aad80fa9af27b06f",
        },
        {
          name: "threads",
          icons: threads,
          link: "https://www.threads.net/@alexisthatfox/post/DC-sg2Rvs2r",
        },
        {
          name: "facebook",
          icons: facebook,
          link: "https://www.facebook.com/Alexisthatfox",
        },
      ],
    },
    header: {
      pages: [
        { label: "Home", path: "/" },
        { label: "Meet Alexis", path: "meet-me" },
        { label: "Sensual Dance", path: "sensual-dance" },
        { label: "Cacao Healer", path: "cacao-healer" },
        { label: "Sound Baths", path: "sound-bath" },
        { label: "Retreats", path: "retreats" },
        { label: "Events", path: "events" },
        { label: "Social Club", path: "social-club" },
        { label: "Podcast/ Vlog", path: "podcast" },
        { label: "Shop", path: "https://www.foxappeal.com" },
        { label: "Contact", path: "contact" },
      ],
    },
    home: {
      jumbotron: {
        foxyImg: foxy,
        header: "HEY FOXY THANG!",
        subHeader:
          "HOST OF HEY FOXY TANG! PODCAST, FEMININE EMBODIMENT FACILITATOR, CACAO & SOUND BATH HEALER, RETREAT HOST, CONTENT CREATOR, INSPIRATIONAL WRITER AND SPEAKER",
        bttnText: "Read More...",
        description: [
          `A little bit of madness is OK...in fact, it’s what makes you unstoppable! I’ve turned my own chaos and trauma into fierce strength, and now I’m here to help you do the same`,

          `It’s time to own your power, embrace your foxy energy, and remember...you are never alone in this journey.`,

          `Together, we rise, we heal, and we slay. Let’s unlock your inner goddess and unleash the unstoppable, unapologetic force you were always meant to be.`,

          `It’s your time to shine, you foxy thang!`,
        ],
      },
      brand: {
        header: "Brands I've worked with",
        accessory: arrow,
        images: [
          gap,
          cerebral,
          champs,
          foria,
          fruitByTheFoot,
          lelo,
          pantene,
          summers,
          tula,
          walmart,
          WomenBest,
          Skylar,
        ].map((image, index) => ({
          id: index,
          image,
        })),
      },
    },
    meetAlexis: {
      header: "Meet Alexis",
      foxyImg: alexisYellow,
      about: [
        `Hey Foxy thing! I’m Alexis Ramirez Jackson, a true fox of all trades. Born and raised in the heart of New York City, I’m a proud Latina embodying a whirlwind of passion, power, and resilience. From facilitating retreats, feminine embodiment movement
        classes, Sound Baths and cacao ceremonies, to mentoring women and creating content for over 5 million followers, a
        speaker, writer, dancer, mental health advocate, fashion designer, and, most importantly, a mother. Like I said—this fox
        does it all.`,

        `But behind all these titles lies a deeper story, one of survival and transformation. I’ve faced and overcome battles with sexual, physical, and mental abuse. Yet, I chose not to let those horrors define me. Instead of reliving the past, I took the
        pen, turned the page, and began writing my new chapter. And honey, trust me—this fox is still writing.`,

        ` My journey through pain and healing has shaped my mission: to show women that they are never alone. Your story matters. I’m here to help you find the courage to speak your truth, reclaim your divine sexiness, and reignite your confidence to love yourself unapologetically. Remember, together we’ll rise, heal, and step into our full, powerful, foxy selves.`,
      ],
      subHeader: "Work with Alexis",
      services: {
        withDesc: [
          {
            primary: "AWAKEN THE GODDESS MOVEMENT CLASS",
            // secondary: "MOVEMENT CLASS",
            description: "",
            link: "/contact",
            state: "Sensual Dance",
          },
          {
            primary: "CACAO CIRCLE & SOUND BATHS",
            secondary: "",
            description: "",
            link: "/contact",
            state: "Cacao Circles",
          },
        ],
        withoutDesc: [
          {
            primary: "FOXES UNPLUG",
            description:
              "Alexis hosts women's retreats. She is also available to facilitate at your next retreat!. Click below to join us on one of our retreats or see how Alexis can support your event.",
            link: "/contact",
            state: "Retreats/Events",
          },
          {
            primary: "Content Creator",
            secondary: "",
            description:
              "Interested in hiring me for speaking, engagements, partnerships or other business inquires",
            link: "/contact",
            state: "Partnerships",
          },
        ],
      },
      exploreService:
        "Explore individual or group sessions with Alexis from Cacao Circles to sensual movement class. Each session is designed with your highest intentions at the center.",
      media: {
        mediaHeader: "Stay in touch",
        accessory: lipPrint,
      },
    },
    sensualDance: {
      header: "Awaken the Goddess",
      foxyImg: SensualDanceWorkshop,
      accessory: glitter,
      description: [
        `Through the sacred art of sensual dance, Awaken the Goddess invites you to rediscover and embody your divine feminine essence. With a focus on many types of music, especially the soul stirring rhythms of Bachata. We create a natural and playful space where the heart, body, mind, and soul find balance and flow. This is more than just movement; it’s a journey into your sensual power, allowing you to reconnect with yourself in the most sublime and empowering way.`,

        `Sensual dance, infused with devotional states and uplifting emotions, becomes a potent tool for awakening the goddess within.`,

        `Conscience sensual movement offers profound harmonization on many levels:`,
      ],
      benefits: [
        "Strengthens the body: Cultivating vitality and health while embracing your feminine power.",
        "Removes blockages and inhibitions: Let go of what no longer serves you, releasing yourself from emotional and energetic chains.",
        "Opens the heart and heals emotionally: Step into your confidence, vulnerability, and emotional freedom, transforming your inner world.",
        "Reclaims your sensuality: Embrace your body, your beauty, and your natural sexy. Own it, all of it—the goddess within is waiting to be revealed.",
        "And, it’s pure joy! Dance your way into bliss. Sensual movement lifts the spirit and brings out the best in you, leaving you elevated and empowered.",
      ],
      workshopDescription: `During this workshop you will feel connected to your mind, body, and spirit to experience the beauty that is divine self love.               `,
      workshopdescription2: `This workshop will ...`,
      workshopBenefits: [
        "Improve your self confidence and dignity",
        "Awaken your erotic charisma and magnetic power",
        "Cherish and love yourself through dance",
        "Remove tensions, and through playful movements strengthen, regenerate and naturally heal your body",
        "Discover how dance will liberate you and improve your sexuality",
        "Admiring and transfiguring other women as a tool to heal the bond to the feminine nature",
        "Supportive sisterhood, embrace and embraced by the feminine",
        "Rediscover the goddess within you!",
      ],
      subText: `You also have the option to include Cacao with this service. Why add cacao? Cacao is a heart opening medicine that invites us to love ourselves, provides energy, focus and healing. It will be intimate than most of us have ever known. That’s why it’s so powerful to combine dance and cacao. With this combination you’ll be ready to meet the goddess you are and connect with her on a deeper level.`,
      subImg: coffeeBeans,
      subHeader: `Elevate your next event and include a “Awaken the Goddess” movement class `,
      bttnText: "Book Workshop",
      bttnLink: "ALEXISTHATFOX@GMAIL.COM",
    },
    cacaoCircle: {
      healer: {
        header: "Cacoa Healer",
        img: cacoaHealer,
        accessory: vines,
        description: [
          ` When we speak of Cacao, we often celebrate her ability to open the heart...but what does that truly mean? How can this ancient plant medicine from the Amazon transform us on a spiritual and emotional level? The answer lies in cacao’s power to guide us into deeper communion with ourselves, inviting healing in the most nurturing, transformative way.`,

          `When our hearts are wounded, they naturally seek comfort. Through soft blankets, familiar warmth, or a loved one’s embrace. But what if a single cup of cacao could offer all of that, and more? Cacao invites us to love ourselves on a profound level, one that many of us have yet to fully explore. This is where her power resides. The sacred time and space we create around cacao ceremonies allow us to journey through our emotions with compassion and tenderness.`,

          `Known as the spirit of Mother or Mama Cacao, she holds a deep connection to Pachamama, Mother Earth herself. These nurturing, grounding energy soften our defenses, inviting us to rest in her compassion, and embrace in the presence of mother Cacao, we allow ourselves to be truly seen, without judgment or fear.`,

          // `This space of sacred witnessing is deeply transformational.`,

          `Cacao creates a safe, loving container for the parts of ourselves we’ve hidden, labeled as “too much, ” or suppressed out of fear or shame. It brings these feelings to the surface, offering us the opportunity to release what no longer serves us. As we offer our grief, guilt, and unspoken pain to Mother Earth, we begin to understand that this act of release has purpose. In doing so, we invite in acceptance and forgiveness—the true healers of the heart—and open the  door to transformation.`,

          `Cacao is not just a plant, but a ceremonial medicine. When approached with reverence, she gently guides us to the places within that need our attention, showing us where healing must begin. How deep we go on this journey is up to us, but know that the spirit of Cacao will always hold us in her tender embrace, gently encouraging us to explore, feel, and heal at our own pace.`,
        ],
      },
      circle: {
        header: "The Cacoa Circle",
        img: cacaoCircle,
        description: `Cacao Ceremony with me is a next level surrender into the depths of your heart. We will journey with the medicine of cacao and go on a powerful personalized journey into your inner world. Here, we will meet your Highest Self and Inner Child, and we will allow our combined intuitions to guide us where we need to go to unlock you into a deeper connection with yourself. These sessions are super powerful for helping you to see something which has been evading your awareness, or to help you have a reconciliation and acceptance with yourself and others close to you, or to really connect you back to a deep remembering of love being the center and origins of all things. These sessions are at least 2 hours long and sometimes do go over, depending on where the journey takes us.`,
      },
      brew: {
        header: "What is in the cocoa brew",
        img: cocaoBrew,
        description: `Our Ceremonial Cacao is made with Grade Cacao, Water, Sweetener and love. The vegan, dairy free, gluten free. If you have an allergies to chili, nuts, vanilla or anything please let me know at the time of booking.`,
      },
      subHeader:
        "ELEVATE YOUR NEXT EVENT OR RETREAT AND INCLUDE A CACAO CIRCLE",
      btnText: "BOOK CACAO CIRCLE",
      btnTextLink: "/contact",
      state: "Cacao Circles",
    },
    soundBath: {
      header: "Sound Bath",
      image: soundBathIMG,
      accessory: glitter,
      description: `A sound bath is a meditative experience where you’re immersed in the therapeutic sounds of instruments like crystal bowls, gongs, tuning forks, and so much more. These instruments create vibrations and frequencies that wash over you, helping to guide your body and mind into a deep state of relaxation and healing. Unlike traditional meditation, where silence or a guided voice is key, a sound bath uses the power of sound to connect you with deeper levels of calm.`,
      impacts: {
        impactHeader: "How a Sound Bath Impacts and Heals You",
        impactDescription: `Sound baths don’t just create a peaceful environment. They also work on a deeper, energetic level to promote healing and balance within your body.`,
        impactSubHeader: `HERE’S HOW:`,
        soundBathBenefits: [
          {
            heading: "RELIEVES STRESS AND TENSION",
            content:
              "The soothing tones help slow down brainwave activity, inducing a meditative state where the body can release stress, tension, and anxiety. This can lead to reduced levels of cortisol (the stress hormone) and an overall sense of calm.",
          },
          {
            heading: "RESETS YOUR NERVOUS SYSTEM",
            content:
              "Sound frequencies help to activate the parasympathetic nervous system, which is responsible for rest, digestion, and recovery. This makes sound baths a powerful tool for calming your body’s fight or flight response and encouraging healing.",
          },
          {
            heading: "CLEARS EMOTIONAL BLOCKAGES",
            content:
              "Many people experience emotional releases during a sound bath, allowing them to let go of feelings of overwhelm, sadness, or frustration. The sound waves work like a massage for your mind and heart, creating space for emotional balance and clarity.",
          },
          {
            heading: "BOOSTS CREATIVITY AND MENTAL CLARITY",
            content:
              "As the mind relaxes, your brain enters a state of flow, where creativity and focus can flourish. Whether you’re looking to solve a problem, make a decision, or connect with your inner self, a sound bath can help clear mental fog and create a fresh perspective.",
          },
          {
            heading: "PROMOTES PHYSICAL HEALING",
            content:
              "The frequencies used in a sound bath stimulate the cells in your body, encouraging physical healing at a cellular level. The vibrations help reduce inflammation, promote better circulation, and can even aid in pain relief.",
          },
        ],
      },
      soundBathsImages: [soundBathIMG1, soundBathIMG2, soundBathIMG3],
      soundBathsSessions: [
        {
          type: "Private Sound Bath",
          pricing: [
            `starting at $99 for 1-3 people`,
            `An additional $33/Person for 4-8 people`,
          ],
        },
        {
          type: "Private Party/Events",
          pricing: ["starting at 250+"],
        },
      ],
      findUs:
        "You can also find Sound Bath online on Tik Tok & The Foxy Social Club",

      subscribe: [
        "Subscribe to my Tik Tok to recieve a sound bath",
        "or",
        "Join the foxy social club to receive soundbaths and many more perks",
      ],
      btnText: `Book Sound Bath`,
      btnTextLink: "/contact",
      state: "SoundBath",
    },
    retreats: {
      jumbotron: {
        icon: foxyLogo,
        accessory: {
          icon: InstaIcon,
          link: "https://www.instagram.com/alexisthatfox/",
          linkText: "Foxesunplug",
        },
        retreatsHeader: "Foxes Unplug",
        videoSrc: videoFoxy,
        subHeader: "UNPLUG. RESTORE, OVERCOME, LOVE & LIVE TU VIDA",
        retreatIntroHeader: "EVER DREAMED OF TRAVELING BUT...",
        description: [
          `Felt afraid to go solo or maybe you’ve made plans with your friends, only for them to fall through again? Trust me, I’ve been there! That’s why I created Foxes Unplug...NOT just a retreat, NOT just a girl’s trip, but a life changing experience and sisterhood that will leave you feeling empowered, inspired, and so much more.`,
          `Foxes Unplug is all about bringing together a community of amazing people a.k.a “Foxes”. Who are ready to laugh, cry, heal, party, dance, and conquer their fears together. It’s aplace where you’ll do more than just travel; you’ll form deep, lasting connections with yourself and your new sisters. We’ll create unforgettable memories, share beautiful experiences, and come back home feeling like our true, unapologetic selves.`,
          `This is about stepping into your power, pushing your boundaries, and living fully. So, are you ready to join the #FoxGang and make memories that will last a lifetime?`,
        ],
      },

      retreat: {
        header: "Retreat VS Girls Trips",
        groupRetreats: {
          wellness: {
            img: womenHoldingHandsBK,
            header: "Wellness Retreats",
            subHeader: "Where self love transformation meets adventure",
            description: [
              `This isn’t just a retreat, it is your first step into the next chapter of you. We’re creating a space where wellness meets adventure, and where your journey toward self love begins. It’s more than just a getaway; it’s a sacred pause where you can focus on yourself in ways you’ve never done before.`,
              `Imagine waking up each day to a new adventure, while also diving deep into your own heart. This retreat is all about reconnecting with your true self and learning to love yourself fully, while pushing past old limits. We’re blending the power of inner work with the thrill of exploration,so you’re not just sitting around meditating. You’re actively living, healing, and growing in the most exhilarating way possible.`,

              `This is your chance to put you first. To take that bold leap into self care, to let go of what’s been holding you back, and to start nurturing yourself on every level—mind, body, and soul. We’re here to guide you as you create new habits, release old patterns, and rediscover the joy of being fully alive. All while surrounded by like minded women who are ready to grow, laugh, and rise with you.`,

              `Let’s be real! Healing doesn’t have to be boring. It can be fun, exciting, and filled with new experiences. This retreat is your playground for growth and self discovery, where you’ll find yourself exploring not just the beauty of the world around you but the beauty within. It’s about transformation, yes, but also about celebrating every step of that journey.`,

              `So if you’re ready to say “yes” to yourself, to embrace your power, and to take that first step toward a life of more love, more adventure, and more you—this retreat is for you.`,
            ],
          },
          healing: {
            img: healing,
            header: "Healing Retreats",
            subHeader: "A journey into deep tranformation",
            description: [
              `At our Healing Retreats, we’re not just talking about surface level relaxation, we’re diving deep into the real work of healing and transformation. This is your time to focus entirely on you, to peel back the layers and reconnect with your most authentic self. We’ll be creating new habits, trying practices you’ve never experienced before, and tapping into the kind of healing that reshapes your life from the inside out.`,

              `This retreat is a sacred space where you’ll learn to shed old patterns, release what’s been holding you back, and step into your power with grace and confidence. We’re here to create lasting change, one intentional step at a time, all while having fun and embracing the joy in the process! Think of it as the perfect blend of soul deep work, laughter, and genuine connection.`,

              `Expect to break free of routines, push your boundaries, and open yourself up to all the possibilities you never even imagined. This retreat isn’t about who you’ve been; it’s about stepping into who you’re becoming. And trust me, you’ll leave feeling more connected, empowered, and ready to take on life with fresh energy.`,
            ],
          },
          girlsTrip: {
            img: grlTrip,
            header: "Girls Trip",
            subHeader: "The ultimate Girls Trip",
            description: [
              `It’s time to shake off the ordinary and jump into something extraordinary! This isn’t just any getaway; it’s a full on adventure that’s about LIVING life to the fullest. Picture this: you, surrounded by an amazing tribe of fierce women, trying new things, making memories, and rediscovering the real you.`,
              `This trip is all about stepping out of your day to day routine and into a world of excitement, peace, fun, and new experiences. No more same old, same old. It’s time to stop being boring, pack your bags, and come live it up with us! We’re creating an experience where you can be unapologetically YOU! Laugh, dance, explore, and just be without a care in the world.`,
              `New friendships? Check. Adventures that make you feel alive? Double check. A safe space to reconnect with yourself while having the best time of your life? Oh, you better believe it. You’ll leave this trip with more than just pictures... You’ll leave with a whole new energy, ready to take on life in a way you’ve never done before.`,
              `It’s time to stop watching from the sidelines and start living! Trust me, you don’t want to miss out on this. Say goodbye to the same old routines, and come join us for a trip where the fun never stops and the vibe is always on point.
    `,
              `Hakuna Matata, Foxes your next adventure is waiting!`,
            ],
          },
          motherDaughter: {
            img: motherDaughter,
            header: "Mother Daughter Getaway",
            subHeader: "Reconnect, Reignite, and Cherish the Bond",
            description: [
              `In the whirlwind of life, we often forget to pause and spend quality time with the people we love the most, especially our mothers or daughters. Whether your child is younger, your mom is older, or your connection simply needs a bit of nurturing, this trip is about taking that time back. Our Mother Daughter Getaways are designed for all ages and stages, whether you’re a daughter wanting to reconnect with your mom, or a mother wanting to create beautiful new memories with your child. And if you don’t have a mom, no worries...bring the motherly figure who has been a source of love and guidance in your life`,

              `This is more than just a vacation. It’s a sacred opportunity to bond, to share experiences, and to remind each other of the love that may have gotten buried beneath the busyness of life. We’re here to create moments of adventure, joy, and heartfelt connection because those moments are the ones we carry with us forever.`,

              `Together, you’ll laugh, explore, and step away from the distractions of everyday life. You’ll rediscover the magic of your relationship, and most importantly, you’ll leave with a stronger, deeper connection and a heart full of memories. Whether you’re looking to reignite that bond or just make time for each other, this trip is the perfect way to celebrate the beauty of your relationship.`,
              `It’s time to reconnect with that special person in your life. Let’s create an adventure you’ll never forget.`,
              `Daughters can be as young as 15 and Mother no age limit`,
            ],
          },
        },
        couplesRetreat: {
          couples: {
            img: foxxyNbooEL,
            img2: yourHosts,
            tx: "yOUR HOSTs",
            header: "FOXES UNPLUG ALSO OFFERS COUPLES RETREATS",
            description: [
              `All Couples Welcome! This is not your average couples retreat... Sure, we’ll be doing the important work rekindling that lost spark, healing old wounds, and learning how to truly communicate from the heart. But guess what? It’s not all deep talks and “kumbaya.” We believe that reconnecting should also be fun!. That’s why we’ll be exploring, adventuring, and fully experiencing the beauty of where we are, right in the moment.`,
              `Whether your relationship needs some TLC, or things are already amazing and you just want to reconnect on a deeper level, this retreat is for you. We’re creating a space where you and your partner can come with an open mind, set new intentions, and truly enjoy each other...no matter where you’re at in your journey together.`,
              `So, if you’re ready to reignite the flame, recommit, and remember how to have fun again, come join us! And if your relationship is already in a great place, come anyway. This experience is all about deepening what’s already working. Hosted by Crissa Jackson and Alexis Jackson, we promise you’ll leave feeling more connected, more in love, and more aligned with one another.
    
    `,
              `Bring an open heart and a sense of adventure, and we’ll handle the rest!`,
            ],
          },
        },
        upcoming: {
          header: "UPCOMING RETREATS",
          retreats: [
            {
              img: jamaicaFlyer25,
              link: "https://foxesunplug.wetravel.com/trips/girls-trip-to-jamaica-foxes-unplug-96808412",
            },
            {
              img: baliFlyer25,
              link: "https://foxesunplug.wetravel.com/trips/soulventure-to-bali-foxes-unplug-19509968",
            },
            {
              img: cancunFlyer25,
              link: "https://docs.google.com/forms/d/e/1FAIpQLSdnQnzB2GTVGOoMcQuIBPfXztRbxBU5zeclRawfLAGXlD1w7w/viewform",
            },
            {
              img: jTree26,
              link: "https://docs.google.com/forms/d/1_5WPLhFEOAolVmDUxYSc4aK5uXtpsmgAj1eHdKclmOk/edit",
            },
            {
              img: sAflyer25,
              link: "https://docs.google.com/forms/d/e/1FAIpQLSdcaVnIE9A2pehUddSo4UtiUHWrfM2M1QNZp_2BtA4hBp_QDg/viewform",
            },
            {
              img: noFlyer,
              link: "https://foxesunplug.wetravel.com/trips/weekender-to-new-orleans-foxes-unplug-32360608",
            },
          ],
        },
      },
      subText: "Yes! we offer payment plans!!",
      memories: {
        header: "FOXGANG MEMORIES",
        img: pastRetreat,
        handIcon: pointer,
        pinIcon: pin,
        link: {
          btnText: "SEE MORE MEMORIES",
          path: "",
        },
      },
      sponsor: {
        header: "Want to be a sponsor??",
        description:
          "You can be a sponsor in many different ways, by gifting or by donating a trip to those who cannot afford it. If you would like more information email me at",
        email: "Foxesunplug@gmail.com",
        btnText: "BECOME A SPONSOR",
      },
    },
    events: {
      header: "Events Happening near you",
      glitter: glitter,
      description: `Whatever you're going through, you don't have to go through it alone. Alexis that Fox aims to create an inclusive community of women known as “FOXGANG” who are all on a journey just like you.`,
      btnText: "Book Event",
      btnTextLink:
        "https://foxesunplug.wetravel.com/user/manage_trips/96808412",
      accessory: soldOut,
      img: liveEvent,
    },
    SocialClub: {
      accessory: {
        icon: InstaIcon,
        link: "https://www.instagram.com/alexisthatfox/",
        linkText: "thefoxysocialclub",
      },
      logo: foxyClubLogo,
      header: "Welcome to the Foxy Social Club: Where Foxes Unite!",
      description: [
        `Let’s be real! Life is better when you’ve got a fierce, fabulous community around you. That’s exactly what the Foxy Social Club is all about! This isn’t just a social club; it’s a whole lifestyle for bold, adventurous women who are ready to live life to the fullest. We’re Foxes aka #FoxGang and we’re all about building connections, having fun, and making memories, both online and in person`,

        `Whether you’re meeting up in the digital space or attending our in person events, this is your chance to break free from the everyday routine. It’s time to get out of the house, meet new people, and actually do something exciting! With the Foxy Social Club, you’re joining a vibrant community where you can laugh, chat, and share experiences with like minded women who are ready to make life more fun and fulfilling.`,
        `It’s not just a club, it’s a way of life. We’re here to empower each other, explore new hobbies, and create lasting friendships. Think of it as your go to space for adventure, connection, and`,
      ],
      clubImages: [girlsDrink, holdingHands, threeGirls, kayak],
      foxyMembership: {
        backgroundImage: foxyClubLogo,
        icon: pointer,
        membershipHeader: "FOXGANG Memberships",
        memberships: [
          {
            title: "Foxy Insider",
            type: " Entry level membership",
            description: `As a foxy insider, you get access to exclusive perks that bring you closer to our community, lifestyle, and all the fabulous things foxes love. Here’s what you’ll enjoy:`,
            benefits: [
              "Exclusive access to the foxy social club private online community, connect with other foxes like you!",
              "First look at all the new fox appeal clothing before anyone else.",
              "Early access to fox appeal sales and exclusive discounts just for you.",
              "Monthly journal prompts to guide your personal growth and keep you in tune with your inner fox.",
              "Early info on foxes unplug retreats and trips, so you can plan your next adventure before the rest.",
              "Access to the broadcast channel for insider news and updates.",
              "Book club access, discuss and grow with like minded foxes.",
              "Discounted tickets for any in person events because you should be part of every gathering!",
            ],
            note: "Step into the foxy insider circle and start living the foxy life! Bold, empowered, and in the know.",
            pricing: {
              note: "Normally $10.99 but today",
              price: "$4.99",
              btnText: "FoxGang",
              btnTextLink: "",
              btnMessage: "Click here to be a part of the gang",
            },
          },
          {
            title: "Foxy Elite",
            type: "Premium membership",
            description:
              "READY TO LEVEL UP? The foxy elite membership is for those who want it all! The ultimate VIP experience within the foxy social club. You’ll get everything from the foxy insider membership, plus even more exclusive perks designed to elevate your lifestyle and keep you thriving. Here’s what you can look forward to as a foxy elite:",
            benefits: [
              "Everything in the foxy insider package because you deserve all the perks.",
              "VIP access to all fox appeal products and shop the latest drops 24 hours before anyone else.",
              "Fox it up workout programs: 90 day home and gym workouts to get you moving and feeling fierce.",
              "Exclusive discounts on foxes unplug, travel and explore the world with your foxes and save while doing it.",
              "Workbook challenges to help you stay on top of your personal growth and goals.",
              "Monthly vent sesh...your space to let loose, connect, and share what’s on your mind with your fellow foxes.",
              "Monthly meet ups with foxes in your town. Experience discounted prices on fun like wine tasting, pottery classes, and so much more!",
            ],
            note: `The foxy elite experience is about you—your growth, your fitness, and your connection to an empowering community. Take your foxy life to the next level with the best of everything.`,
            pricing: {
              note: "Normally $15.99 but today",
              price: "$9.99",
              btnText: "FoxGang",
              btnTextLink: "",
              btnMessage: "Click here to be a part of the gang",
            },
          },
        ],
      },
    },
    podcastVlog: {
      vlog: {
        header: "Vlog",
        img: shopImage1,
        text: "WELCOME TO MY VLOG JOURNAL. HERE I WILL SHARE PARTS OF MY LIFE, FROM MY DAILY ROUTINES TO MY INNER THOUGHTS.",
        link: {
          img: foxxyYoutube,
          path: "https://www.youtube.com/channel/UCAABQ1cbiVoPHxE-vHk_KKA",
        },
      },
      podcast: {
        header: "Hey Foxy Thang! Podcast",
        soon: {
          img: comingSoon,
        },
        air: {
          img: onAir,
        },
      },
    },
    shop: {
      img: shopImage5,
      header: "Coming Soon...",
      subHeader: "Spring 2024",
    },
    contact: {
      accessory: envelop,
      stamp: stampIcon,
      brownPaper: brownPaper,
      header: "Lets Connect",
      initialState: {
        name: "",
        email: "",
        interest: "",
        message: "",
      },
      messageSentSuccess: "Message Sent Successfully!",
      messageSentFailed: "Something Went Wrong!.",
      forms: [
        {
          label: "Name",
          name: "name",
          formType: "input",
          type: "text",
          placeholder: "",
          required: true,
          multiline: false,
          rows: 0,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          formType: "input",
          placeholder: "",
          required: true,
          multiline: false,
          rows: 0,
        },
        {
          label: "Interested In",
          name: "interest",
          formType: "select",
          placeholder: "",
          required: true,
          options: [
            "Sensual Dance",
            "Cacao Circles",
            "Retreats/Events",
            "Partnerships",
            "Speaking Engagements",
            "Social Club",
            "SoundBath",
            "Something Else",
          ],
        },
        {
          label: "Message",
          name: "message",
          type: "text",
          formType: "input",
          placeholder: "",
          required: true,
          multiline: true,
          rows: 3,
          cursor: "pointer",
        },
      ],
      btnText: "Submit",
    },
  };
  return data;
};
