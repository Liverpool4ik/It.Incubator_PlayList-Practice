// data
let playlist = {
	title: "Hip-Hop Hits",
	coverImageUrl: "img/coverImage.png",
	tracksInfo: {
		totalTracksCount: 4,
		tracksDurationInSeconds: 733,
	},
	trackList: [
		{
			trackImageUrl: "img/image-1.png",
			artistName: "Eminem",
			songTitle: "Rap God",
			trackUrl: "/musicTracks/track-1.mp3",
			isHot: true,
		},
		{
			trackImageUrl: "img/image-2.png",
			artistName: "50 cent",
			songTitle: "In da Club",
			trackUrl: "/musicTracks/track-2.mp3",
			isHot: false,
		},

		{
			trackImageUrl: "img/image-13png",
			artistName: "DMX",
			songTitle: "X Gon' Give It to Ya",
			trackUrl: "/musicTracks/track-3.mp3",
			isHot: false,
		},

		{
			trackImageUrl: "img/image-4.png",
			artistName: "Eminem feat 50 cent, Cashis, Lloyd Banks",
			songTitle: "You don't know",
			trackUrl: "/musicTracks/track-4.mp3",
			isHot: false,
		},
	],
};

/**

// (BEFORE  changing "playList" onto "playListForRendering" in function renderPlayList --
// playListTitle Element.append(... playList.title и т.д. ==>> ... playListForRendering.title и т.д.)) ======================================================

renderPlaylist(playlist);

function renderPlaylist(playListForRendering) {
	let playListTitleElement = document.createElement("h2");
	playListTitleElement.append(playlist.title);
	document.body.append(playListTitleElement);

	let playListCoverImageElement = document.createElement("img");
	playListCoverImageElement.src = playlist.coverImageUrl;
	document.body.append(playListCoverImageElement);

	let tracksListElement = document.createElement("ul");

	let track0Element = document.createElement("li");
	track0Element.append(
		playlist.trackList[0].artistName + " - " + playlist.trackList[0].songTitle
	);
	tracksListElement.append(track0Element);

	let track1Element = document.createElement("li");
	track1Element.append(
		playlist.trackList[1].artistName + " - " + playlist.trackList[1].songTitle
	);
	tracksListElement.append(track1Element);

	let track2Element = document.createElement("li");
	track2Element.append(
		playlist.trackList[2].artistName + " - " + playlist.trackList[2].songTitle
	);
	tracksListElement.append(track2Element);

	let track3Element = document.createElement("li");
	track3Element.append(
		playlist.trackList[3].artistName + " - " + playlist.trackList[3].songTitle
	);
	tracksListElement.append(track3Element);

	document.body.append(tracksListElement);
}
 */

// ================== render
// (after changing "playList" onto "playListForRendering" in function renderPlayList --
// playListTitle Element.append(... playList.title и т.д. ==>> ... playListForRendering.title и т.д. )) ======================================================

renderPlaylist(playlist);

function renderPlaylist(playListForRendering) {
	let playListTitleElement = document.createElement("h2");
	playListTitleElement.append(playListForRendering.title);
	document.body.append(playListTitleElement);

	let playListCoverImageElement = document.createElement("img");
	playListCoverImageElement.src = playListForRendering.coverImageUrl;
	document.body.append(playListCoverImageElement);

	let tracksListElement = document.createElement("ul");

	let track0Element = document.createElement("li");
	track0Element.append(
		playListForRendering.trackList[0].artistName +
			" - " +
			playListForRendering.trackList[0].songTitle
	);
	tracksListElement.append(track0Element);

	let track1Element = document.createElement("li");
	track1Element.append(
		playListForRendering.trackList[1].artistName +
			" - " +
			playListForRendering.trackList[1].songTitle
	);
	tracksListElement.append(track1Element);

	let track2Element = document.createElement("li");
	track2Element.append(
		playListForRendering.trackList[2].artistName +
			" - " +
			playListForRendering.trackList[2].songTitle
	);
	tracksListElement.append(track2Element);

	let track3Element = document.createElement("li");
	track3Element.append(
		playListForRendering.trackList[3].artistName +
			" - " +
			playListForRendering.trackList[3].songTitle
	);
	tracksListElement.append(track3Element);

	document.body.append(tracksListElement);
}
