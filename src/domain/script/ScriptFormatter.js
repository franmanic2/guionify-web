export class ScriptFormatter {
  static toTikTokStyle(text) {
    // Split by punctuation and join with newlines for "short sentences"
    // Heuristic: Split by periods, question marks, exclamation marks.
    const sentences = text.match(/[^.?!]+[.?!]+|[^.?!]+$/g) || [];
    return sentences.map(s => s.trim()).filter(s => s.length > 0).join('\n\n');
  }

  static segmentForSubtitles(text) {
    // Create blocks of 1-2 lines with suggested duration
    // Heuristic: ~15 chars per second? Or just split by length.
    // Let's say 1 line is max 40 chars.
    const words = text.split(' ');
    const segments = [];
    let currentSegment = '';
    let currentTime = 0;

    words.forEach(word => {
      if ((currentSegment + ' ' + word).length > 40) {
        const duration = Math.max(2, Math.ceil(currentSegment.length / 15)); // Rough estimate
        segments.push({
          text: currentSegment.trim(),
          start: currentTime,
          end: currentTime + duration
        });
        currentTime += duration;
        currentSegment = word;
      } else {
        currentSegment += ' ' + word;
      }
    });

    if (currentSegment.trim()) {
      segments.push({
        text: currentSegment.trim(),
        start: currentTime,
        end: currentTime + 2
      });
    }

    return segments;
  }

  static formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `[${min}:${sec.toString().padStart(2, '0')}]`;
  }
}
