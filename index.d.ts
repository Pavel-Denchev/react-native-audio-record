declare module "@pdenchev/react-native-audio-record" {
  export interface IAudioRecord {
    init: (options: Options) => void
    start: () => void
    stop: () => Promise<string>
    on: (event: "data", callback: (data: string) => void) => void
    supportsUnprocessed: () => Promise<string>
  }

  export interface Options {
    sampleRate: number
    /**
     * - `1 | 2`
     */
    channels: number
    /**
     * - `8 | 16`
     */
    bitsPerSample: number
    /**
     * - `6`
     */
    audioSource?: number
    wavFile: string
  }

  const AudioRecord: IAudioRecord

  export default AudioRecord;
}
