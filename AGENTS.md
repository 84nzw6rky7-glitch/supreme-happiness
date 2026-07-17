# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a Flutter web application (project name: `supreme_happiness`). The Flutter SDK is installed at `/opt/flutter` and added to `PATH` via `~/.bashrc`.

### Running the app

```bash
flutter run -d web-server --web-port=8080 --web-hostname=0.0.0.0
```

This starts the dev server at `http://localhost:8080`. Use Chrome to interact with the app.

### Key commands

| Task | Command |
|------|---------|
| Lint/analyze | `flutter analyze` |
| Run tests | `flutter test` |
| Build web | `flutter build web` |
| Get dependencies | `flutter pub get` |
| Run dev server | `flutter run -d web-server --web-port=8080 --web-hostname=0.0.0.0` |

### Notes

- Only the **web** platform is configured in this environment (no Android SDK or Linux desktop toolchain).
- `flutter doctor` will report issues for Android and Linux toolchains; these can be ignored for web development.
- The dev server supports hot restart with `r`/`R` when running in the terminal.
- Flutter SDK path: `/opt/flutter/bin` (already in PATH).
