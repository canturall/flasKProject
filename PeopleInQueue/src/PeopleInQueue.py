import socket
import supervision as sv

from ultralytics import YOLO
from PeopleInQueueConfig import MODEL_NAME, SKIP_FRAMES, CAPTURE, ZONES, ZONE_ANNOTATORS, BOX_ANNOTATORS

model = YOLO(MODEL_NAME)


def people_in_queue_sender(host, port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client_socket:
        client_socket.connect((host, port))

        while True:
            ret, frame = CAPTURE.read()

            if not ret:
                break

            result = model(frame, imgsz=1280, verbose=True)[0]
            detections = sv.Detections.from_yolov8(result)

            for zone, zone_annotator, box_annotator in zip(ZONES, ZONE_ANNOTATORS, BOX_ANNOTATORS):
                mask = zone.trigger(detections=detections)
                detections_filtered = detections[mask]
                frame = box_annotator.annotate(scene=frame, detections=detections_filtered, skip_label=True)
                frame = zone_annotator.annotate(scene=frame)

                count = str(zone.current_count)
                client_socket.sendall(count.encode())


if __name__ == "__main__":
    people_in_queue_sender('127.0.0.1', 12345)
