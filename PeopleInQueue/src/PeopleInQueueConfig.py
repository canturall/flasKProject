import supervision as sv
import numpy as np
import cv2

MODEL_NAME = "yolov8n.pt"  # yolov8{n,s,m,l,x}.pt

MODE = "VIDEO"  # LIVE || VIDEO
SKIP_FRAMES = True if MODE == "VIDEO" else False

VIDEO_SOURCE_PATH = "../../input.mp4"  # Video source path

WIDTH = 3840  # Width of video or webcam
HEIGHT = 2160  # Height of video or webcam

VIDEO_SIZE = (WIDTH, HEIGHT)

CAPTURE = cv2.VideoCapture(0 if MODE == "LIVE" else VIDEO_SOURCE_PATH)
CAPTURE.set(cv2.CAP_PROP_FRAME_WIDTH, WIDTH)
CAPTURE.set(cv2.CAP_PROP_FRAME_HEIGHT, HEIGHT)

COLORS = sv.ColorPalette.default()

POLYGONS = [
    np.array([
        [400, 1500],
        [1850, 1500],
        [1770, 1000],
        [1000, 1000]
    ]),
]

ZONES = [
    sv.PolygonZone(
        polygon=polygon,
        frame_resolution_wh=VIDEO_SIZE
    )
    for polygon
    in POLYGONS
]

ZONE_ANNOTATORS = [
    sv.PolygonZoneAnnotator(
        zone=zone,
        color=COLORS.by_idx(index),
        thickness=4,
        text_thickness=8,
        text_scale=4
    )
    for index, zone
    in enumerate(ZONES)
]

BOX_ANNOTATORS = [
    sv.BoxAnnotator(
        color=COLORS.by_idx(index),
        thickness=4,
        text_thickness=4,
        text_scale=2
    )
    for index
    in range(len(POLYGONS))
]
