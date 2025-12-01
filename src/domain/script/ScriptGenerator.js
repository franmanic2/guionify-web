export class ScriptGenerator {
  static generateHooks(text, tone = 'dramatic') {
    // Mock hooks based on tone
    const templates = {
      dramatic: [
        "Si no estás haciendo esto, estás perdiendo el tiempo.",
        "El secreto que nadie te cuenta sobre este tema.",
        "¿Por qué fallan el 99% de las personas en esto?"
      ],
      humor: [
        "Te prometo que esto no es tan aburrido como parece.",
        "Hice esto para que tú no tengas que sufrir.",
        "¿Cansado de ser un desastre? Mira esto."
      ],
      authority: [
        "La guía definitiva para dominar esto.",
        "3 pasos probados para el éxito.",
        "Lo que los expertos no quieren que sepas."
      ],
      mystery: [
        "Hay algo que te están ocultando...",
        "Descubre la verdad detrás de esto.",
        "No creerás lo que pasa al final."
      ]
    };

    const selectedTemplates = templates[tone] || templates.dramatic;
    // In a real app, we would analyze 'text' to fill in blanks.
    // Here we just return the templates + a generic one based on text start.
    const firstSentence = text.split('.')[0];
    return [
      ...selectedTemplates,
      `¿Sabías que ${firstSentence.substring(0, 20)}...?`,
      `Deja de ignorar ${firstSentence.substring(0, 15)}...`
    ];
  }

  static generateSummary(text) {
    // Heuristic: First and last sentence.
    const sentences = text.match(/[^.?!]+[.?!]+|[^.?!]+$/g) || [];
    if (sentences.length <= 2) return text;
    return sentences[0] + ' ' + sentences[sentences.length - 1];
  }

  static generateExtended(text) {
    // Mock: Just repeat the text with some connectors for "extension"
    return text + "\n\nEn detalle, esto significa que... " + text + "\n\nPor lo tanto, es crucial recordar que... " + text;
  }

  static generateStructure(text) {
    return {
      hook: "¡Atención a esto!",
      context: text.substring(0, 50) + "...",
      value: text,
      cta: "Sígueme para más consejos."
    };
  }
}
