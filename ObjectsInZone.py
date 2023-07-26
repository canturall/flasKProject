import numpy as np
import supervision as sv
from ultralytics import YOLO
import ZoneCounterConfig

model = YOLO(ZoneCounterConfig.YOLO_MODEL)
video_info = sv.VideoInfo.from_video_path(ZoneCounterConfig.VIDEO_SOURCE_PATH)
zone = sv.PolygonZone(
    polygon=np.asarray(a=ZoneCounterConfig.POLYGONE_POINTS, dtype=int),
    frame_resolution_wh=video_info.resolution_wh
)


def getZoneCount(frame: np.ndarray) -> np.ndarray:
    results = model(frame, imgsz=1280)[0]
    detections = sv.Detections.from_yolov8(results)
    zone.trigger(detections=detections)
    return zone.current_count
