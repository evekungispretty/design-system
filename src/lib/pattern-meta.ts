export interface PatternMeta {
  title: string;
  description: string;
  screenshot?: string;
  /** Intrinsic pixel size of the screenshot, so narrow ones aren't stretched. */
  screenshotWidth?: number;
  screenshotHeight?: number;
}
