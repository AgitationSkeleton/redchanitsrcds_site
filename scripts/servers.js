// list of servers
const serverList = [
	// tf2
	{
		id: "tf2CustomMaps",
		name: "REDchanit.xyz | TF2 Custom Maps",
		ip: "97.94.129.234:25565",
		game: "tf2",
		motd: "memefort",
	},
	{
		id: "tf2SoapDM",
		name: "REDchanit.xyz | TF2 SoapDM",
		ip: "97.94.129.234:27335",
		game: "tf2",
		motd: "memefort_soapdm",
	},
	{
		id: "tf2Vscript",
		name: "REDchanit.xyz | TF2 Vscript Maps",
		ip: "97.94.129.234:51840",
		game: "tf2",
		motd: "memefort_vscript",
	},
	{
		id: "tf2SecretBase",
		name: "REDchanit.xyz | TF2 The Secret Base",
		ip: "97.94.129.234:27005",
		game: "tf2",
	},
	{
		id: "tf2Vanilla",
		name: "REDchanit.xyz | TF2 Vanilla",
		ip: "97.94.129.234:27664",
		game: "tf2",
	},
	{
		id: "tf2VanillaNoSniper",
		name: "REDchanit.xyz | TF2 Vanilla But Sniper Is Banned",
		ip: "97.94.129.234:27663",
		game: "tf2",
	},
	// of
	{
		id: "openFortressDM",
		name: "REDchanit.xyz | Open Fortress DM",
		ip: "97.94.129.234:27015",
		game: "hl2dm",
		overrideGame: "of",
		motd: "dagobah",
	},
	{
		id: "openFortressTDM",
		name: "REDchanit.xyz | Open Fortress Team DM",
		ip: "97.94.129.234:34560",
		game: "hl2dm",
		overrideGame: "of",
		motd: "dagobah",
	},
	{
		id: "openFortressAllClassDM",
		name: "REDchanit.xyz | OF All-Class DM",
		ip: "97.94.129.234:27665",
		game: "hl2dm",
		overrideGame: "of",
		motd: "dagobah",
	},
	{
		id: "openFortressZombie",
		name: "REDchanit.xyz | OF Zombie Infection + Arsenal",
		ip: "97.94.129.234:27666",
		game: "hl2dm",
		overrideGame: "of",
		motd: "dagobah",
	},
	// tf2classic
	{
		id: "tf2classicCustomWeapons",
		name: "REDchanit.xyz | TF2C (Custom Weapons)",
		ip: "97.94.129.234:27020",
		game: "hl2dm",
		overrideGame: "tf2classic",
		motd: "tf2c_motd",
	},
	{
		id: "tf2classic2fort",
		name: "REDchanit.xyz | TF2C 2FORT 24/7 (Vanilla)",
		ip: "97.94.129.234:27979",
		game: "hl2dm",
		overrideGame: "tf2classic",
	},
	{
		id: "tf2classic2007",
		name: "REDchanit.xyz | TF2C 2007 Simulator",
		ip: "97.94.129.234:27980",
		game: "hl2dm",
		overrideGame: "tf2classic",
		motd: "xperience",
	},
	// pf2
	{
		id: "pf2",
		name: "REDchanit.xyz | Pre-Fortress 2",
		ip: "97.94.129.234:26335",
		game: "hl2dm",
		overrideGame: "pf2",
	},
	// tfport
	{
		id: "tfport",
		name: "REDchanit.xyz | TF_Port 2007",
		ip: "97.94.129.234:27974",
		game: "tf2",
		overrideGame: "tfport",
	},
	// goonsquad
	{
		id: "goonsquad",
		name: "REDchanit.xyz | Goonsquad Dev",
		ip: "97.94.129.234:23555",
		game: "hl2dm",
		overrideGame: "goonsquad",
	},
	// tfc
	{
		id: "tfcFoldyBasement",
		name: "REDchanit.xyz | TFC - Old Foldy's Basement",
		ip: "97.94.129.234:34531",
		game: "tfc",
	},
	// hldm
	{
		id: "hldmFoldyPlayhouse",
		name: "REDchanit.xyz | HLDM - Old Foldy's Playhouse",
		ip: "97.94.129.234:27970",
		game: "hldm",
	},
	// dmc
	{
		id: "dmcFoldyDungeon",
		name: "REDchanit.xyz | DMC - Old Foldy's Dungeon",
		ip: "97.94.129.234:27971",
		game: "dmc",
	},
	// svencoop
	{
		id: "svencoop",
		name: "REDchanit.xyz | Sven Co-op",
		ip: "97.94.129.234:27972",
		game: "svencoop",
	},
	// quake
	{
		id: "quakeVanilla",
		name: "REDchanit.xyz | QuakeWorld (Vanilla)",
		ip: "97.94.129.234:27961",
		game: "quake1",
		overrideMap: "quakeworld",
	},
	{
		id: "quakeTeamFortress",
		name: "REDchanit.xyz | QuakeWorld Team Fortress (FortressOne)",
		ip: "97.94.129.234:27962",
		game: "quake1",
		overrideMap: "quaketf",
	},
	// quake3
	{
		id: "quake3",
		name: "REDchanit.xyz | Quake 3 Vanilla Unlagged",
		ip: "97.94.129.234:27963",
		game: "quake3",
	},
	// quakelive
	{
		id: "quakelive",
		name: "REDchanit.xyz | Quake Live",
		ip: "97.94.129.234:27964",
		game: "quakelive",
	},
	// doom3
	{
		id: "doom3",
		name: "REDchanit.xyz | Doom 3",
		ip: "97.94.129.234:10669",
		game: "doom3",
	},
	// jk2
	{
		id: "jk2",
		name: "REDchanit.xyz | JK2",
		ip: "97.94.129.234:27973",
		game: "swjk",
	},
	// halo
	{
		id: "halo",
		name: "REDchanit.xyz | Halo CE | Classic Slayer Pro",
		ip: "97.94.129.234:2103",
		game: "halo",
	}
];

// list of Steam games, for direct connection
const steamGames = ["tf2", "tf2classic", "of", "pf2", "tfport", "goonsquad", "tfc", "hldm", "dmc", "svencoop"];

// general variables
const RESOURCES_URL = "https://resources.redchanit.xyz";
const HOSTNAME = "play.redchanit.xyz";
const API_BASE_URL = "https://api.raccoonlagoon.com/v1/server-info";

// preload critical images
function preloadImages(...urls) {
	urls.forEach((url) => {
		const img = new Image();
		img.src = url;
	});
}

// load images as soon as script is parsed
preloadImages(
	`${RESOURCES_URL}/status/offline.png`,
	`${RESOURCES_URL}/status/online.png`,
	`${RESOURCES_URL}/games/unknown.png`,
	`${RESOURCES_URL}/maps/unknown.png`,
);

// main function to initialize the server list
function initializeServerList() {
	// loop through every server
	const container = document.getElementById("servers");
	serverList.forEach((server) => {
		const serverElement = createServerElement(server);
		container.appendChild(serverElement);
		fetchServerData(server, serverElement);
	});
}

// generate dummy server entries
function createServerElement(server) {
	// REDCHANIT: motd handling
	const { id, name, overrideGame, game, motd } = server;
	const serverGame = overrideGame || game;

	// create entry element
	const serverElement = document.createElement("div");
	serverElement.id = id;
	serverElement.className = "server";

	// populate entry with temp info
	// REDCHANIT: hide server info button if motd doesn't exist
	serverElement.innerHTML = `
			<div class="serverTitle">
				<img class="serverStatus" src="${RESOURCES_URL}/status/offline.png" alt="status" draggable="false">
				<img class="serverGame" src="${RESOURCES_URL}/games/${serverGame}.png" alt="${serverGame}" onerror="this.onerror=null; this.src='${RESOURCES_URL}/games/unknown.png';" draggable="false">
				<div>${name}</div>
			</div>
			<div class="serverContent">
				<img class="serverMap asyncImage" src="${RESOURCES_URL}/maps/unknown.png" alt="map" draggable="false">
				<div class="serverMapName"><b>Map:</b> ---</div>
				<div class="serverPlayers"><b>Players:</b> ---</div>
			</div>
			<div class="serverButtons">
				${server.motd ? `<a href="${server.motd}" class="serverButton serverInfo" style="width:100%;" draggable="false"><div class="info"></div></a>` : `<a class="serverButton serverInfo" style="width:100%;" draggable="false">...</a>`}
			</div>
		`;
	return serverElement;
}

// fetch server data from api
function fetchServerData(server, serverElement) {
	const url = `${API_BASE_URL}?ip=${server.ip}&g=${server.game}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => updateServerElement(data, server, serverElement))
		.catch((error) => console.error("Error fetching server data:", error));
}

// display server data once fetched
function updateServerElement(data, server, serverElement) {
	const { overrideMap, dynmap } = server;
	// REDCHANIT: regex for quake3
	const serverMap = overrideMap || data.currentMap.replace(/^(?<=)game\/mp\/*/, "");
	const canConnect = steamGames.includes(server.overrideGame || server.game);

	// set updated server info
	// server returned data, so it's online
	serverElement.querySelector(".serverStatus").src =
		`${RESOURCES_URL}/status/online.png`;

	// update map image
	const mapImage = serverElement.querySelector(".serverMap");
	mapImage.dataset.src = `${RESOURCES_URL}/maps/${server.overrideGame || server.game}/${serverMap}.png`;
	loadMapImage(mapImage);

	serverElement.querySelector(".serverMapName").textContent = `Map: ${serverMap}`;
	serverElement.querySelector(".serverMapName").title = serverMap;

	// server player list
	const playersElement = serverElement.querySelector(".serverPlayers");
	const numOfBots = data.numBots > 0 ? ` (${data.numBots} Bots)` : "";
	playersElement.innerHTML = `<b>Players:</b> ${data.numHumans}/${data.maxClients}${numOfBots}`;

	// only show the table if there are players
	const playerList = data.humanData.map((player) => player.name).join("\n");
	if (data.numHumans > 0) {
		playersElement.classList.add("tooltip");
		playersElement.title = playerList;
	}

	// server buttons
	// servers that host a Steam game will replace the copy ip button with a connect button
	// REDCHANIT: hide server info button if motd doesn't exist
	const buttonsHtml = `
			<a ${canConnect ? `href="steam://connect/${data.serverIP}"` : ""} class="serverButton serverConnect" ${!canConnect ? `onclick="navigator.clipboard.writeText('${data.serverIP.replace(/^[^:]*/, HOSTNAME)}');"` : ""} draggable="false">
				${canConnect ? "Connect" : "Copy IP"}
			</a>
			${dynmap ? `<a href="${dynmap}" class="serverButton serverDynmap" draggable="false"><div class="dynmap"></div></a>` : ""}
			${server.motd ? `<a href="${server.motd}" class="serverButton serverInfo" draggable="false"><div class="info"></div></a>` : ""}
		`;
	serverElement.querySelector(".serverButtons").innerHTML = buttonsHtml;
}

// asynchronously load map images, not replacing if they can't be found
function loadMapImage(mapElement) {
	"use strict";
	const img = new Image();
	img.src = mapElement.dataset.src;
	img.onload = () => {
		mapElement.classList.remove("asyncImage");
		mapElement.src = mapElement.dataset.src;
	};
	img.onerror = () => {
		mapElement.src = `${RESOURCES_URL}/maps/unknown.png`;
	};
}

// initialize on DOM load
document.addEventListener("DOMContentLoaded", initializeServerList);