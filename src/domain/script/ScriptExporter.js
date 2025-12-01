export class ScriptExporter {
  static exportToTxt(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    return URL.createObjectURL(blob);
  }

  static exportToSrt(segments) {
    let srtContent = '';
    segments.forEach((seg, index) => {
      srtContent += `${index + 1}\n`;
      srtContent += `${this.formatTime(seg.start)} --> ${this.formatTime(seg.end)}\n`;
      srtContent += `${seg.text}\n\n`;
    });
    const blob = new Blob([srtContent], { type: 'text/plain' }); // .srt is text
    return URL.createObjectURL(blob);
  }

  static formatTime(seconds) {
    // SRT format: 00:00:00,000
    const date = new Date(0);
    date.setSeconds(seconds);
    const timeStr = date.toISOString().substr(11, 8);
    return `${timeStr},000`;
  }
}
