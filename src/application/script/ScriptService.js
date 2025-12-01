import { Script } from '../../domain/script/Script';
import { ScriptCleaner } from '../../domain/script/ScriptCleaner';
import { ScriptFormatter } from '../../domain/script/ScriptFormatter';
import { ScriptGenerator } from '../../domain/script/ScriptGenerator';
import { ScriptExporter } from '../../domain/script/ScriptExporter';

export class ScriptService {
  constructor() {
    this.script = new Script();
  }

  setScript(content) {
    this.script.updateContent(content);
  }

  getScript() {
    return this.script.content;
  }

  cleanScript() {
    const cleaned = ScriptCleaner.clean(this.script.content);
    this.script.updateContent(cleaned);
    return cleaned;
  }

  toTikTokStyle() {
    return ScriptFormatter.toTikTokStyle(this.script.content);
  }

  generateSubtitles() {
    return ScriptFormatter.segmentForSubtitles(this.script.content);
  }

  generateHooks(tone) {
    return ScriptGenerator.generateHooks(this.script.content, tone);
  }

  generateSummary() {
    return ScriptGenerator.generateSummary(this.script.content);
  }

  generateExtended() {
    return ScriptGenerator.generateExtended(this.script.content);
  }

  generateStructure() {
    return ScriptGenerator.generateStructure(this.script.content);
  }

  exportTxt() {
    return ScriptExporter.exportToTxt(this.script.content);
  }

  exportSrt() {
    const segments = this.generateSubtitles();
    return ScriptExporter.exportToSrt(segments);
  }
}
