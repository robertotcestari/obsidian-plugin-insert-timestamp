# Timestamp Plugin for Obsidian

This plugin allows you to easily insert timestamps, dates, and times into your Obsidian notes with simple commands.

## Features

- Insert customizable timestamps with date and time
- Insert date only
- Insert time only
- Customizable timestamp format through settings

## Installation

1. Download the latest release from the [releases page](https://github.com/your-username/timestamp-plugin/releases)
2. Extract the downloaded file
3. Move the extracted folder to your Obsidian vault's `.obsidian/plugins` directory
4. In Obsidian, go to Settings > Community plugins
5. Enable "Timestamp Plugin" in the list of installed plugins

## Usage

### Commands

The plugin provides three commands that can be accessed through the Obsidian command palette (`Ctrl/Cmd + P`):

1. **Insert timestamp** - Inserts a timestamp with both date and time

   - Default format: `YYYY-MM-DD HH:mm:ss`
   - Example: `2023-06-15 14:30:22`

2. **Insert date** - Inserts the current date only

   - Format: `YYYY-MM-DD`
   - Example: `2023-06-15`

3. **Insert time** - Inserts the current time only
   - Format: `HH:mm:ss`
   - Example: `14:30:22`

### Customization

You can customize the timestamp format through the plugin settings:

1. Go to Settings > Plugin Options > Timestamp Plugin
2. Modify the "Timestamp format" field to change how timestamps are displayed
3. Use the following placeholders:
   - `YYYY` - 4-digit year
   - `MM` - Month (01-12)
   - `DD` - Day of month (01-31)
   - `HH` - Hours (00-23)
   - `mm` - Minutes (00-59)
   - `ss` - Seconds (00-59)

Example custom formats:

- `DD/MM/YYYY HH:mm` → `15/06/2023 14:30`
- `YYYY-MM-DD` → `2023-06-15` (date only)
- `HH:mm:ss` → `14:30:22` (time only)

## Requirements

- Obsidian v0.15.0 or higher

## Author

Roberto

## License

MIT License

Copyright (c) 2023 Roberto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
