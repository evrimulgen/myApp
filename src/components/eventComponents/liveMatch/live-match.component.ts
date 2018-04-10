// Import component decorator
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Helpers } from '../../../app/util';
import { httpService } from '../../../services/httpService';

@Component({
  providers: [Helpers],
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.css']

})

// Component class
export class liveMatchComponent implements OnInit {
  errorMessage: string;
  announcement: string;
  courtWidth: number;
  maxWidth: number = 100;
  userFilter: any = { courtHash: 'abcd' };
  liveMatch: any[];
  liveMatchObj: any[];
  filterBy: string;
  timer: any;

  constructor(private _httpService: httpService,
    private _Helpers: Helpers) {
  };

  gotLiveMatchValue(value: any) {

    value = {
    "data": [
      {
        "matches": [
          {
            "event": {
              "eventHash": "0a040763-1e84-11e7-851b-00145e5d713a",
              "eventName": "BD U9",
              "eventId": 10422
            },
            "matchserial": 7,
            "participant1": "Pradeep Rajput",
            "participant2": "Nishant Rajput",
            "court": "bc8dbf79-8327-49e2-bc99-eb2401ea3e74",
            "roundName": "Final",
            "live": true,
            "seqNum": 1,
            "wo": 0,
            "setDetailList": [
              {
                "matchSerial": 7,
                "eventId": 10422,
                "team1": "Winner #5 - Tue 4/18/2017 7:30 PM",
                "team2": "Winner #6 - Tue 4/18/2017 7:30 PM",
                "refree": "Nishant",
                "setId": 2,
                "setNo": 1,
                "id": 6,
                "finishTime": 1492698246,
                "setScoreList": [
                  {
                    "team1Score": 1,
                    "team2Score": 0,
                    "pointTime": 1492686103,
                    "scoreId": 1
                  },
                  {
                    "team1Score": 2,
                    "team2Score": 0,
                    "pointTime": 1492686106,
                    "scoreId": 2
                  }
                ]
              },
              {
                "matchSerial": 7,
                "eventId": 10422,
                "team1": "Winner #5 - Tue 4/18/2017 7:30 PM",
                "team2": "Winner #6 - Tue 4/18/2017 7:30 PM",
                "refree": "Nishant",
                "setId": 9,
                "setNo": 2,
                "id": 20,
                "finishTime": 1492698723,
                "setScoreList": [
                  {
                    "team1Score": 1,
                    "team2Score": 0,
                    "pointTime": 1492698268,
                    "scoreId": 20
                  },
                  {
                    "team1Score": 2,
                    "team2Score": 0,
                    "pointTime": 1492698268,
                    "scoreId": 21
                  },
                  {
                    "team1Score": 3,
                    "team2Score": 0,
                    "pointTime": 1492698268,
                    "scoreId": 22
                  }
                ]
              },
              {
                "matchSerial": 7,
                "eventId": 10422,
                "team1": "Winner #5 - Tue 4/18/2017 7:30 PM",
                "team2": "Winner #6 - Tue 4/18/2017 7:30 PM",
                "refree": "Nishant",
                "setId": 10,
                "setNo": 3,
                "id": 25,
                "finishTime": 1492698738,
                "setScoreList": [
                  {
                    "team1Score": 0,
                    "team2Score": 1,
                    "pointTime": 1492698730,
                    "scoreId": 23
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 2,
                    "pointTime": 1492698730,
                    "scoreId": 24
                  }
                ]
              }
            ]
          },
          {
            "event": {
              "eventHash": "0a040763-1e84-11e7-851b-00145e5d713a",
              "eventName": "BD U9",
              "eventId": 10422
            },
            "matchserial": 2,
            "participant1": "Dakshay kumar Dakshay Singh+Param Param Chaudhary",
            "participant2": "Priyansh Priyansh Maan+Vansh Vansh Dev",
            "court": "bc8dbf79-8327-49e2-bc99-eb2401ea3e74",
            "roundName": "Quarter",
            "live": 0,
            "seqNum": 2,
            "wo": 0,
            "setDetailList": [
              {
                "matchSerial": 2,
                "eventId": 10422,
                "team1": "Dakshay kumar Dakshay Singh+Param Param Chaudhary",
                "team2": "Priyansh Priyansh Maan+Vansh Vansh Dev",
                "refree": "Nishant 2nd match",
                "setId": 13,
                "setNo": 1,
                "id": 31,
                "finishTime": 1492700760,
                "setScoreList": [
                  {
                    "team1Score": 1,
                    "team2Score": 0,
                    "pointTime": 1492700750,
                    "scoreId": 29
                  }
                ]
              },
              {
                "matchSerial": 2,
                "eventId": 10422,
                "team1": "Dakshay kumar Dakshay Singh+Param Param Chaudhary",
                "team2": "Priyansh Priyansh Maan+Vansh Vansh Dev",
                "refree": "Nishant 2nd match",
                "setId": 14,
                "setNo": 2,
                "id": 43,
                "finishTime": 1492700770,
                "setScoreList": [
                  {
                    "team1Score": 0,
                    "team2Score": 1,
                    "pointTime": 1492700766,
                    "scoreId": 37
                  }
                ]
              },
              {
                "matchSerial": 2,
                "eventId": 10422,
                "team1": "Dakshay kumar Dakshay Singh+Param Param Chaudhary",
                "team2": "Priyansh Priyansh Maan+Vansh Vansh Dev",
                "refree": "Nishant 2nd match",
                "setId": 15,
                "setNo": 3,
                "id": 45,
                "finishTime": 1492700787,
                "setScoreList": [
                  {
                    "team1Score": 1,
                    "team2Score": 0,
                    "pointTime": 1492700781,
                    "scoreId": 45
                  }
                ]
              }
            ]
          },
          {
            "event": {
              "eventHash": "38e6d0f7-1908-11e7-b685-00145e5d713a",
              "eventName": "BS U9",
              "eventId": 10420
            },
            "matchserial": 3,
            "participant1": "Nishant Nishant Rajput",
            "participant2": "Rajiv Mahajan",
            "court": "bc8dbf79-8327-49e2-bc99-eb2401ea3e74",
            "roundName": "Quarter",
            "live": 0,
            "seqNum": 3,
            "wo": true,
            "timestamp": 1492681583,
            "setDetailList": [
              {
                "matchSerial": 3,
                "eventId": 10420,
                "team1": "Nishant Nishant Rajput",
                "team2": "Rajiv Mahajan",
                "refree": "San Jay\n",
                "setId": 16,
                "setNo": 1,
                "id": 52,
                "finishTime": 1492700972,
                "setScoreList": [
                  {
                    "team1Score": 15,
                    "team2Score": 2,
                    "pointTime": 1492700959,
                    "scoreId": 65
                  },
                  {
                    "team1Score": 16,
                    "team2Score": 2,
                    "pointTime": 1492700960,
                    "scoreId": 66
                  }
                ]
              },
              {
                "matchSerial": 3,
                "eventId": 10420,
                "team1": "Nishant Nishant Rajput",
                "team2": "Rajiv Mahajan",
                "refree": "San Jay\n",
                "setId": 17,
                "setNo": 2,
                "id": 71,
                "finishTime": 1492700985,
                "setScoreList": [
                  {
                    "team1Score": 4,
                    "team2Score": 11,
                    "pointTime": 1492700982,
                    "scoreId": 81
                  },
                  {
                    "team1Score": 4,
                    "team2Score": 12,
                    "pointTime": 1492700982,
                    "scoreId": 82
                  }
                ]
              },
              {
                "matchSerial": 3,
                "eventId": 10420,
                "team1": "Nishant Nishant Rajput",
                "team2": "Rajiv Mahajan",
                "refree": "San Jay\n",
                "setId": 18,
                "setNo": 3,
                "id": null,
                "finishTime": 1492701017,
                "setScoreList": []
              },
              {
                "matchSerial": 3,
                "eventId": 10420,
                "team1": "Nishant Nishant Rajput",
                "team2": "Rajiv Mahajan",
                "refree": "San Jay\n",
                "setId": 19,
                "setNo": 4,
                "id": 84,
                "finishTime": 1492701032,
                "setScoreList": [
                  {
                    "team1Score": 5,
                    "team2Score": 8,
                    "pointTime": 1492701028,
                    "scoreId": 96
                  },
                  {
                    "team1Score": 5,
                    "team2Score": 9,
                    "pointTime": 1492701028,
                    "scoreId": 97
                  }
                ]
              }
            ]
          }
        ],
        "courtName": "YoGems Court 1",
        "courtHash": "bc8dbf79-8327-49e2-bc99-eb2401ea3e74"
      },
      {
        "matches": [
          {
            "event": {
              "eventHash": "5ac7d6c2-24c9-11e7-bf6c-00145e5d713a",
              "eventName": "BS U12",
              "eventId": 10424
            },
            "matchserial": 7,
            "participant1": "Aadhya Singh",
            "participant2": "Pari Singh",
            "court": "a41e7d80-8cd3-417e-a060-f4788b1aeaa2",
            "roundName": "Final",
            "live": true,
            "seqNum": 1,
            "wo": 0,
            "setDetailList": [
            ]
          },
          {
            "event": {
              "eventHash": "0a040763-1e84-11e7-851b-00145e5d713a",
              "eventName": "BD U9",
              "eventId": 10422
            },
            "matchserial": 3,
            "participant1": "Aditya Aditya Jha+Advik Advik Agarwal",
            "participant2": "Parth Parth Mahajan+Yash Yash Sharma",
            "court": "a41e7d80-8cd3-417e-a060-f4788b1aeaa2",
            "roundName": "Quarter",
            "live": 0,
            "seqNum": 2,
            "wo": true,
            "timestamp": 1492682833,
            "setDetailList": [
              {
                "matchSerial": 3,
                "eventId": 10422,
                "team1": "Aditya Aditya Jha+Advik Advik Agarwal",
                "team2": "Parth Parth Mahajan+Yash Yash Sharma",
                "refree": "Nishant with undo points",
                "setId": 22,
                "setNo": 1,
                "id": 127,
                "finishTime": 1492762146,
                "setScoreList": [
                  {
                    "team1Score": 1,
                    "team2Score": 0,
                    "pointTime": 1492762126,
                    "scoreId": 125
                  } 
                ]
              }
            ]
          },
          {
            "event": {
              "eventHash": "38e6d0f7-1908-11e7-b685-00145e5d713a",
              "eventName": "BS U9",
              "eventId": 10420
            },
            "matchserial": 4,
            "participant1": "Varun pathak Pathak",
            "participant2": "Rohit Singh Rohit Niranjan",
            "court": "a41e7d80-8cd3-417e-a060-f4788b1aeaa2",
            "roundName": "Quarter",
            "live": 0,
            "seqNum": 3,
            "wo": 0,
            "timestamp": 1492682831,
            "setDetailList": [
              {
                "matchSerial": 4,
                "eventId": 10420,
                "team1": "Varun pathak Pathak",
                "team2": "Rohit Singh Rohit Niranjan",
                "refree": null,
                "setId": 23,
                "setNo": 1,
                "id": 140,
                "finishTime": 1492763463,
                "setScoreList": [
                  {
                    "team1Score": 1,
                    "team2Score": 0,
                    "pointTime": 1492763451,
                    "scoreId": 132
                  },
                  {
                    "team1Score": 2,
                    "team2Score": 0,
                    "pointTime": 1492763451,
                    "scoreId": 133
                  },
                  {
                    "team1Score": 3,
                    "team2Score": 0,
                    "pointTime": 1492763456,
                    "scoreId": 134
                  },
                  {
                    "team1Score": 4,
                    "team2Score": 0,
                    "pointTime": 1492763456,
                    "scoreId": 135
                  },
                  {
                    "team1Score": 5,
                    "team2Score": 0,
                    "pointTime": 1492763457,
                    "scoreId": 136
                  },
                  {
                    "team1Score": 6,
                    "team2Score": 0,
                    "pointTime": 1492763457,
                    "scoreId": 137
                  },
                  {
                    "team1Score": 7,
                    "team2Score": 0,
                    "pointTime": 1492763457,
                    "scoreId": 138
                  },
                  {
                    "team1Score": 7,
                    "team2Score": 1,
                    "pointTime": 1492763458,
                    "scoreId": 139
                  },
                  {
                    "team1Score": 7,
                    "team2Score": 2,
                    "pointTime": 1492763458,
                    "scoreId": 140
                  },
                  {
                    "team1Score": 7,
                    "team2Score": 3,
                    "pointTime": 1492763459,
                    "scoreId": 141
                  },
                  {
                    "team1Score": 7,
                    "team2Score": 4,
                    "pointTime": 1492763459,
                    "scoreId": 142
                  },
                  {
                    "team1Score": 7,
                    "team2Score": 3,
                    "pointTime": 1492763461,
                    "scoreId": 143
                  }
                ]
              },
              {
                "matchSerial": 4,
                "eventId": 10420,
                "team1": "Varun pathak Pathak",
                "team2": "Rohit Singh Rohit Niranjan",
                "refree": null,
                "setId": 24,
                "setNo": 2,
                "id": 146,
                "finishTime": 1492763470,
                "setScoreList": [
                  {
                    "team1Score": 0,
                    "team2Score": 1,
                    "pointTime": 1492763466,
                    "scoreId": 144
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 2,
                    "pointTime": 1492763467,
                    "scoreId": 145
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 3,
                    "pointTime": 1492763467,
                    "scoreId": 146
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 4,
                    "pointTime": 1492763467,
                    "scoreId": 147
                  }
                ]
              },
              {
                "matchSerial": 4,
                "eventId": 10420,
                "team1": "Varun pathak Pathak",
                "team2": "Rohit Singh Rohit Niranjan",
                "refree": null,
                "setId": 25,
                "setNo": 3,
                "id": 148,
                "finishTime": 1492763539,
                "setScoreList": [
                  {
                    "team1Score": 0,
                    "team2Score": 1,
                    "pointTime": 1492763534,
                    "scoreId": 148
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 2,
                    "pointTime": 1492763535,
                    "scoreId": 149
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 3,
                    "pointTime": 1492763535,
                    "scoreId": 150
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 4,
                    "pointTime": 1492763535,
                    "scoreId": 151
                  }
                ]
              }
            ]
          }
        ],
        "courtName": "YoGems Court 2",
        "courtHash": "a41e7d80-8cd3-417e-a060-f4788b1aeaa2"
      },
      {
        "matches": [],
        "courtName": "YoGems Court 3",
        "courtHash": "500bf51d-6562-4318-bd3d-f1b8e256e11f"
      },
      {
        "matches": [
          {
            "event": {
              "eventHash": "38e6d0f7-1908-11e7-b685-00145e5d713a",
              "eventName": "BS U9",
              "eventId": 10420
            },
            "matchserial": 7,
            "participant1": "Sanjay G",
            "participant2": "Nishant R",
            "court": "74575be9-fdd6-41ca-94c2-37eff3398dd8",
            "roundName": "Final",
            "live": true,
            "seqNum": 1,
            "wo": 0,
            "setDetailList": [
              {
                "matchSerial": 7,
                "eventId": 10420,
                "team1": "Winner #5 - Tue 4/18/2017 3:30 PM",
                "team2": "Winner #6 - Tue 4/18/2017 3:30 PM",
                "refree": "rohit\n",
                "setId": 26,
                "setNo": 1,
                "id": 163,
                "finishTime": 1492771552,
                "setScoreList": [
                  {
                    "team1Score": 10,
                    "team2Score": 5,
                    "pointTime": 1492771509,
                    "scoreId": 176
                  },
                  {
                    "team1Score": 10,
                    "team2Score": 6,
                    "pointTime": 1492771509,
                    "scoreId": 177
                  },
                  {
                    "team1Score": 11,
                    "team2Score": 6,
                    "pointTime": 1492771510,
                    "scoreId": 178
                  }
                ]
              },
              {
                "matchSerial": 7,
                "eventId": 10420,
                "team1": "Winner #5 - Tue 4/18/2017 3:30 PM",
                "team2": "Winner #6 - Tue 4/18/2017 3:30 PM",
                "refree": "rohit\n",
                "setId": 27,
                "setNo": 2,
                "id": 182,
                "finishTime": 1492771578,
                "setScoreList": [
                  {
                    "team1Score": 8,
                    "team2Score": 11,
                    "pointTime": 1492771566,
                    "scoreId": 197
                  },
                  {
                    "team1Score": 9,
                    "team2Score": 11,
                    "pointTime": 1492771567,
                    "scoreId": 198
                  }
                ]
              },
              {
                "matchSerial": 7,
                "eventId": 10420,
                "team1": "Winner #5 - Tue 4/18/2017 3:30 PM",
                "team2": "Winner #6 - Tue 4/18/2017 3:30 PM",
                "refree": "rohit\n",
                "setId": 28,
                "setNo": 3,
                "id": 214,
                "finishTime": 1492771614,
                "setScoreList": [
                  {
                    "team1Score": 11,
                    "team2Score": 11,
                    "pointTime": 1492771589,
                    "scoreId": 220
                  },
                  {
                    "team1Score": 11,
                    "team2Score": 10,
                    "pointTime": 1492771608,
                    "scoreId": 221
                  }
                ]
              },
              {
                "matchSerial": 7,
                "eventId": 10420,
                "team1": "Winner #5 - Tue 4/18/2017 3:30 PM",
                "team2": "Winner #6 - Tue 4/18/2017 3:30 PM",
                "refree": "rohit\n",
                "setId": 29,
                "setNo": 4,
                "id": 246,
                "finishTime": 1492771642,
                "setScoreList": [
                  {
                    "team1Score": 6,
                    "team2Score": 10,
                    "pointTime": 1492771639,
                    "scoreId": 249
                  },
                  {
                    "team1Score": 6,
                    "team2Score": 11,
                    "pointTime": 1492771639,
                    "scoreId": 250
                  }
                ]
              },
              {
                "matchSerial": 7,
                "eventId": 10420,
                "team1": "Winner #5 - Tue 4/18/2017 3:30 PM",
                "team2": "Winner #6 - Tue 4/18/2017 3:30 PM",
                "refree": "rohit\n",
                "setId": 30,
                "setNo": 5,
                "id": 259,
                "finishTime": 1492771655,
                "setScoreList": [
                  {
                    "team1Score": 9,
                    "team2Score": 10,
                    "pointTime": 1492771650,
                    "scoreId": 269
                  },
                  {
                    "team1Score": 10,
                    "team2Score": 10,
                    "pointTime": 1492771650,
                    "scoreId": 270
                  }
                ]
              }
            ]
          },
          {
            "event": {
              "eventHash": "38e6d0f7-1908-11e7-b685-00145e5d713a",
              "eventName": "BS U9",
              "eventId": 10420
            },
            "matchserial": 2,
            "participant1": "Sanjay1 prasad1",
            "participant2": "Puneet Mathur",
            "court": "74575be9-fdd6-41ca-94c2-37eff3398dd8",
            "roundName": "Quarter",
            "live": 0,
            "seqNum": 2,
            "wo": true,
            "timestamp": 1492681604,
            "setDetailList": [
              {
                "matchSerial": 2,
                "eventId": 10420,
                "team1": "Sanjay1 prasad1 Sanjay1 Gairola1",
                "team2": "Puneet Puneet Mathur",
                "refree": "praadep\n",
                "setId": 31,
                "setNo": 1,
                "id": 271,
                "finishTime": 1492771860,
                "setScoreList": [
                  {
                    "team1Score": 0,
                    "team2Score": 3,
                    "pointTime": 1492771745,
                    "scoreId": 273
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 4,
                    "pointTime": 1492771745,
                    "scoreId": 274
                  }
                ]
              },
              {
                "matchSerial": 2,
                "eventId": 10420,
                "team1": "Sanjay1 prasad1 Sanjay1 Gairola1",
                "team2": "Puneet Puneet Mathur",
                "refree": "praadep\n",
                "setId": 33,
                "setNo": 2,
                "id": 277,
                "finishTime": 1492771995,
                "setScoreList": [
                  {
                    "team1Score": 1,
                    "team2Score": 1,
                    "pointTime": 1492771954,
                    "scoreId": 276
                  },
                  {
                    "team1Score": 0,
                    "team2Score": 1,
                    "pointTime": 1492771958,
                    "scoreId": 277
                  }
                ]
              },
              {
                "matchSerial": 2,
                "eventId": 10420,
                "team1": "Sanjay1 prasad1 Sanjay1 Gairola1",
                "team2": "Puneet Puneet Mathur",
                "refree": "praadep\n",
                "setId": 34,
                "setNo": 3,
                "id": 283,
                "finishTime": 1492772200,
                "setScoreList": [
                  {
                    "team1Score": 10,
                    "team2Score": 5,
                    "pointTime": 1492772181,
                    "scoreId": 292
                  },
                  {
                    "team1Score": 10,
                    "team2Score": 6,
                    "pointTime": 1492772181,
                    "scoreId": 293
                  }
                ]
              },
              {
                "matchSerial": 2,
                "eventId": 10420,
                "team1": "Sanjay1 prasad1 Sanjay1 Gairola1",
                "team2": "Puneet Puneet Mathur",
                "refree": "praadep\n",
                "setId": 35,
                "setNo": 4,
                "id": null,
                "finishTime": 1492772332,
                "setScoreList": []
              }
            ]
          },
          {
            "event": {
              "eventHash": "be743275-1905-11e7-b685-00145e5d713a",
              "eventName": "BS U7",
              "eventId": 10418
            },
            "matchserial": 3,
            "participant1": "Rohit Singh Rohit Niranjan",
            "participant2": "Sanjay1 prasad1 Sanjay1 Gairola1",
            "court": "74575be9-fdd6-41ca-94c2-37eff3398dd8",
            "roundName": "Quarter-Finals",
            "live": 0,
            "seqNum": 3,
            "wo": 0,
            "timestamp": 1492681590,
            "setDetailList": [
              {
                "matchSerial": 3,
                "eventId": 10418,
                "team1": "Rohit Singh Rohit Niranjan",
                "team2": "Sanjay1 prasad1 Sanjay1 Gairola1",
                "refree": "pradeep ",
                "setId": 32,
                "setNo": 1,
                "id": 302,
                "finishTime": 1492772453,
                "setScoreList": [
                  {
                    "team1Score": 4,
                    "team2Score": 4,
                    "pointTime": 1492772449,
                    "scoreId": 301
                  },
                  {
                    "team1Score": 5,
                    "team2Score": 4,
                    "pointTime": 1492772451,
                    "scoreId": 302
                  }
                ]
              },
              {
                "matchSerial": 3,
                "eventId": 10418,
                "team1": "Rohit Singh Rohit Niranjan",
                "team2": "Sanjay1 prasad1 Sanjay1 Gairola1",
                "refree": "pradeep ",
                "setId": 36,
                "setNo": 2,
                "id": 308,
                "finishTime": 1492772472,
                "setScoreList": [
                  {
                    "team1Score": 4,
                    "team2Score": 2,
                    "pointTime": 1492772470,
                    "scoreId": 310
                  },
                  {
                    "team1Score": 4,
                    "team2Score": 3,
                    "pointTime": 1492772470,
                    "scoreId": 311
                  }
                ]
              },
              {
                "matchSerial": 3,
                "eventId": 10418,
                "team1": "Rohit Singh Rohit Niranjan",
                "team2": "Sanjay1 prasad1 Sanjay1 Gairola1",
                "refree": "pradeep ",
                "setId": 37,
                "setNo": 3,
                "id": 321,
                "finishTime": 1492772484,
                "setScoreList": [
                  {
                    "team1Score": 6,
                    "team2Score": 4,
                    "pointTime": 1492772481,
                    "scoreId": 323
                  },
                  {
                    "team1Score": 6,
                    "team2Score": 5,
                    "pointTime": 1492772481,
                    "scoreId": 324
                  }
                ]
              },
              {
                "matchSerial": 3,
                "eventId": 10418,
                "team1": "Rohit Singh Rohit Niranjan",
                "team2": "Sanjay1 prasad1 Sanjay1 Gairola1",
                "refree": "pradeep ",
                "setId": 38,
                "setNo": 4,
                "id": null,
                "finishTime": 1492772490,
                "setScoreList": []
              }
            ]
          }
        ],
        "courtName": "YoGems Court 4",
        "courtHash": "74575be9-fdd6-41ca-94c2-37eff3398dd8"
      }
    ]
    };


    console.log(value);


    this.liveMatch = value.data;

    if (this.liveMatch && this.liveMatch.length) {
      switch (this.liveMatch.length) {
        case 1:
          this.courtWidth = 100;
          break;
        case 2:
          this.courtWidth = 48.5;
          break;
        case 3:
          this.courtWidth = 31.33;
          break;
        case 4:
          this.courtWidth = 25;
          break;
        case 5:
          this.courtWidth = 18.5;
          break;
        case 6:
          this.courtWidth = 15.1;
          break;
      }
    }
    // this.announcement = value.announcementText;
    this.announcement = 'Welcome all...!';
    // code for apply code of walkoverFunctionality.


    value.data.forEach(function(court) {
      court.matches.forEach(function(match) {
        if (match.wo) {
          var walkoverTimeInSec = 600;
          var secondsPassed = (Math.floor(Date.now() / 1000) - match.timestamp);
          var secondsLeft = walkoverTimeInSec - secondsPassed;
          if (secondsLeft > 0)
            match.minutesLeft = Math.ceil(secondsLeft / 60);
          else
            match.minutesLeft = null;
        }
        if (match.setDetailList) {
          var matchScore = "";
          var team1FinalScore = "";
          var team2FinalScore = "";
          var isFirst = true;
          match.setDetailList.forEach(function(set) {
            // Pick the last score form all the points given in this set.
            var isSetPlayed = set.setScoreList.length > 0;
            if (!isSetPlayed)
              return;

            var lastPoint = set.setScoreList[set.setScoreList.length - 1];
            var setPoint = lastPoint.team1Score + "-" + lastPoint.team2Score;
            matchScore += isFirst ? setPoint : " | " + setPoint;

            team1FinalScore += isFirst ? lastPoint.team1Score : " - "+lastPoint.team1Score ;
            team2FinalScore += isFirst ? lastPoint.team2Score : " - "+lastPoint.team2Score ;

            isFirst = false;
          });
           match.team1FinalScore = team1FinalScore;
           match.team2FinalScore = team2FinalScore;
          match.matchScore = matchScore;
        }
      });
    });



    this.timer = setInterval(() => {
      console.log('Interval calling on every 5th second.');
      clearInterval(this.timer);
      // this.getLiveMatchData();
    }, 5000);

  };



  getLiveMatchData() {
    var url = this._Helpers.prodAPIForLiveMatch;
    this._httpService.get(url, {})
      .subscribe(liveMatchObj => (this.gotLiveMatchValue(liveMatchObj)),
      // error => this.errorMessage = <any>error
      error => console.log(error)
      );
  };

  ngOnInit(): void {
    this.getLiveMatchData();
  }
}
