# ReThink Calisthenics

Eine fokussierte PWA für genau einen Zweck: **12 Wochen Calisthenics, 4 Workouts pro Woche.**

## Start
- Windows: `start.bat`
- macOS/Linux: `start.command`
- oder im Ordner: `python3 server.py`
- anschließend `http://127.0.0.1:8765` öffnen

## Bedienung
Die App hat nur zwei Bereiche: **Training** und **12 Wochen**. Auf Training steht immer automatisch die nächste noch offene Einheit. Im Workout können Sätze abgehakt, Pausen gestartet und Übungen mit `zu schwer / passt / zu leicht` bewertet werden. Wiederholtes Feedback passt spätere Übungen innerhalb derselben Progressionskette höchstens um eine Stufe an. Antippen des Übungsnamens öffnet Technik, Regression und Progression.

Alle Fortschritte werden ausschließlich lokal im Browser gespeichert. Die PWA funktioniert nach dem ersten Laden offline.
