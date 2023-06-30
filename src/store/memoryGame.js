// Memory store
// Game state and functions that get called by the game container
import { writable } from 'svelte/store';
// import { copyObject } from '../lib/utils.js';
import { dummyMoves } from '../dummy/dummyMoves';

// game state
let state = {};
const { subscribe, set, update } = writable(state);
let timerId;

// game status handler controls timer
let statusHandler = {
	PLAYING: function () {
		timerId = setInterval(function () {
			counting();
		}, 1000);
	},

	PASS: function () {
		clearInterval(timerId);
		// updateHighestSpeed();
		toggleEnd(true);
		//commit('updateHighestSpeed');
		//commit('toggleNameInput', true);
	}
};

// resets game state
// REFACTOR: Consider using a Game class
function reset(newState) {
	state.leftMatched = newState.leftMatched;
	state.highestSpeed = newState.highestSpeed;
	state.status = newState.status;
	state.cards = newState.cards;
	state.elapsedMs = newState.elapsedMs;
	state.displayRank = newState.displayRank;
	state.displayNameInput = newState.displayNameInput;
	state.ranks = newState.ranks;
	state.userName = newState.userName;
	state.displayEnd = newState.displayEnd;
	state.displaySettings = newState.displaySettings;
	set(state);
}

function updateStatus(newStatus) {
	state.status = newStatus;
	set(state);

	statusHandler[newStatus]();
}

function decreaseMatch() {
	state.leftMatched--;
	set(state);
}

// onclick card is flipped by finding the same card in state and flipping it
function flip(card) {
	console.log('flip firing');
	var c = state.cards.find((cc) => cc == card);
	c.flipped = !c.flipped;
	set(state);
}

// on the timer, filter state cards for upturned cards and flip back
function flipCards(cards) {
	console.log('flipCards firing');
	state.cards
		.filter((cc) => cards.indexOf(cc) >= 0)
		.forEach((cc) => {
			cc.flipped = !cc.flipped;
		});
	set(state);
}

function counting() {
	state.elapsedMs++;
	set(state);
}

// function updateHighestSpeed() {
// 	if (!localStorage.getItem('highestSpeed')) {
// 		localStorage.setItem('highestSpeed', state.elapsedMs);
// 		state.highestSpeed = state.elapsedMs;
// 		set(state);
// 		return;
// 	}

// 	if (localStorage.getItem('highestSpeed') > state.elapsedMs) {
// 		localStorage.setItem('highestSpeed', state.elapsedMs);
// 		state.highestSpeed = state.elapsedMs;
// 		set(state);
// 		return;
// 	}
// }

function toggleSettings(boo) {
	state.displaySettings = boo;
	set(state);
}

function toggleEnd(boo) {
	state.displayEnd = boo;
	set(state);
}

// function updateUsername(name) {
// 	localStorage.setItem('userName', name);
// 	state.userName = name;
// 	set(state);
// }

function flipCard(card) {
	flip(card);
}

function match() {
	decreaseMatch();
}

export default {
	subscribe,
	reset,
	decreaseMatch,
	flip,
	counting,
	// updateHighestSpeed,

	toggleSettings,
	toggleEnd,
	// updateUsername,

	// actions
	flipCard,
	flipCards,
	match,
	updateStatus
};
