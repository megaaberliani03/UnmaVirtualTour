(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Label_B22A6C9E_A085_94F8_41C1_9F2091478CCE",
  "this.Image_B245939D_A09C_ACF8_41D7_4B2877022EAC",
  "this.Label_B36BCA53_A2D6_4B6E_41C9_442FF2CEF1DB"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "class": "Player",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "definitions": [{
 "initialPosition": {
  "yaw": -31.84,
  "pitch": -0.35,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_camera"
  },
  {
   "media": "this.panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_camera"
  },
  {
   "media": "this.panorama_AA2807BE_A07D_B438_41C5_86588CC9736F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_camera"
  },
  {
   "media": "this.panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_camera"
  },
  {
   "media": "this.panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_camera"
  },
  {
   "media": "this.panorama_AA2807F4_A07D_9448_41D2_682110C0DC07",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_camera"
  },
  {
   "media": "this.panorama_AA287F65_A07D_B448_41DC_85E9E277E708",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA287F65_A07D_B448_41DC_85E9E277E708_camera"
  },
  {
   "media": "this.panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "LORONG L1 FT",
 "hfovMin": "135%",
 "id": "panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93",
 "overlays": [
  "this.overlay_B2A97598_A2AE_391B_41B6_4AB3E2F744D5",
  "this.overlay_B344BCAF_A2AF_CF35_41CA_1016D9CFB6F2",
  "this.overlay_B2AABEA6_A2AA_CB36_41D3_8E884F2B18B5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -64.59,
   "distance": 1,
   "backwardYaw": 172.46,
   "panorama": "this.panorama_AA2807F4_A07D_9448_41D2_682110C0DC07",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 21.29,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B1053972_A2EB_C92E_41C4_B6D24D7AFD95",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -157.29,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B122B999_A2EB_C91A_41E2_4BCFC6559F97",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -79.7,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B13D39B2_A2EB_C92E_41DC_91B984A56363",
 "class": "PanoramaCamera"
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_AD86871F_A07C_F5F8_41D0_97512728091F_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "label": "1",
 "loop": false,
 "id": "video_AD86871F_A07C_F5F8_41D0_97512728091F",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_AD86871F_A07C_F5F8_41D0_97512728091F.mp4",
  "height": 1280,
  "class": "VideoResource"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TANGGA L1 FT",
 "hfovMin": "135%",
 "id": "panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15",
 "overlays": [
  "this.overlay_B3F287E6_A084_B44B_41DD_7F84A7602F14",
  "this.overlay_B4BDA0EF_A084_6C58_41DD_E3E40FA7E28E",
  "this.overlay_B32415FC_A084_7438_41AB_F109505D06B6",
  "this.overlay_B491B967_A084_BC48_419A_C5A54602E319",
  "this.overlay_B3A2AB94_A0BC_BCC8_41E1_5609C5979E6C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -39.13,
   "distance": 1,
   "backwardYaw": -158.71,
   "panorama": "this.panorama_AA2807BE_A07D_B438_41C5_86588CC9736F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 128.94,
   "distance": 1,
   "backwardYaw": 9.86,
   "panorama": "this.panorama_AA287F65_A07D_B448_41DC_85E9E277E708",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 87.89,
  "pitch": -2.25,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 155.08,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B6CCB9C4_A2EB_C96B_41DF_ED2FAED2F3A7",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PINTU BELAKANG FT",
 "hfovMin": "135%",
 "id": "panorama_AA2807BE_A07D_B438_41C5_86588CC9736F",
 "overlays": [
  "this.overlay_B325B93F_A08B_9C38_41A2_59BA7B75F144",
  "this.overlay_B4DA78F1_A08B_9C48_41B7_7E55D7DDAF45"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -158.71,
   "distance": 1,
   "backwardYaw": -39.13,
   "panorama": "this.panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 100.3,
   "distance": 1,
   "backwardYaw": 145.2,
   "panorama": "this.panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 158.34,
  "pitch": -3.41,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_AD86871F_A07C_F5F8_41D0_97512728091F",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B163F924_A2EB_C92A_41B8_1A37D39F75F5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B163F924_A2EB_C92A_41B8_1A37D39F75F5, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B163F924_A2EB_C92A_41B8_1A37D39F75F5",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 114.65,
  "pitch": 4.41,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_camera",
 "class": "PanoramaCamera"
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_AC15BACC_A2B6_4B7A_41A6_012E453709E6_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1080,
 "label": "2",
 "loop": false,
 "id": "video_AC15BACC_A2B6_4B7A_41A6_012E453709E6",
 "height": 1920,
 "video": {
  "width": 720,
  "mp4Url": "media/video_AC15BACC_A2B6_4B7A_41A6_012E453709E6.mp4",
  "height": 1280,
  "class": "VideoResource"
 }
},
{
 "initialPosition": {
  "yaw": 115.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B6ECE9F2_A2EB_C92F_41DC_C2E4D38F579B",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "initialPosition": {
  "yaw": -34.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B10F4959_A2EB_C91A_41D7_051572CF47A2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 140.87,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B1716945_A2EB_C96A_41D4_F5E66CE98AA3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 153.43,
  "pitch": 4.64,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -7.54,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B6DCF9D8_A2EB_C91B_41E0_E2D86B91D515",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PARKIRAN LUAR FT",
 "hfovMin": "135%",
 "id": "panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6",
 "overlays": [
  "this.overlay_AC90749B_A07C_94F8_4191_AE0DE693D328",
  "this.overlay_B3E38F4A_A08D_9458_41C4_38497AAC4584",
  "this.overlay_B27B0305_A08C_6DC9_41D3_DBCC183FBD84",
  "this.overlay_ACD8E2E0_A2AB_DB2A_418F_2D62DA759188"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -24.92,
   "distance": 1,
   "backwardYaw": 22.71,
   "panorama": "this.panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 145.2,
   "distance": 1,
   "backwardYaw": 100.3,
   "panorama": "this.panorama_AA2807BE_A07D_B438_41C5_86588CC9736F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "TU FT",
 "hfovMin": "135%",
 "id": "panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86",
 "overlays": [
  "this.overlay_ACE733E3_A2B6_D92E_41DA_95A77F26282D",
  "this.overlay_B2C5795F_A2B6_C915_41C6_E510380A68A5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 22.71,
   "distance": 1,
   "backwardYaw": -24.92,
   "panorama": "this.panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "R DOSEN FT",
 "hfovMin": "135%",
 "id": "panorama_AA2807F4_A07D_9448_41D2_682110C0DC07",
 "overlays": [
  "this.overlay_B2296A0C_A2D6_4AFB_41D5_4EA52A1B1EFE",
  "this.overlay_B39E2198_A2D6_591B_41DE_5D05E857525C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 172.46,
   "distance": 1,
   "backwardYaw": -64.59,
   "panorama": "this.panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -170.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B116C985_A2EB_C9EA_41E3_D2BB3D785D31",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_AC15BACC_A2B6_4B7A_41A6_012E453709E6",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B163D924_A2EB_C92A_41AF_80A80F18FC3E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B163D924_A2EB_C92A_41AF_80A80F18FC3E, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B163D924_A2EB_C92A_41AF_80A80F18FC3E",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -51.06,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B6FEBA08_A2EB_CAFB_41A2_2BA3A7F4C427",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -37.89,
  "pitch": -1.54,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AA287F65_A07D_B448_41DC_85E9E277E708_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_AA279F8D_A07D_94D9_41CF_08A0D09823D2",
 "label": "TANGGA L2 FAPERTA",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 37.93,
  "pitch": -5.78,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 7.03,
  "pitch": -1.73,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "MUSHOLA FT",
 "hfovMin": "135%",
 "id": "panorama_AA287F65_A07D_B448_41DC_85E9E277E708",
 "overlays": [
  "this.overlay_B3795F6C_A2DE_C93A_41D4_5D6219DDAB1A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 9.86,
   "distance": 1,
   "backwardYaw": 128.94,
   "panorama": "this.panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_t.jpg",
 "hfovMax": 130
},
{
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "left": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "transparent",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#CC0000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "0.89vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "fontFamily": "Adobe Caslon Pro",
 "horizontalAlign": "center",
 "id": "Label_B22A6C9E_A085_94F8_41C1_9F2091478CCE",
 "backgroundOpacity": 0.23,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "5.49%",
 "width": "13.39%",
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Label",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "top": "6.49%",
 "text": "UNIVERSITAS MAJALENGKA",
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [],
 "fontSize": "1.48vmin",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "height": "3.243%",
 "shadow": false,
 "data": {
  "name": "Label8837"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "maxHeight": 427,
 "horizontalAlign": "center",
 "id": "Image_B245939D_A09C_ACF8_41D7_4B2877022EAC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "1.75%",
 "width": "4.403%",
 "borderRadius": 0,
 "url": "skin/Image_B245939D_A09C_ACF8_41D7_4B2877022EAC.png",
 "minHeight": 1,
 "class": "Image",
 "verticalAlign": "middle",
 "propagateClick": false,
 "top": "5.61%",
 "minWidth": 1,
 "height": "5.73%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image9514"
 },
 "maxWidth": 426
},
{
 "fontFamily": "Adobe Caslon Pro",
 "horizontalAlign": "center",
 "id": "Label_B36BCA53_A2D6_4B6E_41C9_442FF2CEF1DB",
 "backgroundOpacity": 0.23,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "5.79%",
 "width": "11.279%",
 "borderRadius": 0,
 "minHeight": 1,
 "class": "Label",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "top": "8.65%",
 "text": "VIRTUAL TOUR",
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [],
 "fontSize": "2.35vmin",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "height": "3.243%",
 "shadow": false,
 "data": {
  "name": "Label8837"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 169.52,
   "hfov": 19.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B25725AB_A2D7_F93E_41E3_CC065E70587C",
   "pitch": -20.38,
   "yaw": 169.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.02
  }
 ],
 "id": "overlay_B2A97598_A2AE_391B_41B6_4AB3E2F744D5",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "blending": 0,
 "id": "overlay_B344BCAF_A2AF_CF35_41CA_1016D9CFB6F2",
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_B344BCAF_A2AF_CF35_41CA_1016D9CFB6F2_t.jpg",
    "width": 1080,
    "height": 1920,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -13.26,
 "chromaSmoothing": 0,
 "roll": -0.91,
 "click": "this.overlay_B344BCAF_A2AF_CF35_41CA_1016D9CFB6F2.play()",
 "hfov": 20.18,
 "chromaColor": "#28C034",
 "autoplay": false,
 "yaw": -9.11,
 "vfov": 32.61,
 "class": "VideoPanoramaOverlay",
 "rotationY": -3.53,
 "useHandCursor": true,
 "rotationX": -15.92,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.29,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_AC15BACC_A2B6_4B7A_41A6_012E453709E6.mp4",
  "height": 1280,
  "class": "VideoResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -64.59,
   "hfov": 20.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B258C5AB_A2D7_F93E_41C4_BC070FF0E2E7",
   "pitch": -10.59,
   "yaw": -64.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.45
  }
 ],
 "id": "overlay_B2AABEA6_A2AA_CB36_41D3_8E884F2B18B5",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA2807F4_A07D_9448_41D2_682110C0DC07, this.camera_B6DCF9D8_A2EB_C91B_41E0_E2D86B91D515); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -39.13,
   "hfov": 20.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -52.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B8C4CEFC_A084_943F_41D0_B4A30B78B88C",
   "pitch": -52.44,
   "yaw": -39.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 20.14
  }
 ],
 "id": "overlay_B3F287E6_A084_B44B_41DD_7F84A7602F14",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA2807BE_A07D_B438_41C5_86588CC9736F, this.camera_B1053972_A2EB_C92E_41C4_B6D24D7AFD95); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 86.73,
   "hfov": 16.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B8C4AEFC_A084_943F_41E3_A11F5FEC613A",
   "pitch": -18.03,
   "yaw": 86.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.13
  }
 ],
 "id": "overlay_B4BDA0EF_A084_6C58_41DD_E3E40FA7E28E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 26.06,
   "hfov": 16.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3CB18AB_A2DA_373D_41D3_CE372C2F194C",
   "pitch": -27.82,
   "yaw": 26.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.98
  }
 ],
 "id": "overlay_B32415FC_A084_7438_41AB_F109505D06B6",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 128.94,
   "hfov": 15.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0_HS_3_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B8C5DEFD_A084_9439_41DB_AE171B1BC195",
   "pitch": -23.05,
   "yaw": 128.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.6
  }
 ],
 "id": "overlay_B491B967_A084_BC48_419A_C5A54602E319",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA287F65_A07D_B448_41DC_85E9E277E708, this.camera_B116C985_A2EB_C9EA_41E3_D2BB3D785D31); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "rotationX": -8.99,
 "blending": 0,
 "id": "overlay_B3A2AB94_A0BC_BCC8_41E1_5609C5979E6C",
 "roll": 1.2,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_B3A2AB94_A0BC_BCC8_41E1_5609C5979E6C_t.jpg",
    "width": 1080,
    "height": 1920,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -8.84,
 "chromaSmoothing": 0,
 "hfov": 19.62,
 "chromaColor": "#0A5D3E",
 "autoplay": true,
 "vfov": 34.38,
 "class": "VideoPanoramaOverlay",
 "rotationY": -4.42,
 "useHandCursor": true,
 "yaw": 103.29,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.1,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_AD86871F_A07C_F5F8_41D0_97512728091F.mp4",
  "height": 1280,
  "class": "VideoResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 100.3,
   "hfov": 13.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B8C45EFC_A084_943F_41DC_C14B121C22D0",
   "pitch": -34.86,
   "yaw": 100.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.91
  }
 ],
 "id": "overlay_B325B93F_A08B_9C38_41A2_59BA7B75F144",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6, this.camera_B10F4959_A2EB_C91A_41D7_051572CF47A2); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -158.71,
   "hfov": 16.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B8C43EFC_A084_943F_41B8_4FB35C0F425D",
   "pitch": -19.03,
   "yaw": -158.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.03
  }
 ],
 "id": "overlay_B4DA78F1_A08B_9C48_41B7_7E55D7DDAF45",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15, this.camera_B1716945_A2EB_C96A_41D4_F5E66CE98AA3); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "rotationX": -14.48,
 "blending": 0,
 "id": "overlay_AC90749B_A07C_94F8_4191_AE0DE693D328",
 "roll": -1.08,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_AC90749B_A07C_94F8_4191_AE0DE693D328_t.jpg",
    "width": 1080,
    "height": 1920,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.04,
 "chromaSmoothing": 0,
 "hfov": 17.61,
 "chromaColor": "#0A5D3E",
 "autoplay": true,
 "vfov": 26.96,
 "class": "VideoPanoramaOverlay",
 "rotationY": 3.86,
 "useHandCursor": true,
 "yaw": -2.1,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.1,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_AD86871F_A07C_F5F8_41D0_97512728091F.mp4",
  "height": 1280,
  "class": "VideoResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 51.95,
   "hfov": 16.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B68DEECA_A08F_9458_4181_76E68E0B7AF3",
   "pitch": -35.21,
   "yaw": 51.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.58
  }
 ],
 "id": "overlay_B3E38F4A_A08D_9458_41C4_38497AAC4584",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 145.2,
   "hfov": 13.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B8C75EFB_A084_9438_41BA_0B99575056E2",
   "pitch": -4.82,
   "yaw": 145.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.45
  }
 ],
 "id": "overlay_B27B0305_A08C_6DC9_41D3_DBCC183FBD84",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA2807BE_A07D_B438_41C5_86588CC9736F, this.camera_B13D39B2_A2EB_C92E_41DC_91B984A56363); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -24.92,
   "hfov": 19.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD789C2D_A2AA_4F35_41CF_019B6CF46A7E",
   "pitch": -16.61,
   "yaw": -24.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.45
  }
 ],
 "id": "overlay_ACD8E2E0_A2AB_DB2A_418F_2D62DA759188",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86, this.camera_B122B999_A2EB_C91A_41E2_4BCFC6559F97); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "rotationX": 4.66,
 "blending": 0,
 "id": "overlay_ACE733E3_A2B6_D92E_41DA_95A77F26282D",
 "roll": -1.03,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_ACE733E3_A2B6_D92E_41DA_95A77F26282D_t.jpg",
    "width": 1080,
    "height": 1920,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.19,
 "chromaSmoothing": 0,
 "hfov": 23.23,
 "chromaColor": "#28C034",
 "autoplay": true,
 "vfov": 43.07,
 "class": "VideoPanoramaOverlay",
 "rotationY": -7.78,
 "useHandCursor": true,
 "yaw": 51.41,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.29,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_AC15BACC_A2B6_4B7A_41A6_012E453709E6.mp4",
  "height": 1280,
  "class": "VideoResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 22.71,
   "hfov": 17.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_ADD3D674_A2BA_3B2A_41D6_027CA4198CDF",
   "pitch": -7.2,
   "yaw": 22.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 17.4
  }
 ],
 "id": "overlay_B2C5795F_A2B6_C915_41C6_E510380A68A5",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6, this.camera_B6CCB9C4_A2EB_C96B_41DF_ED2FAED2F3A7); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "blending": 0,
 "id": "overlay_B2296A0C_A2D6_4AFB_41D5_4EA52A1B1EFE",
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_B2296A0C_A2D6_4AFB_41D5_4EA52A1B1EFE_t.jpg",
    "width": 1080,
    "height": 1920,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -10.72,
 "chromaSmoothing": 0,
 "roll": -4.1,
 "click": "this.overlay_B2296A0C_A2D6_4AFB_41D5_4EA52A1B1EFE.play()",
 "hfov": 23.01,
 "chromaColor": "#28C034",
 "autoplay": false,
 "yaw": -39.39,
 "vfov": 37.19,
 "class": "VideoPanoramaOverlay",
 "rotationY": -4.19,
 "useHandCursor": true,
 "rotationX": -20.89,
 "enabledInCardboard": true,
 "distance": 50,
 "videoVisibleOnStop": false,
 "chromaThreshold": 0.29,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 720,
  "mp4Url": "media/video_AC15BACC_A2B6_4B7A_41A6_012E453709E6.mp4",
  "height": 1280,
  "class": "VideoResource"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 172.46,
   "hfov": 16.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B25875AB_A2D7_F93E_41DC_F635FF48F478",
   "pitch": -1.57,
   "yaw": 172.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.07
  }
 ],
 "id": "overlay_B39E2198_A2D6_591B_41DE_5D05E857525C",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93, this.camera_B6ECE9F2_A2EB_C92F_41DC_C2E4D38F579B); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 9.86,
   "hfov": 15.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3C898AC_A2DA_373B_41D8_E126F6E32493",
   "pitch": -55.33,
   "yaw": 9.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.36
  }
 ],
 "id": "overlay_B3795F6C_A2DE_C93A_41D4_5D6219DDAB1A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15, this.camera_B6FEBA08_A2EB_CAFB_41A2_2BA3A7F4C427); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B25725AB_A2D7_F93E_41E3_CC065E70587C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA28175C_A07D_F478_41E0_5BEB8BFF5A93_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B258C5AB_A2D7_F93E_41C4_BC070FF0E2E7",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B8C4CEFC_A084_943F_41D0_B4A30B78B88C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0_HS_1_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B8C4AEFC_A084_943F_41E3_A11F5FEC613A",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B3CB18AB_A2DA_373D_41D3_CE372C2F194C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA29BFB3_A07D_94C8_41E0_26087C0A7D15_0_HS_3_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B8C5DEFD_A084_9439_41DB_AE171B1BC195",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B8C45EFC_A084_943F_41DC_C14B121C22D0",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA2807BE_A07D_B438_41C5_86588CC9736F_0_HS_1_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B8C43EFC_A084_943F_41B8_4FB35C0F425D",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B68DEECA_A08F_9458_4181_76E68E0B7AF3",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0_HS_1_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B8C75EFB_A084_9438_41BA_0B99575056E2",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA283F56_A07D_F448_41D3_E93FA86AA1D6_0_HS_2_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_AD789C2D_A2AA_4F35_41CF_019B6CF46A7E",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA2D6F4E_A07C_7458_41C2_906D62B4CF86_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_ADD3D674_A2BA_3B2A_41D6_027CA4198CDF",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA2807F4_A07D_9448_41D2_682110C0DC07_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B25875AB_A2D7_F93E_41DC_F635FF48F478",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AA287F65_A07D_B448_41DC_85E9E277E708_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_B3C898AC_A2DA_373B_41D8_E126F6E32493",
 "frameCount": 24,
 "class": "AnimatedImageResource"
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player7676"
 },
 "scripts": {
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getKey": function(key){  return window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "layout": "absolute",
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
