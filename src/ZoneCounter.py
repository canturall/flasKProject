import numpy as np
import supervision as sv
from ultralytics import YOLO
import src.ZoneCounterConfig as config
import cv2

model = YOLO(config.YOLO_MODEL)

cap = cv2.VideoCapture(config.VIDEO_SOURCE_PATH)
video_info = sv.VideoInfo.from_video_path(config.VIDEO_SOURCE_PATH)

zone = sv.PolygonZone(
    polygon=np.asarray(a=config.POLYGONE_POINTS, dtype=int),
    frame_resolution_wh=video_info.resolution_wh
)

def get_zone_count() -> int:
    res, frame = cap.read()

    if res:
        results = model(frame, imgsz=1280, classes=[2, 5, 7, 9])[0]
        detections = sv.Detections.from_yolov8(results)
        zone.trigger(detections=detections)
        return zone.current_count
    else:
        return 0
