interface Media {
    thumbnail_path: string | null;
    path: string | null;
  }
  
  interface Group {
    id: number | null;
    name: string | null;
    position: number | null;
    round?: string | null;
  }
  
  interface Team {
    id: number;
    name: string;
    flag: string;
    score: number;
    penalties: number | null;
    paid: boolean;
    is_did_not_attend: number;
    group: Group;
    parent_fixture_id: number | null;
  }
  
  interface Tournament {
    id: number;
    name: string;
    type: string;
    level: string;
    season: string;
  }
  
  export interface Match {
    id: number;
    stage: string;
    level: string;
    date: string;
    status: string;
    media: Media;
    home_team: Team;
    away_team: Team;
    group: Group;
    tournament: Tournament;
  }
  
  interface SoccerBracketData {
    status: boolean;
    data: Match[];
  }
  
  export const SampleSoccerBracketData: SoccerBracketData = {
    status: true,
    data: [
      
      {
        id: 398,
        stage: "KNOCKOUT",
        level: "QUARTER_FINAL",
        date: "2024-02-24 19:00:00",
        status: "APPROVED",
        media: {
          thumbnail_path: null,
          path: null,
        },
        home_team: {
          id: 110736,
          name: "Mexico",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417214.mexicopng.png",
          score: 4,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: 39,
            name: "Group A",
            position: 1,
          },
          parent_fixture_id: null,
        },
        away_team: {
          id: 110749,
          name: "England",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459415401.englandpng.png",
          score: 2,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: 42,
            name: "Group D",
            position: 2,
          },
          parent_fixture_id: null,
        },
        group: {
          id: null,
          name: null,
          round: null,
          position: null,
        },
        tournament: {
          id: 7,
          name: "Socca Copa Americaâ€™s Cup",
          type: "TOURNAMENT",
          level: "INTERNATIONAL",
          season: "2022",
        },
      },
      {
        id: 399,
        stage: "KNOCKOUT",
        level: "QUARTER_FINAL",
        date: "2024-02-24 20:00:00",
        status: "APPROVED",
        media: {
          thumbnail_path: null,
          path: null,
        },
        home_team: {
          id: 110740,
          name: "Colombia",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417167.colombiapng.png",
          score: 3,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: 40,
            name: "Group B",
            position: 1,
          },
          parent_fixture_id: null,
        },
        away_team: {
          id: 110745,
          name: "Ecuador",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417207.ecuadorpng.png",
          score: 2,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: 41,
            name: "Group C",
            position: 2,
          },
          parent_fixture_id: null,
        },
        group: {
          id: null,
          name: null,
          round: null,
          position: null,
        },
        tournament: {
          id: 7,
          name: "Socca Copa Americaâ€™s Cup",
          type: "TOURNAMENT",
          level: "INTERNATIONAL",
          season: "2022",
        },
      },
      {
        id: 400,
        stage: "KNOCKOUT",
        level: "QUARTER_FINAL",
        date: "2024-02-24 21:00:00",
        status: "APPROVED",
        media: {
          thumbnail_path: null,
          path: null,
        },
        home_team: {
          id: 110744,
          name: "USA",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1476889098.1459417208united-statespngpng.png",
          score: 1,
          penalties: 4,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: 41,
            name: "Group C",
            position: 1,
          },
          parent_fixture_id: null,
        },
        away_team: {
          id: 110741,
          name: "Chile",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417204.chilepng.png",
          score: 1,
          penalties: 2,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: 40,
            name: "Group B",
            position: 2,
          },
          parent_fixture_id: null,
        },
        group: {
          id: null,
          name: null,
          round: null,
          position: null,
        },
        tournament: {
          id: 7,
          name: "Socca Copa Americaâ€™s Cup",
          type: "TOURNAMENT",
          level: "INTERNATIONAL",
          season: "2022",
        },
      },
      {
        id: 401,
        stage: "KNOCKOUT",
        level: "QUARTER_FINAL",
        date: "2024-02-24 22:00:00",
        status: "APPROVED",
        media: {
          thumbnail_path: null,
          path: null,
        },
        home_team: {
          id: 110748,
          name: "Argentina",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459416000.argentinapng.png",
          score: 1,
          penalties: 1,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: 42,
            name: "Group D",
            position: 1,
          },
          parent_fixture_id: null,
        },
        away_team: {
          id: 110737,
          name: "Hungary",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417213.hungarypng.png",
          score: 1,
          penalties: 3,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: 39,
            name: "Group A",
            position: 2,
          },
          parent_fixture_id: null,
        },
        group: {
          id: null,
          name: null,
          round: null,
          position: null,
        },
        tournament: {
          id: 7,
          name: "Socca Copa Americaâ€™s Cup",
          type: "TOURNAMENT",
          level: "INTERNATIONAL",
          season: "2022",
        },
      },
      {
        id: 402,
        stage: "KNOCKOUT",
        level: "SEMI_FINAL",
        date: "2024-02-25 10:00:00",
        status: "APPROVED",
        media: {
          thumbnail_path: null,
          path: null,
        },
        home_team: {
          id: 110736,
          name: "Mexico",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417214.mexicopng.png",
          score: 5,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: null,
            name: null,
            position: null,
          },
          parent_fixture_id: 97,
        },
        away_team: {
          id: 110740,
          name: "Colombia",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417167.colombiapng.png",
          score: 1,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: null,
            name: null,
            position: null,
          },
          parent_fixture_id: 98,
        },
        group: {
          id: null,
          name: null,
          round: null,
          position: null,
        },
        tournament: {
          id: 7,
          name: "Socca Copa Americaâ€™s Cup",
          type: "TOURNAMENT",
          level: "INTERNATIONAL",
          season: "2022",
        },
      },
      
      {
        id: 403,
        stage: "KNOCKOUT",
        level: "SEMI_FINAL",
        date: "2024-02-25 11:00:00",
        status: "APPROVED",
        media: {
          thumbnail_path: null,
          path: null,
        },
        home_team: {
          id: 110744,
          name: "USA",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1476889098.1459417208united-statespngpng.png",
          score: 6,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: null,
            name: null,
            position: null,
          },
          parent_fixture_id: 99,
        },
        away_team: {
          id: 110737,
          name: "Hungary",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417213.hungarypng.png",
          score: 2,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: null,
            name: null,
            position: null,
          },
          parent_fixture_id: 100,
        },
        group: {
          id: null,
          name: null,
          round: null,
          position: null,
        },
        tournament: {
          id: 7,
          name: "Socca Copa Americaâ€™s Cup",
          type: "TOURNAMENT",
          level: "INTERNATIONAL",
          season: "2022",
        },
      },
      {
        id: 404,
        stage: "KNOCKOUT",
        level: "THIRD_PLACE",
        date: "2024-02-25 17:30:00",
        status: "APPROVED",
        media: {
          thumbnail_path: null,
          path: null,
        },
        home_team: {
          id: 110740,
          name: "Colombia",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417167.colombiapng.png",
          score: 1,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: null,
            name: null,
            position: null,
          },
          parent_fixture_id: 101,
        },
        away_team: {
          id: 110737,
          name: "Hungary",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417213.hungarypng.png",
          score: 2,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: null,
            name: null,
            position: null,
          },
          parent_fixture_id: 102,
        },
        group: {
          id: null,
          name: null,
          round: null,
          position: null,
        },
        tournament: {
          id: 7,
          name: "Socca Copa Americaâ€™s Cup",
          type: "TOURNAMENT",
          level: "INTERNATIONAL",
          season: "2022",
        },
      },
      {
        id: 405,
        stage: "KNOCKOUT",
        level: "FINAL",
        date: "2024-02-25 19:00:00",
        status: "APPROVED",
        media: {
          thumbnail_path: null,
          path: null,
        },
        home_team: {
          id: 110736,
          name: "Mexico",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1459417214.mexicopng.png",
          score: 2,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: null,
            name: null,
            position: null,
          },
          parent_fixture_id: 101,
        },
        away_team: {
          id: 110744,
          name: "USA",
          flag: "https://d393ynejnklmr1.cloudfront.net/media/flags/1476889098.1459417208united-statespngpng.png",
          score: 0,
          penalties: null,
          paid: true,
          is_did_not_attend: 0,
          group: {
            id: null,
            name: null,
            position: null,
          },
          parent_fixture_id: 102,
        },
        group: {
          id: null,
          name: null,
          round: null,
          position: null,
        },
        tournament: {
          id: 7,
          name: "Socca Copa Americaâ€™s Cup",
          type: "TOURNAMENT",
          level: "INTERNATIONAL",
          season: "2022",
        },
      },
    ],
  };
  
  