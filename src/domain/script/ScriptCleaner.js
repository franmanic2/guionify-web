export class ScriptCleaner {
  static clean(text) {
    if (!text) return '';

    let cleaned = text;

    // 1. Remove filler words (muletillas)
    const fillers = ['ehhh', 'este...', 'bueno,', 'tipo,', 'o sea...', 'o sea', 'mmm', 'esteee'];
    fillers.forEach(filler => {
      const regex = new RegExp(filler.replace('.', '\\.'), 'gi');
      cleaned = cleaned.replace(regex, '');
    });

    // 2. Remove repetitions (simple case: repeated words)
    cleaned = cleaned.replace(/\b(\w+)\s+\1\b/gi, '$1');

    // 3. Fix multiple spaces
    cleaned = cleaned.replace(/\s+/g, ' ').trim();

    // 4. Capitalize sentences
    cleaned = cleaned.replace(/(^\w|\.\s+\w)/g, letter => letter.toUpperCase());

    return cleaned;
  }
}
