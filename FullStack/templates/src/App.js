import React from 'react';
import './App.css';
import { Col, Steps, Row } from 'antd';
import axios from 'axios';

const { Step } = Steps;

// const jsonResponse = {
//   "annotation_results": [
//     {
//       "input_uri": "/dubhacks-input-videos/robberyvideo.mp4",
//       "segment": {
//         "start_time_offset": {},
//         "end_time_offset": {
//           "seconds": 72,
//           "nanos": 614208000
//         }
//       },
//       "segment_label_annotations": [
//         {
//           "entity": {
//             "entity_id": "/m/034qg",
//             "description": "firearm",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/083kb",
//               "description": "weapon",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 72,
//                   "nanos": 614208000
//                 }
//               },
//               "confidence": 0.4754827
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/02vxn",
//             "description": "film",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/02jjt",
//               "description": "entertainment",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 72,
//                   "nanos": 614208000
//                 }
//               },
//               "confidence": 0.87653857
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/099md",
//             "description": "soldier",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/01g317",
//               "description": "person",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 72,
//                   "nanos": 614208000
//                 }
//               },
//               "confidence": 0.55957061
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/01h6rj",
//             "description": "military",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/0qb7t",
//               "description": "organization",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 72,
//                   "nanos": 614208000
//                 }
//               },
//               "confidence": 0.51413631
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/032rk",
//             "description": "gun",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/083kb",
//               "description": "weapon",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 72,
//                   "nanos": 614208000
//                 }
//               },
//               "confidence": 0.49134311
//             }
//           ]
//         }
//       ],
//       "shot_label_annotations": [
//         {
//           "entity": {
//             "entity_id": "/m/0h8lhq_",
//             "description": "automotive window part",
//             "language_code": "en-US"
//           },
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.31944063
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/01h6rj",
//             "description": "military",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/0qb7t",
//               "description": "organization",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 11,
//                   "nanos": 678333000
//                 },
//                 "end_time_offset": {
//                   "seconds": 14,
//                   "nanos": 180833000
//                 }
//               },
//               "confidence": 0.65232426
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 50,
//                   "nanos": 800750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 53,
//                   "nanos": 762041000
//                 }
//               },
//               "confidence": 0.52992386
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 62,
//                   "nanos": 854458000
//                 },
//                 "end_time_offset": {
//                   "seconds": 66,
//                   "nanos": 608208000
//                 }
//               },
//               "confidence": 0.34826669
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 66,
//                   "nanos": 649916000
//                 },
//                 "end_time_offset": {
//                   "seconds": 71,
//                   "nanos": 488083000
//                 }
//               },
//               "confidence": 0.66312116
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/032rk",
//             "description": "gun",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/083kb",
//               "description": "weapon",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 22,
//                   "nanos": 897875000
//                 },
//                 "end_time_offset": {
//                   "seconds": 27,
//                   "nanos": 694333000
//                 }
//               },
//               "confidence": 0.89792562
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 30,
//                   "nanos": 321958000
//                 },
//                 "end_time_offset": {
//                   "seconds": 34,
//                   "nanos": 242541000
//                 }
//               },
//               "confidence": 0.90679085
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 38,
//                   "nanos": 413375000
//                 },
//                 "end_time_offset": {
//                   "seconds": 44,
//                   "nanos": 586208000
//                 }
//               },
//               "confidence": 0.79332983
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 50,
//                   "nanos": 800750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 53,
//                   "nanos": 762041000
//                 }
//               },
//               "confidence": 0.8626622
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/039jq",
//             "description": "glass",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/01l0y0",
//               "description": "material",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.75189441
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/0179ss",
//             "description": "airsoft",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/071rm",
//               "description": "shooting",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 30,
//                   "nanos": 321958000
//                 },
//                 "end_time_offset": {
//                   "seconds": 34,
//                   "nanos": 242541000
//                 }
//               },
//               "confidence": 0.54665184
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/01lrnl",
//             "description": "windshield",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/039jq",
//               "description": "glass",
//               "language_code": "en-US"
//             },
//             {
//               "entity_id": "/m/0d4v4",
//               "description": "window",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.43099567
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/08dz3q",
//             "description": "auto part",
//             "language_code": "en-US"
//           },
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.79511476
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/02vxn",
//             "description": "film",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/02jjt",
//               "description": "entertainment",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 66,
//                   "nanos": 649916000
//                 },
//                 "end_time_offset": {
//                   "seconds": 71,
//                   "nanos": 488083000
//                 }
//               },
//               "confidence": 0.88317996
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/02y3rj",
//             "description": "presentation",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/01g317",
//               "description": "person",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 44,
//                   "nanos": 627916000
//                 },
//                 "end_time_offset": {
//                   "seconds": 49,
//                   "nanos": 549500000
//                 }
//               },
//               "confidence": 0.51930588
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 55,
//                   "nanos": 96708000
//                 },
//                 "end_time_offset": {
//                   "seconds": 57,
//                   "nanos": 849458000
//                 }
//               },
//               "confidence": 0.60417724
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/07yv9",
//             "description": "vehicle",
//             "language_code": "en-US"
//           },
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 3,
//                   "nanos": 712041000
//                 }
//               },
//               "confidence": 0.80047691
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.45971599
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/0k4j",
//             "description": "car",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/07yv9",
//               "description": "vehicle",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 3,
//                   "nanos": 712041000
//                 }
//               },
//               "confidence": 0.56689268
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.81989866
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/03hdbf",
//             "description": "trailer",
//             "language_code": "en-US"
//           },
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 66,
//                   "nanos": 649916000
//                 },
//                 "end_time_offset": {
//                   "seconds": 71,
//                   "nanos": 488083000
//                 }
//               },
//               "confidence": 0.34183857
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/083kb",
//             "description": "weapon",
//             "language_code": "en-US"
//           },
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 22,
//                   "nanos": 897875000
//                 },
//                 "end_time_offset": {
//                   "seconds": 27,
//                   "nanos": 694333000
//                 }
//               },
//               "confidence": 0.4767186
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 30,
//                   "nanos": 321958000
//                 },
//                 "end_time_offset": {
//                   "seconds": 34,
//                   "nanos": 242541000
//                 }
//               },
//               "confidence": 0.32412639
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 38,
//                   "nanos": 413375000
//                 },
//                 "end_time_offset": {
//                   "seconds": 44,
//                   "nanos": 586208000
//                 }
//               },
//               "confidence": 0.57341635
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/012f08",
//             "description": "motor vehicle",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/07yv9",
//               "description": "vehicle",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 3,
//                   "nanos": 712041000
//                 }
//               },
//               "confidence": 0.89739752
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.73949987
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/01vx2h",
//             "description": "visual effects",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/01g317",
//               "description": "person",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 3,
//                   "nanos": 712041000
//                 }
//               },
//               "confidence": 0.64143354
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.46846008
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/01prls",
//             "description": "land vehicle",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/07yv9",
//               "description": "vehicle",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {},
//                 "end_time_offset": {
//                   "seconds": 3,
//                   "nanos": 712041000
//                 }
//               },
//               "confidence": 0.72199172
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.43384275
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/02mk9",
//             "description": "engine",
//             "language_code": "en-US"
//           },
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 3,
//                   "nanos": 753750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 8,
//                   "nanos": 258250000
//                 }
//               },
//               "confidence": 0.57819736
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/034qg",
//             "description": "firearm",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/083kb",
//               "description": "weapon",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 22,
//                   "nanos": 897875000
//                 },
//                 "end_time_offset": {
//                   "seconds": 27,
//                   "nanos": 694333000
//                 }
//               },
//               "confidence": 0.4754827
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 30,
//                   "nanos": 321958000
//                 },
//                 "end_time_offset": {
//                   "seconds": 34,
//                   "nanos": 242541000
//                 }
//               },
//               "confidence": 0.83363026
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 38,
//                   "nanos": 413375000
//                 },
//                 "end_time_offset": {
//                   "seconds": 44,
//                   "nanos": 586208000
//                 }
//               },
//               "confidence": 0.4754827
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 50,
//                   "nanos": 800750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 53,
//                   "nanos": 762041000
//                 }
//               },
//               "confidence": 0.50916564
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/06c54",
//             "description": "rifle",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/032rk",
//               "description": "gun",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 22,
//                   "nanos": 897875000
//                 },
//                 "end_time_offset": {
//                   "seconds": 27,
//                   "nanos": 694333000
//                 }
//               },
//               "confidence": 0.48834488
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 38,
//                   "nanos": 413375000
//                 },
//                 "end_time_offset": {
//                   "seconds": 44,
//                   "nanos": 586208000
//                 }
//               },
//               "confidence": 0.40462449
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 50,
//                   "nanos": 800750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 53,
//                   "nanos": 762041000
//                 }
//               },
//               "confidence": 0.33560535
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/071rm",
//             "description": "shooting",
//             "language_code": "en-US"
//           },
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 22,
//                   "nanos": 897875000
//                 },
//                 "end_time_offset": {
//                   "seconds": 27,
//                   "nanos": 694333000
//                 }
//               },
//               "confidence": 0.75530207
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 30,
//                   "nanos": 321958000
//                 },
//                 "end_time_offset": {
//                   "seconds": 34,
//                   "nanos": 242541000
//                 }
//               },
//               "confidence": 0.75530207
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 38,
//                   "nanos": 413375000
//                 },
//                 "end_time_offset": {
//                   "seconds": 44,
//                   "nanos": 586208000
//                 }
//               },
//               "confidence": 0.70444769
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 50,
//                   "nanos": 800750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 53,
//                   "nanos": 762041000
//                 }
//               },
//               "confidence": 0.39277288
//             }
//           ]
//         },
//         {
//           "entity": {
//             "entity_id": "/m/099md",
//             "description": "soldier",
//             "language_code": "en-US"
//           },
//           "category_entities": [
//             {
//               "entity_id": "/m/01g317",
//               "description": "person",
//               "language_code": "en-US"
//             }
//           ],
//           "segments": [
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 30,
//                   "nanos": 321958000
//                 },
//                 "end_time_offset": {
//                   "seconds": 34,
//                   "nanos": 242541000
//                 }
//               },
//               "confidence": 0.30679631
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 50,
//                   "nanos": 800750000
//                 },
//                 "end_time_offset": {
//                   "seconds": 53,
//                   "nanos": 762041000
//                 }
//               },
//               "confidence": 0.39555123
//             },
//             {
//               "segment": {
//                 "start_time_offset": {
//                   "seconds": 66,
//                   "nanos": 649916000
//                 },
//                 "end_time_offset": {
//                   "seconds": 71,
//                   "nanos": 488083000
//                 }
//               },
//               "confidence": 0.69805491
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

class App extends React.Component {
  state = {
    current: 0,
    filteredResonse: {}
  };

  filteredResponse = {};

  onChange = current => {
    this.setState({ current });
  };

  onClick = e => {
    e.preventDefault();
    axios.get("https://us-central1-dubhacks2019-255801.cloudfunctions.net/performVideoIntelligence");
  }

  sendGoogleAPICall = () => {
    // send call to google API
    axios.get("https://us-central1-dubhacks2019-255801.cloudfunctions.net/intelligenceResponse")
      .then(jsonResponse => {
        jsonResponse = jsonResponse.data;
        this.filterResponse(jsonResponse);
        this.filteredResponse = jsonResponse;
      })
      .catch(error => {
        console.log(error);
      });
  }

  filterResponse(jsonResponse) {
    let newarr = [];
    newarr.push(jsonResponse['annotation_results'][0].segment_label_annotations);
    newarr.push(jsonResponse['annotation_results'][0].shot_label_annotations);

    let dangers = [];

    for (var i = 0; i < jsonResponse['annotation_results'][0].segment_label_annotations.length; i++) {
      if (jsonResponse['annotation_results'][0].segment_label_annotations[i]['entity']['description'] === 'gun' || jsonResponse['annotation_results'][0].segment_label_annotations[i]['entity']['description'] === 'firearm') {
        dangers.push(jsonResponse['annotation_results'][0].segment_label_annotations[i]['entity']['description']);
      }
    }

    let minSeconds = 112, maxSeconds = 0;
    for (i = 0; i < jsonResponse['annotation_results'][0].shot_label_annotations.length; i++) {
      if (jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description'] === 'gun' || jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description'] === 'firearm' || jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description'] === 'airsoft' || jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description'] === 'weapon' || jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description'] === 'rifle') {
        jsonResponse['annotation_results'][0].shot_label_annotations[i]['segments'].map(($,_) => { 
          if ($['segment']['start_time_offset']['seconds'] < minSeconds) {
            minSeconds = $['segment']['start_time_offset']['seconds'];
          } 
        });

        jsonResponse['annotation_results'][0].shot_label_annotations[i]['segments'].map(($,_) => {
          if ($['segment']['end_time_offset']['seconds'] > maxSeconds) {
            maxSeconds = $['segment']['end_time_offset']['seconds'];
          }
        });
    
        if (jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description'] === 'gun' || jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description'] === 'airsoft' || jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description'] === 'rifle') {
          if(dangers.indexOf(jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description']) < 0) {
            dangers.push(jsonResponse['annotation_results'][0].shot_label_annotations[i]['entity']['description']);
          }
        }
      } 
    }

    jsonResponse['location'] = '80.12.340 78.65.342';
    const d = new Date();
    const dformat = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    jsonResponse['time'] =  dformat;
    jsonResponse['types'] = String(dangers);
    jsonResponse['link'] = 'https://storage.cloud.google.com/dubhacks-input-videos/robberyvideo.mp4';
    jsonResponse['start'] = minSeconds.toString();
    jsonResponse['end'] = maxSeconds.toString();
    jsonResponse['username'] = 'testUser';
    jsonResponse['contact'] = '5634219807';
  }

  sendBackendAPICall = () => {
    axios.post('https://rapidsecurity-dubhacks2019.appspot.com/api/incident', { body: this.filteredResponse });
  }

  render() {
    const { current } = this.state;

    if (this.state.current === 1) {
      this.sendGoogleAPICall();
    } else if (this.state.current === 2) {
      this.sendBackendAPICall();
    } 

    return (
      <Row type="flex" justify="space-around" align="middle">
        <video className="video-container video-container-overlay" preload="auto" controls width="700" loop="" muted="" data-reactid=".0.1.0.0" onClick={this.onClick}>
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src="https://storage.cloud.google.com/dubhacks-input-videos/robberyvideo.mp4" />
        </video>
        <Col>
          <h1 id="title">Rapid Security</h1>
          <Steps current={current} onChange={this.onChange} direction="vertical">
            <Step title="Monitor" description="IoT video footage device uses Rapid Security API" />
            <Step title="Detect" description="Detection of firearms using Google Video Intelligence" />
            <Step title="Inform" description="Rapid Security informs nearby enforcements about potential violence" />
          </Steps>
        </Col>
      </Row>
    );
  }
}

export default App;
