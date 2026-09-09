// Synthesizes temple bell and parchment sounds using native Web Audio API
// No external mp3 or network requests needed.

class SoundFX {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // Pure temple bell chime with rich harmonic overtones and long decay
  playTempleBell(freq = 528) {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Harmonics for a singing bowl / temple bell: fundamental, 2.76x, 5.4x
      const partials = [
        { f: freq, gain: 0.25, decay: 2.2 },
        { f: freq * 2.76, gain: 0.12, decay: 1.4 },
        { f: freq * 5.4, gain: 0.05, decay: 0.8 },
      ];

      partials.forEach(({ f, gain, decay }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(gain, now + 0.015);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + decay);
      });
    } catch {
      // Audio autoplay policy catch
    }
  }

  // Soft medieval parchment / click feedback
  playScrollClick() {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gainNode.gain.setValueAtTime(0.06, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Audio autoplay policy catch
    }
  }

  // Deep royal gong for entering medieval portal
  playRoyalGong() {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(144, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 3.0);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.35, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 3.2);

      // Add a higher shimmery overtone
      const bell = ctx.createOscillator();
      const bellGain = ctx.createGain();
      bell.type = 'sine';
      bell.frequency.setValueAtTime(864, now);
      bellGain.gain.setValueAtTime(0.12, now);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);
      bell.connect(bellGain);
      bellGain.connect(ctx.destination);
      bell.start(now);
      bell.stop(now + 2.0);
    } catch {}
  }
}

export const sounds = new SoundFX();
