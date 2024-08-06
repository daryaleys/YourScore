export type MainLeague = {
	country: string;
	leagueName: string;
	countrySlug: string;
	leagueSlug: string;
	countryName: string;
	id: number;
	is_open: boolean;
	games: MainLeagueGames[];
};

export type MainLeagueGames = {
	categoryName: string;
	categoryId: 337;
	categorySlug: string;
	tournamentSlug: string;
	tournamentName: string;
	tournamentId: 5406;
	id: 3941713;
	slug: string;
	teams: string[];
	teamsOriginal: string[];
	liveDatetime: string;
	liveId: string | null;
	prematchId: number;
	prematchData: {
		id: number;
		passed: boolean;
		coof: string;
		old: string;
		score: number | null;
		betradar: number;
		coefficients: {
			1: number;
			2: number;
			x: number;
		};
		coefficientsOld: {
			1: number;
			2: number;
			x: number;
		};
		match_time: number;
		expired: boolean;
		status: string;
		team1: string;
		team2: string;
	};
	start_time: number;
	event_url: string;
	status: string;
	team_home: [
		{
			id: number | null;
			name: string;
		}
	];
	team_away: [
		{
			id: number | null;
			name: string;
		}
	];
	score: {
		team_home: number | null;
		team_away: number | null;
	};
	coefficient: {
		1: {
			old: number | null;
			new: number | null;
		};
		2: {
			old: number | null;
			new: number | null;
		};
		bookie: string;
		x: {
			old: number | null;
			new: number | null;
		};
	};
	betradar: 51270473;
};
