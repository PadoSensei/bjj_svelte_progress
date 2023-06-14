const dummyMoves = [
	{
		moveName: 'Armbar from Closed Guard',
		moveMastery: 0,
		active: true,
		category: 'submission',
		moveID: '0000',
		moveImage: 'https://www.bjjee.com/wp-content/uploads/2020/10/armbar.jpg',
		description:
			"The armbar from closed guard is a submission technique where you use your legs and hips to hyperextend your opponent's arm, forcing them to tap out.",
		instructions: [
			{ id: 1, text: 'Start in closed guard with your opponent inside your guard.' },
			{
				id: 2,
				text: "Control your opponent's posture by holding onto their collar and pulling them down towards you."
			},
			{
				id: 3,
				text: "Use your legs to open your guard and place one foot on your opponent's hip."
			},
			{
				id: 4,
				text: "Bring your other foot across your opponent's body and place it on their opposite hip."
			},
			{
				id: 5,
				text: "Use your legs and hips to lift your hips up and pull your opponent's arm across your body."
			},
			{ id: 6, text: "Place your leg over your opponent's head and hook their arm with your leg." },
			{
				id: 7,
				text: "Squeeze your knees together and extend your hips to hyperextend your opponent's arm."
			},
			{ id: 8, text: 'Maintain control and apply pressure until your opponent taps out.' }
		],
		commonMistakes: [
			"Failing to control your opponent's posture.",
			"Failing to lift your hips up and pull your opponent's arm across your body.",
			"Not hooking your opponent's arm with your leg.",
			'Not squeezing your knees together and extending your hips to apply pressure.'
		],
		variations: [
			'Armbar from open guard.',
			'Armbar setup from triangle.',
			'Armbar setup from omoplata.'
		],
		tips: [
			"Practice maintaining control of your opponent's posture.",
			"Work on lifting your hips up and pulling your opponent's arm across your body quickly.",
			"Focus on squeezing your knees together and extending your hips to apply pressure to your opponent's arm."
		]
	},

	{
		moveName: 'Flower Sweep',
		moveMastery: 0,
		active: true,
		category: 'sweep',
		moveID: '0001',
		moveImage: 'https://offer.bjjfanatics.com/wp-content/uploads/2016/11/flowersweep.jpg',
		description:
			'The flower sweep is a fundamental sweep in BJJ that involves using your legs to sweep your opponent to the side while maintaining control of their upper body.',
		instructions: [
			'Start in closed guard with your opponent inside your guard.',
			"Control your opponent's posture by holding onto their collar and pulling them down towards you.",
			"Use one of your hands to grab your opponent's same-side sleeve and pull it across your body.",
			"Use your other hand to grab your opponent's opposite-side collar.",
			'Push off with your foot on the same side as the sleeve you are holding to create space.',
			"Place your foot on your opponent's hip on the same side as the collar you are holding.",
			'Pull your opponent towards you with the collar grip and use your foot on their hip to push them to the side.',
			'Maintain control of their upper body as you come up to a seated position and establish top control.'
		],
		commonMistakes: [
			"Failing to control your opponent's posture.",
			'Not getting a good grip on the sleeve and collar.',
			"Not creating enough space to place your foot on your opponent's hip.",
			"Failing to maintain control of your opponent's upper body as you sweep them."
		],
		variations: [
			'Flower sweep to armbar.',
			'Flower sweep to triangle.',
			'Flower sweep to back take.'
		],
		tips: [
			"Practice controlling your opponent's posture.",
			'Focus on getting a strong grip on the sleeve and collar.',
			"Create enough space to place your foot on your opponent's hip.",
			"Maintain control of your opponent's upper body throughout the sweep."
		]
	},

	{
		moveName: 'Hip bump sweep',
		moveMastery: 0,
		active: true,
		moveCategory: 'sweep',
		moveID: '0002',
		moveImage:
			'https://bjj-world.com/wp-content/uploads/2019/02/hip-bump-rollover-sweep-from-gua.jpg',
		description:
			'The hip bump sweep is a basic sweep from closed guard that involves using your hips to off-balance your opponent and create space for you to come up to a dominant position.',
		instructions: [
			"Establish a strong grip on your opponent's collar and sleeve.",
			'Using your legs, pull your opponent down and towards you to break their posture.',
			'While maintaining the grip, shift your hips to one side and post your foot on the ground.',
			'Bump your hips and push off with your foot to sweep your opponent over you.',
			'As your opponent falls, come up to a dominant position like mount or back control.'
		],
		commonMistakes: [
			"Failing to break your opponent's posture.",
			'Not posting the foot on the ground to create a base for the sweep.',
			'Using too much force and energy, making it easy for your opponent to defend.',
			'Failing to come up to a dominant position once your opponent is swept.'
		],
		variations: ['Kimura sweep from closed guard.', 'Hip bump sweep to armbar.'],
		tips: [
			"Practice controlling your opponent's posture before attempting the sweep.",
			'Be patient and wait for the right moment to execute the sweep.',
			'Maintain your grips throughout the sweep to control your opponent.',
			'Transition smoothly to a dominant position after the sweep.'
		]
	},

	{
		moveName: 'Kimura from Closed Guard',
		moveMastery: 0,
		active: true,
		moveCategory: 'submission',
		moveID: '0003',
		moveImage:
			'https://www.grapplearts.com/wp-content/uploads/2018/03/closed-guard-Kimura-armlock-from-closed-guard.png',
		description:
			"The kimura from closed guard is a submission technique where you use a figure-four grip on your opponent's arm to apply pressure to their shoulder joint.",
		instructions: [
			'Start in closed guard with your opponent inside your guard.',
			"Grab your opponent's wrist with one hand and reach your other hand behind their arm to grab your own wrist, creating a figure-four grip.",
			"Use your legs to open your guard and place one foot on your opponent's hip.",
			"Bring your other foot across your opponent's body and place it on their opposite hip.",
			"Use your foot on their hip to push them away and create space to bring your opponent's arm across your body.",
			"Roll onto your side and apply pressure to your opponent's shoulder joint by pulling their arm towards your chest.",
			'Maintain control and apply pressure until your opponent taps out.'
		],
		commonMistakes: [
			"Failing to control your opponent's posture.",
			"Failing to secure a figure-four grip on your opponent's arm.",
			"Not creating enough space to bring your opponent's arm across your body.",
			"Failing to roll onto your side and apply pressure to your opponent's shoulder joint."
		],
		variations: [
			'Kimura from half guard.',
			'Kimura from side control.',
			'Kimura grip to sweep or transition.'
		],
		tips: [
			"Practice maintaining control of your opponent's posture.",
			"Work on securing a strong figure-four grip on your opponent's arm.",
			"Focus on creating enough space to bring your opponent's arm across your body."
		]
	},

	{
		moveName: 'Omoplata Sweep',
		moveMastery: 0,
		active: true,
		category: 'sweep',
		moveID: '0004',
		moveImage: 'https://jiujitsutimes.com/wp-content/uploads/omoplata4.jpg',
		description:
			"The omoplata sweep is a submission and sweep combination from closed guard that attacks your opponent's shoulder joint.",
		instructions: [
			'Start in closed guard with your opponent inside your guard.',
			"Establish a strong grip on your opponent's sleeve and use your legs to control their posture.",
			"Kick your leg over your opponent's shoulder and place your foot on their hip.",
			"Rotate your hips to the side and use your other foot to hook behind your opponent's knee.",
			"Pull your opponent's arm across their body and use your legs to sweep them to the side.",
			'Establish a dominant position on top of your opponent and finish with the omoplata submission if desired.'
		],
		commonMistakes: [
			"Failing to establish a strong grip on your opponent's sleeve.",
			"Not controlling your opponent's posture effectively with your legs.",
			"Not kicking your leg over your opponent's shoulder with enough force.",
			"Not hooking your other foot behind your opponent's knee effectively.",
			'Failing to sweep your opponent to the side with your legs.'
		],
		variations: ['Omoplata to armbar', 'Omoplata to triangle', 'Omoplata to sweep to back take'],
		tips: [
			"Focus on establishing a strong grip on your opponent's sleeve and controlling their posture with your legs.",
			"Kick your leg over your opponent's shoulder with enough force to create space for the sweep.",
			"Hook your other foot behind your opponent's knee effectively to control their movement and complete the sweep."
		]
	},

	{
		moveName: 'Pendulum Sweep',
		moveMastery: 0,
		active: true,
		category: 'sweep',
		moveID: '0005',
		moveImage:
			'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc0NDY3NDc2MzM4NTgyODg4/how-to-do-a-pendulum-sweep.png',
		description:
			'The pendulum sweep is a basic sweep from closed guard that uses your legs to off-balance your opponent and sweep them to the side.',
		instructions: [
			'Start in closed guard with your opponent inside your guard.',
			"Establish a strong grip on your opponent's sleeve and control their posture with your other hand.",
			'Extend your legs and shift your hips to the side to create space to swing your legs.',
			"Swing your legs to one side while pulling your opponent's arm across their body.",
			'Use your leg to push your opponent away and off-balance them, then use your other leg to sweep them to the side.',
			'Establish a dominant position on top of your opponent.'
		],
		commonMistakes: [
			"Failing to establish a strong grip on your opponent's sleeve.",
			"Not controlling your opponent's posture effectively.",
			'Not extending your legs and shifting your hips to create space for the sweep.',
			'Not swinging your legs with enough force to off-balance your opponent.',
			'Not using your other leg to complete the sweep.'
		],
		variations: [
			'Collar drag sweep',
			'Hip bump sweep from pendulum setup',
			'Triangle setup from pendulum sweep'
		],
		tips: [
			"Focus on establishing a strong grip on your opponent's sleeve and controlling their posture.",
			'Use your legs to create space for the sweep by extending them and shifting your hips.',
			'Swing your legs with enough force to off-balance your opponent and complete the sweep.'
		]
	},

	{
		moveName: 'Scissor sweep',
		moveMastery: 0,
		active: true,
		moveCategory: 'sweep',
		moveID: '0006',
		moveImage: 'https://i.ytimg.com/vi/X-PA21_0xTg/maxresdefault.jpg',
		description:
			'The scissor sweep is a fundamental sweep from closed guard that involves using your legs to create an angle and off-balance your opponent.',
		instructions: [
			"Establish a strong grip on your opponent's collar and sleeve.",
			'Using your legs, pull your opponent down and towards you to break their posture.',
			'Place one foot on their hip and the other foot on the opposite knee.',
			'Extend your leg on their hip while pulling on their sleeve, causing your opponent to post their hand on the mat.',
			'Use your other foot to scissor your legs and sweep your opponent over you.',
			'As your opponent falls, come up to a dominant position like mount or back control.'
		],
		commonMistakes: [
			"Failing to break your opponent's posture.",
			'Not extending your leg on their hip enough, making it easy for your opponent to defend.',
			'Failing to scissor your legs effectively.',
			'Not transitioning to a dominant position after the sweep.'
		],
		variations: [
			'Armbar setup from scissor sweep.',
			'Scissor sweep to triangle.',
			'Scissor sweep to back take.'
		],
		tips: [
			'Focus on creating an angle with your legs to off-balance your opponent.',
			'Be patient and wait for the right moment to execute the sweep.',
			'Maintain your grips throughout the sweep to control your opponent.',
			'Transition smoothly to a dominant position after the sweep.'
		]
	},

	{
		moveName: 'Triangle from Closed Guard',
		moveMastery: 0,
		active: true,
		moveCategory: 'submission',
		moveID: '0007',
		moveImage:
			'https://www.grapplearts.com/wp-content/uploads/2018/05/New-Favorite-Triangle-Choke-Set-Up.jpg',
		description:
			"The triangle from closed guard is a submission technique where you use your legs to cut off your opponent's circulation and air supply, forcing them to tap out.",
		instructions: [
			{
				stepNumber: 1,
				description: 'Start in closed guard with your opponent inside your guard.'
			},
			{
				stepNumber: 2,
				description:
					"Control your opponent's posture by holding onto their collar and pulling them down towards you."
			},
			{
				stepNumber: 3,
				description: "Use your legs to open your guard and place one foot on your opponent's hip."
			},
			{
				stepNumber: 4,
				description:
					"Bring your other foot across your opponent's body and place it on their opposite hip."
			},
			{
				stepNumber: 5,
				description:
					'Use your foot on their hip to push them away and create space to bring your leg across their neck.'
			},
			{
				stepNumber: 6,
				description:
					"Squeeze your knees together to cut off your opponent's circulation and air supply."
			},
			{
				stepNumber: 7,
				description:
					"Use your free hand to grab your shin and pull it down towards your opponent's neck to tighten the triangle."
			},
			{
				stepNumber: 8,
				description: 'Maintain control and apply pressure until your opponent taps out.'
			}
		],
		commonMistakes: [
			"Failing to control your opponent's posture.",
			"Bringing your leg across your opponent's shoulder instead of their neck.",
			"Failing to squeeze your knees together to cut off your opponent's circulation and air supply.",
			'Not pulling down on your shin to tighten the triangle.'
		],
		variations: [
			'Reverse triangle from closed guard.',
			'Triangle from open guard.',
			'Armbar setup from triangle.'
		],
		tips: [
			"Practice maintaining control of your opponent's posture.",
			"Work on creating space and bringing your leg across your opponent's neck quickly.",
			"Focus on squeezing your knees together to apply pressure to your opponent's neck."
		]
	}
];

export { dummyMoves };
