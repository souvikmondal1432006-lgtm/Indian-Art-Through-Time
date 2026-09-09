// Human-grade Speech Synthesis with Natural Voice Priority and Docent Cadence

class HumanNarrator {
  private voices: SpeechSynthesisVoice[] = []
  private selectedVoice: SpeechSynthesisVoice | null = null

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.loadVoices()
      window.speechSynthesis.onvoiceschanged = () => this.loadVoices()
    }
  }

  private loadVoices() {
    this.voices = window.speechSynthesis.getVoices()

    // 1. First priority: Natural/Neural Indian English voices (authentic museum curator)
    const indianNatural = this.voices.find(
      (v) =>
        (v.lang === 'en-IN' || v.lang.startsWith('en-IN')) &&
        (v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Neural') || v.name.includes('Neerja') || v.name.includes('Heera'))
    )

    // 2. Second priority: Any en-IN voice
    const indianEnglish = this.voices.find((v) => v.lang === 'en-IN' || v.lang.startsWith('en-IN'))

    // 3. Third priority: Natural/Neural UK or US English voices (warm museum docent)
    const englishNatural = this.voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Google') || v.name.includes('Neural'))
    )

    // 4. Fourth priority: English Female/Male standard
    const standardEnglish = this.voices.find((v) => v.lang.startsWith('en'))

    this.selectedVoice = indianNatural || indianEnglish || englishNatural || standardEnglish || this.voices[0] || null
  }

  getVoiceName(): string {
    if (!this.selectedVoice) return 'Museum Docent'
    return this.selectedVoice.name.replace(/Microsoft|Google|Online|Desktop|English/g, '').trim() || 'Audio Guide'
  }

  speak(
    text: string,
    onStart: () => void,
    onEnd: () => void,
    onError: () => void
  ): SpeechSynthesisUtterance | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null

    window.speechSynthesis.cancel()

    // Humanize text: clean up dashes and technical jargon into spoken museum prose
    const cleanText = text
      .replace(/c\.\s*(\d+)/g, 'circa $1')
      .replace(/BCE/g, 'Before Common Era')
      .replace(/CE/g, 'Common Era')
      .replace(/\s*–\s*/g, ' to ')

    const utterance = new SpeechSynthesisUtterance(cleanText)

    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice
    }

    // Curatorial cadence: calm, warm, measured
    utterance.rate = 0.92
    utterance.pitch = 1.02

    utterance.onstart = onStart
    utterance.onend = onEnd
    utterance.onerror = onError

    window.speechSynthesis.speak(utterance)
    return utterance
  }

  stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
  }
}

export const narrator = new HumanNarrator()
