import {
  App,
  Editor,
  MarkdownView,
  Plugin,
  PluginSettingTab,
  Setting,
} from 'obsidian';

interface TimestampPluginSettings {
  timestampFormat: string;
}

const DEFAULT_SETTINGS: TimestampPluginSettings = {
  timestampFormat: 'YYYY-MM-DD HH:mm:ss',
};

export default class TimestampPlugin extends Plugin {
  settings: TimestampPluginSettings;

  async onload() {
    await this.loadSettings();

    // Add command to insert timestamp
    this.addCommand({
      id: 'insert-timestamp',
      name: 'Insert timestamp',
      editorCallback: (editor: Editor, view: MarkdownView) => {
        const timestamp = this.formatTimestamp();
        editor.replaceSelection(timestamp);
      },
    });

    // Add command to insert date
    this.addCommand({
      id: 'insert-date',
      name: 'Insert date',
      editorCallback: (editor: Editor, view: MarkdownView) => {
        const date = this.formatDate();
        editor.replaceSelection(date);
      },
    });

    // Add command to insert time
    this.addCommand({
      id: 'insert-time',
      name: 'Insert time',
      editorCallback: (editor: Editor, view: MarkdownView) => {
        const time = this.formatTime();
        editor.replaceSelection(time);
      },
    });

    // Add settings tab
    this.addSettingTab(new TimestampSettingTab(this.app, this));
  }

  onunload() {
    // Cleanup if needed
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  private formatTimestamp(): string {
    const now = new Date();
    const format = this.settings.timestampFormat;

    // Simple format replacement - could be enhanced with a proper date library
    return format
      .replace('YYYY', now.getFullYear().toString())
      .replace('MM', (now.getMonth() + 1).toString().padStart(2, '0'))
      .replace('DD', now.getDate().toString().padStart(2, '0'))
      .replace('HH', now.getHours().toString().padStart(2, '0'))
      .replace('mm', now.getMinutes().toString().padStart(2, '0'))
      .replace('ss', now.getSeconds().toString().padStart(2, '0'));
  }

  private formatDate(): string {
    const now = new Date();
    // Default date format: YYYY-MM-DD
    return `${now.getFullYear().toString()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
  }

  private formatTime(): string {
    const now = new Date();
    // Default time format: HH:mm:ss
    return `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
  }
}

class TimestampSettingTab extends PluginSettingTab {
  plugin: TimestampPlugin;

  constructor(app: App, plugin: TimestampPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();
    containerEl.createEl('h2', { text: 'Timestamp Plugin Settings' });

    new Setting(containerEl)
      .setName('Timestamp format')
      .setDesc('Format for the timestamp (YYYY-MM-DD HH:mm:ss)')
      .addText((text) =>
        text
          .setPlaceholder('YYYY-MM-DD HH:mm:ss')
          .setValue(this.plugin.settings.timestampFormat)
          .onChange(async (value) => {
            this.plugin.settings.timestampFormat = value;
            await this.plugin.saveSettings();
          })
      );
  }
}
