const ideologies = [
    {
        name: "Anarcho-Capitalist",
        description: "You're the type who thinks the free market can solve everything, including who gets to clean the streets. You probably have a 'Taxation is Theft' bumper sticker and a secret desire to privatize the air we breathe. Your ideal society is basically the Wild West, but with more cryptocurrency.",
        score: 0
    },
    {
        name: "Libertarian",
        description: "You want the government out of your life, but you're not quite ready to start your own private police force. You believe in personal freedom, as long as it doesn't involve helping other people. Your favorite pastime is explaining why universal healthcare would be worse than the current system.",
        score: 0
    },
    {
        name: "Centrist",
        description: "The Switzerland of political ideologies. You're so moderate that you can't even decide which side of the bed to sleep on. You believe in compromise, even when it makes no sense. Your political views are like a weather vane in a tornado.",
        score: 0
    },
    {
        name: "Social Democrat",
        description: "You want to save the world, but you're not quite ready to give up your iPhone. You believe in social justice, as long as it doesn't inconvenience you too much. Your ideal society is Sweden, but with better weather and more tacos.",
        score: 0
    },
    {
        name: "Democratic Socialist",
        description: "You're the type who reads Marx for fun and has a 'Tax the Rich' t-shirt. You believe in worker ownership, but you're not quite sure how to explain it to your parents. Your ideal society is a mix between a co-op and a music festival.",
        score: 0
    },
    {
        name: "Anarcho-Communist",
        description: "You're so far left that you've come full circle and are now living in a treehouse. You believe in abolishing all hierarchies, except the hierarchy of who makes the best kombucha. Your ideal society is a commune where everyone shares everything, including their Spotify playlists.",
        score: 0
    },
    {
        name: "Authoritarian Socialist",
        description: "You believe in strong central planning, preferably with you at the center. You think everyone should have equal rights, as long as they agree with you. Your ideal society is a perfectly organized beehive, with you as the queen bee.",
        score: 0
    },
    {
        name: "Technocratic Anarchist",
        description: "You're the type who thinks blockchain can solve world hunger. You believe in abolishing the state and replacing it with smart contracts. Your ideal society is a decentralized autonomous organization that runs on solar power and good vibes.",
        score: 0
    },
    {
        name: "Anarcho-Primitivism",
        description: "You reject civilization and technology, advocating for a return to pre-agricultural, hunter-gatherer societies. You probably think the Unabomber had some good points and your favorite hobby is making fire with sticks.",
        score: 0
    },
    {
        name: "Accelerationism",
        description: "You believe that technological and capitalist development should be drastically sped up to trigger radical social change or collapse. You're basically hitting the gas pedal on society, hoping it either flies or crashes spectacularly.",
        score: 0
    },
    {
        name: "Anarcho-Syndicalism",
        description: "You advocate replacing capitalism with worker-controlled unions and a democratic industrial federation without state authority. You want the workers to run the show, and your ideal world is one big union meeting.",
        score: 0
    },
    {
        name: "Neoreactionary (NRx)",
        description: "You reject democracy and egalitarianism in favor of authoritarian, hierarchical governance structures inspired by pre-Enlightenment monarchies. You're nostalgic for a time you never lived in, probably involving kings and serfs.",
        score: 0
    },
    {
        name: "Posadism",
        description: "You combine Trotskyist communism with beliefs about extraterrestrial contact and nuclear war as catalysts for worldwide revolution. You're waiting for aliens to kickstart the global communist utopia, possibly after a friendly nuclear apocalypse.",
        score: 0
    },
    {
        name: "National Anarchism",
        description: "You combine elements of anarchist decentralization with ethnic separatism and tribalism. It's like anarchy, but only for your specific ethnic group, in your specific walled-off village.",
        score: 0
    },
    {
        name: "Egoist Anarchism",
        description: "You reject all authority, morality, and social constraints in favor of radical individualism based on self-interest. Your motto is 'Me, myself, and I,' and everyone else can fend for themselves.",
        score: 0
    },
    {
        name: "Technocracy",
        description: "You advocate replacing politicians with technical experts and engineers who would manage society according to scientific principles. You believe society would be perfect if only the nerds were in charge.",
        score: 0
    },
    {
        name: "Deep Ecology",
        description: "You view human civilization as fundamentally destructive and advocate for radical population reduction to restore ecological balance. You think humans are a virus and Gaia needs a cure.",
        score: 0
    },
    {
        name: "Libertarian Municipalism",
        description: "You promote a direct-democratic confederation of self-governing communities as an alternative to both capitalism and state socialism. It's all about local power and endless community meetings.",
        score: 0
    },
    {
        name: "Fourth Political Theory",
        description: "You reject liberalism, communism, and fascism in favor of a radical conservatism centered on traditional values and opposition to modernity. You're looking for a political theory that's so old, it's new again.",
        score: 0
    },
    {
        name: "Fully Automated Luxury Communism",
        description: "You propose using automation technology to create a post-scarcity society with universal abundance and the elimination of labor. Robots do all the work, and everyone gets to chill. What's not to like?",
        score: 0
    }
];

const quotes = [
    "Remember: In a truly free market, even your thoughts would be privatized!",
    "Your political views are like a kale smoothie: healthy but hard to swallow.",
    "You're so radical, even your coffee is fair trade and locally sourced!",
    "Your ideology is like a vegan at a barbecue: principled but slightly out of place.",
    "You're the type who would start a revolution, but only if it's properly organized and has good catering."
];

// Index mapping for ideologies for easier reference in scoringRules
// 0: AnCap, 1: Lib, 2: Cen, 3: SocDem, 4: DemSoc, 5: AnCom, 6: AuthSoc, 7: TechAn,
// 8: AnPrim, 9: Accel, 10: AnSyn, 11: NRx, 12: Posad, 13: NatAn, 14: EgoAn,
// 15: Tech, 16: DeepEco, 17: LibMun, 18: 4PT, 19: FALC

const scoringRules = [
  // Q0: Role of government
  {
    0: { 0: 5, 1: 4, 14: 3, 7: 2 },              // Minimal (AnCap, Lib, EgoAn, TechAn)
    1: { 3: 4, 4: 3, 19: 2, 2: 2, 15: 1 },      // Active regulation/social services (SocDem, DemSoc, FALC, Cen, Tech)
    2: { 5: 5, 8: 4, 10: 4, 7: 3, 13: 3, 14: 3, 17: 3, 9:1 }, // Abolished (AnCom, AnPrim, AnSyn, TechAn, NatAn, EgoAn, LibMun, Accel)
    3: { 6: 5, 11: 4, 15: 3, 18: 2 }             // Control all aspects (AuthSoc, NRx, Tech, 4PT)
  },
  // Q1: Wealth redistribution
  {
    0: { 0: 5, 1: 4, 14: 3, 11: 2 },             // Keep what earn (AnCap, Lib, EgoAn, NRx)
    1: { 3: 4, 4: 3, 2: 2, 15:1 },                 // Some redistribution (SocDem, DemSoc, Cen, Tech)
    2: { 5: 5, 4: 2, 6: 4, 19: 4, 10: 3, 12: 2 }, // Complete redistribution (AnCom, DemSoc, AuthSoc, FALC, AnSyn, Posad)
    3: { 5: 3, 8: 4, 16: 3}                      // Wealth abolished (AnCom, AnPrim, DeepEco)
  },
  // Q2: Private property
  {
    0: { 0: 5, 1: 4, 11: 3, 14: 3 },             // Fundamental right (AnCap, Lib, NRx, EgoAn)
    1: { 3: 4, 4: 3, 2: 2 },                   // Regulated (SocDem, DemSoc, Cen)
    2: { 4: 4, 5: 3, 17: 3, 10: 2, 19: 1 },      // Limited to personal (DemSoc, AnCom, LibMun, AnSyn, FALC)
    3: { 5: 5, 10: 4, 6: 4, 19: 3, 8: 2 }       // Collectively owned (AnCom, AnSyn, AuthSoc, FALC, AnPrim)
  },
  // Q3: Free market capitalism
  {
    0: { 0: 5, 1: 4, 14: 2, 9: 2 },              // Best system (AnCap, Lib, EgoAn, Right-Accel)
    1: { 3: 4, 4: 3, 2: 2, 15: 1 },              // Needs regulation (SocDem, DemSoc, Cen, Tech)
    2: { 4: 4, 5: 4, 10: 4, 6: 3, 17: 3, 19: 2, 9: 3 }, // Replaced (DemSoc, AnCom, AnSyn, AuthSoc, LibMun, FALC, Left-Accel)
    3: { 5: 5, 8: 3, 16: 2 }                   // Abolished (inherently exploitative) (AnCom, AnPrim, DeepEco)
  },
  // Q4: Climate change
  {
    0: { 0: 4, 1: 3 },                         // Market-based solutions (AnCap, Lib)
    1: { 3: 4, 4: 3, 15: 3, 2: 2 },             // Government regulation (SocDem, DemSoc, Tech, Cen)
    2: { 5: 4, 8: 4, 10: 3, 16: 5, 19: 2, 9: 3, 12:1 }, // Radical systemic change (AnCom, AnPrim, AnSyn, DeepEco, FALC, Accel, Posad)
    3: { 11: 2, 18: 1 }                          // Hoax (NRx, some 4PT)
  },
  // Q5: Workers' rights
  {
    0: { 0: 3, 1: 2, 11: 2, 14: 1 },             // Negotiate individually
    1: { 3: 3, 4: 2, 2: 2 },                   // Basic protections
    2: { 10: 4, 4: 3, 5: 3, 6: 2, 17: 3, 19: 2 }, // Workers control means of production (AnSyn, DemSoc, AnCom, AuthSoc, LibMun, FALC)
    3: { 19: 4, 5: 2, 8: 2, 7:1 }                // Work should be optional (FALC, AnCom, AnPrim, TechAn)
  },
  // Q6: Healthcare
  {
    0: { 0: 3, 1: 3, 14: 2 },                   // Private minimal gov
    1: { 3: 3, 2: 2, 15:1 },                     // Public with private options
    2: { 4: 3, 3:2, 6: 2, 19: 2 },               // Universal public
    3: { 5: 3, 10: 2, 17: 2, 8:1 }               // Free and community-run
  },
  // Q7: Education
  {
    0: { 0: 3, 1: 2, 11:1 },                     // Private/public compete
    1: { 3: 3, 2: 2 },                         // Public with some private
    2: { 4: 3, 3:2, 6: 2, 19: 2 },               // Free public for all
    3: { 5: 3, 8: 2, 10: 2, 7:2, 17:2, 14:1 }    // Completely decentralized
  },
  // Q8: Immigration
  {
    0: { 11: 3, 13: 4, 18: 3 },                // Strict border control (NRx, NatAn, 4PT)
    1: { 2: 2 },                               // Regulated (Cen)
    2: { 1: 2, 3: 2, 4: 2 },                   // Open borders with basic regs (Lib, SocDem, DemSoc)
    3: { 5: 3, 7: 2, 10:2, 14:2, 17:2, 9:2, 12:1 } // No borders, no nations (Anarchists, Accel, Posad)
  },
  // Q9: Social welfare
  {
    0: { 0: 3, 1: 3, 11: 2, 14:1 },             // Minimal safety net
    1: { 3: 3, 2: 2, 15:1 },                     // Moderate social programs
    2: { 4: 3, 3:2, 6: 2 },                     // Comprehensive
    3: { 5: 3, 19: 4, 10:2 }                   // Complete social support (AnCom, FALC, AnSyn)
  },
  // Q10: Technological progress
  {
    0: { 0: 3, 1: 2, 9: 3 },                   // Market drive innovation (AnCap, Lib, Right-Accel)
    1: { 15: 4, 3: 2, 6: 2, 18:1 },              // Gov should guide (Tech, SocDem, AuthSoc, 4PT)
    2: { 19: 4, 4: 2, 5:2, 7:2, 9: 2, 10:2, 12:2 },// Tech serve social needs (FALC, DemSoc, AnCom, TechAn, Left-Accel, AnSyn, Posad)
    3: { 7: 3, 15:2, 19:2, 8:1, 16:1 }           // Tech collectively controlled (TechAn, Tech, FALC, AnPrim (rejects), DeepEco (rejects))
  },
  // Q11: Military spending
  {
    0: { 11: 3, 18: 3 },                       // Strong military (NRx, 4PT)
    1: { 2: 2, 15:1 },                           // Moderate (Cen, Tech)
    2: { 3: 2, 4: 2, 16: 2 },                  // Significantly reduce (SocDem, DemSoc, DeepEco)
    3: { 5: 3, 8: 3, 10:3, 1:2, 7:2, 14:2, 17:2, 9:1, 12:3, 13:1 } // Abolish (Anarchists, Posad (after revolution))
  },
  // Q12: Cultural diversity
  {
    0: { 11: 3, 13: 3, 18: 2 },                // Assimilation (NRx, NatAn for own, 4PT)
    1: { 2: 2, 3: 2 },                         // Multicultural integration (Cen, SocDem)
    2: { 4: 2, 5: 2, 17:2 },                   // Celebrate and protect all (DemSoc, AnCom, LibMun)
    3: { 9:3, 13:2, 14:1, 7:1 }                // Abolish cultural boundaries (Accel, NatAn (others'), EgoAn, TechAn)
  },
  // Q13: Freedom of speech
  {
    0: { 0: 3, 1: 3, 14: 4, 7:3, 9:2 },         // Absolute (AnCap, Lib, EgoAn, TechAn, Accel)
    1: { 2: 2, 3: 2, 4:1 },                   // Freedom with some limits (Cen, SocDem, DemSoc)
    2: { 6:2, 11:2, 15:2, 18:1 },               // Promote social harmony/order (AuthSoc, NRx, Tech, 4PT)
    3: { 6: 3, 13:1 }                          // Serve collective interests (AuthSoc, NatAn)
  },
  // Q14: Law enforcement
  {
    0: { 11: 4, 18:2 },                       // Strong law and order (NRx, 4PT)
    1: { 2: 2, 3: 2, 15:1 },                   // Community-oriented (Cen, SocDem, Tech)
    2: { 4: 2, 10:1, 17:1 },                  // Signif reform (DemSoc, AnSyn, LibMun)
    3: { 0:2, 1:2, 5:4, 7:4, 8:3, 10:3, 13:3, 14:4, 9:2, 12:1, 16:1 } // Abolish (Anarchists, Accel, Posad(post-rev), DeepEco)
  },
  // Q15: International relations
  {
    0: { 11: 3, 13:3, 18: 3 },                // National interests first (NRx, NatAn, 4PT)
    1: { 2: 2, 3: 2, 15:1 },                   // International cooperation (Cen, SocDem, Tech)
    2: { 4:2, 5:3, 10:2, 19:2, 12:3 },         // Global solidarity (DemSoc, AnCom, AnSyn, FALC, Posad)
    3: { 7:3, 9:2, 14:3, 17:2, 8:1 }           // World without borders (TechAn, Accel, EgoAn, LibMun, AnPrim)
  },
  // Q16: Environmental protection
  {
    0: { 0: 3, 1: 2 },                         // Market-based (AnCap, Lib)
    1: { 3: 2, 15:2, 2:1, 4:1 },               // Gov regulation (SocDem, Tech, Cen, DemSoc)
    2: { 16: 4, 4:1 },                        // Strong env laws (DeepEco, DemSoc)
    3: { 5:3, 8:5, 16:5, 9:2, 10:2, 17:1, 19:1 } // Complete ecological transformation (AnPrim, DeepEco, AnCom, Accel, AnSyn, LibMun, FALC)
  },
  // Q17: Digital privacy
  {
    0: { 0:2, 1:2, 14:2, 11:1 },                // Individual responsibility
    1: { 2:2, 3:2 },                           // Basic protections
    2: { 4:2, 7:3, 9:1 },                     // Strong privacy rights (DemSoc, TechAn, Accel)
    3: { 5:2, 6:2, 19:2, 15:2, 12:1 }          // Collective data ownership/control (AnCom, AuthSoc, FALC, Tech, Posad)
  },
  // Q18: Scientific research
  {
    0: { 0: 3, 1: 2, 9:1 },                   // Private sector driven (AnCap, Lib, Right-Accel)
    1: { 2:1, 3:1 },                           // Public-private (Cen, SocDem)
    2: { 4:2, 6:1, 19:2, 15:3 },               // Publicly funded (DemSoc, AuthSoc, FALC, Tech)
    3: { 5:2, 7:2, 10:1, 12:4, 9:2 }           // Collective scientific planning (AnCom, TechAn, AnSyn, Posad, Left-Accel)
  },
  // Q19: Future of work
  {
    0: { 0:2, 1:2, 11:2, 18:1 },                // Traditional employment
    1: { 2:2, 3:2, 15:1 },                     // Mixed economy
    2: { 4:2, 19:3, 17:2, 3:1 },               // Universal basic income (DemSoc, FALC, LibMun, SocDem)
    3: { 5:3, 8:3, 10:2, 19:4, 7:2, 9:3, 16:1 } // Post-work society (AnCom, AnPrim, AnSyn, FALC, TechAn, Accel, DeepEco)
  }
];

function getResult(answers) {
    // Reset scores
    ideologies.forEach(ideology => ideology.score = 0);

    // Score each answer based on the scoringRules
    answers.forEach((answerIndex, questionIndex) => {
        const questionRules = scoringRules[questionIndex];
        if (questionRules) {
            const optionRules = questionRules[answerIndex];
            if (optionRules) {
                for (const ideologyIndex in optionRules) {
                    if (ideologies[ideologyIndex]) { // Check if ideology exists
                        ideologies[ideologyIndex].score += optionRules[ideologyIndex];
                    }
                }
            }
        }
    });

    // Add some randomness to make it more interesting and differentiate ties
    ideologies.forEach(ideology => {
        ideology.score += Math.random() * 0.99; // Randomness range 0 to just under 1
    });

    // Find the ideology with the highest score
    let topIdeology = ideologies[0];
    for (let i = 1; i < ideologies.length; i++) {
        if (ideologies[i].score > topIdeology.score) {
            topIdeology = ideologies[i];
        }
    }

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return {
        name: topIdeology.name,
        description: topIdeology.description,
        quote: randomQuote
    };
} 