// import { useTranslation } from "react-i18next";

import gap from '../assets/LogoPartnersBRANDS/adoreME.png';
import cerebral from '../assets/LogoPartnersBRANDS/cerebral.png';
import champs from '../assets/LogoPartnersBRANDS/Champs.png';
import foria from '../assets/LogoPartnersBRANDS/Foria.png';
import fruitByTheFoot from '../assets/LogoPartnersBRANDS/fruitbythefoot.png';
import lelo from '../assets/LogoPartnersBRANDS/Lelo.png';
import pantene from '../assets/LogoPartnersBRANDS/Pantene.png';
import summers from '../assets/LogoPartnersBRANDS/summers.jpg';
import tula from '../assets/LogoPartnersBRANDS/Tula.png';
import walmart from '../assets/LogoPartnersBRANDS/walmart.png';
import WomenBest from '../assets/photosAlexis1/womensbest.png'
import Skylar from '../assets/photosAlexis1/SkylarLogo.jpg'
import foxy from '../assets/photosAlexis2/foxy.jpg';
import meetFoxy from '../assets/photosAlexis1/meetFoxxy.jpg';
import SensualDanceWorkshop from '../assets/photosAlexis1/Sensual-dance.jpg';
import coffeeBeans from '../assets/photosAlexis1/coffee.jpeg';
import cacoaHealer from '../assets/photosAlexis1/cacaoHealer.png';
import cacaoCircle from '../assets/photosAlexis1/cacaoCircle.png';
import cocaoBrew from '../assets/photosAlexis1/cacaoBrew.png';
import grlTrip from '../assets/photosAlexis2/retreat_girls_trips.jpg';
import healing from '../assets/photosAlexis2/retreat_healing.jpg';
import coupleRetreat from '../assets/photosAlexis2/coupleRetreat.png';
import foxie from '../assets/photosAlexis2/foxie1.png';
import Retreat1 from '../assets/photosAlexis1/Healing_Retreat.png';
import santorini from '../assets/photosAlexis1/santorini.png';
import pastRetreat from '../assets/photosAlexis1/pastRetreat.jpg';
import pin from '../assets/photosAlexis1/pin.png';
import pointer from '../assets/photosAlexis1/clickPointer.png';
import videoFoxy from '../assets/photosAlexis1/retreatVideo.mp4'
import shopImage1 from '../assets/foxxyIMGSHOP/podcastIMG.png';
import shopImage2 from '../assets/foxxyIMGSHOP/podcastIMG2.png';
import shopImage3 from '../assets/foxxyIMGSHOP/YOUTUBEfox.png';
import shopImage4 from '../assets/foxxyIMGSHOP/comingSoon.png';
import shopImage5 from '../assets/photosAlexis2/image_6483441 (7).jpg';
import snowyFox from '../assets/photosAlexis1/fox.png'
import colombiaFlyer from '../assets/photosAlexis2/colombiaFlyer.jpg';
import yourHosts from '../assets/photosAlexis2/yourHosts.png';



export const useDataCustomHook = () => {
    const data = {
        name: 'AlexisThatFox',
        header: {
            pages:[
                { label: 'Home', path: '/' },
                { label: 'Meet Alexis', path: 'meet-me' },
                { label: 'Sensual Dance', path: 'sensual-dance' },
                { label: 'Cacao Circles', path: 'cacao-circles' },
                { label: 'Retreats Event', path: 'retreats-event' },
                { label: 'Vlog/Podcast', path: 'podcast' },
                { label: 'Shop', path: 'https://www.foxappeal.com' },
                { label: 'Contact', path: 'contact' }
              ],
        },
        home:{
            jumbotron: {
                foxyImg: foxy,
                header: 'HEY FOXY THANG!',
                subHeader: 'HOST OF FOXY PODCAST, FEMININE EMODIMENT FACILTATOR, CACAO HEALER, CONTENT CREATOR, INSPIRATIONAL WRITER AND SPEAKER',
                bttnText: 'Read More...',
                description: `I'm on a mission to let you know that a little bif of MADNESS is ok! I turned my TRAUMA into STRENGTH, and you can too! I help women speak their truth, gain the confidence to love and find themselves again. And let's not forget "YOU'RE NOT ALONE!"`
            },
            brand: {
                header: "Brands I've worked with",
                images:[gap,cerebral,champs,foria,fruitByTheFoot,lelo,pantene,summers,tula,walmart, WomenBest, Skylar].map((image, index) => ({
                    id: index,
                    image
                }))
            },
        },
        meetAlexis: {
            header: 'meet Alexis',
            foxyImg: meetFoxy,
            about: [
                `My name is Alexis Ramirez Jackson and I'm a fox of all trades. I'm a Latina, born and raised from New York City. I'm a feminine embodiment movement and cacao facilitator that specializes in trauma, content creator with over 5 million followers, mentor, mother, speaker, writer, creator, dancer, mental health advocate, and fashion designer. Like I said a fox of all trades lol.` ,
                `Not many know my story but here it is in a nut shell.l've survived many battles from sexual, physical and mental abuse. I chose not to relive the chapter of my horror but to turn the page and write a new one. And FOX! I'm still writing.`,
                ` What I went through and all the continues healing has led me on my mission to let you know that you aren't alone, and your story does matter. I promise to help woman find the courage to speak their truth, reclaim their sexiness and regain their confidence to love themselves.`
            ],
            subHeader: 'Work with Alexis',
            services: {
                withDesc : [
                  {
                    primary: 'AWAKEN THE GODDESS',
                    secondary: 'MOVEMENT CLASS',
                    description: ''
                  },
                  {
                    primary: 'CACAO CIRCLE',
                    secondary: '',
                    description: ''
                  }
                ],
               withoutDesc: [ {
                  primary: 'FOXES UNPLUG',
                  secondary: 'RETREATS',
                  description: "Alexis hosts women's retreats. She is also available to facilitate at your next retreat!. Click below to join us on one of our retreats or see how Alexis can support your event."
                },
                {
                  primary: 'Content Creator',
                  secondary: '',
                  description: 'Interested in hiring me for speaking, engagements, partnerships or other business inquires'
                }
                ]
            },
            exploreService: 'EXPLORE INDIVIDUAL OR GROUP SESSIONS WITH ALEXIS FROM CACAO CIRCLES TO SENSUAL MOVEMENT CLASSES. EACH SESSION IS DESIGNED WITH YOUR HIGHEST INTENIONS AT THE CENTER.'
        },
        sensualDance:{
            header: "Awaken the goddess",
            foxyImg: SensualDanceWorkshop,
            description: `The Feminine embodiment movement workshops also known as "Awaken the Goddess" are through sensual dance. We focus on may types of music but especially Bachata. It's an amazing way to reconnect to ourselves and our feminine nature, creating in a natural and playful way to balance between heart, body mind and soul. Sensual dance, filled with devotuional states and uplifting emotiuons, becomes an extraordinary tool for rediscovering our femininity in a sublime way. Consicious, sensual movement has a deeply harmonizing effect on many levels:`,
            benefits: [
                "It helps to strengthen the body, to make it fit and healthy",
                "It removes blockages and inhibitions",
                "It helps us to open our hearts, feel more confident and heal emotionally",
                "It helps us to own our sexy, our body, our beauty and own the goddess within",
                "And it is extremely fun! Sensual dance brings the best out of us, and lifts up our moods"
              ],
            workshopDescription: `During this workshop you will feel connected to your mind, body, and spirit to experience the beauty that is divine self love. This workshop will ...`,
            workshopBenefits : [
            "Improve your self-confidence and dignity",
            "Awaken your erotic charisma and magnetic power",
            "Cherish and love yourself through dance",
            "Remove tensions, strengthen your body and find natural healing and regeneration through playful movements",
            "Discover how dance will liberate you and improve your sexuality",
            "Admiring and transfiguring other women as a tool to heal the bond to the feminine nature",
            "Supportive sisterhood-embrace and embraced by the feminine",
            "Re-discover the goddess within you!"
            ],
            subText: `You also have the option to include Cacao with this service. Why add cacao? Cacao is a heart opening medicine that invites us to love ourselves, provides energy, focus and healing. It will be intimate than most of us have ever known. That’s why it’s so powerful to combine dance and cacao. With this combination you’ll be ready to meet the goddess you are and connect with her on a deeper level.`,
            subImg: coffeeBeans,
            subHeader: `Elevate your next event and include a “Awaken the Goddess” movement class `,
            bttnText:"Book Workshop"

        },
        cacaoCircle: {
            healer: {
                header: 'Cacoa healer',
                img: cacoaHealer,
                description: [
                    ` When we speak of cacao, we often reiterate her heart-opening benefits. But what does it really mean? How can this plant from the Amazon transform us on an emotional or spiritual level?`,
                    `When hearts need healing, they look for comfort. Soft blankets, comty clothes, a warm cup, or somebody to curl up with. What it one cup of cacao could provide all this... and more?`,
                    `The truth is cacao invites us to love ourselves on a level deeper and more intimate than most of us have ever known. That's why it's so powerful. The quality of the time and space we're creating around cacao allows us to move through our emotions with tenderness.`,
                    
                    `The spirit of Cacao is referred to as Mother or Mama, and holds deep association with Mother Earth and Pachamama, all of whom are grounding, nurturing energies. To speak this way about her is to soften our edges in her presence. In the all-accepting, compassionate embrace of Mother cacao, we allow ourselves to truly be seen.`,
                    `What this does is transformation.`,
                    `It makes space for the parts of us we've previously hidden. called too much or simply suppressed. It brings to the surface what we're ready to release and creates a beautiful, safe container for us to alchemize our heartache. By offering our grief, guilt, and shame to Mother Earth, we're allowing it to serve a purpose. We're bringing in acceptance and forgiveness which is what truly heals hearts and allows us to move forward.` ,
                    `Cacao is a ceremonial plant medicine. When treated as such, she gently guides us to where we need to look, feel, and heal. How deep she takes us really depends on us.`,
                ]
            },
            circle: {
                header: 'The Cacoa Circle',
                img: cacaoCircle,
                description: `Cacao Ceremony with me is a next level surrender into the depths of your heart. We will journey with the medicine of cacao and go on a powerful personalized journey into your inner world. Here, we will meet your Highest Self and Inner Child, and we will allow our combined intuitions to guide us where we need to go to unlock you into a deeper connection with yourself. These sessions are super powerful for helping you to see something which has been evading your awareness, or to help you have a reconciliation and acceptance with yourself and others close to you, or to really connect you back to a deep remembering of love being the center and origins of all things. These sessions are at least 2 hours long and sometimes do go over, depending on where the journey takes us.`
            },
            brew: {
                header: 'What is in the cocoa brew',
                img: cocaoBrew,
                description: `Cacao Ceremony with me is a next level surrender into the depths of your heart. We will journey with the medicine of cacao and go on a powerful personalized journey into your inner world. Here, we will meet your Highest Self and Inner Child, and we will allow our combined intuitions to guide us where we need to go to unlock you into a deeper connection with yourself. These sessions are super powerful for helping you to see something which has been evading your awareness, or to help you have a reconciliation and acceptance with yourself and others close to you, or to really connect you back to a deep remembering of love being the center and origins of all things. These sessions are at least 2 hours long and sometimes do go over, depending on where the journey takes us.`
            },
            subHeader: 'ELEVATE YOUR NEXT EVENT OR RETREAT AND INCLUDE A CACAO CIRCLE',
            btnText: 'BOOK CACAO CIRCLE'
        },
        retreats: {
            jumbotron: {
                icon: foxie,
                header: 'foxes unplug',
                videoSrc: videoFoxy,
                subHeader: 'UNPLUG. RESTORE, OVERCOME, LOVE & LIVE TU VIDA',
                description: `Wanted to travel but too afraid to do it alone? Or make plans with your friends but it neve goes through?, well, nme too! And therefore, Foxes Unplug was created. Foxes Unplug is NOT only a retreat/girls's trip. It's a community of women aka "Fxes" that will become sisters that'll laug, cry, heal, party, dance, have fun, conquer fears, experience and make memories together. With foxes unplung you'll form a lasting connection with yourself and your new sisters #foxegang`
            },
            retreat: {
                header: 'retreat or girls trips',
                healing: {
                    img: healing,
                    header: 'healing retreats',
                    description: `Our retreats are a combination of self-love, wellness, healing and adventure. It's a safe place for you to let your guard down, let go og trauma, prioritize healing and growth while focusing on your well-being physically, psychologically, and spiritually. The focus is inner transformation and meeting foxes just like you OF COURSE!.`
                },
                girlsTrip: {
                    img: grlTrip,
                    header: 'girls trip',
                    description: `Our Girls trip is bringing all you Foxy Foxes together!. This trip is a getaway of adventure, peace, fun, trying and experiencing NEW things, creating new friendships, LIVING LIFE, and BRINGING THAT SEXY BACK!. It's a sage place where you can be unapologetically yourself! and have a good time with no worries. HAKUNA MATATA foxes!.`
                },
                couples: {
                    img: coupleRetreat,
                    img2: yourHosts,
                    tx: 'yOUR HOSTs',
                    header: 'FOXES UNPLUG ALSO OFFERS COUPLES RETREATS',
                    description: `ALL COUPLES ARE WELCOMED!!. This couples retreat is a bit different from your average retreat. Yes! We'll be doiing some work by relighting that lost spark, rekindling your estranged relationship, reconnecting/recommiting with one another, communicating from your heart, healing old wounds and relearning having fun. Bit it isn't all kumbaya! We also take in where we're traveling. We explore and experience where we ar in the moment. So, if you are having problems within your relationship and want to take the first step and work on it... COME! If you don't have any problems within your relationships, you can still....COME! it's all about you and your partners intentions. All we ask of you is for an open mind and enjoy yourselves. This retreat is hosted by Crissa Jackson and Alexis Jackson.`
                },
                upcoming: {
                    header: 'UPCOMING RETREATS',
                    retreats: [
                    {
                      img: Retreat1,
                      link: ''
                    },
                    {
                      img: colombiaFlyer,
                      link: ''
                    },
                    {
                      img: colombiaFlyer,
                      link: ''
                    },
                    {
                      img: santorini,
                      link: ''
                    },
                  ]},
                subText: 'yes we offer payment plans',
            },
            memories:{
                header: 'FOXGANG MEMORIES',
                img: pastRetreat,
                handIcon: pointer,
                pinIcon: pin,
                link: {
                    btnText: 'SEE MORE MEMORIES',
                    path: '',
                },

            },
            sponsor: {
                header: 'Want to be a sponsor',
                description: 'You can be a sponsor in many different ways, by gifting or by donating a trip to those who cannot afford it. If you would like more information email me at',
                email: 'Foxesunplug@gmail.com',
                btnText: 'BECOME A SPONSOR'
            }


        },
        podcastVlog: {
            vlog: {
                header: 'Vlog',
                img: shopImage1,
                text: 'WELCOME TO MY VLOG JOURNAL. HERE I WILL SHARE PARTS OF MY LIFE, FROM MY DAILY ROUTINES TO MY INNER THOUGHTS.',
                link: {
                    img: shopImage3,
                    path: 'https://www.youtube.com/channel/UCAABQ1cbiVoPHxE-vHk_KKA'
                }
            },
            podcast: {
                header: 'Podcast',
                soon: {
                    img: shopImage4
                },
                air: {
                    img: shopImage2
                }
            }
        },
        shop:{
            img: shopImage5,
            header: 'Coming Soon...',
            subHeader: 'Spring 2024'
        },
        contact: {
            img: snowyFox,
            initialState: {
                name: '',
                email: '',
                interest: '',
                message: ''
              },
            forms:[
                {
                    label: 'Name',
                    name: "name",
                    formType: 'input',
                    placeholder: '',
                    required: true,
                    multiline: false,
                    rows: 0
                },
                {
                    label: 'Email',
                    name: 'email',
                    formType: 'input',
                    placeholder: '',
                    required: true,
                    multiline: false,
                    rows: 0
                },
                {
                    label: 'Interested In',
                    name: "interest",
                    formType: 'select',
                    placeholder: '',
                    required: true,
                    options: ['Sensual Dance', 'Cacao Circles', 'Retreats', 'Partnerships', 'Speaking', 'Engagements'],
                },
                {
                    label: 'Message',
                    name: "message",
                    formType: 'input',
                    placeholder: '',
                    required: true,
                    multiline: true,
                    rows: 2
                },
               
                
            ],
            btnText:'Submit'

        }
        // footer: {
        //     subHeader: 'Enjoy eCommerce again.',
        //     addressInfo: [
        //         "Structured Social",
        //         "60 w 23rd st",
        //         "New york, New york",
        //         "10010"
        //     ],
        //     rightsReserved: t('all_rights_reserved'),
        //     contents:[
        //         {
        //             header: t('footer_header_links'),
        //             links:[
        //                 { name: "Case Studies", link: "" },
        //                 { name: "Major Moments", link: "" },
        //                 { name: "Our Services", link: "" },
        //                 { name: "TikTok Catalog", link: "" },
        //                 { name: "Email Library", link: "" },
        //                 { name: "Blueprint Series", link: "" },
        //                 { name: "Glossary", link: "" }
        //               ]
        //         },
        //         {
        //             header: t('footer_header_our_services') ,
        //             links: [
        //                 { name: "CRO", link: "" },
        //                 { name: "Email & SMS", link: "" },
        //                 { name: "Facebook", link: "" },
        //                 { name: "TikTok", link: "" },
        //                 { name: "Google", link: "" },
        //                 { name: "UGC Creative", link: "" }
        //               ]
        //         },
        //         {
        //             header: t('footer_header_our_niches'),
        //             links: [
        //                 { name: "Sports & Outdoors", link: "" },
        //                 { name: "Health & Wellness", link: "" },
        //                 { name: "Pets", link: "" },
        //                 { name: "Food & Beverage", link: "" },
        //                 { name: "Apparel & Accessories", link: "" }
        //               ]
        //         },
        //     ]

        
    }

    return data;
}
